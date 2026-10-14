import { features } from './site';
import { solutions } from '../data/solutions';

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem =
  | { label: string; href: string }
  | { label: string; children: NavLink[] };

// Items gated behind a feature flag are filtered out below when the flag is off.
const developerNav: NavItem[] = features.developers ? [{ label: 'Developers', href: '/developers' }] : [];
const pricingNav: NavItem[] = features.pricing ? [{ label: 'Pricing', href: '/pricing' }] : [];

export const mainNav: NavItem[] = [
  { label: 'Product', href: '/product' },
  {
    label: 'Solutions',
    children: solutions.map((s) => ({
      label: s.name,
      href: `/solutions/${s.slug}`,
      description: s.summary,
    })),
  },
  ...developerNav,
  ...pricingNav,
  {
    label: 'Company',
    children: [
      { label: 'About', href: '/about', description: 'Our mission and the team behind it' },
      { label: 'Careers', href: '/careers', description: 'Help us make the planet legible' },
      { label: 'Blog', href: '/blog', description: 'Research, guides and product news' },
      { label: 'Changelog', href: '/changelog', description: 'What we shipped recently' },
      { label: 'Contact', href: '/contact', description: 'Talk to sales, support or press' },
    ],
  },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '/product' },
      { label: 'Capabilities', href: '/product#capabilities' },
      { label: 'Model catalog', href: '/product#models' },
      ...(features.pricing ? [{ label: 'Pricing', href: '/pricing' }] : []),
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Solutions',
    links: solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
  },
  ...(features.developers
    ? [
        {
          title: 'Developers',
          links: [
            { label: 'API overview', href: '/developers' },
            { label: 'Quickstart', href: '/developers#quickstart' },
            { label: 'SDKs', href: '/developers#sdks' },
            { label: 'Security', href: '/security' },
          ],
        },
      ]
    : []),
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of service', href: '/terms' },
      { label: 'Trust & security', href: '/security' },
    ],
  },
];
