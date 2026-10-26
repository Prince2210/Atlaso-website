/**
 * Central site configuration.
 *
 * Brand and contact details live here so they can be changed in one place
 * (navigation lives in ./navigation.ts, service content in ../data/services.ts).
 */

export const site = {
  name: 'Atlaso',
  // Shown in the footer copyright and the legal pages. Replace with the registered company name once it exists.
  legalName: 'Atlaso',
  tagline: 'Utility GIS modernisation',
  description:
    'Atlaso migrates utility GIS data from the Geometric Network to the ArcGIS Utility Network, then builds the web GIS apps your crews and planners use — on ArcGIS or an open-source stack.',
  // Production URL — also used by astro.config.mjs. Keep public/CNAME in sync.
  url: 'https://atlaso.co.in',
  email: {
    hello: 'hello@atlaso.co.in',
    privacy: 'privacy@atlaso.co.in',
  },
  social: {
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
