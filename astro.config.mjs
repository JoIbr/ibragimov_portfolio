// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

import { SITE_URL } from './src/data/site.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
