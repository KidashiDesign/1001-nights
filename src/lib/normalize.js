/* ══════════════════════════════════════════════════════════════════════════
   Suchnormalisierung — eine Quelle für beide Seiten
   ──────────────────────────────────────────────────────────────────────────
   Der Suchindex jeder Gerichtekarte entsteht beim Bauen, der Suchbegriff des
   Besuchers im Browser. Beide müssen zeichengleich normalisiert werden, sonst
   greift die Suche daneben. Vor der Astro-Umstellung stand diese Funktion
   doppelt im Projekt — einmal im Generator, einmal im Browser-Skript. Jetzt
   gibt es sie einmal, und beide Seiten importieren sie.

   Die Ersetzungen stehen bewusst als \uXXXX da: unsichtbare Zeichen (ZWNJ,
   arabische Vokalzeichen, kombinierende Akzente) bleiben so im Quelltext
   lesbar.
   ═════════════════════════════════════════════════════════════════════════ */
export function norm(s) {
  return String(s || '').toLowerCase()
    .replace(/\u00e4/g, 'ae').replace(/\u00f6/g, 'oe')
    .replace(/\u00fc/g, 'ue').replace(/\u00df/g, 'ss')
    .replace(/[\u064a\u0649]/g, '\u06cc')      /* arabisches Ya  -> persisches Ya */
    .replace(/\u0643/g, '\u06a9')              /* arabisches Kaf -> persisches Kaf */
    .replace(/[\u064b-\u0652\u0670]/g, '')     /* arabische Vokalzeichen entfernen */
    .replace(/\u200c/g, ' ')                   /* ZWNJ als Wortgrenze */
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
