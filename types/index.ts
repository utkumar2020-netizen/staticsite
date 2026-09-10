export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  whatWeProvide: string[];
  whoNeedsIt: string[];
  typicalDeliverables: string[];
  technologyExamples: string[];
  startingPrice: string;
  expectedTimeline: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  businessProblem: string;
  solution: string;
  features: string[];
  technologyStack: string[];
  results: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  isClientProject: boolean;
  isDemo: boolean;
  featuredImageUrl: string;
  galleryImages: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  bio: string;
  imageUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Pricing {
  serviceName: string;
  startingPrice: string;
  features: string[];
}