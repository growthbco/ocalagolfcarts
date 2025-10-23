# Ocala Golf Cart Rentals Website

A modern, responsive website for Ocala Golf Cart Rentals built with Astro, Tailwind CSS, and deployed on Netlify.

## 🚀 Features

- **Modern Design**: Clean, professional design with a focus on user experience
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **SEO Optimized**: Proper meta tags, sitemap, and semantic HTML
- **Contact Forms**: Reservation and contact forms ready for integration
- **Local Business Focus**: Designed specifically for Ocala, Florida market

## 📄 Pages

- **Homepage**: Hero section, features, popular destinations, and call-to-action
- **Rentals**: Detailed pricing packages and fleet information
- **About**: Company story, values, and team information
- **Contact**: Reservation form, contact information, and FAQ section

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment**: [Netlify](https://netlify.com/) - Static site hosting
- **Version Control**: [GitHub](https://github.com/) - Code repository

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ocala-golf-cart-rentals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Netlify Deployment

This project is configured for automatic deployment on Netlify:

1. **Connect your GitHub repository to Netlify**
   - Go to [Netlify](https://netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select this repository

2. **Build settings** (automatically configured via `netlify.toml`)
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Deploy**
   - Netlify will automatically deploy when you push to your main branch
   - Preview deployments are created for pull requests

### Manual Deployment

You can also deploy manually:

```bash
npm run build
# Upload the contents of the dist/ directory to your web server
```

## 📁 Project Structure

```
ocala-golf-cart-rentals/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # Main layout component
│   └── pages/
│       ├── index.astro      # Homepage
│       ├── about.astro      # About page
│       ├── contact.astro    # Contact/Reservations page
│       └── rentals.astro    # Rentals/Pricing page
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
├── netlify.toml             # Netlify deployment configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Customization

### Colors

The website uses a custom color scheme defined in `tailwind.config.mjs`:

- **Primary**: Green tones (#16a34a, #22c55e, etc.)
- **Secondary**: Yellow/Gold tones (#eab308, #facc15, etc.)

### Content

To update content:

1. **Contact Information**: Update in `src/layouts/Layout.astro` (footer)
2. **Pricing**: Update in `src/pages/rentals.astro`
3. **Business Information**: Update in `src/pages/about.astro`
4. **Company Details**: Update throughout the relevant page files

### Images

Replace placeholder gradient backgrounds with actual images:

1. Add images to the `public/` directory
2. Update the `src` attributes in the relevant components
3. Consider using Astro's built-in image optimization

## 📞 Contact Form Integration

The contact form on the `/contact` page is ready for integration with:

- **Netlify Forms**: Automatic form handling (recommended)
- **Formspree**: Third-party form service
- **Custom Backend**: Your own form processing endpoint

To enable Netlify Forms, add `netlify` attribute to the form tag:

```html
<form netlify name="contact" method="POST">
```

## 🔧 Development

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import and use the `Layout` component
3. Add navigation links in `src/layouts/Layout.astro`

### Styling

- Use Tailwind CSS utility classes
- Custom styles can be added to component `<style>` tags
- Global styles can be added to `src/layouts/Layout.astro`

### SEO

- Update meta descriptions in each page's Layout component
- Add structured data markup for local business
- Optimize images and use proper alt text

## 📱 Mobile Optimization

The website is fully responsive and optimized for:

- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktop computers (1024px and up)
- Large screens (1280px and up)

## 🚀 Performance

- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- CSS purging for smaller file sizes

## 📄 License

This project is proprietary to Ocala Golf Cart Rentals.

## 🤝 Support

For technical support or questions about this website:

- Email: info@ocalagolfcarts.com
- Phone: (555) 123-4567

---

**Built with ❤️ for Ocala, Florida**
# Trigger rebuild
# Force sitemap rebuild
