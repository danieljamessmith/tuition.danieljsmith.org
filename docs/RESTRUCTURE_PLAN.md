# Full Site Restructure: Multi-Subdomain Architecture

> **Overview:** Restructure danieljsmith.org into three subdomains: a minimal Astro landing hub at the apex, the current AstroWind tuition site at tuition.danieljsmith.org, and a new vanilla Astro resources site at files.danieljsmith.org. All hosted on GitHub Pages via separate repositories.

## Final Architecture

```
danieljsmith.org            → Minimal Astro landing/hub page (new)
tuition.danieljsmith.org    → Current AstroWind site (migrated)
files.danieljsmith.org      → Vanilla Astro resources site (new)
```

All three sites use Astro, providing consistent tooling and knowledge. Each subdomain is a separate GitHub repository, deployable independently. Blog (Quarto) deferred to future project.

---

## Part 1: Workspace Setup

Create a parent workspace folder to hold all three repos:

```
danieljsmith-sites/
├── landing/              → danieljsmith.org
├── tuition/              → tuition.danieljsmith.org (clone of current repo)
└── files/                → files.danieljsmith.org
```

Open `danieljsmith-sites/` in Cursor to work across all three. Each folder has its own `.git`, `package.json`, and `node_modules/` - completely independent.

---

## Part 2: DNS Configuration (Namecheap)

In Namecheap (Domain List -> Advanced DNS), configure these records:

| Type  | Host     | Value                              | Notes                   |
|-------|----------|-------------------------------------|-------------------------|
| A     | @        | 185.199.108.153                    | GitHub Pages IP (apex)  |
| A     | @        | 185.199.109.153                    | GitHub Pages IP (apex)  |
| A     | @        | 185.199.110.153                    | GitHub Pages IP (apex)  |
| A     | @        | 185.199.111.153                    | GitHub Pages IP (apex)  |
| CNAME | tuition  | danieljamessmith.github.io         | Tuition subdomain       |
| CNAME | files    | danieljamessmith.github.io         | Resources subdomain     |

The apex domain uses A records (CNAMEs not allowed at apex). Subdomains use CNAME records.

---

## Part 3: Migrate Current Site to tuition.danieljsmith.org

Changes to existing repo:

1. Update `public/CNAME` from `danieljsmith.org` to `tuition.danieljsmith.org`
2. Push changes - GitHub Pages will automatically serve at the new subdomain
3. In GitHub repo settings (Settings -> Pages), verify the custom domain updated

The repo name can stay `danieljsmith.org` - only the CNAME matters for routing.

**"Back to main site" link:** Add a simple footer link pointing back to `danieljsmith.org`.

---

## Part 4: New Landing Page (danieljsmith.org)

Create a minimal Astro site - no template, just the essentials.

**Structure:**

```
landing/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment
├── public/
│   ├── CNAME                    # Contains: danieljsmith.org
│   └── favicon.png
├── src/
│   ├── layouts/
│   │   └── Layout.astro         # Base HTML layout
│   └── pages/
│       └── index.astro          # Single landing page
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

**Content:** A clean, minimal page with:

- Your name/logo
- Brief tagline ("Tutor | Analyst | ...")
- Cards/buttons linking to subdomains
- Optional: social links (GitHub, LinkedIn)

**Key difference from AstroWind:** No vendor folder, no complex config system, no widget abstractions. Just Astro fundamentals.

---

## Part 5: Vanilla Astro Resources Site (files.danieljsmith.org)

New repository with minimal Astro + Tailwind:

**Structure:**

```
files/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── CNAME                    # Contains: files.danieljsmith.org
│   └── pdfs/                    # Your PDF files
│       ├── tmua-paper-1.pdf
│       ├── tmua-paper-2.pdf
│       └── ...
├── src/
│   ├── data/
│   │   └── resources.ts         # Resource metadata (title, description, filename)
│   ├── layouts/
│   │   └── Layout.astro         # Base HTML layout
│   └── pages/
│       └── index.astro          # Resources listing page
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

**The resources.ts file pattern:**

```typescript
export const resources = [
  {
    title: "TMUA Paper 1 - 2023",
    description: "Full paper with mark scheme",
    file: "/pdfs/tmua-paper-1-2023.pdf",
    category: "TMUA"
  },
  // ... more resources
];
```

This keeps resource metadata in code, making it easy to render a nice listing page.

**"Back to main site" link:** Include a simple footer link on this site pointing back to `danieljsmith.org`.

---

## Part 6: GitHub Pages Deployment

Each repo needs a GitHub Actions workflow. Astro workflow (same for both new sites):

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

After first push to each repo:

1. Go to Settings -> Pages
2. Source: GitHub Actions
3. Custom domain: (set the appropriate domain)
4. Enforce HTTPS: checked

---

## Order of Operations (Phased Deployment)

### Phase 1: Prepare (no risk to live site)

1. Create `danieljsmith-sites/` workspace folder
2. Clone current repo into `tuition/` subfolder
3. Create `landing/` and `files/` folders
4. Initialize Astro projects in both new folders
5. Build and test locally with `npm run dev`

### Phase 2: Deploy Subdomains First (additive)

1. Add DNS records in Namecheap for `tuition` and `files` subdomains
2. Create GitHub repos for landing and files sites
3. Push and deploy `files.danieljsmith.org` first (completely new, no conflict)
4. Verify it works

### Phase 3: The Switch (the coordinated moment)

1. Update `public/CNAME` in tuition repo to `tuition.danieljsmith.org`
2. Push tuition repo changes
3. Push and deploy landing page to apex domain
4. Verify all three sites work

### Rollback Plan

If anything breaks:

- Revert CNAME in tuition repo back to `danieljsmith.org`
- Revert DNS A records if needed
- Everything is reversible within minutes

---

## Quick Reference: Key Files

**Existing repo (becomes tuition site):**

- `public/CNAME` - change from `danieljsmith.org` to `tuition.danieljsmith.org`

**New landing repo:**

- `public/CNAME` - `danieljsmith.org`
- `src/pages/index.astro` - main landing page

**New resources repo:**

- `public/CNAME` - `files.danieljsmith.org`
- `src/data/resources.ts` - resource metadata
- `src/pages/index.astro` - resources listing
- `public/pdfs/` - your PDF files

---

## Future: Quarto Blog (Deferred)

When ready, add `blog.danieljsmith.org`:

1. Add CNAME record in Namecheap: `blog` -> `danieljamessmith.github.io`
2. Create new repo with Quarto project
3. Configure Quarto to output to `docs/` or use GitHub Actions
4. Quarto handles Jupyter notebooks natively - ideal for technical content
5. Add link from landing page to connect it to the hub

---

## Notes

- **Analytics:** Deferred. Can be added later by including a Plausible/Umami script in each site's layout.
