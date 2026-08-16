// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import checkPlaceholders from './scripts/check-placeholders.mjs';

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

    // Impressum and Datenschutz carry `noindex` — keep them out of the sitemap
    // so we never ask Google to crawl what we tell it not to index.
    sitemap({
      filter: (page) =>
        !page.includes('/impressum/') && !page.includes('/datenschutz/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
