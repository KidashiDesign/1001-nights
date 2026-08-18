/* ══════════════════════════════════════════════════════════════════════════
   Speisekarte vorab rendern
   ──────────────────────────────────────────────────────────────────────────
   Liest js/menu-data.js und schreibt fertiges HTML in speisekarte.html und
   index.html — jeweils zwischen die <!-- build:… --> / <!-- /build -->
   Marken. Dadurch steht die ganze Karte im Quelltext: sichtbar für
   Suchmaschinen, lesbar ohne JavaScript, und der Browser muss zur Laufzeit
   weder die Daten noch einen Renderer laden.

   Nach jeder Änderung an js/menu-data.js ausführen:
       node tools/build-menu.mjs
   ═════════════════════════════════════════════════════════════════════════ */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/* Daten laden, ohne sie zu duplizieren */
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(readFileSync(join(ROOT, 'js/menu-data.js'), 'utf8'), sandbox);
const DATA = sandbox.window.MENU;
const SIGNATURE = sandbox.window.MENU_SIGNATURE || [];
const TAGS = DATA.tagLabels;

const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/* Muss zeichengleich zu norm() in js/menu.js sein, sonst greift die Suche daneben */
const norm = s => String(s || '').toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const haystack = (item, cat) =>
  norm([item.name, item.fa, item.desc, item.keywords, cat.name, cat.short].join(' '));

const CARD_SIZES = '(max-width: 380px) 92vw, (max-width: 640px) 46vw, (max-width: 1000px) 31vw, 270px';
const RAIL_SIZES = '(max-width: 640px) 72vw, (max-width: 1000px) 44vw, 262px';

function tagsHTML(item) {
  if (!item.tags || !item.tags.length) return '';
  return '<span class="dish-tags">' + item.tags
    .map(t => TAGS[t] ? `<span class="tag ${TAGS[t].cls}">${esc(TAGS[t].label)}</span>` : '')
    .join('') + '</span>';
}

function priceHTML(item) {
  if (item.price == null) return '';
  return `<span class="dish-price tnum">${esc(item.price)} <small>${esc(DATA.currency)}</small></span>`;
}

function dishHTML(item, cat, sizes) {
  return `
        <article class="dish" id="${esc(item.id)}" data-dish data-tags="${esc((item.tags || []).join(' '))}" data-search="${esc(haystack(item, cat))}" data-reveal="up">
          <button class="dish-figure" type="button" data-lightbox="media/md/${esc(item.img)}" data-lightbox-title="${esc(item.name)}" data-lightbox-caption="${esc(item.desc)}" aria-label="Foto von ${esc(item.name)} vergrößern">
            <img src="media/sm/${esc(item.img)}" srcset="media/sm/${esc(item.img)} 480w, media/md/${esc(item.img)} 900w" sizes="${sizes}" alt="${esc(item.name)} — 1001 Nights, Tiflis" loading="lazy" decoding="async">
            ${tagsHTML(item)}
          </button>
          <div class="dish-body">
            <div class="dish-title-row">
              <h3 class="dish-name">${esc(item.name)}</h3>
              ${priceHTML(item)}
            </div>${item.fa ? `
            <p class="dish-fa" lang="fa" dir="rtl">${esc(item.fa)}</p>` : ''}
            <p class="dish-desc">${esc(item.desc)}</p>
          </div>
        </article>`;
}

const chipsHTML = DATA.categories.map((c, i) =>
  `      <a class="chip${i === 0 ? ' is-active' : ''}" href="#cat-${esc(c.id)}" data-chip="${esc(c.id)}">${esc(c.short || c.name)}</a>`
).join('\n');

const usedTags = new Set();
DATA.categories.forEach(c => c.items.forEach(i => (i.tags || []).forEach(t => usedTags.add(t))));
const filtersHTML =
  '      <span class="label">Filtern</span>\n' +
  Object.keys(TAGS).filter(t => usedTags.has(t)).map(t =>
    `      <button class="chip filter-toggle" type="button" data-filter="${esc(t)}" aria-pressed="false">${esc(TAGS[t].label)}</button>`
  ).join('\n');

const menuHTML = DATA.categories.map(cat => `
      <section class="menu-cat" id="cat-${esc(cat.id)}" data-cat aria-labelledby="h-${esc(cat.id)}">
        <header class="menu-cat-head" data-reveal="up">
          <div>
            <span class="num tnum">${esc(cat.num)}</span>
            <h2 id="h-${esc(cat.id)}">${esc(cat.name)}</h2>${cat.intro ? `
            <p class="text-muted">${esc(cat.intro)}</p>` : ''}
          </div>${cat.fa ? `
          <span class="cat-fa text-muted">${esc(cat.fa)}</span>` : ''}
        </header>
        <div class="rule-ornament"><i></i></div>
        <div class="dish-grid" data-stagger="70">${cat.items.map(i => dishHTML(i, cat, CARD_SIZES)).join('')}
        </div>
      </section>`).join('\n') + `

      <div class="no-results" id="no-results" hidden>
        <p>Kein Gericht gefunden.</p>
        <p class="text-muted">Andere Schreibweise versuchen — oder alle Filter zurücksetzen.</p>
        <button class="btn btn-secondary" type="button" id="reset-all">Filter zurücksetzen</button>
      </div>`;

const byId = new Map();
DATA.categories.forEach(c => c.items.forEach(i => byId.set(i.id, { item: i, cat: c })));
const railHTML = SIGNATURE.map(id => byId.get(id)).filter(Boolean)
  .map(p => dishHTML(p.item, p.cat, RAIL_SIZES)).join('');

const dishCount = DATA.categories.reduce((n, c) => n + c.items.length, 0);
const catCount = DATA.categories.length;
const anyPrice = DATA.categories.some(c => c.items.some(i => i.price != null));

/* ── In die Seiten einsetzen ──────────────────────────────────────────── */
function replaceRegion(html, name, body, file) {
  const re = new RegExp(`(<!-- build:${name} -->)[\\s\\S]*?(<!-- /build -->)`);
  if (!re.test(html)) throw new Error(`Marke "build:${name}" fehlt in ${file}`);
  return html.replace(re, `$1\n${body}\n      $2`);
}

function setCounts(html) {
  return html
    .replace(/(<span data-dish-count[^>]*>)[^<]*(<\/span>)/g, `$1${dishCount}$2`)
    .replace(/(<span data-cat-count[^>]*>)[^<]*(<\/span>)/g, `$1${catCount}$2`)
    .replace(/(<span data-count=")\d+(" data-dish-count-target>)/, `$1${dishCount}$2`);
}

let menuPage = readFileSync(join(ROOT, 'speisekarte.html'), 'utf8');
menuPage = replaceRegion(menuPage, 'chips', chipsHTML, 'speisekarte.html');
menuPage = replaceRegion(menuPage, 'filters', filtersHTML, 'speisekarte.html');
menuPage = replaceRegion(menuPage, 'menu', menuHTML, 'speisekarte.html');
menuPage = setCounts(menuPage);
menuPage = menuPage.replace(
  /(<p id="price-notice"[^>]*?)( hidden)?(>)/,
  (_m, a, _h, c) => a + (anyPrice ? ' hidden' : '') + c);
writeFileSync(join(ROOT, 'speisekarte.html'), menuPage);

let home = readFileSync(join(ROOT, 'index.html'), 'utf8');
home = replaceRegion(home, 'signature', railHTML, 'index.html');
home = setCounts(home);
writeFileSync(join(ROOT, 'index.html'), home);

console.log(`speisekarte.html + index.html neu gebaut — ${catCount} Kategorien, ${dishCount} Gerichte, Preise ${anyPrice ? 'gepflegt' : 'offen'}`);
