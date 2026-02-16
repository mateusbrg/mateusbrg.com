// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mateusbrg.com',
  integrations: [vue(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
