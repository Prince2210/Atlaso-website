import { features } from '../config/site';

export type Plan = {
  name: string;
  description: string;
  /** Monthly price in USD; `null` for custom pricing. */
  monthly: number | null;
  /** Effective monthly price when billed annually. */
  annual: number | null;
  cta: { label: string; href: string };
  highlighted?: boolean;
  includesLabel: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'For small teams getting started with geospatial AI on a focused area.',
    monthly: 499,
    annual: 399,
    cta: { label: 'Start a pilot', href: '/demo?plan=starter' },
    includesLabel: 'Includes',
    features: [
      'Up to 500 km² monitored',
      'Monthly revisits',
      '10 pre-trained models',
      '3 seats',
      'GeoJSON & CSV exports',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    description: 'For teams running geospatial insight across regions and workflows.',
    monthly: 1990,
    annual: 1590,
    cta: { label: 'Start a pilot', href: '/demo?plan=growth' },
    highlighted: true,
    includesLabel: 'Everything in Starter, plus',
    features: [
      'Up to 10,000 km² monitored',
      'Weekly revisits + SAR fusion',
      'All 40+ pre-trained models',
      'Ask in plain language',
      features.developers ? 'Alerts, webhooks & API (100k calls/mo)' : 'Alerts via email, Slack & Teams',
      '15 seats · priority support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For organizations with large footprints, custom models or strict requirements.',
    monthly: null,
    annual: null,
    cta: { label: 'Contact sales', href: '/contact?topic=sales' },
    includesLabel: 'Everything in Growth, plus',
    features: [
      'Unlimited area & daily revisits',
      'Custom model fine-tuning',
      'SSO/SAML, SCIM & audit logs',
      'Private VPC or on-prem deployment',
      'Data residency (US, EU, IN)',
      '99.9% SLA · dedicated success team',
    ],
  },
];

type Cell = boolean | string;
export const comparison: { group: string; rows: { feature: string; values: [Cell, Cell, Cell] }[] }[] = [
  {
    group: 'Coverage & data',
    rows: [
      { feature: 'Monitored area', values: ['500 km²', '10,000 km²', 'Unlimited'] },
      { feature: 'Revisit frequency', values: ['Monthly', 'Weekly', 'Up to daily'] },
      { feature: 'Optical imagery (10 m – 50 cm)', values: [true, true, true] },
      { feature: 'SAR (all-weather) fusion', values: [false, true, true] },
      { feature: 'Very-high-res tasking (30 cm)', values: ['Add-on', 'Add-on', true] },
      { feature: 'Bring your own imagery', values: [false, true, true] },
    ],
  },
  {
    group: 'AI & analysis',
    rows: [
      { feature: 'Pre-trained models', values: ['10', '40+', '40+'] },
      { feature: 'Change detection', values: [true, true, true] },
      { feature: 'Ask in plain language', values: [false, true, true] },
      { feature: 'Custom model fine-tuning', values: [false, 'Add-on', true] },
      { feature: 'Historical archive analysis', values: ['1 year', '5 years', 'Full archive'] },
    ],
  },
  {
    group: 'Integrations',
    rows: [
      { feature: 'Exports (GeoJSON, CSV)', values: [true, true, true] },
      { feature: 'GeoParquet, COG, OGC tiles', values: [false, true, true] },
      ...(features.developers
        ? [
            { feature: 'REST API & SDKs', values: [false, '100k calls/mo', 'Custom'] as [Cell, Cell, Cell] },
            { feature: 'Alerts & webhooks', values: ['Email', true, true] as [Cell, Cell, Cell] },
          ]
        : [{ feature: 'Alerts (email, Slack, Teams)', values: ['Email', true, true] as [Cell, Cell, Cell] }]),
    ],
  },
  {
    group: 'Security & support',
    rows: [
      { feature: 'Seats', values: ['3', '15', 'Unlimited'] },
      { feature: 'SSO / SAML & SCIM', values: [false, false, true] },
      { feature: 'Audit logs', values: [false, true, true] },
      { feature: 'Deployment', values: ['Cloud', 'Cloud', 'Cloud, VPC or on-prem'] },
      { feature: 'Support', values: ['Email', 'Priority', 'Dedicated team + SLA'] },
    ],
  },
];

export const pricingFaq = [
  {
    q: 'How is area calculated?',
    a: 'Area is the total size of your areas of interest that are actively monitored in a billing period. Overlapping areas are only counted once, and one-off historical analyses draw from a separate credit balance.',
  },
  {
    q: 'Is imagery included in the price?',
    a: 'Yes. Plans include analysis-ready imagery from our open and commercial provider network at the listed resolutions. Very-high-resolution tasking is available as an add-on or included in Enterprise.',
  },
  {
    q: 'Can I try it before committing?',
    a: 'Every plan starts with a 14-day pilot on your own area of interest, with a solutions engineer to help you set up models and alerts. No credit card required.',
  },
  {
    q: features.developers ? 'What happens if I exceed my area or API limits?' : 'What happens if I exceed my area limit?',
    a: `We’ll notify you as you approach a limit. You can upgrade at any time, or pay for overage at a transparent per-km²${features.developers ? ' and per-call' : ''} rate — we never pause monitoring without warning.`,
  },
  {
    q: 'Do you offer discounts for nonprofits, research or the public sector?',
    a: 'Yes. We offer special pricing for nonprofits, academic research and government agencies. Contact our team to learn more.',
  },
];
