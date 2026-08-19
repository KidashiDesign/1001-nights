/* ══════════════════════════════════════════════════════════════════════════
   sitemap.xml — acht Seiten, jede mit hreflang auf ihre drei Schwestern.
   Die Domain kommt aus `site` in astro.config.mjs.
   ═════════════════════════════════════════════════════════════════════════ */
import { LANGS, pageUrl } from '../lib/site.js';

const PAGES = ['home', 'menu', 'about'];

export function GET({ site }) {
  const abs = (code, page) => new URL(pageUrl(code, page), site).href;

  const urls = LANGS.flatMap(L => PAGES.map(page => `  <url>
    <loc>${abs(L.code, page)}</loc>
${LANGS.map(o => `    <xhtml:link rel="alternate" hreflang="${o.htmlLang}" href="${abs(o.code, page)}"/>`).join('\n')}
  </url>`)).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
