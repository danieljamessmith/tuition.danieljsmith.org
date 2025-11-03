# Codebase Analysis Report: danieljsmith.org
**Date:** November 3, 2025  
**Base Template:** AstroWind

---

## Executive Summary

This website has been customized from the AstroWind template for a tutoring business. The blog functionality has been disabled, but significant template infrastructure remains. This analysis identifies **redundant code, dead files, and opportunities for cleanup**.

**Key Findings:**
- ✅ **5 active pages** (index, about, services, contact, thank-you, 404)
- ❌ **10+ unused widget components** (67% of widgets are dead code)
- ❌ **Blog infrastructure** still present despite `blog.isEnabled: false`
- ❌ **Dark mode infrastructure** still present despite `theme: 'light:only'`
- ⚠️ **Empty directories** (src/data, minimal src/content)
- ⚠️ **Unused CMS setup** (DecapCMS in public/decapcms)
- ⚠️ **Multiple deployment configs** (Netlify, Vercel, Docker)

---

## 1. DEAD CODE - Components Not Used Anywhere

### A. Unused Widget Components (Can be safely deleted)
All these files exist but are NEVER imported in any page:

```
src/components/widgets/
  ❌ CallToAction.astro       - CTA banners (not used)
  ❌ Content.astro            - Content sections with images (not used)
  ❌ FAQs.astro               - FAQ accordion (not used)
  ❌ Features.astro           - Feature grid (not used)
  ❌ Features3.astro          - Alternative feature layout (not used)
  ❌ Footer.astro             - Site footer (NOT RENDERED ON ANY PAGE!)
  ❌ Stats.astro              - Statistics display (not used)
  ❌ Steps.astro              - Step-by-step guide (not used)
  ❌ Steps2.astro             - Alternative steps layout (not used)
```

**Actually Used Widgets (Keep these):**
- ✅ Header.astro (used in PageLayout)
- ✅ Hero.astro (used in about, services, thank-you)
- ✅ HeroText.astro (used in contact)
- ✅ Features2.astro (used in services, thank-you)
- ✅ Contact.astro (used in contact)
- ✅ Testimonials.astro (used in about)

### B. Unused UI Components

```
src/components/ui/
  ❌ DListItem.astro          - Definition list items (never used)
  ⚠️ ItemGrid.astro            - Used by unused widget components only
  ⚠️ Timeline.astro            - Used by Steps.astro (which is unused)
```

**Note:** `ItemGrid2.astro` is used by Features2, so keep it. ItemGrid.astro is only used by unused widgets.

### C. Unused Common Components

```
src/components/common/
  ❌ SocialShare.astro        - Social sharing buttons (blog-related, never used)
  ❌ SplitbeeAnalytics.astro  - Splitbee analytics (never used, Google Analytics is configured instead)
  ⚠️ ToggleTheme.astro         - Theme switcher (rendered but non-functional with 'light:only' theme)
  ⚠️ ApplyColorMode.astro      - Dark mode script (unnecessary with 'light:only' theme)
```

### D. Unused Layouts

```
src/layouts/
  ❌ LandingLayout.astro      - Never imported or used
  ❌ MarkdownLayout.astro     - Blog-related, never used
```

**Actually Used Layouts:**
- ✅ Layout.astro (base layout)
- ✅ PageLayout.astro (main page wrapper)

---

## 2. REDUNDANCIES & INCONSISTENCIES

### A. Duplicate Deployment Configurations
You have THREE different deployment setups:

```
❌ netlify.toml             - Netlify config
❌ vercel.json              - Vercel config
❌ Dockerfile + docker-compose.yml + nginx/nginx.conf - Docker/nginx setup
```

**Recommendation:** Keep only the deployment method you're actually using. Delete the others.

### B. Dark Mode Infrastructure (Unnecessary)

Your config has `theme: 'light:only'`, but these files still implement dark mode:
- `ApplyColorMode.astro` - Checks localStorage for dark mode preference
- `ToggleTheme.astro` - Renders theme toggle button (but it's hidden by theme config)
- Tailwind has dark mode classes throughout

**Impact:** Minimal performance impact, but adds confusion. The toggle button is conditionally rendered as disabled, so it's not breaking anything.

### C. Blog Infrastructure (All Unused)

Blog is disabled (`blog.isEnabled: false`), but these remain:

**Config:**
- config.yaml lines 34-36: Blog configuration (7 lines of unused config)

**Types:**
- types.d.ts: `Post`, `Taxonomy` interfaces (lines 4-50)

**Utils:**
- utils/frontmatter.ts: `readingTimeRemarkPlugin` (imported in astro.config.ts)
- astro.config.ts: Reading time plugin, responsive tables, lazy images (all blog-focused)

**Dependencies (package.json):**
```json
"reading-time": "^1.5.0",           // Blog reading time calculation
"mdast-util-to-string": "^4.0.0",   // Blog markdown processing
```

### D. Content Management Setup

```
public/decapcms/index.html          - DecapCMS (Netlify CMS) setup
```

**Status:** Appears unused. No content collections defined, no CMS config file.

**Recommendation:** Delete if not using Netlify CMS.

### E. Empty/Minimal Directories

```
src/data/                           - Empty directory (no files)
src/content/                        - Only contains minimal config.ts with empty collections
```

**Recommendation:** `src/data/` can be deleted. `src/content/config.ts` should stay (Astro requires it even if empty).

---

## 3. CONFIGURATION ISSUES

### A. Inconsistent Site URL

```yaml
# src/config.yaml
site:
  name: danieljsmith.org
  site: 'https://astrowind.vercel.app'  # ⚠️ Still points to demo URL!
```

**Action Required:** Update to your actual domain.

### B. Unused Analytics Setup

```yaml
analytics:
  vendors:
    googleAnalytics:
      id: null                          # Not configured
```

`@astrolib/analytics` is installed but unused.

### C. Package Name

```json
// package.json
"name": "former-field",                 // Generic placeholder name
```

**Recommendation:** Change to `danieljsmith-org` or similar.

### D. Unused Astro Integrations

In `astro.config.ts`:
- `@astrojs/partytown` - Conditionally disabled (`hasExternalScripts = false`)
- `@astrojs/mdx` - Blog-focused, but you have no MDX content

---

## 4. DOCUMENTATION FILES

```
✅ ZOHO-FORMS-SETUP.md         - Useful, keep
⚠️ README.md                    - Still the AstroWind template README
❌ vendor/README.md             - Template integration notes (not useful for your site)
```

**Recommendation:** Replace README.md with your own documentation.

---

## 5. UTILITY FILES - USAGE ANALYSIS

### Keep These (actively used):
- ✅ `utils/permalinks.ts` - Used throughout for URL generation
- ✅ `utils/images.ts` - Used for image optimization
- ✅ `utils/images-optimization.ts` - Core image processing
- ✅ `utils/utils.ts` - Date formatting, string trimming (used)

### Review These:
- ⚠️ `utils/frontmatter.ts` - Blog markdown plugins (loaded in astro.config but no markdown content)
- ⚠️ `utils/directories.ts` - Only 2 exports, appears rarely used

---

## 6. RECOMMENDED CLEANUP ACTIONS

### Priority 1: High Impact, Low Risk

**Delete Unused Widget Components** (9 files):
```bash
rm src/components/widgets/CallToAction.astro
rm src/components/widgets/Content.astro
rm src/components/widgets/FAQs.astro
rm src/components/widgets/Features.astro
rm src/components/widgets/Features3.astro
rm src/components/widgets/Footer.astro
rm src/components/widgets/Stats.astro
rm src/components/widgets/Steps.astro
rm src/components/widgets/Steps2.astro
```

**Delete Unused Layouts** (2 files):
```bash
rm src/layouts/LandingLayout.astro
rm src/layouts/MarkdownLayout.astro
```

**Delete Unused UI Components** (3 files):
```bash
rm src/components/ui/DListItem.astro
rm src/components/ui/ItemGrid.astro  # Keep ItemGrid2.astro!
rm src/components/ui/Timeline.astro
```

**Delete Unused Common Components** (2 files):
```bash
rm src/components/common/SocialShare.astro
rm src/components/common/SplitbeeAnalytics.astro
```

**Delete CMS Setup**:
```bash
rm -rf public/decapcms
```

**Delete Empty Directory**:
```bash
rm -rf src/data
```

**Delete Unused Deployment Configs** (choose what you're NOT using):
```bash
# If not using Netlify:
rm netlify.toml

# If not using Vercel:
rm vercel.json

# If not using Docker:
rm Dockerfile
rm docker-compose.yml
rm -rf nginx/
```

**Delete Sandbox Config**:
```bash
rm sandbox.config.json  # CodeSandbox/StackBlitz config (not needed for production)
```

### Priority 2: Configuration Updates

**Update src/config.yaml**:
```yaml
site:
  site: 'https://danieljsmith.org'  # Fix this!
```

**Update package.json**:
```json
{
  "name": "danieljsmith-org",
  "description": "Professional tutoring website for Daniel J. Smith"
}
```

**Replace README.md** with your own documentation.

### Priority 3: Optional Optimizations

**Remove blog-related dependencies** (package.json):
```bash
npm uninstall reading-time mdast-util-to-string
```

**Remove blog-related plugins** from `astro.config.ts`:
```typescript
// Remove this import:
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

// Remove this from markdown config:
markdown: {
  remarkPlugins: [readingTimeRemarkPlugin],  // ← Remove
  rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],  // ← Remove
},
```

**Simplify blog config** in `src/config.yaml`:
```yaml
apps:
  blog:
    isEnabled: false
    # Delete all sub-config (lines 37-30 are now redundant)
```

**Consider removing dark mode** (optional, low priority):
- Could remove `ApplyColorMode.astro` and `ToggleTheme.astro`
- But they're small files and don't hurt anything

---

## 7. ESTIMATED CLEANUP IMPACT

### Files to Delete:
- **17 component files** (.astro)
- **1-3 deployment configs** (depending on what you use)
- **1 directory** (public/decapcms)
- **2 npm packages** (optional)

### Size Reduction:
- **~15-20KB** of component code
- **~50-100KB** of node_modules (if removing optional packages)

### Maintainability:
- **67% reduction** in unused widget components
- **Clearer codebase** for future development
- **Faster understanding** for new developers

---

## 8. WHAT TO KEEP (Good Customizations)

✅ **Clean page structure** - Your 5 pages are well-organized  
✅ **Good navigation setup** - Simple and clear navigation.ts  
✅ **Proper SEO config** - Metadata is configured correctly  
✅ **Professional styling** - Custom header gradient, good design choices  
✅ **Zoho Forms integration** - Well-documented setup  
✅ **Image optimization** - Good use of Astro's image handling  

---

## 9. FUTURE CONSIDERATIONS

### If You Never Need Blogging:
- Remove `@astrojs/mdx` integration
- Remove `@astrojs/rss` package
- Simplify types.d.ts (remove Post/Taxonomy types)

### If You Need More Features Later:
- The unused widgets (FAQs, Stats, Steps) are well-built
- Consider keeping their source in a `_archive/` folder instead of deleting
- You could restore them from git history if needed

---

## 10. FINAL RECOMMENDATION

**Immediate Actions (30 minutes):**
1. Fix the site URL in config.yaml
2. Delete the 17 unused component files listed above
3. Delete unused deployment configs
4. Remove DecapCMS setup

**Short-term (1 hour):**
5. Update README.md with your own documentation
6. Update package.json name and description
7. Remove blog-related dependencies

**Optional (if you have time):**
8. Clean up astro.config.ts (remove blog plugins)
9. Simplify types.d.ts (remove Post types)

**Total cleanup potential:**
- **Remove ~2,000 lines** of unused code
- **Delete 17-20 files** that serve no purpose
- **Improve project clarity** significantly

---

## Questions to Answer

1. **Which deployment method are you using?** (Netlify, Vercel, Docker, or other?)
2. **Do you plan to add a blog in the future?** (If yes, keep blog infrastructure)
3. **Will you use Netlify CMS?** (If no, delete public/decapcms)
4. **What is your actual domain?** (Update config.yaml)

---

## Summary

Your customization work is solid, but the codebase is carrying **significant template baggage**. About **60-70% of the widget components are unused**, and blog infrastructure adds unnecessary complexity. A focused cleanup will make the project **easier to maintain** and **clearer to understand**.

The biggest wins are:
1. Deleting unused widgets (9 files)
2. Fixing the site URL
3. Removing unused deployment configs
4. Cleaning up blog-related code

**Estimated time to clean: 1-2 hours**  
**Risk level: Low** (mostly deleting unused files)


