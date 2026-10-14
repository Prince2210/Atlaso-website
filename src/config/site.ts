/**
 * Central site configuration.
 *
 * Brand, product naming and contact details live here so they can be changed in
 * one place (navigation lives in ./navigation.ts). The product name in particular is a placeholder — update
 * `product` below and it will flow through every page.
 */

export const site = {
  name: 'Atlaso',
  legalName: 'Atlaso Technologies, Inc.',
  tagline: 'Geospatial intelligence, powered by AI',
  description:
    'Atlaso is the geospatial AI platform that turns satellite, aerial and drone imagery into decision-ready insight — detect objects, monitor change and ask questions of the planet in plain language.',
  // Production URL — also used by astro.config.mjs. Keep public/CNAME in sync.
  url: 'https://atlaso.co.in',
  // Where "Sign in" points. Replace with the real app URL when it exists.
  appUrl: '#',
  email: {
    sales: 'sales@atlaso.co.in',
    support: 'support@atlaso.co.in',
    press: 'press@atlaso.co.in',
    careers: 'careers@atlaso.co.in',
    security: 'security@atlaso.co.in',
    privacy: 'privacy@atlaso.co.in',
  },
  social: {
    x: '#',
    linkedin: '#',
    github: '#',
  },
  /**
   * Form submissions. Leave empty to simulate a successful submit (useful while
   * there is no backend), or set to an endpoint that accepts a JSON POST —
   * e.g. a Formspree / Basin URL or your own API route.
   */
  formEndpoint: '',
} as const;

/**
 * Feature flags — switch parts of the site on or off globally, then rebuild/redeploy.
 */
export const features = {
  /**
   * Developer platform: the /developers page, the "For developers" section on the
   * home page, code samples, and API / SDK / webhook mentions in navigation,
   * pricing, product copy, the platform diagram, changelog and contact form.
   * Set to `true` when the public API is ready to launch.
   */
  developers: false,
} as const;

export const product = {
  name: 'Atlaso Lens',
  shortName: 'Lens',
  version: '2.0',
  tagline: 'The AI copilot for planet-scale imagery',
  description: `Detect, monitor and query anything on Earth — across optical, radar, aerial and drone imagery — from a single AI-native workspace${features.developers ? ' and API' : ''}.`,
} as const;
