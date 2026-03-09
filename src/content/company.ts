import type {
  ICompanyInfo,
  ICompanyMetrics,
  ITimelineItem,
  ITeamMember,
  IREEDiscovery,
  IPartnership,
} from "./types";

export const companyInfo: ICompanyInfo = {
  name: "Norvegen Group",
  legalName: "NORVEGEN GROUP",
  orgNumber: "[Company Number]",
  address: {
    street: "Trondheim",
    postalCode: "",
    city: "Trondheim",
    country: "Norway",
  },
  contact: {
    email: "contact@norvegengroup.com",
    phone: "[Phone Number]",
  },
  description:
    "Norvegen Group is advancing a strategic portfolio of critical minerals, brownfield mining opportunities, and geothermal energy solutions to support Europe's energy transition and industrial resilience.",
};

export const companyMetrics: ICompanyMetrics[] = [
  {
    number: "140",
    label: "Exploration Licences",
    description:
      "Norvegen Group holds 140 exploration licences across Norway, the second largest license portfolio in the country.",
  },
  {
    number: "~1,400",
    label: "km² Exploration Area",
    description:
      "Approximately 1,400 km² exploration and development land position in multiple mining and mineral deposit districts.",
  },
  {
    number: "31",
    label: "Viable Finds",
    description: "Norve'Ge Minerals has identified 31 economically viable sites.",
  },
  {
    number: "4,885",
    label: "Trillion NOK Est. Value",
    description: "Estimated total value: 4.885.000.000.000 NOK",
  },
  {
    number: "8",
    label: "REE Mineral Types",
    description:
      "Multiple REE discoveries across Norway (Monazite, Bastnäsite, Xenotime, Allanite, Zircon, Fergusonite, Euxenite, Samarskite)",
  },
  {
    number: "3",
    label: "Strategic Partnerships",
    description: "Adterra, Steinkjer Municipality, Steinkjer Utvikling AS",
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

export const futurePlans: ITimelineItem[] = [
  {
    year: "2025-2027",
    title: "Scaling Mineral Extraction",
    description:
      "Scaling up mineral extraction from high-value licensed areas with documented in-situ resources, supported by internal and external geological analysis.",
  },
  {
    year: "2025-2029",
    title: "Geothermal Power Expansion",
    description:
      "Expanding our geothermal-based power production from 1 TWh to 10 TWh annually, enabling energy-integrated mining and long-term operational stability.",
  },
  {
    year: "2025-2029",
    title: "Circular Resource Utilization",
    description:
      "Advancing environmentally responsible mineral recovery from mine water and tailings, pioneering a new standard in circular resource utilization.",
  },
  {
    year: "2025-2029",
    title: "Strategic Partnerships & Growth",
    description:
      "Strengthening strategic partnerships across energy, industry, and finance to prepare for international growth and selective asset monetization.",
  },
];

export const teamMembers: ITeamMember[] = [
  {
    name: "Thorbjørn Sellæg",
    role: "CEO",
    category: "Management",
  },
  {
    name: "Jan Gerard Nordstrom",
    role: "Chairman",
    category: "Board",
  },
  {
    name: "Michael Odell",
    role: "Board Member, Investor",
    category: "Board",
  },
  {
    name: "Adrian Domine",
    role: "Board Member",
    category: "Board",
  },
  {
    name: "Haakon Skar",
    role: "Advisory Board Member",
    category: "Advisory",
  },
  {
    name: "Stian Svendsen",
    role: "Advisory Board Member, Investment Manager",
    category: "Advisory",
  },
];

export const reeDiscoveries: IREEDiscovery[] = [
  {
    mineral: "Monazite",
    elements: ["Cerium (Ce)", "Lanthanum (La)", "Neodymium (Nd)", "Thorium (Th)"],
    locations: ["Naustdal", "Snøfjellet", "Lonevåg"],
  },
  {
    mineral: "Bastnäsite",
    elements: ["Cerium (Ce)", "Lanthanum (La)", "Neodymium (Nd)"],
    locations: ["Snøfjellet", "Gullfreden"],
  },
  {
    mineral: "Xenotime",
    elements: ["Yttrium (Y)", "Dysprosium (Dy)", "Erbium (Er)", "Thulium (Tm)"],
    locations: ["Lonevåg", "Sør-Trøndelag West"],
  },
  {
    mineral: "Allanite",
    elements: ["Cerium (Ce)", "Lanthanum (La)", "Neodymium (Nd)"],
    locations: ["Storeknuten", "Nord-Trøndelag West"],
  },
  {
    mineral: "Zircon (Zirconium)",
    elements: ["Zr (indirect indicator of REE association)"],
    locations: ["Snøfjellet", "Storeknuten"],
  },
  {
    mineral: "Fergusonite",
    elements: ["Yttrium (Y)", "Niobium (Nb)", "Dysprosium (Dy)", "Erbium (Er)"],
    locations: ["Naustdal", "Killingdal"],
  },
  {
    mineral: "Euxenite",
    elements: ["Yttrium (Y)", "Cerium (Ce)", "Neodymium (Nd)", "Uranium (U)"],
    locations: ["Nasafjellet"],
  },
  {
    mineral: "Samarskite",
    elements: ["Samarium (Sm)", "Uranium (U)", "Thorium (Th)"],
    locations: ["Sibirien", "Lonevåg"],
  },
];

export const partnerships: IPartnership[] = [
  {
    name: "Adterra",
    type: "Strategic",
    description: "Strategic partnership for exploration and development",
  },
  {
    name: "Steinkjer Municipality",
    type: "Public",
    description: "Public partnership with Steinkjer Municipality",
  },
  {
    name: "Steinkjer Utvikling AS",
    type: "Public",
    description: "Partnership with Steinkjer Utvikling AS for regional development",
  },
];

export const resourceValuationMethodology = `Resource Valuation Methodology
The in-situ resource estimates presented by Norve'Ge Minerals AS are based on a combination of internal and external assessments. Three experienced in-house geologists, together with one external consultant, have reviewed geological data from the Norwegian Geological Survey (NGU), the national mining registry (Dirmin.no), and historical production reports. Inferred volumes have been modeled using borehole results, geophysical datasets, and conservative assumptions based on documented mineral concentrations. All values represent preliminary in-situ valuations and are intended as indicative figures for exploration and development planning.`;
