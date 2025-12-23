import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://xWiseDev.github.io',
  base: '/AlimorSite',
  integrations: [tailwind()],
  build: {
    assets: '_assets'
  }
});