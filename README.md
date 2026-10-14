# Atlaso website

Marketing website for **Atlaso**, a geospatial AI SaaS platform. Built with [Astro](https://astro.build) 7 and [Tailwind CSS](https://tailwindcss.com) 4. Fully static, responsive, with light, dark and system themes.

## Getting started

Requires Node 22.12+.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then builds to ./dist
npm run preview   # serve the production build
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Home: hero with product mockup, capabilities, change detection, solutions, API, testimonials |
| `/product` | Platform overview, capabilities, model catalog, FAQ |
| `/solutions`, `/solutions/[slug]` | Industry overview + 6 generated industry pages |
| `/pricing` | Plans with monthly/annual toggle, comparison table, add-ons, FAQ (only built when `features.pricing` is on) |
| `/developers` | API, SDKs, quickstart, endpoints (only built when `features.developers` is on; see [Feature flags](#feature-flags)) |
| `/about`, `/careers` | Company, team, values, open roles |
| `/blog`, `/blog/[id]` | Blog from Markdown content collection |
| `/changelog` | Release notes |
| `/contact`, `/demo` | Lead forms |
| `/security`, `/privacy`, `/terms` | Trust center and legal pages |
| `404` | Not-found page |

## Changing content

Most placeholder content lives in plain data files, so you rarely need to touch page markup.

| What | Where |
| --- | --- |
| Brand name, **product name**, emails, social links, app URL | `src/config/site.ts` |
| Header & footer navigation | `src/config/navigation.ts` |
| Industries (drives nav, `/solutions` and each `/solutions/[slug]` page) | `src/data/solutions.ts` |
| Pricing plans, comparison table, pricing FAQ | `src/data/pricing.ts` |
| Model catalog | `src/data/models.ts` |
| Team, values, offices, open roles, perks | `src/data/company.ts` |
| Testimonials and customer logos | `src/data/testimonials.ts` |
| Changelog entries | `src/data/changelog.ts` |
| API code samples | `src/data/code.ts` |
| Blog posts | `src/content/blog/*.md` |
| Privacy policy / terms | `src/pages/privacy.md`, `src/pages/terms.md` |

The product name (`product.name` / `product.shortName`) is a placeholder. Changing it in `site.ts` updates every page, code sample and testimonial that mentions it. Blog posts and the legal pages are plain Markdown, so update those by hand.

### Forms

The contact and demo forms validate in the browser. With `formEndpoint` empty in `src/config/site.ts`, a submit only shows a simulated success message. To receive submissions, set `formEndpoint` to any URL that accepts a JSON `POST`, such as Formspree, Basin or your own API.

### Before launch

- If the domain changes, update `url` in `src/config/site.ts` and the domain in `public/CNAME`. Everything else (canonical URLs, sitemap, `robots.txt`) derives from `url`.
- Replace `appUrl` and the `social` links (currently `#`) in `src/config/site.ts`.
- Replace placeholder customers, testimonials, metrics, compliance claims and team members with real ones.
- Have counsel review the privacy policy and terms.
- Add a 1200×630 social image and pass it to `BaseLayout` via the `image` prop.

## Feature flags

Parts of the site that aren't ready to launch are controlled by `features` in `src/config/site.ts`. Change a flag, then commit and push to `main` to redeploy.

| Flag | Default | Controls |
| --- | --- | --- |
| `developers` | `false` | The `/developers` page, the home page "For developers" section, the product page "Integrate" row and code samples, header/footer developer links, API/SDK/webhook rows in pricing, the platform diagram, changelog lines, the contact form's "API access" topic, and API wording in product copy |
| `pricing` | `false` | The `/pricing` page, Pricing links in the header, footer and 404 page, the product page's "See pricing" button (replaced by "Explore solutions"), and the pricing bullet on solution pages |

How it works:

- **Pages:** flagged pages live in `src/feature-pages/` (not `src/pages/`) and are added by the small integration in `astro.config.mjs` only when their flag is on. When off, they aren't built at all, so they 404 and stay out of the sitemap.
- **Components and data:** import `features` from `src/config/site.ts` and check it, e.g. `{features.developers && (<section>…</section>)}`.
- **Markdown** (blog posts, legal pages): wrap flagged content in a directive block. It's removed when the flag is off:

  ```md
  :::feature{name="developers"}
  Content that only appears when the developers flag is on.
  :::
  ```

To add a new flag, add it to `features`, then gate content with it the same way.

## Deploying

The site deploys to **GitHub Pages** at [atlaso.co.in](https://atlaso.co.in) via `.github/workflows/deploy.yml`. Every push to `main` builds and publishes it, and you can also run the workflow manually from the Actions tab.

One-time setup:

1. **Repository visibility.** GitHub Pages needs a public repository on the free plan. Private repositories need GitHub Pro, Team or Enterprise.
2. **Pages source.** In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. **Custom domain.** In **Settings → Pages → Custom domain**, enter `atlaso.co.in` and save.
4. **DNS at Hostinger.** In hPanel → **Domains → atlaso.co.in → DNS / Nameservers → DNS records**, remove any existing `A` record for `@` and `CNAME` record for `www`, then add:

   | Type | Name | Points to |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `prince2210.github.io` |

   `www.atlaso.co.in` then redirects to `atlaso.co.in` automatically.
5. **HTTPS.** Once DNS has propagated and GitHub has issued the certificate, tick **Enforce HTTPS** in **Settings → Pages**.
6. **Domain verification (recommended).** In your GitHub *account* settings → **Pages → Add a domain**, verify `atlaso.co.in` with the TXT record GitHub gives you. This stops anyone else from claiming the domain on GitHub Pages.

## Theming

- Design tokens (colors, shadows) are CSS variables in `src/styles/global.css`, under `:root` (light) and `.dark` (dark). Tailwind utilities like `bg-background`, `text-muted-foreground` and `bg-primary` map to them.
- The theme preference (`light` / `dark` / `system`) is stored in `localStorage` and applied by an inline script in `src/layouts/BaseLayout.astro` before first paint, so there is no flash. "System" follows the OS setting live.
- Theme controls: a header menu (`ThemeMenu.astro`) plus a compact switcher (`ThemeSwitcher.astro`) in the footer and the mobile menu. All of them stay in sync.

## Project structure

```
src/
  components/
    layout/      Header (desktop dropdowns + mobile menu), Footer
    sections/    Reusable page sections (PageHero, CTA, FAQ, LeadForm, …)
    ui/          Primitives (Button, Logo, CodeTabs, theme controls, …)
    visuals/     Generated SVG visuals (satellite scene, product mockup, before/after slider, diagram)
  config/        Site, product and navigation config
  content/blog/  Markdown blog posts
  data/          Page content as typed data
  layouts/       BaseLayout (SEO + theme), LegalLayout
  lib/           Blog helpers
  pages/         Routes
  scripts/       Small client-side scripts (dropdowns, theme controls)
  styles/        global.css (Tailwind + tokens)
```

The map imagery in the visuals is generated SVG (`SatelliteScene.astro`), not satellite data, so there are no image assets to license. Swap in real screenshots whenever you have them.
