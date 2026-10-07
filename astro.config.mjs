// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with your real domain (include https://, no trailing slash)
export default defineConfig({
  site: 'https://blog.ethangosling.com',
  integrations: [sitemap()],
});
