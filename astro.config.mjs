import { defineConfig } from 'astro/config';

// Static output — deployed as pure static files (Cloudflare Pages, GitHub Pages, Netlify, etc.)
export default defineConfig({
  site: 'https://aavisutram.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
