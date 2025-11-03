# danieljsmith.org

Professional tutoring website for Daniel J. Smith - Mathematics and Physics tuition.

## 🎓 About

This website provides information about tutoring services for GCSE, A-Level, and university-level Mathematics and Physics, as well as specialized Oxbridge admissions support.

## 🚀 Technology Stack

- **Framework:** [Astro 5](https://astro.build/) - Fast, content-focused static site generator
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) with Tabler icons
- **Deployment:** GitHub Pages
- **Forms:** Zoho Forms with reCAPTCHA v3

## 📁 Project Structure

```
/
├── public/
│   ├── _headers              # Cache control headers
│   ├── robots.txt            # SEO robots configuration
│   └── assets/               # Favicons and static assets
├── src/
│   ├── assets/
│   │   ├── images/           # Site images and photos
│   │   └── styles/           # Global CSS styles
│   ├── components/
│   │   ├── common/           # Reusable common components
│   │   ├── ui/               # UI components (buttons, forms, etc.)
│   │   └── widgets/          # Page sections (header, hero, etc.)
│   ├── layouts/              # Page layouts
│   ├── pages/                # Site pages (routes)
│   │   ├── index.astro       # Homepage
│   │   ├── about.astro       # Testimonials page
│   │   ├── services.astro    # Services listing
│   │   ├── contact.astro     # Contact form
│   │   ├── thank-you.astro   # Form success page
│   │   └── 404.astro         # Error page
│   ├── utils/                # Utility functions
│   ├── config.yaml           # Site configuration
│   └── navigation.ts         # Navigation menu structure
├── astro.config.ts           # Astro configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json              # Dependencies
```

## 🛠️ Development

### Prerequisites

- Node.js (v18.17.1 or v20.3.0+ or v21.0.0+)
- npm or equivalent package manager

### Installation

```bash
# Install dependencies
npm install
```

### Local Development

```bash
# Start development server (http://localhost:4321)
npm run dev

# Alternative start command
npm start
```

### Build for Production

```bash
# Build static site
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run all checks (Astro, ESLint, Prettier)
npm run check

# Fix linting and formatting issues
npm run fix

# Individual checks
npm run check:astro
npm run check:eslint
npm run check:prettier
```

## 📝 Configuration

### Site Settings

Edit `src/config.yaml` to update:
- Site name and URL
- SEO metadata (title, description, Open Graph)
- Google Site Verification
- Analytics settings (Google Analytics)
- UI theme preferences

### Navigation

Edit `src/navigation.ts` to modify:
- Header navigation links
- Footer content and links

### Contact Form

The contact form uses Zoho Forms. See `ZOHO-FORMS-SETUP.md` for detailed integration instructions including:
- Form field configuration
- reCAPTCHA v3 setup
- Email notifications
- Success page redirection

## 🚢 Deployment

### GitHub Pages

This site is configured for deployment to GitHub Pages using GitHub Actions.

**Setup:**

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Create `.github/workflows/deploy.yml` (if not exists):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Push to main branch to trigger deployment

## 🎨 Customization

### Styling

- **Global styles:** `src/assets/styles/tailwind.css`
- **Custom styles:** `src/components/CustomStyles.astro`
- **Tailwind config:** `tailwind.config.js`

### Images

- Place images in `src/assets/images/`
- Images are automatically optimized by Astro
- Use the `Image` component from `~/components/common/Image.astro`

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import and use `PageLayout` from `~/layouts/PageLayout.astro`
3. Add navigation link in `src/navigation.ts` if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

Built with [AstroWind](https://github.com/arthelokyo/astrowind) template as a starting point.

## 📞 Support

For website issues or inquiries, please contact via the [contact form](https://danieljsmith.org/contact).

---

**Version:** 1.0.0  
**Last Updated:** November 2025
