export interface SitemapConfig {
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export const sitemapConfig: Record<string, SitemapConfig> = {
  // Homepage - highest priority
  '/': {
    priority: 1.0,
    changefreq: 'weekly'
  },
  
  // Main service pages - high priority
  '/rentals/': {
    priority: 0.9,
    changefreq: 'weekly'
  },
  '/daily-rental/': {
    priority: 0.9,
    changefreq: 'weekly'
  },
  '/weekly-rental/': {
    priority: 0.9,
    changefreq: 'weekly'
  },
  '/monthly-rental/': {
    priority: 0.9,
    changefreq: 'weekly'
  },
  
  // Fleet/Vehicle pages - high priority
  '/2-passenger-golf-cart/': {
    priority: 0.8,
    changefreq: 'monthly'
  },
  '/4-passenger-golf-cart/': {
    priority: 0.8,
    changefreq: 'monthly'
  },
  '/6-passenger-golf-cart/': {
    priority: 0.8,
    changefreq: 'monthly'
  },
  '/fleet-rentals/': {
    priority: 0.8,
    changefreq: 'monthly'
  },
  
  // Event/Special service pages - medium-high priority
  '/wec-golf-carts/': {
    priority: 0.8,
    changefreq: 'weekly'
  },
  '/events/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/wedding-venue-golf-cart-rental/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/lifted-4-passenger-golf-cart/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/utility-golf-cart-rental/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/4-passenger-deluxe-golf-cart/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/horse-show-golf-cart-rental/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/hits-golf-cart-rental-ocala/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/corporate-event-golf-cart-rental-ocala/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/golf-tournament-cart-rental-ocala/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/birthday-party-golf-cart-rental-ocala/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/graduation-party-golf-cart-rental-ocala/': {
    priority: 0.7,
    changefreq: 'yearly'
  },
  '/festival-golf-cart-rental-ocala/': {
    priority: 0.7,
    changefreq: 'monthly'
  },
  '/christmas-golf-cart-rental-ocala/': {
    priority: 0.7,
    changefreq: 'yearly'
  },
  '/july-4th-golf-cart-rental-ocala/': {
    priority: 0.7,
    changefreq: 'yearly'
  },
  '/halloween-golf-cart-rental-ocala/': {
    priority: 0.7,
    changefreq: 'yearly'
  },
  
  // Contact page - medium-high priority for local SEO
  '/contact/': {
    priority: 0.8,
    changefreq: 'monthly'
  },
  
  // About page - medium priority
  '/about/': {
    priority: 0.6,
    changefreq: 'monthly'
  }
};