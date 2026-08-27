// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import checkPlaceholders from './scripts/check-placeholders.mjs';
import checkUrls from './scripts/check-urls.mjs';

// `site` feeds @astrojs/sitemap; canonical and OG tags are built from
// SITE_URL in src/lib/site.ts. Keep the two in sync.
export default defineConfig({
  site: 'https://deutschland-vorlagen.de',
  output: 'static',
  integrations: [
    preact(),
    // Bricht den Build ab, wenn ein Deploy-Platzhalter es ins `dist/` geschafft
    // hat. Cloudflare Pages baut mit `npm run build`, ein roter Build ist also
    // ein Deploy, der nicht stattfindet.
    checkPlaceholders(),
    // Bricht den Build ab, wenn canonical, og:url, ein interner Link oder ein
    // Sitemap-Eintrag auf eine Adresse zeigt, die Pages weiterleitet — die
    // Ursache der Search-Console-Meldung „Page with redirect" vom 2026-08-23.
    checkUrls(),

    // Every built page belongs in the sitemap. Impressum and Datenschutz were
    // excluded here until 2026-08-27 because they carried `noindex`; Search
    // Console then counted them under „Excluded by 'noindex' tag", which on a
    // YMYL domain means the two pages that prove who publishes this site are
    // the two Google never gets to see. Both are indexable now, so the filter
    // is gone. The 404 route keeps its `noindex` and is not a built page here.
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
