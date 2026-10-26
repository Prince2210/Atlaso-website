import { services } from '../data/services';

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem =
  | { label: string; href: string }
  | { label: string; children: NavLink[] };

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    children: services.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
      description: s.summary,
    })),
  },
  { label: 'For GIS firms', href: '/partners' },
  { label: 'How we work', href: '/#process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Services',
    links: [...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })), { label: 'All services', href: '/services' }],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'For GIS firms', href: '/partners' },
      { label: 'Data handling', href: '/security' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];
