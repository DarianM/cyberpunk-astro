import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://darian.xyz',
  output: 'server',
  adapter: cloudflare()
});