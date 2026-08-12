export type ServiceCategory = 
  | 'Business Website Design' 
  | 'Social Media Flyer & Marketing Design' 
  | 'Short-Form Video & Social Media Content';

export type PortfolioCategory = 'all' | 'websites' | 'flyers' | 'videos';

export interface ServiceItem {
  id: string;
  title: ServiceCategory;
  shortDescription: string;
  targetClients: string[];
  keyBenefits: string[];
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'websites' | 'flyers' | 'videos';
  badgeLabel: 'Demo Project' | 'Sample Design' | 'Sample Video';
  description: string;
  imageUrl: string;
  videoUrl?: string;
  demoUrl?: string;
  tags: string[];
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}

export interface QualificationItem {
  id: string;
  title: string;
  description?: string;
  isPlaceholder: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  businessName: string;
  serviceNeeded: ServiceCategory;
  message: string;
}
