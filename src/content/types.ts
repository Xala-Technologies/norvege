/**
 * Content Model Type Definitions
 * Strict TypeScript interfaces for all site content
 */

export interface ICompanyMetrics {
  number: string;
  label: string;
  description: string;
}

export interface ITimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface IProject {
  slug: string;
  name: string;
  region: string;
  country: string;
  stage:
    | "Early Exploration"
    | "Active Exploration"
    | "Advanced Exploration"
    | "Resource Definition"
    | "Development";
  licenses: number;
  area: string;
  minerals: string[];
  priority: "High" | "Medium" | "Low";
  description: string;
  overview?: string;
  geology?: string;
  exploration?: string;
  timeline?: ITimelineItem[];
  coverage?: string;
}

export interface IResourceLink {
  title: string;
  href: string;
  type: "pdf" | "link" | "external";
  date?: string;
  description?: string;
}

export interface ILegalPage {
  slug: string;
  title: string;
  content: string;
  lastUpdated?: string;
}

export interface IFAQItem {
  question: string;
  answer: string;
}

export interface ITeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  email?: string;
  category?: "Management" | "Board" | "Advisory";
}

export interface ICompanyInfo {
  name: string;
  legalName: string;
  orgNumber: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  contact: {
    email: string;
    phone?: string;
  };
  description: string;
}

export interface IREEDiscovery {
  mineral: string;
  elements: string[];
  locations: string[];
}

export interface IPartnership {
  name: string;
  type: "Public" | "Private" | "Strategic";
  description?: string;
}
