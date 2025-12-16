import type { IProject, ITimelineItem } from "./types";

export const projects: IProject[] = [
  {
    slug: "skrattasen",
    name: "Skrattås-Byafossen",
    region: "Steinkjer, Trøndelag",
    country: "Norway",
    stage: "Active Exploration",
    licenses: 7,
    area: "51 km²",
    minerals: ["Zinc", "Lead", "Copper", "Iron", "Silver", "Gold", "REE"],
    priority: "High",
    description:
      "Primary Focus Area. Exceptional grades: 28.8% Zn, 539 ppm Ag, 10 ppm Au. Historic production of 34% Zn ore. Mineralization continues below 80m depth.",
    overview:
      "Skrattås-Byafossen represents our primary focus area with exceptional grades and proven historic production. The project covers 51 km² in the mineral-rich Steinkjer region of Trøndelag County.",
    geology:
      "The project area hosts volcanogenic massive sulfide (VMS) deposits with exceptional zinc grades. Historic production records show 34% Zn ore, and current exploration has identified mineralization continuing below 80m depth.",
    exploration:
      "Active exploration program targeting high-grade zinc, lead, copper, and precious metals. The area includes the Gruvfjellet mountain plateau, a historic mining district with proven mineralization.",
    coverage: "7 exploration licenses covering 51 km² in Steinkjer, Trøndelag",
  },
  {
    slug: "gaulstad-mokk",
    name: "Gaulstad/Mokk",
    region: "Steinkjer, Trøndelag",
    country: "Norway",
    stage: "Resource Definition",
    licenses: 11,
    area: "128 km²",
    minerals: ["Copper", "Zinc", "Nickel", "Iron", "Silver", "Gold", "REE"],
    priority: "High",
    description:
      "Historic Mining District. Mining history from 1760. Over 50 documented mines with confirmed 7.95% Cu. Covers the Gruvfjellet mountain plateau with proven mineralization.",
    overview:
      "Gaulstad/Mokk is a historic mining district with over 50 documented mines dating back to 1760. The project covers 128 km² and includes the Gruvfjellet mountain plateau, a proven mineral district.",
    geology:
      "The district hosts multiple deposit types including copper-rich VMS deposits with confirmed 7.95% Cu grades. The area shows significant potential for copper, zinc, nickel, and associated precious metals.",
    exploration:
      "Resource definition activities are ongoing, building on the extensive historic mining data. The project benefits from well-documented historic production and modern exploration techniques.",
    coverage: "11 exploration licenses covering 128 km² in Steinkjer, Trøndelag",
  },
];

export function getProjectBySlug(slug: string): IProject | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
