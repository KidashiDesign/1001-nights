/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — Wege und Kennzahlen der Seite
   ──────────────────────────────────────────────────────────────────────────
   Ein Ort für alles, was mehrere Seiten gemeinsam brauchen: die URL einer
   Sprachfassung, der Pfad zu einem Bild, die Zahl der Gerichte.

   Alle Pfade laufen über import.meta.env.BASE_URL, damit die Seite auch unter
   einem Unterpfad ausgeliefert werden kann, ohne dass hier etwas zu ändern
   wäre. Die Domain für canonical, hreflang und sitemap steht als `site` in
   astro.config.mjs — und nur dort.
   ═════════════════════════════════════════════════════════════════════════ */

import { LANGS, ui, contact } from '../data/ui.js';
import { categories, tagLabels, signature, currency } from '../data/menu.js';

export { LANGS, ui, contact, categories, tagLabels, signature, currency };

/* BASE_URL endet immer auf '/' */
const BASE = import.meta.env.BASE_URL;

export const lang = code => {
  const L = LANGS.find(l => l.code === code);
  if (!L) throw new Error(`Unbekannte Sprache: ${code}`);
  return L;
};

/* Startseite und Speisekarte einer Sprache — '/', '/fa/', '/menu.html', … */
export const homeUrl = code => `${BASE}${lang(code).path}`;
export const menuUrl = code => `${homeUrl(code)}menu.html`;
export const aboutUrl = code => `${homeUrl(code)}about.html`;
export const eventsUrl = code => `${homeUrl(code)}events.html`;
export const pageUrl = (code, page) => {
  if (page === 'menu') return menuUrl(code);
  if (page === 'about') return aboutUrl(code);
  if (page === 'events') return eventsUrl(code);
  return homeUrl(code);
};

/* Anker: auf der Startseite bleibt er relativ, von den Unterseiten aus springt
   er zurück auf die Startseite derselben Sprache. */
export const anchorUrl = (code, page, hash) => (page === 'home' ? hash : homeUrl(code) + hash);

/* Bilder liegen unter public/media in drei Größen: sm 480, md 900, / 1280 */
export const media = (size, file) => `${BASE}media/${size ? size + '/' : ''}${file}`;

/* Platzhalter der Form {name} aus den Texten füllen */
export const fill = (s, vars) =>
  String(s).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));

/* ── Kennzahlen, einmal aus den Daten gerechnet ───────────────────────── */
export const DISH_COUNT = categories.reduce((n, c) => n + c.items.length, 0);
export const CAT_COUNT = categories.length;
export const ANY_PRICE = categories.some(c => c.items.some(i => i.price != null));
export const YEAR = new Date().getFullYear();

/* Gerichte nach id, für die Auswahl auf der Startseite */
const byId = new Map();
for (const c of categories) for (const i of c.items) byId.set(i.id, { item: i, cat: c });
export const signatureDishes = signature.map(id => byId.get(id)).filter(Boolean);

/* Nur die Diät-Kennzeichen anbieten, die auch wirklich vergeben sind */
const usedTags = new Set();
for (const c of categories) for (const i of c.items) for (const t of i.tags || []) usedTags.add(t);
/** @type {import('./types').TagKey[]} */
export const filterTags = /** @type {any} */ (Object.keys(tagLabels).filter(k => usedTags.has(k)));
