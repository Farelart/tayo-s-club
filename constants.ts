import { ServiceCategory, MembershipTier, NavItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Essence', href: '#essence' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Membership', href: '#membership' },
  { label: 'Corporate', href: '#corporate' },
];

export const SERVICES: ServiceCategory[] = [
  {
    id: 'culinary',
    title: 'Culinary Experiences',
    description: 'Private chefs, exclusive tastings, and gastronomic discoveries.',
    imageUrl: 'https://picsum.photos/id/42/800/600',
  },
  {
    id: 'events',
    title: 'Corporate Events',
    description: 'Bespoke seminars, product launches, and gala dinners.',
    imageUrl: 'https://picsum.photos/id/435/800/600',
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    description: 'Villas, boutique hotels, and private stays.',
    imageUrl: 'https://picsum.photos/id/164/800/600',
  },
  {
    id: 'arts',
    title: 'Exclusive Arts Viewings',
    description: 'Private gallery tours and meetings with artists.',
    imageUrl: 'https://picsum.photos/id/452/800/600',
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Management',
    description: 'Personal shopping, wellness, and daily assistance.',
    imageUrl: 'https://picsum.photos/id/338/800/600',
  },
  {
    id: 'executive',
    title: 'Executive Support',
    description: 'Administrative assistance and business travel management.',
    imageUrl: 'https://picsum.photos/id/3/800/600',
  },
  {
    id: 'gifting',
    title: 'Luxury Gifting',
    description: 'Sourcing rare items and curated gift boxes.',
    imageUrl: 'https://picsum.photos/id/366/800/600',
  },
  {
    id: 'destination',
    title: 'Destination Experience',
    description: 'Tailored travel to Benin and beyond.',
    imageUrl: 'https://picsum.photos/id/28/800/600',
  },
];

export const MEMBERSHIPS: MembershipTier[] = [
  {
    name: 'Privilege',
    description: 'Essential access for the modern executive.',
    features: [
      'Dedicated Concierge Support',
      'Priority Restaurant Reservations',
      'Access to Partner Events',
      'Standard Response Time (24h)',
      'Digital Membership Card'
    ],
    isPrimary: false,
  },
  {
    name: 'Signature',
    description: 'The ultimate bespoke lifestyle management.',
    features: [
      '24/7 Dedicated Concierge Team',
      'Exclusive "Money-Can\'t-Buy" Experiences',
      'VIP Airport Assistance & Transfers',
      'Priority Booking for all Services',
      'Immediate Response Time',
      'Personalized Lifestyle Audit'
    ],
    isPrimary: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Tayo's Club transformed our corporate retreat in Cotonou into an unforgettable experience.",
    author: "Jean-Paul K.",
    role: "CEO, FinTech Africa"
  },
  {
    text: "The level of detail in their culinary experiences is unmatched. A true asset for my lifestyle.",
    author: "Amina D.",
    role: "Art Collector"
  }
];