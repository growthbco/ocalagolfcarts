import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { sitemapConfig } from './src/sitemap-config';

// https://astro.build/config
export default defineConfig({
  site: 'https://golfcartrentalocala.com',
  integrations: [
    tailwind(), 
    sitemap({
      customPages: [],
      // Confirmation pages are noindex and should not be submitted for search.
      filter: (page) => new URL(page).pathname.replace(/\/$/, "") !== "/thank-you",
      serialize(item) {
        const path = new URL(item.url).pathname;
        const config = sitemapConfig[path];
        
        if (config) {
          return {
            url: item.url,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: item.lastmod
          };
        }
        
        // Default values for pages not in config
        return {
          url: item.url,
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: item.lastmod
        };
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US'
        }
      }
    })
  ],
  output: 'static',
  build: {
    assets: '_astro'
  }
});
