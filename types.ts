export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface MembershipTier {
  name: string;
  price?: string;
  description: string;
  features: string[];
  isPrimary: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}