# Atlaso website

Website for **Atlaso**, a utility GIS modernisation services company: Geometric Network to Utility Network migration, GIS data maintenance, web GIS apps (ArcGIS Maps SDK for JavaScript, Experience Builder, OpenLayers, Leaflet) and an open-source option (GeoServer, PostGIS). Built with [Astro](https://astro.build) 7 and [Tailwind CSS](https://tailwindcss.com) 4. Fully static, responsive, with light, dark and system themes.

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
| `/` | Home: hero with network illustration, why now, services, ArcGIS vs open source, process, partners, data handling, FAQ |
| `/services`, `/services/[slug]` | Services overview + one generated page per service |
| `/partners` | White-label delivery for GIS consultancies and Esri partners |
| `/about` | Who we are and how we work |
| `/contact` | General contact form |
| `/book-a-call` | Scoping-call request form (prefills from `?topic=<service slug>&org=<organisation type>`) |
| `/security` | How we handle client network data |
| `/privacy`, `/terms` | Legal pages |
| `404` | Not-found page |

## Changing content

| What | Where |
| --- | --- |
| Brand name, legal name, emails, social links, form endpoint | `src/config/site.ts` |
| Header & footer navigation | `src/config/navigation.ts` |
| Services (drive the nav, `/services`, each `/services/[slug]` page and the form topics) and the engagement process | `src/data/services.ts` |
| Privacy policy / terms | `src/pages/privacy.md`, `src/pages/terms.md` |

The site deliberately has no customer logos, testimonials, case studies or metrics. Add them only once they are real and you have the client's permission to name them.

### Forms

The contact and scoping-call forms validate in the browser. With `formEndpoint` empty in `src/config/site.ts`, a submit only shows a simulated success message. To receive submissions, set `formEndpoint` to any URL that accepts a JSON `POST`, such as Formspree, Basin or your own API.

### Before launch

- Set `formEndpoint` so form submissions reach you.
- Make sure `hello@atlaso.co.in` and `privacy@atlaso.co.in` exist, or change them in `src/config/site.ts`.
- Set `legalName` to the registered company name once there is one.
- Replace the `social` links (currently `#`, which hides them).
- Check that every practice on `/security` matches what you actually do, since clients may hold you to it.
- Have counsel review the privacy policy and terms.
- Add a 1200×630 social image and pass it to `BaseLayout` via the `image` prop.

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
    ui/          Primitives (Button, Logo, theme controls, …)
    visuals/     NetworkMap: an illustrative SVG water network (not real data)
  config/        Site and navigation config
  data/          Services and process content as typed data
  layouts/       BaseLayout (SEO + theme), LegalLayout
  pages/         Routes
  scripts/       Small client-side scripts (dropdowns, theme controls)
  styles/        global.css (Tailwind + tokens)
```
