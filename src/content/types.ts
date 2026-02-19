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
  // IMPORTANT: When adding or updating content, ensure all language-specific fields (_no) are populated
  slug: string;
  name: string;
  name_no?: string;
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
  description_no?: string;
  overview?: string;
  overview_no?: string;
  geology?: string;
  geology_no?: string;
  exploration?: string;
  exploration_no?: string;
  timeline?: ITimelineItem[];
  timeline_no?: ITimelineItem[];
  coverage?: string;
  coverage_no?: string;
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
  gateName_no?: string;
  targetDate: string; // e.g., "2026 H1", "2026 H2", "2027"
  status: "planned" | "in-progress" | "completed" | "on-hold";
  description: string;
  description_no?: string;
  keyActions: string[];
  keyActions_no?: string[];
  deliverables: string[];
  deliverables_no?: string[];
  decisionCriteria?: string[];
  decisionCriteria_no?: string[];
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
  applicationStatus?: "eligible" | "applied" | "approved" | "pending" | "submitted";
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
  title_no?: string;
  description: string;
  description_no?: string;
  keyPoints: string[];
  keyPoints_no?: string[];
  order: number;
}

export interface IMetalExposure {
  metal: string; // "Cu", "Zn", "Ag", "Au", "S", "Pb"
  containedMin?: number;
  containedMax?: number;
  unit: MetricUnit;
  gradeMin?: number;
  gradeMax?: number;
  gradeUnit?: "g/t" | "%" | "ppm";
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

/**
 * Strategy Deck Type Definitions
 * For "Onshore vs Deep-Sea VMS Exploration" and similar company-level strategy documents
 */

export interface IDeckSection {
  id: string;
  title: string;
  body?: string;
  bullets?: string[];
  citations?: string[];
  pageRef: number;
}

export interface IGeologyPrimer {
  pageRef: number;
  ophioliteDefinition: string;
  timingRanges: Array<{ label: string; range: string; pageRef?: number }>;
  tectonicSetting: string;
  vmsFormationSteps: Array<{ title?: string; description: string; pageRef?: number }>;
  typicalMetals: Array<{
    element: string;
    category: "major" | "trace" | "minor" | "oftenEnriched";
  }>;
}

export interface IComparison {
  pageRef: number;
  dsmTraits: string[];
  onshoreTraits: string[];
  dsmTimelineBands?: Array<{ label: string; description?: string }>;
  onshoreTimelineBands?: Array<{ label: string; description?: string }>;
  timelineYears?: string[];
  indicativeLabel?: string;
}

export interface IChartAsset {
  id: string;
  imagePathOrRef: string;
  caption?: string;
  capexMin?: number;
  capexMax?: number;
  opexMin?: number;
  opexMax?: number;
  pageRef?: number;
}

export interface ILicensePortfolioSummary {
  approvedCount: number | null;
  pendingCount: number | null;
  notes: string;
  pageRef?: number;
}

/** Why shift away from Mid-Atlantic Ridge / why onshore Norway (thesis blocks) */
export interface IThesisBlock {
  id: string;
  title: string;
  pageRef: number;
  costDrivers?: string[];
  locationReference?: string;
  depthReference?: string;
  exampleSite?: string;
  sameMineralSystemNote?: string;
  knownDistricts?: string[];
  infrastructurePermittingNote?: string;
  jorcPercNote?: string;
  bullets?: string[];
}

/** Strategy alignment: long-term / bridge / near-term + target metals */
export interface IStrategyAlignment {
  pageRef: number;
  longTerm: string;
  strategicBridge: string;
  nearTerm: string;
  targetMetals: string[];
}

/** Economics benchmark narrative (no invented numbers) */
export interface IEconomicsBenchmark {
  pageRef: number;
  narrativeBullets: string[];
  chartAssetId?: string;
}

/** Closing claims (onshore market-led & proven + NorveGe-specific) */
export interface IClosingClaims {
  pageRef: number;
  generalBullets: string[];
  norvegeBullets: string[];
}

export interface IStrategyDeck {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  authorOrDept: string;
  monthYear: string;
  confidentiality: boolean;
  companyName: string;
  relatedProjectSlug: string;
  topic: string;

  /** Source PDF attachment */
  attachment: {
    fileName: string;
    uploadedAt: string;
    versionTag?: string;
    name?: string;
    filePath?: string;
    isSourceDocument: boolean;
  };

  /** Document-level metadata */
  documentMeta: {
    title: string;
    subtitle?: string;
    authorOrDept: string;
    monthYear: string;
    confidentiality: boolean;
  };

  /** 1) Why shift away from Mid-Atlantic Ridge DSM */
  thesisWhyShiftAway: IThesisBlock;

  /** 2) Why onshore Norway is preferred */
  thesisWhyOnshore: IThesisBlock;

  /** 3) Licensing portfolio (map slide) */
  licensePortfolioSummary: ILicensePortfolioSummary;
  licenseMapExplanation?: string;

  /** 4) Geology education (ophiolite + VMS genesis) */
  geologyPrimer: IGeologyPrimer;

  /** 5) Strategy alignment to Norway/EU critical minerals */
  strategyAlignment: IStrategyAlignment;

  /** 6) Capital & timeline comparison (DSM vs Onshore) */
  comparison: IComparison;

  /** 7) Economics benchmark (narrative + optional chart) */
  economicsBenchmark: IEconomicsBenchmark;

  /** 8) Closing claims */
  closingClaims: IClosingClaims;

  /** Disclaimers / confidentiality */
  disclaimers: string[];

  /** Optional chart assets (e.g. CAPEX/OPEX benchmark image) */
  chartAssets: IChartAsset[];

  lastUpdated: string;
}
