import type { IProject } from "./types";

export const projects: IProject[] = [
  {
    slug: "snoefjell",
    name: "Snøfjell Mines",
    region: "Norway",
    country: "Norway",
    stage: "Advanced Exploration",
    licenses: 27,
    area: "270 km²",
    minerals: ["Beryllium", "Rubidium", "Niobium", "Zirconium", "Yttrium", "Uranium", "Light REEs"],
    priority: "High",
    description:
      "45 drillcores document 350,000 tonnes of ore in 5 meter height, with an average of 1.8% Beryllium. Contains very interesting values for light REEs including Rubidium (Rb), Niobium (Nb), Zirconium (Zr), Uranium (U), and Yttrium (Y).",
    overview:
      "Snøfjell Deposit represents one of the most significant Rare Earth Element discoveries in Norway. 45 drillcores document 350,000 tonnes of ore in 5 meter height, with an average of 1.8% Beryllium content. The deposit shows exceptional concentrations of light Rare Earth Elements.",
    geology:
      "The deposit contains exceptional concentrations of Beryllium (1.8% average) along with significant light Rare Earth Elements. Element analysis shows: Nb (36-293 ppm), Zr (360-7,733 ppm), Y (64-644 ppm), Rb (387-1,026 ppm), Ce (142-346 ppm), La (54-107 ppm), U (18-149 ppm), Th (37-278 ppm), and other trace elements.",
    exploration:
      "Proven in-situ value of $5.4 Billion USD (5,400 MUSD). The deposit represents a strategic resource for Europe's green transition and technological independence. Estimated value: 4,849 MUSD.",
    coverage: "350,000 Tonnes Ore Documented | 270 km² Licensed Area",
  },
  {
    slug: "malm-fosdalen",
    name: "Malm Mines",
    region: "Fosdalen",
    country: "Norway",
    stage: "Resource Definition",
    licenses: 4,
    area: "40 km²",
    minerals: ["Cerium", "Gold", "Zinc", "Copper", "Cobalt", "Nickel", "Iron"],
    priority: "High",
    description:
      "Historic mining district (1906-1997) producing iron, copper, and sulfur. Home to the revolutionary Mine Water Resource Project. We have identified viable deposits of Cerium at levels never observed in Norway before, along with Gold, Zinc, Copper, Nickel, and Cobalt.",
    overview:
      "The Malm Mine District represents 20,000 man-years of mining history dating back to 1906. Originally operated by Fosdalens Bergverks A/S, the mines produced over 35 million tonnes of ore during 1906-1997, yielding nearly 16 million tonnes of magnetite concentrate. The district is now the site of our innovative Mine Water Resource Project, revolutionizing mineral extraction.",
    geology:
      "The district hosts multiple deposit types including Cerium (at unprecedented levels in Norway), Gold, Zinc, Copper, Nickel, and Cobalt. The flooded mines contain 7–10 million m³ of ion-rich mine water at 26°C. Historical production included magnetite (50-70% in ore) and cobaltiferous pyrite (~3% with 0.25% Co grades).",
    exploration:
      "Our innovative extraction method utilizes Selective Ion Exchange (IX) and Electrolysis to extract valuable metals from mine water without new excavation. The project is 60% viable with JORC/PERK reporting. Pumping mine water ensures low emissions, low energy consumption, minimal area requirement and natural impact. Mine water is cleaned of heavy metals. Project maturity: Stage 3.",
    coverage: "147 Billion NOK Est. Mineral Value",
  },
  {
    slug: "killingdal",
    name: "Killingdal Mines",
    region: "Norway",
    country: "Norway",
    stage: "Early Exploration",
    licenses: 0,
    area: "TBD",
    minerals: ["REE", "Fergusonite"],
    priority: "High",
    description: "Update soon",
    overview: "Update soon",
    geology: "Update soon",
    exploration: "Update soon",
    coverage: "Update soon",
  },
  {
    slug: "naustdal",
    name: "Naustdal Mines",
    region: "Norway",
    country: "Norway",
    stage: "Early Exploration",
    licenses: 0,
    area: "TBD",
    minerals: ["REE", "Monazite", "Fergusonite"],
    priority: "High",
    description: "Update soon",
    overview: "Update soon",
    geology: "Update soon",
    exploration: "Update soon",
    coverage: "Update soon",
  },
  {
    slug: "lergruvbakken",
    name: "Lergruvbakken",
    region: "Røros Mining District",
    country: "Norway",
    stage: "Active Exploration",
    licenses: 1,
    area: "10 km²",
    minerals: ["Zinc", "Copper", "Lead", "Silver", "Pyrite"],
    priority: "High",
    description:
      "A Pyrite-Zinc deposit with original reserves of ~940,000 tonnes. Primary commodities include Zinc (5.5%), Copper (0.45%), Lead (0.25%), and Silver (10 ppm). Mining took place in the 1970s and ceased in 1977.",
    overview:
      "Lergruvbakken is part of the historic Røros mining district and was one of the later small underground mines. Mining at Lergruvbakken took place in the 1970s and ceased when the company went into bankruptcy in 1977. The deposit is described in NGU records as a pyrite-zinc type deposit, with zinc as the primary commodity.",
    geology:
      "The deposit consists of several thin ore plates (~0.6 m thick) covering an area roughly 850 × 100–300 m, with stope heights historically assumed ~1.7 m. Original reserve estimate records ~940,000 tonnes of ore, whereof 450,000 tonnes were produced, leaving 490,000 tonnes of ore remaining. Pyrite (Fe-sulphide) is the dominant sulphide gangue/mineral.",
    exploration:
      "Indicated in-situ value: $376 Million USD (376 MUSD). Regulated industrial area for mining: 52,200 m². Gravimetric and magnetic methods indicate significantly larger volumes than the original reserve estimate. The deposit benefits from the region's extensive mining history and established infrastructure.",
    coverage: "$376 Million USD Indicated Value | 52,200 m² Regulated Area",
  },
];

export function getProjectBySlug(slug: string): IProject | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
