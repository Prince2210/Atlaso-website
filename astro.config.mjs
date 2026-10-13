// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production URL — used for canonical links, Open Graph tags and the sitemap.
  // Keep in sync with `site.url` in src/config/site.ts.
  site: 'https://atlaso.ai',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
