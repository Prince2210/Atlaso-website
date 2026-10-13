export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'We replaced a patchwork of scripts and manual QA with one workflow. Analysts who had never opened a GIS tool are now answering questions about our assets on their own.',
    name: 'Hannah Okoye',
    role: 'Director of Asset Intelligence',
    company: 'Terrafirm Energy',
    initials: 'HO',
    color: 'bg-amber-500',
  },
  {
    quote:
      'The change detection is the real deal. It catches what matters and ignores seasonal noise — our alert volume dropped by 80% while catching more real events.',
    name: 'Tomás Herrera',
    role: 'Head of MRV',
    company: 'Verdant Carbon',
    initials: 'TH',
    color: 'bg-emerald-600',
  },
  {
    quote:
      'After a hurricane we had per-building damage estimates across the portfolio in under a day. That used to take our team three weeks of desk review.',
    name: 'Marcus Lindqvist',
    role: 'VP, Catastrophe Response',
    company: 'Meridian Re',
    initials: 'ML',
    color: 'bg-sky-600',
  },
];

export const customers = [
  'Northwind Agro',
  'Meridian Re',
  'Terrafirm',
  'Bluecoast',
  'Civica',
  'Verdant Carbon',
];
