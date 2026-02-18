/**
 * Strategy Deck: Onshore vs Deep-Sea VMS Exploration
 * Source: NorveGe Minerals AS – "Why remove focus on mineral exploration along the Mid-Atlantic Ridge?" (Geo | Febr. 2026)
 * Stored as structured data for Data Room. Confidential.
 */

import type { IStrategyDeck } from "./types";

export const strategyDeckFeb2026: IStrategyDeck = {
  id: "strategy-deck-feb2026",
  slug: "onshore-vs-dsm-feb2026",
  title: "Why remove focus on mineral exploration along the Mid-Atlantic Ridge?",
  subtitle:
    "It will be more cost-effective to spend money on exploration for metals and minerals on the Norwegian mainland.",
  authorOrDept: "Geo",
  monthYear: "Febr. 2026",
  confidentiality: true,
  companyName: "NorveGe Minerals AS",
  relatedProjectSlug: "killingdal",
  topic: "Onshore vs Deep-Sea Mining (DSM) capital/economics rationale",

  attachment: {
    fileName: "NorveGe Mineral - Presentation - On-shore explorat_260206_192500.pdf",
    uploadedAt: "2026-02-06T00:00:00.000Z",
    versionTag: "Feb 2026",
    name: "Onshore vs Deep-Sea VMS Exploration (Feb 2026)",
    filePath: "/documents/strategy-deck-feb2026.pdf",
    isSourceDocument: true,
  },

  documentMeta: {
    title: "Why remove focus on mineral exploration along the Mid-Atlantic Ridge?",
    subtitle:
      "It will be more cost-effective to spend money on exploration for metals and minerals on the Norwegian mainland.",
    authorOrDept: "Geo",
    monthYear: "Febr. 2026",
    confidentiality: true,
  },

  thesisWhyShiftAway: {
    id: "thesis-shift-away",
    title: "Why shift away from Mid-Atlantic Ridge DSM",
    pageRef: 1,
    costDrivers: ["distance", "depth", "logistics complexity"],
    locationReference: "Bergen to Mohns Ridge >2000 km",
    depthReference: "metals source at 1500–2000 m water depth",
    exampleSite: "Loki's Castle on Mohns Ridge",
    bullets: [
      "This presentation will focus on mineral exploration in VMS-systems on the Norwegian mainland. VMS = Volcanogenic Massive Sulphide.",
      "In recent years, there has been a lot of focus on mineralization along the Mid-Atlantic Spreading Ridge, which has led us geologists to question why explore for minerals/metals from there when we have the same on mainland Norway.",
      "Such an activity would entail a very large additional cost. The distance between Bergen and the Mohns-ridge (North of Jan Mayen) is more than 2000 km, where the source of the metals lies at a depth of 1500–2000 meters.",
      "The distance alone will make it much more cost-effective to explore for minerals on the Norwegian mainland, in areas such as Killingdal, or in known ophiolite complexes at several locations along the Norwegian coastline.",
    ],
  },

  thesisWhyOnshore: {
    id: "thesis-onshore",
    title: "Why onshore Norway is preferred",
    pageRef: 2,
    sameMineralSystemNote:
      "Same mineral system logic (seabed SMS analogues uplifted to land, framed as VMS).",
    knownDistricts: ["Killingdal", "ophiolite complexes along coastline"],
    infrastructurePermittingNote: "Infrastructure and permitting pathways (as stated in deck).",
    jorcPercNote: "JORC/PERC-aligned development pathway (as stated in deck).",
    bullets: [
      "Same mineral systems (seabed SMS analogues uplifted to land, framed as VMS).",
      "Known districts: Killingdal mentioned + ophiolite complexes along coastline.",
      "Infrastructure + permitting pathways.",
      "JORC/PERC-aligned development pathway.",
    ],
  },

  licensePortfolioSummary: {
    approvedCount: null,
    pendingCount: null,
    notes: "Maps show NorveGe + competitors; pending areas shown in light blue.",
    pageRef: 3,
  },

  licenseMapExplanation:
    "The map to the left shows all the licenses NorveGe Minerals AS has taken out in Norway, where the light blue markings show the number of licenses to be approved by the Directorate of Mineral Management. The dark blue shows the location and number of licenses that have been approved. The map on the right shows where in Norway, NorveGe Minerals and other companies (competitors) have taken out licenses. Areas with light blue markings have not yet been approved but are being processed for approval.",

  geologyPrimer: {
    pageRef: 4,
    ophioliteDefinition:
      "Fragments of oceanic crust formed in arc-shaped basins were pushed onto land (continental crust) during mountain range formation. Ophiolite = fossil sea floor.",
    timingRanges: [
      {
        label: "Mountain range formation",
        range: "Cambrian to Lower Devonian, about 500–405 million years ago",
        pageRef: 4,
      },
      {
        label: "New oceanic crust formation",
        range: "Lower Ordovician (495–485 Ma) through to Ordovician/Silurian transition (443 Ma)",
        pageRef: 4,
      },
    ],
    tectonicSetting:
      "Back-arc basins and island arcs, influenced by an old subducting ocean crust from the ancient Iapetus Ocean.",
    vmsFormationSteps: [
      {
        description:
          "The illustration shows a stepwise development of the uppermost parts of an ophiolite complex, where the formation of VMS systems occur, and is the origin of ore mineralization associated with ophiolite complexes. VMS = Volcanogenic Massive Sulphide deposits.",
        pageRef: 5,
      },
      {
        description:
          "Hydrothermal activity along deep faults, associated with the development of ophiolite complexes, brings sulphide-minerals (metals) to the surface, which here would be an old seafloor. The minerals are deposited in cataclastic units, which are deposited in alternations with massive volcanic units. The volcanic units can be pillow-lava sequences, or massive flow units (Furnes & Alsaker, 2026, in prep.).",
        pageRef: 5,
      },
    ],
    typicalMetals: [
      { element: "Fe", category: "major" },
      { element: "Mg", category: "major" },
      { element: "S", category: "major" },
      { element: "Cu", category: "trace" },
      { element: "Zn", category: "trace" },
      { element: "Mn", category: "trace" },
      { element: "Co", category: "trace" },
      { element: "Ni", category: "trace" },
      { element: "V", category: "minor" },
      { element: "Ag", category: "minor" },
      { element: "Au", category: "minor" },
      { element: "HREE", category: "oftenEnriched" },
    ],
  },

  strategyAlignment: {
    pageRef: 6,
    longTerm: "Deep-Sea Mining (DSM) – state-led",
    strategicBridge:
      "Same mineral systems (SMS → VMS); seabed uplifted onto land; continuity proven by history.",
    nearTerm: "Onshore critical minerals – market-led",
    targetMetals: ["Cu", "Zn", "Co", "Ni", "Au", "Ag", "REEs"],
  },

  comparison: {
    pageRef: 7,
    dsmTraits: ["Multi-$bn upfront systems", "No staged entry", "No operating benchmarks"],
    onshoreTraits: [
      "Phased capital deployment",
      "Brownfield and expansion optionality",
      "Known cost structures",
      "Private capital prefers staged, de-risked paths",
    ],
    timelineYears: ["2026", "2027", "2028–2029"],
    indicativeLabel: "Indicative",
    dsmTimelineBands: [
      { label: "Baseline research" },
      { label: "Pilot exploration / tech validation" },
      { label: "Regulatory framework / dev studies" },
      { label: "Commercial production" },
    ],
    onshoreTimelineBands: [
      { label: "Data validation / restart definition" },
      { label: "JORC alignment / resource definition" },
      { label: "JORC update & restart studies" },
      { label: "Mine development / investment decision" },
    ],
  },

  economicsBenchmark: {
    pageRef: 8,
    narrativeBullets: [
      "Same metals. Radically different capital logic.",
      "Deep-sea mining locks capital in early; Nordic onshore creates value by staying flexible with significantly lower CAPEX and OPEX.",
    ],
    chartAssetId: "economics-benchmark-chart",
  },

  closingClaims: {
    pageRef: 9,
    generalBullets: [
      "Real metals, real economics, real timelines.",
      "Proven infrastructure and permitting pathways.",
      "JORC / PERC-aligned development.",
      "Repeatable CAPEX and OPEX benchmarks.",
      "Compatible with ESG and EU Critical Raw Materials Act.",
      "Near- and medium-term supply capability.",
    ],
    norvegeBullets: [
      "Norve'Ge holds onshore analogues of DSM systems, inside active licences, ready for execution.",
      "Licence portfolio overlaps proven VMS districts.",
      "Targets the same critical metals as DSM: Cu · Zn · Co · Ni · Au · Ag · REEs.",
      "Large land position with district-scale optionality.",
      "Fully aligned with Norway & EU critical mineral priorities.",
    ],
  },

  disclaimers: [
    "This document is confidential. All slides are labeled Confidential.",
    "Do not invent numeric benchmark values from charts. CAPEX/OPEX figures are not disclosed in the source deck.",
    "License counts (approved/pending) are not specified in the source; stored as null with explanatory notes.",
  ],

  chartAssets: [
    {
      id: "economics-benchmark-chart",
      imagePathOrRef: "",
      caption:
        "DSM Economics Reality – Global Benchmark (source: deck page 8). Numeric CAPEX/OPEX not extracted; image reference only.",
      pageRef: 8,
    },
  ],

  lastUpdated: "2026-02-06T00:00:00.000Z",
};

/**
 * Get strategy deck by id (for admin)
 */
export function getStrategyDeckById(id: string): IStrategyDeck | undefined {
  if (id === strategyDeckFeb2026.id) return strategyDeckFeb2026;
  return undefined;
}

/**
 * Get strategy deck by slug (for public URL)
 */
export function getStrategyDeckBySlug(slug: string): IStrategyDeck | undefined {
  if (slug === strategyDeckFeb2026.slug) return strategyDeckFeb2026;
  return undefined;
}

/**
 * Get all strategy decks
 */
export function getAllStrategyDecks(): IStrategyDeck[] {
  return [strategyDeckFeb2026];
}
