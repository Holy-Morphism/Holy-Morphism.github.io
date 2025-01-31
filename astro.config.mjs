// @ts-check
import { defineConfig } from 'astro/config';
import rss from '@astrojs/rss';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Holy-Morphism.github.io',
  integrations: [],

  vite: {
    plugins: [tailwindcss()]
  }
});