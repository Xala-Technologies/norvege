import type { IResourceLink } from "./types";

export const reportArchive: IResourceLink[] = [
  {
    title: "Annual Report 2023",
    href: "/reports/annual-report-2023.pdf",
    type: "pdf",
    date: "2024-03-15",
    description: "Comprehensive annual report covering operations, financials, and ESG performance",
  },
  {
    title: "Quarterly Report Q4 2023",
    href: "/reports/quarterly-q4-2023.pdf",
    type: "pdf",
    date: "2024-01-20",
    description: "Fourth quarter operational and financial update",
  },
  {
    title: "ESG Report 2023",
    href: "/reports/esg-report-2023.pdf",
    type: "pdf",
    date: "2024-02-10",
    description: "Environmental, Social, and Governance performance report",
  },
];

export const investorResources: IResourceLink[] = [
  {
    title: "Investor Presentation 2024",
    href: "/investor/presentation-2024.pdf",
    type: "pdf",
    date: "2024-03-01",
    description: "Latest investor presentation with company overview and strategy",
  },
  {
    title: "Corporate Fact Sheet",
    href: "/investor/fact-sheet.pdf",
    type: "pdf",
    description: "Quick reference guide to company facts and figures",
  },
];

export const technicalResources: IResourceLink[] = [
  {
    title: "Geological Reports",
    href: "/technical/geological-reports",
    type: "link",
    description: "Access to technical geological documentation",
  },
  {
    title: "Exploration Data",
    href: "/technical/exploration-data",
    type: "link",
    description: "Public exploration data and maps",
  },
];
