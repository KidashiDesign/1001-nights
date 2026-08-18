/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — site generator
   ──────────────────────────────────────────────────────────────────────────
   Renders every page of the site, in every language, from content/.

       node tools/build.mjs

   Output:
       /index.html      /menu.html        English  (default, site root)
       /fa/index.html   /fa/menu.html     فارسی    (right to left)
       /ru/index.html   /ru/menu.html     Русский
       /ka/index.html   /ka/menu.html     ქართული

   Everything below the HTML skeleton comes from content/ui.js (interface and
   page copy) and content/menu.js (dishes). Never edit the generated .html
   files — edit the content and run this again.
   ═════════════════════════════════════════════════════════════════════════ */

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { LANGS, ui, contact } from '../content/ui.js';
import { categories, tagLabels, signature, currency } from '../content/menu.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://1001nights.ge';   /* für canonical/hreflang — bei anderer Domain hier ändern */

/* ── Helfer ───────────────────────────────────────────────────────────── */
const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const fill = (s, vars) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));

/* Muss zeichengleich zu norm() in js/menu.js sein, sonst greift die Suche daneben */
const norm = s => String(s || '').toLowerCase()
  .replace(/\u00e4/g, 'ae').replace(/\u00f6/g, 'oe').replace(/\u00fc/g, 'ue').replace(/\u00df/g, 'ss')
  .replace(/[\u064a\u0649]/g, '\u06cc')          /* arabisches Ya -> persisches Ya */
  .replace(/\u0643/g, '\u06a9')                  /* arabisches Kaf -> persisches Kaf */
  .replace(/[\u064b-\u0652\u0670]/g, '')        /* arabische Vokalzeichen entfernen */
  .replace(/\u200c/g, ' ')                       /* ZWNJ als Wortgrenze */
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const DISH_COUNT = categories.reduce((n, c) => n + c.items.length, 0);
const CAT_COUNT = categories.length;
const ANY_PRICE = categories.some(c => c.items.some(i => i.price != null));
const YEAR = new Date().getFullYear();

const icon = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  house: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/></svg>',
  arrow: '<svg class="dir-flip" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>'
};

/* ── Kopf ─────────────────────────────────────────────────────────────── */
function head(L, page) {
  const t = ui[L.code];
  const base = L.path ? '../' : '';
  const file = page === 'home' ? 'index.html' : 'menu.html';
  const title = page === 'home' ? t.meta.homeTitle : t.meta.menuTitle;
  const desc = page === 'home' ? t.meta.homeDesc : t.meta.menuDesc;
  const canonical = `${SITE}/${L.path}${page === 'home' ? '' : 'menu.html'}`;

  const alternates = LANGS.map(o =>
    `<link rel="alternate" hreflang="${o.htmlLang}" href="${SITE}/${o.path}${page === 'home' ? '' : 'menu.html'}">`
  ).join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${SITE}/${page === 'home' ? '' : 'menu.html'}">`;

  const preloadHero = page === 'home'
    ? `<link rel="preload" as="image" href="${base}media/sm/Persian_stews.webp"\n      imagesrcset="${base}media/sm/Persian_stews.webp 480w, ${base}media/md/Persian_stews.webp 900w, ${base}media/Persian_stews.webp 1280w"\n      imagesizes="100vw" fetchpriority="high">\n`
    : '';

  /* Nur die Schriften vorladen, die diese Sprache wirklich braucht */
  const preloadFonts = {
    en: ['italiana-400-latin', 'cormorant-garamond-400-latin', 'lora-400-latin'],
    ru: ['cormorant-garamond-400-cyrillic', 'lora-400-cyrillic'],
    ka: ['noto-serif-georgian-400-georgian'],
    fa: ['vazirmatn-400-arabic']
  }[L.code].map(f => `<link rel="preload" as="font" type="font/woff2" href="${base}fonts/${f}.woff2" crossorigin>`).join('\n');

  const ld = page === 'home' ? `
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Restaurant","name":"1001 Nights Restaurant",
"servesCuisine":["Persian","Iranian","Middle Eastern"],"priceRange":"$$",
"image":"${SITE}/media/1001_Shab_Cover.webp","url":"${canonical}",
"address":{"@type":"PostalAddress","streetAddress":"Kote Apkhazi St. 9","addressLocality":"Tbilisi","postalCode":"0105","addressCountry":"GE"},
"telephone":"${contact.phoneHref}","email":"${contact.email}","hasMenu":"${SITE}/${L.path}menu.html",
"openingHours":["Mo-Th 11:00-23:00","Fr-Sa 11:00-24:00","Su 11:00-23:00"]}
</script>` : '';

  return `<!DOCTYPE html>
<html lang="${L.htmlLang}" dir="${L.dir}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#F9F8ED">
<link rel="canonical" href="${canonical}">
${alternates}

<meta property="og:type" content="${page === 'home' ? 'restaurant' : 'website'}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/media/1001_Shab_Cover.webp">
<meta property="og:locale" content="${L.htmlLang}">
<meta property="og:url" content="${canonical}">

<link rel="icon" href="${base}media/sm/Logo.webp" type="image/webp">
${preloadFonts}
${preloadHero}<link rel="stylesheet" href="${base}css/fonts.css">
<link rel="stylesheet" href="${base}css/style.css">${ld}
</head>
<body>
<a class="skip-link" href="#main">${esc(t.skipToContent)}</a>`;
}

/* ── Sprachumschalter ─────────────────────────────────────────────────── */
function langSwitch(L, page, cls) {
  const t = ui[L.code];
  const base = L.path ? '../' : '';
  const file = page === 'home' ? '' : 'menu.html';
  const others = LANGS.filter(o => o.code !== L.code).map(o =>
    `<a class="lang-opt" href="${base}${o.path}${file}" lang="${o.htmlLang}" hreflang="${o.htmlLang}">${esc(o.label)}</a>`
  ).join('\n          ');

  /* Im Kopf ein Aufklapper (funktioniert ohne JavaScript), in der
     Schublade die flache Liste — dort ist Platz. */
  if (cls === 'lang-switch-drawer') {
    return `<div class="lang-switch lang-switch-drawer" role="group" aria-label="${esc(t.langLabel)}">
      <span class="lang-opt is-current" aria-current="true" lang="${L.htmlLang}">${esc(L.label)}</span>
      ${others}
    </div>`;
  }

  return `<details class="lang-switch lang-switch-nav" data-lang-switch>
        <summary aria-label="${esc(t.langLabel)}">${icon.globe}<span class="lang-current" lang="${L.htmlLang}">${esc(L.label)}</span><span class="lang-caret" aria-hidden="true"></span></summary>
        <div class="lang-menu">
          ${others}
        </div>
      </details>`;
}

/* ── Navigation ───────────────────────────────────────────────────────── */
function nav(L, page) {
  const t = ui[L.code];
  const base = L.path ? '../' : '';
  const home = base + L.path;
  const menu = home + 'menu.html';
  const sec = a => (page === 'home' ? '' : menu.replace('menu.html', '')) + a;
  const anchor = a => page === 'home' ? a : `${home}${a}`;

  const links = [
    [menu, t.nav.menu, page === 'menu'],
    [anchor('#restaurant'), t.nav.restaurant, false],
    [anchor('#experience'), t.nav.experience, false],
    [anchor('#visit'), t.nav.visit, false]
  ];

  return `
<header class="nav">
  <div class="wrap nav-inner">
    <a class="nav-brand" href="${home}" aria-label="${esc(t.nav.home)}">
      <span class="mark">1001 Nights</span>
      <span class="sub">${esc(t.brandSub)}</span>
    </a>
    <nav class="nav-links" aria-label="${esc(t.nav.main)}">
      ${links.map(([href, label, cur]) =>
        `<a class="nav-link${cur ? ' is-current' : ''}" href="${href}"${cur ? ' aria-current="page"' : ''}>${esc(label)}</a>`
      ).join('\n      ')}
    </nav>
    <div class="nav-actions">
      ${langSwitch(L, page, 'lang-switch-nav')}
      <a class="btn btn-primary" href="tel:${contact.phoneHref}">${esc(t.nav.reserve)}</a>
      <button class="burger" type="button" aria-label="${esc(t.nav.openMenu)}" aria-expanded="false" aria-controls="drawer">
        <span></span>
      </button>
    </div>
  </div>
</header>

<div class="nav-drawer" id="drawer">
  <div class="wrap">
    ${links.map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join('\n    ')}
    <a class="btn btn-primary" href="tel:${contact.phoneHref}">${esc(t.nav.reserveLong)}</a>
    ${langSwitch(L, page, 'lang-switch-drawer')}
  </div>
</div>`;
}

/* ── Fuß ──────────────────────────────────────────────────────────────── */
function footer(L, page) {
  const t = ui[L.code];
  const base = L.path ? '../' : '';
  const home = base + L.path;
  const menu = home + 'menu.html';
  const anchor = a => page === 'home' ? a : `${home}${a}`;

  return `
<footer class="footer on-ink">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="mark">1001 Nights</span>
        <p class="text-muted">${esc(t.footer.tagline)}</p>
      </div>
      <div>
        <h6>${esc(t.footer.pages)}</h6>
        <ul>
          <li><a href="${menu}">${esc(t.nav.menu)}</a></li>
          <li><a href="${anchor('#restaurant')}">${esc(t.nav.restaurant)}</a></li>
          <li><a href="${anchor('#experience')}">${esc(t.nav.experience)}</a></li>
          <li><a href="${anchor('#gallery')}">${esc(t.footer.gallery)}</a></li>
        </ul>
      </div>
      <div>
        <h6>${esc(t.footer.visit)}</h6>
        <ul>
          <li><a href="${anchor('#visit')}">${esc(t.footer.hoursLink)}</a></li>
          <li><a href="${contact.mapUrl}" target="_blank" rel="noopener">${esc(t.footer.directions)}</a></li>
          <li><a href="tel:${contact.phoneHref}">${esc(t.footer.reservation)}</a></li>
        </ul>
      </div>
      <div>
        <h6>${esc(t.footer.contact)}</h6>
        <ul>
          <li><a href="tel:${contact.phoneHref}" dir="ltr">${esc(contact.phoneText)}</a></li>
          <li><a href="mailto:${contact.email}" dir="ltr">${contact.email}</a></li>
          <li>${esc(t.visit.street)}, ${esc(L.code === 'en' ? 'Tbilisi' : t.visit.city.replace(/^\S+\s/, ''))}</li>
        </ul>
      </div>
    </div>

    <p class="footer-ghost" aria-hidden="true">1001</p>

    <div class="footer-bottom">
      <span class="text-muted">${esc(fill(t.footer.copyright, { y: YEAR }))}</span>
      <span class="text-muted">${esc(t.footer.credit)}</span>
    </div>
  </div>
</footer>

<script src="${base}js/site.js" defer></script>
<script src="${base}js/menu.js" defer></script>
</body>
</html>
`;
}

/* ── Gerichtekarte ────────────────────────────────────────────────────── */
function dishHTML(L, item, cat, sizes) {
  const base = L.path ? '../' : '';
  const t = ui[L.code];
  const name = item.name[L.code];
  const desc = item.desc[L.code];
  /* Zweite Zeile: auf lateinischen Seiten der persische Name, auf der
     persischen Seite die internationale Schreibweise. */
  const sub = L.code === 'fa' ? item.name.en : item.name.fa;
  const subDir = L.code === 'fa' ? 'ltr' : 'rtl';
  const subLang = L.code === 'fa' ? 'en' : 'fa';

  const hay = norm([name, sub, desc, item.kw?.[L.code], item.name.en, item.kw?.en,
                    cat.name[L.code], cat.short[L.code]].join(' '));

  const tags = (item.tags || []).length
    ? `<span class="dish-tags">${item.tags.map(k =>
        `<span class="tag ${tagLabels[k].cls}">${esc(tagLabels[k][L.code])}</span>`).join('')}</span>`
    : '';

  const price = item.price == null ? ''
    : `<span class="dish-price tnum" dir="ltr">${esc(item.price)} <small>${currency}</small></span>`;

  return `
        <article class="dish" id="${item.id}" data-dish data-tags="${esc((item.tags || []).join(' '))}" data-search="${esc(hay)}" data-reveal="up">
          <button class="dish-figure" type="button" data-lightbox="${base}media/md/${item.img}" data-lightbox-title="${esc(name)}" data-lightbox-caption="${esc(desc)}" aria-label="${esc(fill(t.menuPage.zoom, { name }))}">
            <img src="${base}media/sm/${item.img}" srcset="${base}media/sm/${item.img} 480w, ${base}media/md/${item.img} 900w" sizes="${sizes}" alt="${esc(name)} — 1001 Nights, Tbilisi" loading="lazy" decoding="async">
            ${tags}
          </button>
          <div class="dish-body">
            <div class="dish-title-row">
              <h3 class="dish-name">${esc(name)}</h3>
              ${price}
            </div>${sub ? `
            <p class="dish-sub" lang="${subLang}" dir="${subDir}">${esc(sub)}</p>` : ''}
            <p class="dish-desc">${esc(desc)}</p>
          </div>
        </article>`;
}

/* ── Startseite ───────────────────────────────────────────────────────── */
function homePage(L) {
  const t = ui[L.code];
  const base = L.path ? '../' : '';
  const menu = base + L.path + 'menu.html';
  const img = (dir, f) => `${base}media/${dir}/${f}`;

  const byId = new Map();
  categories.forEach(c => c.items.forEach(i => byId.set(i.id, { item: i, cat: c })));
  const rail = signature.map(id => byId.get(id)).filter(Boolean)
    .map(p => dishHTML(L, p.item, p.cat, '(max-width: 640px) 72vw, (max-width: 1000px) 44vw, 262px')).join('');

  const marquee = `<div class="marquee-group">${
    t.marquee.map(w => `<span>${esc(w)}</span><i></i>`).join('')}</div>`;

  const gal = [
    ['Shishlik.webp', 'Shishlik', t.gallery.c1, 'tall'],
    ['Tea_and_baklava.webp', t.menuPage.title, t.gallery.c2, ''],
    ['Kashk-e_Bademjan.webp', 'Kashk-e Bademjān', t.gallery.c3, ''],
    ['Where_the_vibe_meets_the_flavor.webp', t.visit.street, t.gallery.c4, ''],
    ['seafood.webp', t.gallery.c5, t.gallery.c5, ''],
    ['Dorado_Fish.webp', t.gallery.c6, t.gallery.c6, 'tall']
  ].map(([f, title, cap, cls]) => `
      <button type="button"${cls ? ` class="${cls}"` : ''} data-reveal="up" data-shrink
              data-lightbox="${img('md', f)}" data-lightbox-title="${esc(title)}" data-lightbox-caption="${esc(cap)}">
        <span class="plate">
          <img src="${img('sm', f)}" srcset="${img('sm', f)} 480w, ${img('md', f)} 900w"
               sizes="(max-width: 860px) 46vw, 280px" alt="${esc(cap)}" loading="lazy" decoding="async">
        </span>
      </button>`).join('');

  return head(L, 'home') + nav(L, 'home') + `

<main id="main">

<!-- ══ Hero ═══════════════════════════════════════════════════════════ -->
<section class="hero">
  <div class="hero-media">
    <img src="${img('sm', 'Persian_stews.webp')}"
         srcset="${img('sm', 'Persian_stews.webp')} 480w, ${img('md', 'Persian_stews.webp')} 900w, ${base}media/Persian_stews.webp 1280w"
         sizes="100vw" alt="${esc(t.gallery.title)}" fetchpriority="high" decoding="async">
  </div>
  <div class="hero-veil"></div>

  <div class="wrap">
    <p class="hero-kicker" data-enter="fade" data-delay="0">${esc(t.hero.kicker)}</p>
    <h1 class="hero-title" data-enter="up" data-delay="120">
      <span class="wordmark">1001 Nights</span>
      <em>${esc(t.hero.tagline)}</em>
    </h1>
    <p class="hero-sub" data-enter="up" data-delay="260">${esc(t.hero.sub)}</p>
    <div class="hero-actions" data-enter="up" data-delay="380">
      <a class="btn btn-primary" href="${menu}">${esc(t.hero.ctaMenu)}</a>
      <a class="btn btn-secondary" href="tel:${contact.phoneHref}">${esc(t.hero.ctaReserve)}</a>
    </div>
    <div class="hero-facts" data-enter="fade" data-delay="520">
      <span>${icon.pin} ${esc(t.hero.fact1)}</span>
      <span>${icon.clock} ${esc(t.hero.fact2)}</span>
      <span>${icon.house} ${esc(t.hero.fact3)}</span>
    </div>
  </div>

  <span class="scroll-cue" aria-hidden="true"></span>
</section>

<!-- ══ Laufband ═══════════════════════════════════════════════════════ -->
<div class="marquee" aria-hidden="true">
  <div class="marquee-track">${marquee}${marquee}</div>
</div>

<!-- ══ Das Haus ═══════════════════════════════════════════════════════ -->
<section class="section" id="restaurant">
  <div class="wrap split">
    <div class="split-content">
      <h6 data-reveal="up">${esc(t.story.kicker)}</h6>
      <h2 data-reveal="up" data-delay="80">${esc(t.story.titleA)}<br>${esc(t.story.titleB)}</h2>
      <p class="lead justify" data-reveal="up" data-delay="160">${esc(t.story.lead)}</p>
      <p class="justify text-muted" data-reveal="up" data-delay="220">${esc(t.story.body)}</p>

      <div class="stat-row" data-reveal="up" data-delay="280">
        <div class="stat"><b class="tnum"><span data-count="${contact.yearsInTbilisi}">0</span>+</b><span class="stat-label">${esc(t.story.stat1)}</span></div>
        <div class="stat"><b class="tnum"><span data-count="${DISH_COUNT}">0</span></b><span class="stat-label">${esc(t.story.stat2)}</span></div>
        <div class="stat"><b class="tnum"><span data-count="${contact.hoursForMahiche}">0</span></b><span class="stat-label">${esc(t.story.stat3)}</span></div>
      </div>

      <p style="margin-top:var(--space-6)" data-reveal="up" data-delay="340">
        <a class="link-underline" href="#visit">${esc(t.story.link)} ${icon.arrow}</a>
      </p>
    </div>

    <div class="split-media" data-reveal="right" data-shrink>
      <figure class="plate plate-4x5">
        <img src="${img('sm', 'Front_Shop.webp')}" srcset="${img('sm', 'Front_Shop.webp')} 480w, ${img('md', 'Front_Shop.webp')} 900w"
             sizes="(max-width: 820px) 92vw, 480px" alt="${esc(t.gallery.c4)}" loading="lazy" decoding="async">
      </figure>
      <div class="split-badge"><span>${esc(t.story.badgeSince)}</span><b class="tnum">${contact.since}</b><span>${esc(t.story.badgeCity)}</span></div>
    </div>
  </div>
</section>

<!-- ══ Signature ══════════════════════════════════════════════════════ -->
<section class="section" style="background:var(--color-surface)">
  <div class="wrap">
    <div class="section-head" data-reveal="up">
      <h6>${esc(t.signature.kicker)}</h6>
      <h2>${esc(t.signature.title)}</h2>
      <p class="text-muted">${esc(t.signature.sub)}</p>
    </div>

    <div class="rail" data-stagger="90">${rail}
    </div>

    <div class="rule-ornament"><i></i></div>

    <p style="text-align:center" data-reveal="up">
      <a class="btn btn-primary" href="${menu}">${esc(fill(t.signature.cta, { n: DISH_COUNT }))}</a>
    </p>
  </div>
</section>

<!-- ══ Zitat ══════════════════════════════════════════════════════════ -->
<section class="on-ink quote-band">
  <div class="quote-media">
    <img src="${base}media/1001_Shab_Cover.webp" alt="" sizes="100vw" loading="lazy" decoding="async">
  </div>
  <div class="wrap wrap-narrow section quote-inner">
    <div class="line-mask quote-text"><span>${esc(t.quote.text)}</span></div>
    <p class="quote-source text-muted" data-reveal="fade" data-delay="500">${esc(t.quote.source)}</p>
  </div>
</section>

<!-- ══ Galerie ════════════════════════════════════════════════════════ -->
<section class="section" id="gallery">
  <div class="wrap">
    <div class="section-head" data-reveal="up">
      <h6>${esc(t.gallery.kicker)}</h6>
      <h2>${esc(t.gallery.title)}</h2>
    </div>
    <div class="gallery" data-stagger="80">${gal}
    </div>
  </div>
</section>

<!-- ══ Erlebnis ═══════════════════════════════════════════════════════ -->
<section class="section on-dark" id="experience">
  <div class="wrap">
    <div class="section-head" data-reveal="up">
      <h6>${esc(t.events.kicker)}</h6>
      <h2>${esc(t.events.title)}</h2>
      <p class="text-muted">${esc(t.events.sub)}</p>
    </div>

    <div class="event-grid" data-stagger="120">
      <article class="event" data-reveal="left" data-shrink>
        <figure class="plate plate-4x5">
          <img src="${img('sm', 'Post2_Live_Concert.webp')}" srcset="${img('sm', 'Post2_Live_Concert.webp')} 480w, ${img('md', 'Post2_Live_Concert.webp')} 900w"
               sizes="(max-width: 560px) 240px, 168px" alt="${esc(t.events.e1title)}" loading="lazy" decoding="async">
        </figure>
        <div>
          <h6>${esc(t.events.e1date)}</h6>
          <h3>${esc(t.events.e1title)}</h3>
          <p class="text-muted">${esc(t.events.e1text)}</p>
          <a class="link-underline" href="tel:${contact.phoneHref}">${esc(t.events.cta)} ${icon.arrow}</a>
        </div>
      </article>

      <article class="event" data-reveal="right" data-shrink>
        <figure class="plate plate-4x5">
          <img src="${img('sm', 'Post1_Jashn_CharshanbeSouri.webp')}" srcset="${img('sm', 'Post1_Jashn_CharshanbeSouri.webp')} 480w, ${img('md', 'Post1_Jashn_CharshanbeSouri.webp')} 900w"
               sizes="(max-width: 560px) 240px, 168px" alt="${esc(t.events.e2title)}" loading="lazy" decoding="async">
        </figure>
        <div>
          <h6>${esc(t.events.e2date)}</h6>
          <h3>${esc(t.events.e2title)}</h3>
          <p class="text-muted">${esc(t.events.e2text)}</p>
          <a class="link-underline" href="tel:${contact.phoneHref}">${esc(t.events.cta)} ${icon.arrow}</a>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ══ Besuch ═════════════════════════════════════════════════════════ -->
<section class="section" id="visit">
  <div class="wrap split">
    <div class="split-media" data-reveal="left" data-shrink>
      <figure class="plate plate-4x5">
        <img src="${img('sm', 'Where_the_vibe_meets_the_flavor.webp')}" srcset="${img('sm', 'Where_the_vibe_meets_the_flavor.webp')} 480w, ${img('md', 'Where_the_vibe_meets_the_flavor.webp')} 900w"
             sizes="(max-width: 820px) 92vw, 480px" alt="${esc(t.gallery.c4)}" loading="lazy" decoding="async">
      </figure>
    </div>

    <div>
      <h6 data-reveal="up">${esc(t.visit.kicker)}</h6>
      <h2 data-reveal="up" data-delay="80">${esc(t.visit.title)}</h2>
      <p class="text-muted" data-reveal="up" data-delay="140">${esc(t.visit.sub)}</p>

      <div class="info-grid" style="margin-top:var(--space-8)" data-stagger="90">
        <div class="info-block" data-reveal="up">
          <h6>${esc(t.visit.address)}</h6>
          <p>${esc(t.visit.street)}<br>${esc(t.visit.city)}</p>
          <a class="link-underline" href="${contact.mapUrl}" target="_blank" rel="noopener">${esc(t.visit.map)} ${icon.arrow}</a>
        </div>
        <div class="info-block" data-reveal="up">
          <h6>${esc(t.visit.contact)}</h6>
          <p><a href="tel:${contact.phoneHref}" dir="ltr">${esc(contact.phoneText)}</a><br>
             <span class="text-muted">${esc(t.visit.whatsapp)}</span></p>
          <p><a href="mailto:${contact.email}" dir="ltr">${contact.email}</a></p>
        </div>
        <div class="info-block" data-reveal="up">
          <h6>${esc(t.visit.hours)}</h6>
          <table class="hours">
            <tbody>
              <tr><th scope="row">${esc(t.visit.row1)}</th><td dir="ltr">${contact.hours.row1}</td></tr>
              <tr><th scope="row">${esc(t.visit.row2)}</th><td dir="ltr">${contact.hours.row2}</td></tr>
              <tr><th scope="row">${esc(t.visit.row3)}</th><td dir="ltr">${contact.hours.row3}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="hero-actions" style="margin-top:var(--space-8)" data-reveal="up">
        <a class="btn btn-primary" href="tel:${contact.phoneHref}">${esc(t.visit.ctaReserve)}</a>
        <a class="btn btn-secondary" href="${menu}">${esc(t.visit.ctaMenu)}</a>
      </div>
    </div>
  </div>
</section>

</main>
` + footer(L, 'home');
}

/* ── Speisekarte ──────────────────────────────────────────────────────── */
function menuPage(L) {
  const t = ui[L.code];
  const base = L.path ? '../' : '';
  const CARD = '(max-width: 380px) 92vw, (max-width: 640px) 46vw, (max-width: 1000px) 31vw, 270px';

  const chips = categories.map((c, i) =>
    `      <a class="chip${i === 0 ? ' is-active' : ''}" href="#cat-${c.id}" data-chip="${c.id}">${esc(c.short[L.code])}</a>`
  ).join('\n');

  const used = new Set();
  categories.forEach(c => c.items.forEach(i => (i.tags || []).forEach(x => used.add(x))));
  const filters = `      <span class="label">${esc(t.menuPage.filterLabel)}</span>\n` +
    Object.keys(tagLabels).filter(k => used.has(k)).map(k =>
      `      <button class="chip filter-toggle" type="button" data-filter="${k}" aria-pressed="false">${esc(tagLabels[k][L.code])}</button>`
    ).join('\n');

  const cats = categories.map(c => `
      <section class="menu-cat" id="cat-${c.id}" data-cat aria-labelledby="h-${c.id}">
        <header class="menu-cat-head" data-reveal="up">
          <div>
            <span class="num tnum">${c.num}</span>
            <h2 id="h-${c.id}">${esc(c.name[L.code])}</h2>
            <p class="text-muted">${esc(c.intro[L.code])}</p>
          </div>
          <span class="cat-script text-muted">${esc(c.script[L.code])}</span>
        </header>
        <div class="rule-ornament"><i></i></div>
        <div class="dish-grid" data-stagger="70">${c.items.map(i => dishHTML(L, i, c, CARD)).join('')}
        </div>
      </section>`).join('\n');

  return head(L, 'menu') + nav(L, 'menu') + `

<main id="main">

<section class="menu-hero">
  <div class="wrap">
    <p class="menu-kicker" data-enter="fade">${esc(t.menuPage.kicker)}</p>
    <h1 data-enter="up" data-delay="90">${esc(t.menuPage.title)}</h1>
    <p class="lead text-muted" style="max-width:60ch" data-enter="up" data-delay="200">${esc(fill(t.menuPage.lead, { c: CAT_COUNT, n: DISH_COUNT }))}</p>
    <p id="price-notice" class="price-notice text-muted" data-enter="fade" data-delay="300"${ANY_PRICE ? ' hidden' : ''}>${esc(t.menuPage.priceNotice)}</p>
  </div>
</section>

<div class="menu-bar">
  <div class="wrap menu-bar-inner">
    <nav class="chips" id="menu-chips" aria-label="${esc(t.menuPage.catNav)}">
${chips}
    </nav>
    <div class="menu-search">
      <label class="visually-hidden" for="menu-search-input">${esc(t.menuPage.searchLabel)}</label>
      ${icon.search}
      <input id="menu-search-input" type="search" placeholder="${esc(t.menuPage.searchPlaceholder)}" autocomplete="off">
    </div>
  </div>
</div>

<div class="wrap">
  <div class="menu-filters" id="menu-filters">
${filters}
  </div>
</div>

<div class="wrap">
  <div id="menu-root">
${cats}

      <div class="no-results" id="no-results" hidden>
        <p>${esc(t.menuPage.noResultsTitle)}</p>
        <p class="text-muted">${esc(t.menuPage.noResultsSub)}</p>
        <button class="btn btn-secondary" type="button" id="reset-all">${esc(t.menuPage.reset)}</button>
      </div>
  </div>
</div>

<section class="section on-dark" style="margin-top:clamp(56px,9vw,110px)">
  <div class="wrap wrap-narrow" style="text-align:center">
    <h6 data-reveal="up">${esc(t.menuPage.outroKicker)}</h6>
    <h2 class="display" data-reveal="up" data-delay="80">${esc(t.menuPage.outroTitle)}</h2>
    <p class="text-muted" data-reveal="up" data-delay="140">${esc(t.menuPage.outroText)}</p>
    <div class="hero-actions" style="justify-content:center" data-reveal="up" data-delay="200">
      <a class="btn btn-primary" href="tel:${contact.phoneHref}">${esc(t.menuPage.ctaReserve)}</a>
      <a class="btn btn-secondary" href="${base}${L.path}#visit">${esc(t.menuPage.ctaVisit)}</a>
    </div>
  </div>
</section>

</main>
` + footer(L, 'menu');
}

/* ── Schreiben ────────────────────────────────────────────────────────── */
let written = 0;
for (const L of LANGS) {
  const dir = join(ROOT, L.path);
  if (L.path) mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), homePage(L));
  writeFileSync(join(dir, 'menu.html'), menuPage(L));
  written += 2;
}

/* Sitemap, damit alle Sprachfassungen gefunden werden */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.flatMap(L => ['', 'menu.html'].map(f => `  <url>
    <loc>${SITE}/${L.path}${f}</loc>
${LANGS.map(o => `    <xhtml:link rel="alternate" hreflang="${o.htmlLang}" href="${SITE}/${o.path}${f}"/>`).join('\n')}
  </url>`)).join('\n')}
</urlset>
`;
writeFileSync(join(ROOT, 'sitemap.xml'), sitemap);

console.log(`${written} Seiten gebaut (${LANGS.map(l => l.code).join(', ')}) — ${CAT_COUNT} Kategorien, ${DISH_COUNT} Gerichte, Preise ${ANY_PRICE ? 'gepflegt' : 'offen'}`);
