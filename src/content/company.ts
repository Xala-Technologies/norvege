import type { ICompanyInfo, ICompanyMetrics, ITimelineItem, ITeamMember } from "./types";

export const companyInfo: ICompanyInfo = {
  name: "Norvege Minerals",
  legalName: "NORVEGE MINERALS AS",
  orgNumber: "[Company Number]",
  address: {
    street: "Morellveien 26B",
    postalCode: "3228",
    city: "SANDEFJORD",
    country: "Norway",
  },
  contact: {
    email: "contact@norvegeminerals.no",
    phone: "[Phone Number]",
  },
  description:
    "Norvege Minerals AS explores for and documents valuable minerals for extraction. The company's vision is to become a significant player in responsible mining in Norway.",
};

export const companyMetrics: ICompanyMetrics[] = [
  {
    number: "72",
    label: "Exploration Licenses",
    description: "Active exploration licenses across Norway",
  },
  {
    number: "2,400",
    label: "km² Licensed Area",
    description: "Total licensed exploration area",
  },
  {
    number: "31",
    label: "Viable Finds",
    description: "Viable finds discovered so far",
  },
  {
    number: "1,200",
    label: "Billion NOK Est. Value",
    description: "Estimated mineral value across our portfolio",
  },
  {
    number: "11",
    label: "Significant REE Finds",
    description: "Significant Rare Earth Element discoveries",
  },
  {
    number: "8",
    label: "Public Partnerships",
    description: "Strategic public collaborations",
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
    title: "Major Discoveries",
    description:
      "Significant REE finds including Snøfjell deposit with 350,000 tonnes ore documented",
  },
  {
    year: "2025",
    title: "Mine Water Project Launch",
    description:
      "Launch of innovative Malm Mine Water Resource Project utilizing 7-10 million m³ of ion-rich mine water",
  },
  {
    year: "2026+",
    title: "Production & Growth",
    description: "Targeting production start and continued expansion of exploration portfolio",
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
