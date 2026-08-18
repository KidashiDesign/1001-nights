/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — Inhaltsprüfung
   ──────────────────────────────────────────────────────────────────────────
   Hängt als Integration in astro.config.mjs und läuft einmal beim Bauen wie
   beim Start des Entwicklungsservers. Sie bricht ab, wenn ein Inhalt
   unvollständig ist: vier Sprachen von Hand zu pflegen heißt, dass eine davon
   irgendwann vergessen wird. Lieber ein roter Build als eine persische Seite
   mit englischen Lücken.

   Geprüft wird:
     · jede Kategorie und jedes Gericht in allen vier Sprachen
     · eindeutige Gericht-ids (sie sind Anker in der URL)
     · nur bekannte Diät-Kennzeichen
     · jedes Foto in allen drei Größen unter public/media
     · die Gerichte der Startseiten-Auswahl existieren wirklich
   ═════════════════════════════════════════════════════════════════════════ */

import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { LANGS } from '../data/ui.js';
import { categories, tagLabels, signature } from '../data/menu.js';

const CODES = LANGS.map(l => l.code);

/**
 * @param {URL} publicDir  Astros publicDir — darunter liegt media/
 * @returns {number} Zahl der geprüften Gerichte
 */
export function checkContent(publicDir) {
  const mediaDir = fileURLToPath(new URL('media/', publicDir));
  const problems = [];
  const seen = new Set();

  const complete = (obj, where, field) => {
    for (const c of CODES) {
      if (!obj?.[c] || !String(obj[c]).trim()) {
        problems.push(`${where}: ${field} fehlt für „${c}“`);
      }
    }
  };

  for (const cat of categories) {
    const where = `Kategorie „${cat.id}“`;
    for (const field of ['name', 'short', 'script', 'intro']) complete(cat[field], where, field);

    for (const item of cat.items) {
      const w = `Gericht „${item.id}“`;

      if (seen.has(item.id)) problems.push(`${w}: id doppelt vergeben`);
      seen.add(item.id);

      complete(item.name, w, 'name');
      complete(item.desc, w, 'desc');

      for (const tag of item.tags || []) {
        if (!tagLabels[tag]) problems.push(`${w}: unbekanntes Kennzeichen „${tag}“`);
      }

      for (const size of ['', 'sm/', 'md/']) {
        if (!existsSync(mediaDir + size + item.img)) {
          problems.push(`${w}: Foto fehlt — public/media/${size}${item.img}`);
        }
      }
    }
  }

  for (const id of signature) {
    if (!seen.has(id)) problems.push(`Startseiten-Auswahl: „${id}“ steht in keiner Kategorie`);
  }

  if (problems.length) {
    throw new Error(
      `Inhalt unvollständig — ${problems.length} Stelle(n):\n  · ` + problems.join('\n  · ')
    );
  }

  return seen.size;
}
