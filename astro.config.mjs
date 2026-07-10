import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alimor.app',
  base: '/',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // /terms/ is a meta-refresh redirect to Apple's standard EULA — keep it out of the sitemap
      filter: (page) => !page.includes('/terms'),
    })
  ],
  build: {
    assets: '_assets'
  }
});
