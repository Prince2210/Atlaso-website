// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  // Production URL (canonical links, Open Graph tags, sitemap). Set it in src/config/site.ts.
  site: site.url,
  integrations: [sitemap()],
  markdown: {
    processor: satteri(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
