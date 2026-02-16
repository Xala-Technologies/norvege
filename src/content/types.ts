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

/**
 * Project Data Room Type Definitions
 * Comprehensive interfaces for structured project data from investor presentations
 */

export type ConfidenceTag = "historic" | "conceptual" | "measured" | "indicated" | "inferred";
export type ComplianceTag = "non-JORC" | "non-PERC" | "JORC" | "PERC" | "NI43-101";
export type MetricUnit =
  | "Mt"
  | "kt"
  | "t"
  | "oz"
  | "koz"
  | "km²"
  | "m³"
  | "USD"
  | "NOK"
  | "g/t"
  | "%"
  | "ppm";

export interface IMetric {
  id: string;
  label: string;
  value?: number;
  valueMin?: number;
  valueMax?: number;
  unit: MetricUnit;
  confidenceTag: ConfidenceTag;
  complianceTag: ComplianceTag;
  description?: string;
  source?: string;
  notes?: string;
}

export interface ITimelineGate {
  id: string;
  gateNumber: number;
  gateName: string;
  targetDate: string; // e.g., "2026 H1", "2026 H2", "2027"
  status: "planned" | "in-progress" | "completed" | "on-hold";
  description: string;
  keyActions: string[];
  deliverables: string[];
  decisionCriteria?: string[];
}

export interface IFundingProgram {
  id: string;
  programName: string;
  organization: string; // e.g., "Forskningsrådet", "Innovation Norway", "Eksfin"
  stage: "exploration" | "pilot" | "demonstration" | "development" | "construction";
  maxFundingPercentage: number; // e.g., 50, 40, 70
  fundingType: "grant" | "loan" | "guarantee" | "debt";
  description: string;
  eligibilityCriteria?: string[];
  applicationStatus?: "eligible" | "applied" | "approved" | "pending";
}

export interface IDisclaimer {
  id: string;
  type: "forward-looking" | "non-compliant" | "conceptual" | "illustrative" | "no-resources";
  title: string;
  text: string;
  isRequired: boolean;
}

export interface IAttachment {
  id: string;
  name: string;
  fileName: string;
  filePath: string; // Path in public/ directory
  fileSize?: number; // bytes
  mimeType: string;
  version?: string;
  uploadedAt: string; // ISO date string
  description?: string;
  isSourceDocument: boolean; // True for the original PDF
}

export interface IInvestmentThesis {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  order: number;
}

export interface IMetalExposure {
  metal: string; // "Cu", "Zn", "Ag", "Au", "S", "Pb"
  containedMin?: number;
  containedMax?: number;
  unit: MetricUnit;
  gradeMin?: number;
  gradeMax?: number;
  gradeUnit: "g/t" | "%" | "ppm";
  confidenceTag: ConfidenceTag;
  complianceTag: ComplianceTag;
  notes?: string;
}

export interface IComparableAsset {
  id: string;
  name: string;
  location: string;
  maturityStage: "pre-jorc" | "restart" | "district-scale" | "production";
  gateMapping?: {
    geologicalConfidence: boolean;
    economicValidation: boolean;
    districtValidation: boolean;
  };
  notes?: string;
}

export interface IProjectDataRoom {
  projectSlug: string; // Links to IProject.slug
  projectName: string;
  companyName: string;

  // Basic Project Info
  locationCountry: string;
  depositType: string; // e.g., "VMS (Volcanic Massive Sulphide)"
  commoditySet: string[]; // e.g., ["Cu", "Zn", "Au", "Ag", "Pb", "S"]
  projectType: string; // e.g., "Brownfield restart + resource growth"
  historicProductionPeriod?: string; // e.g., "1936–1986"
  historicMinedTonnes?: IMetric;
  licenseInfo: {
    licenseNumber?: string;
    licenseName?: string;
    areaKm2?: number;
    awardedDate?: string;
  };

  // Investment Thesis
  investmentThesis: IInvestmentThesis[];

  // Funding Pathway
  fundingPrograms: IFundingProgram[];

  // Development Plan
  developmentGates: ITimelineGate[];

  // Economics (Conceptual)
  economics: {
    remainingTonnesConceptual?: IMetric;
    inSituValuePerTonne?: IMetric;
    NSRProxyPerTonne?: IMetric;
    historicMinedMaterialInSituValue?: IMetric;
    totalMineralisedSystemInSitu?: IMetric;
    isConceptual: boolean;
    isNonJORC: boolean;
  };

  // Metal Exposure
  metalExposure: IMetalExposure[];

  // Gold Context
  goldContext?: {
    baseCase?: IMetric;
    upside?: IMetric;
    scenarios?: Array<{
      scenario: string;
      sulphideTonnageMt: number;
      auGradeGt: number;
      containedAu: IMetric;
      indicativeValue?: IMetric;
    }>;
  };

  // Comparables
  comparables?: {
    description: string;
    assets: IComparableAsset[];
    note: string; // e.g., "Illustrative-only. Market peers shown to demonstrate consistent re-rating path."
  };

  // Disclaimers
  disclaimers: IDisclaimer[];

  // Attachments
  attachments: IAttachment[];

  // Metadata
  lastUpdated: string; // ISO date string
  dataQualityNotes?: string; // Internal notes about data completeness
}
