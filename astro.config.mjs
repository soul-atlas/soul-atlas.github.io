import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// The canonical production URL. Override with the SITE env var for forks/previews.
const SITE = process.env.SITE_URL || 'https://open-soul.github.io';
const BASE = process.env.BASE_PATH || '/soul-atlas';

// https://astro.build
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  vite: {
    ssr: {
      noExternal: ['d3', 'd3-*'],
    },
  },
});
