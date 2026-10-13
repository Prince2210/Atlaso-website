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
  // Keep in sync with `site` in astro.config.mjs.
  url: 'https://atlaso.ai',
  // Where "Sign in" points. Replace with the real app URL when it exists.
  appUrl: '#',
  email: {
    sales: 'sales@atlaso.ai',
    support: 'support@atlaso.ai',
    press: 'press@atlaso.ai',
    careers: 'careers@atlaso.ai',
    security: 'security@atlaso.ai',
    privacy: 'privacy@atlaso.ai',
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

export const product = {
  name: 'Atlaso Lens',
  shortName: 'Lens',
  version: '2.0',
  tagline: 'The AI copilot for planet-scale imagery',
  description:
    'Detect, monitor and query anything on Earth — across optical, radar, aerial and drone imagery — from a single AI-native workspace and API.',
} as const;
