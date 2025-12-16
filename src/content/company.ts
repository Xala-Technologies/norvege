import type { ICompanyInfo, ICompanyMetrics, ITimelineItem, ITeamMember } from "./types";

export const companyInfo: ICompanyInfo = {
  name: "Norvege Minerals",
  legalName: "NORVEGE MINERALS AS",
  orgNumber: "[Company Number]",
  address: {
    street: "[Street Address]",
    postalCode: "[Postal Code]",
    city: "Oslo",
    country: "Norway",
  },
  contact: {
    email: "contact@norvegeminerals.no",
    phone: "[Phone Number]",
  },
  description:
    "Norwegian exploration company focused on sustainable mineral development and critical minerals for the energy transition.",
};

export const companyMetrics: ICompanyMetrics[] = [
  {
    number: "18",
    label: "Mining Licenses",
    description: "Rare Earths • Phosphate • Graphite",
  },
  {
    number: "179",
    label: "km² Exploration Area",
    description: "Total license area",
  },
  {
    number: "70",
    label: "Elements Analyzed",
    description: "Exploration targets",
  },
  {
    number: "50+",
    label: "Historic Mines",
    description: "Documented workings dating back to 1760",
  },
];

export const companyTimeline: ITimelineItem[] = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Company founded with focus on critical minerals",
  },
  {
    year: "2021",
    title: "First Licenses Acquired",
    description: "Acquired first exploration licenses in Nordfjord region",
  },
  {
    year: "2022",
    title: "Portfolio Expansion",
    description: "Expanded portfolio to 15+ licenses across Norway",
  },
  {
    year: "2023",
    title: "Advanced Exploration",
    description: "Initiated advanced exploration programs",
  },
  {
    year: "2024",
    title: "Ongoing Development",
    description: "Ongoing exploration and resource definition",
  },
];

export const teamMembers: ITeamMember[] = [
  {
    name: "John Doe",
    role: "CEO",
    bio: "20+ years in mining and exploration",
  },
  {
    name: "Jane Smith",
    role: "CFO",
    bio: "Expert in mining finance and capital markets",
  },
  {
    name: "Erik Hansen",
    role: "Chief Geologist",
    bio: "Leading Norwegian exploration geologist",
  },
];
