// @ts-check
import { defineConfig } from 'astro/config';
import { checkContent } from './src/lib/validate.js';

/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — Astro

   `build.format: 'preserve'` hält die gewachsenen URLs: die Startseiten
   liegen als /index.html und /fa/index.html, die Karten als /menu.html und
   /fa/menu.html — also genau dort, wo sie vor der Umstellung lagen. Alte
   Links, Lesezeichen und die Einträge in den Suchmaschinen bleiben gültig.
   ('directory' machte /menu.html/index.html daraus, 'file' aus /fa/ ein
   /fa.html — beides hätte URLs gebrochen.)

   `site` speist canonical, hreflang und sitemap.xml — bei einer anderen
   Domain wird hier umgestellt, sonst nirgends.
   ═════════════════════════════════════════════════════════════════════════ */

/** Prüft beim Start und beim Bauen, ob die Inhalte in allen vier Sprachen
    vollständig sind, und bricht sonst ab. Siehe src/lib/validate.js. */
/** @type {import('astro').AstroIntegration} */
const contentCheck = {
  name: '1001-nights:inhaltspruefung',
  hooks: {
    'astro:config:done': ({ config, logger }) => {
      const dishes = checkContent(config.publicDir);
      logger.info(`Inhalt vollständig — ${dishes} Gerichte in vier Sprachen`);
    }
  }
};

export default defineConfig({
  site: 'https://1001nights.ge',
  trailingSlash: 'ignore',
  build: { format: 'preserve', inlineStylesheets: 'auto' },
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [contentCheck]
});
