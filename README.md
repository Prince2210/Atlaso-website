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
| `/pricing` | Plans with monthly/annual toggle, comparison table, add-ons, FAQ |
| `/developers` | API, SDKs, quickstart, endpoints |
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

- Set the production domain in **both** `astro.config.mjs` (`site`) and `src/config/site.ts` (`url`), and in `public/robots.txt`.
- Replace `appUrl` and the `social` links (currently `#`) in `src/config/site.ts`.
- Replace placeholder customers, testimonials, metrics, compliance claims and team members with real ones.
- Have counsel review the privacy policy and terms.
- Add a 1200×630 social image and pass it to `BaseLayout` via the `image` prop.

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
