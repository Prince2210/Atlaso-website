// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { features, site } from './src/config/site.ts';

/**
 * Pages that belong to a feature flag live in src/feature-pages/ and are only
 * added to the site when their flag in src/config/site.ts is on.
 * @returns {import('astro').AstroIntegration}
 */
function featurePages() {
  return {
    name: 'atlaso:feature-pages',
    hooks: {
      'astro:config:setup': ({ injectRoute }) => {
        if (features.developers) {
          injectRoute({
            pattern: '/developers',
            entrypoint: new URL('./src/feature-pages/developers.astro', import.meta.url),
          });
        }
      },
    },
  };
}

/**
 * Markdown support for feature flags: content wrapped in
 *
 *   :::feature{name="developers"}
 *   …
 *   :::
 *
 * is kept (unwrapped) when that flag is on and removed when it's off.
 * @type {import('satteri').MdastPluginDefinition}
 */
const featureBlocks = {
  // The flag values are part of the name on purpose: Astro caches rendered Markdown
  // and only re-renders when the config changes, so flipping a flag must change it.
  name: `atlaso-feature-blocks ${JSON.stringify(features)}`,
  containerDirective(node, ctx) {
    if (node.name !== 'feature') return;
    const flag = /** @type {keyof typeof features | undefined} */ (node.attributes?.name ?? undefined);
    if (flag && features[flag]) ctx.replaceNode(node, [...node.children]);
    else ctx.removeNode(node);
  },
};

// https://astro.build/config
export default defineConfig({
  // Production URL (canonical links, Open Graph tags, sitemap). Set it in src/config/site.ts.
  site: site.url,
  integrations: [featurePages(), sitemap()],
  markdown: {
    processor: satteri({ features: { directive: true }, mdastPlugins: [featureBlocks] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
