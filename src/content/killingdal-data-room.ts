/**
 * Killingdal Project Data Room
 * Structured data extracted from: "Norve'ge Minerals' An Investment Opportunity in Europe's Premier Mining Jurisdiction - Investor Presentation 2026"
 *
 * All data is sourced from the investor presentation PDF. Values marked as conceptual/non-JORC are clearly flagged.
 */

import type { IProjectDataRoom } from "./types";

export const killingdalDataRoom: IProjectDataRoom = {
  projectSlug: "killingdal",
  projectName: "Killingdal",
  companyName: "Norve'ge Minerals",

  // Basic Project Info
  locationCountry: "Norway",
  depositType: "VMS (Volcanic Massive Sulphide)",
  commoditySet: ["Cu", "Zn", "Au", "Ag", "Pb", "S"],
  projectType: "Brownfield restart + resource growth",
  historicProductionPeriod: "1972–1986",
  historicMinedTonnes: {
    id: "historic-mined-tonnes",
    label: "Historic Mined Tonnes",
    value: 2.96,
    unit: "Mt",
    confidenceTag: "historic",
    complianceTag: "non-JORC",
    description: "Historic Cu-Zn sulphide production (1972-1986)",
    source: "NGU Malmdatabasen & Borekjernedatabasen",
  },
  licenseInfo: {
    licenseNumber: "0726/2225",
    licenseName: "Killingdal 1",
    areaKm2: 10,
    awardedDate: "2025-05-07",
  },

  // Investment Thesis
  investmentThesis: [
    {
      id: "thesis-1",
      title: "De-Risked Brownfield VMS Anchor",
      title_no: "Avrisikert Brownfield VMS-anker",
      description:
        "Proven system, not a theory. Killingdal is a Cu-led polymetallic VMS with ~2.96 Mt of historic sulphide production, materially reducing geological uncertainty versus greenfield exploration and establishing immediate system validation.",
      description_no:
        "Bevist system, ikke en teori. Killingdal er en Cu-ledet polymetallisk VMS med ~2,96 Mt historisk sulfidproduksjon, som reduserer geologisk usikkerhet vesentlig sammenlignet med greenfield-leting og etablerer umiddelbar systemvalidering.",
      keyPoints: [
        "Proven Norwegian VMS system with historic production",
        "Brownfield restart materially reduces geological, permitting, and development risk",
        "Underground access and established infrastructure in place",
      ],
      keyPoints_no: [
        "Bevist norsk VMS-system med historisk produksjon",
        "Brownfield-gjenstart reduserer vesentlig geologisk, tillatelses- og utviklingsrisiko",
        "Underjordisk tilgang og etablert infrastruktur på plass",
      ],
      order: 1,
    },
    {
      id: "thesis-2",
      title: "Copper-Anchored, Multi-Metal Value Stack",
      title_no: "Kobberforankret, verdiøkning med flere metaller",
      description:
        "Copper drives value, credits protect margins. Copper underpins valuation, with Zn and Ag-Au acting as margin-enhancing by-products, providing diversified revenue exposure and downside resilience without adding processing or operational complexity.",
      description_no:
        "Kobber driver verdien, biprodukter beskytter marginene. Kobber underbygger verdivurderingen, mens sink og sølv-gull fungerer som marginforbedrende biprodukter, noe som gir diversifisert inntektseksponering og nedsiderobusthet uten å tilføre prosesserings- eller operasjonell kompleksitet.",
      keyPoints: [
        "Copper underpins valuation",
        "Zn and Ag-Au as margin-enhancing by-products",
        "Diversified revenue exposure without operational complexity",
      ],
      keyPoints_no: [
        "Kobber underbygger verdivurderingen",
        "Sink og sølv-gull som marginforbedrende biprodukter",
        "Diversifisert inntektseksponering uten operasjonell kompleksitet",
      ],
      order: 2,
    },
    {
      id: "thesis-3",
      title: "Scalable Upside with Disciplined Risk Framing",
      title_no: "Skalerbar oppside med disiplinert risikorammeverk",
      description:
        "Growth optionality, clearly defined. Mineralisation remains open at depth and along strike, with interpreted stacked lenses typical of mature VMS camps; upside positioned as conceptual and non-JORC.",
      description_no:
        "Vekstopsjonalitet, klart definert. Mineralisering forblir åpen i dybden og langs strøket, med tolkede stablede linser typisk for modne VMS-felt; oppside posisjonert som konseptuell og ikke-JORC.",
      keyPoints: [
        "Mineralisation open at depth and along strike",
        "Interpreted stacked lenses typical of mature VMS camps",
        "Upside clearly positioned as conceptual and non-JORC",
      ],
      keyPoints_no: [
        "Mineralisering åpen i dybden og langs strøket",
        "Tolkede stablede linser typisk for modne VMS-felt",
        "Oppside klart posisjonert som konseptuell og ikke-JORC",
      ],
      order: 3,
    },
    {
      id: "thesis-4",
      title: "Capital-Efficient Re-Rating Strategy",
      title_no: "Kapitaleffektiv omvurderingsstrategi",
      description:
        "A phased, JORC-aligned execution plan prioritises data integrity, target vectoring and validation drilling. Risk compression before capital deployment.",
      description_no:
        "En trinnvis, JORC-tilpasset gjennomføringsplan prioriterer dataintegritet, målretting og valideringsboring. Risikokomprimering før kapitalplassering.",
      keyPoints: [
        "Phased, JORC-aligned execution plan",
        "Prioritises data integrity and validation",
        "Risk compression before capital deployment",
      ],
      keyPoints_no: [
        "Trinnvis, JORC-tilpasset gjennomføringsplan",
        "Prioriterer dataintegritet og validering",
        "Risikokomprimering før kapitalplassering",
      ],
      order: 4,
    },
    {
      id: "thesis-5",
      title: "Tier-1 Jurisdiction with Multiple Monetisation",
      title_no: "Tier-1 jurisdiksjon med flere inntektsmuligheter",
      description:
        "Norway's stable regulatory regime, transparent permitting and ESG-aligned framework. Proven geology + disciplined execution + jurisdictional premium → multiple value crystallisation points.",
      description_no:
        "Norges stabile regulatoriske regime, transparente tillatelser og ESG-tilpassede rammeverk. Bevist geologi + disiplinert gjennomføring + jurisdiksjonspremie → flere verdirealiseringspunkter.",
      keyPoints: [
        "Tier-1 jurisdiction (Norway)",
        "Stable regulatory regime and transparent permitting",
        "Multiple value crystallisation points",
      ],
      keyPoints_no: [
        "Tier-1 jurisdiksjon (Norge)",
        "Stabilt regulatorisk regime og transparente tillatelser",
        "Flere verdirealiseringspunkter",
      ],
      order: 5,
    },
  ],

  // Funding Pathway
  fundingPrograms: [
    {
      id: "funding-1",
      programName: "Forskningsrådet",
      organization: "Research Council of Norway",
      stage: "exploration",
      maxFundingPercentage: 50,
      fundingType: "grant",
      description: "Exploration and validation funding, up to 50%",
      eligibilityCriteria: ["Exploration projects", "Research and development"],
      applicationStatus: "eligible",
    },
    {
      id: "funding-2",
      programName: "Innovation Norway",
      organization: "Innovation Norway",
      stage: "pilot",
      maxFundingPercentage: 40,
      fundingType: "grant",
      description: "Pilot and demonstration funding, up to 40%",
      eligibilityCriteria: ["Pilot projects", "Demonstration projects"],
      applicationStatus: "eligible",
    },
    {
      id: "funding-3",
      programName: "Eksfin",
      organization: "Export Finance Norway",
      stage: "development",
      maxFundingPercentage: 70,
      fundingType: "debt",
      description: "Development and construction funding, debt + guarantees up to 70%",
      eligibilityCriteria: ["Development projects", "Construction projects"],
      applicationStatus: "eligible",
    },
  ],

  // Development Plan
  developmentGates: [
    {
      id: "gate-1",
      gateNumber: 1,
      gateName: "Data & Target Confidence",
      gateName_no: "Data- og målsikkerhet",
      targetDate: "2026 H1",
      status: "planned",
      description: "Historical data QA/QC, target ranking, and validation drilling",
      description_no: "Historisk data QA/QC, målrangering og valideringsboring",
      keyActions: [
        "Database, relogging & historical assays",
        "Geological Field Work & Sampling",
        "Airborne, ground geophysics & remote sensing",
        "Soil & surface geochemistry",
        "Target ranking & step-out drilling",
      ],
      keyActions_no: [
        "Database, relogging og historiske analyser",
        "Geologisk feltarbeid og prøvetaking",
        "Luftbåren, bakkegeofysikk og fjernmåling",
        "Jord- og overflategeokjemi",
        "Målrangering og utvidelsesboring",
      ],
      deliverables: [
        "Validated historical database",
        "Ranked target list",
        "Initial drill targets confirmed",
      ],
      deliverables_no: [
        "Validert historisk database",
        "Rangert målliste",
        "Innledende boremål bekreftet",
      ],
      decisionCriteria: [
        "Target confidence validated",
        "Data quality confirmed",
        "Drill targets prioritized",
      ],
      decisionCriteria_no: [
        "Målsikkerhet validert",
        "Datakvalitet bekreftet",
        "Boremål prioritert",
      ],
    },
    {
      id: "gate-2",
      gateNumber: 2,
      gateName: "JORC Alignment & Validation",
      gateName_no: "JORC-tilpasning og validering",
      targetDate: "2026 H2",
      status: "planned",
      description: "JORC-aligned drilling, QA/QC, and resource definition",
      description_no: "JORC-tilpasset boring, QA/QC og ressursdefinering",
      keyActions: [
        "Resource infill drilling & modelling",
        "JORC estimation & CP sign-off",
        "Technical studies and data integration",
      ],
      keyActions_no: [
        "Ressursutfyllingsboring og modellering",
        "JORC-estimering og CP-godkjenning",
        "Tekniske studier og dataintegrasjon",
      ],
      deliverables: [
        "Maiden JORC resource estimate",
        "JORC-compliant data package",
        "Technical validation complete",
      ],
      deliverables_no: [
        "Første JORC-ressursestimat",
        "JORC-kompatibel datapakke",
        "Teknisk validering fullført",
      ],
      decisionCriteria: [
        "JORC resource declared",
        "Data compliance confirmed",
        "Technical validation passed",
      ],
      decisionCriteria_no: [
        "JORC-ressurs erklært",
        "Dataoverholdelse bekreftet",
        "Teknisk validering bestått",
      ],
    },
    {
      id: "gate-3",
      gateNumber: 3,
      gateName: "Resource & Value Inflection",
      gateName_no: "Ressurs- og verdiinfleksjon",
      targetDate: "2027",
      status: "planned",
      description:
        "Resource growth confirmed, district potential demonstrated, capital allocation decision",
      description_no:
        "Ressursvekst bekreftet, distriktspotensial demonstrert, kapitalallokeringsbeslutning",
      keyActions: [
        "District-scale upside evaluation",
        "Monetization readiness preparation",
        "Strategic optionality assessment",
      ],
      keyActions_no: [
        "Evaluering av oppside i distriktsskala",
        "Forberedelse for inntektsrealisering",
        "Vurdering av strategiske opsjoner",
      ],
      deliverables: [
        "Expanded resource estimate",
        "District potential assessment",
        "Transaction readiness package",
      ],
      deliverables_no: [
        "Utvidet ressursestimat",
        "Vurdering av distriktspotensial",
        "Transaksjonsklarhetspakke",
      ],
      decisionCriteria: [
        "Resource growth confirmed",
        "Value inflection achieved",
        "Monetization path clear",
      ],
      decisionCriteria_no: [
        "Ressursvekst bekreftet",
        "Verdiinfleksjon oppnådd",
        "Inntektsrealiseringsvei klar",
      ],
    },
  ],

  // Economics (Conceptual)
  economics: {
    remainingTonnesConceptual: {
      id: "remaining-tonnes",
      label: "Remaining Tonnes (Conceptual)",
      value: 32,
      unit: "Mt",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      description:
        "Conceptual remaining resource based on historical production and geophysical interpretation",
      notes: "Order-of-magnitude only; not a Mineral Resource or Ore Reserve",
    },
    inSituValuePerTonne: {
      id: "in-situ-value",
      label: "In-Situ Value Per Tonne",
      valueMin: 330,
      valueMax: 345,
      unit: "USD",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      description: "In-situ value per tonne (conceptual)",
      notes: "Order-of-magnitude only; not NPVs, not recoverable value, and not economic forecasts",
    },
    NSRProxyPerTonne: {
      id: "nsr-proxy",
      label: "NSR Proxy Per Tonne",
      valueMin: 230,
      valueMax: 260,
      unit: "USD",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      description: "NSR (Net Smelter Return) proxy per tonne",
      notes: "Illustrative, non-JORC, order-of-magnitude context only",
    },
    historicMinedMaterialInSituValue: {
      id: "historic-mined-value",
      label: "Historic Mined Material In-Situ Value",
      valueMin: 0.7,
      valueMax: 0.8,
      unit: "USD",
      confidenceTag: "historic",
      complianceTag: "non-JORC",
      description: "In-situ value of historically mined material",
      notes: "Order-of-magnitude only; not NPVs, not recoverable value",
    },
    totalMineralisedSystemInSitu: {
      id: "total-system-value",
      label: "Total Mineralised System In-Situ Value",
      valueMin: 8.1,
      valueMax: 9.1,
      unit: "USD",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      description: "Total mineralised system in-situ value (conceptual)",
      notes: "Order-of-magnitude only; not NPVs, not recoverable value, and not economic forecasts",
    },
    isConceptual: true,
    isNonJORC: true,
  },

  // Metal Exposure
  metalExposure: [
    {
      metal: "Cu",
      containedMin: 0.6,
      containedMax: 0.7,
      unit: "Mt",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      notes:
        "Core revenue driver. Ranges reflect tonnage uncertainty only; grades assumed from historical averages.",
    },
    {
      metal: "Zn",
      containedMin: 1.8,
      containedMax: 2.2,
      unit: "Mt",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      notes:
        "Major co-product. Ranges reflect tonnage uncertainty only; grades assumed from historical averages.",
    },
    {
      metal: "S",
      containedMin: 13,
      containedMax: 18,
      unit: "Mt",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      notes: "Industrial by-product. Ranges reflect tonnage uncertainty only.",
    },
    {
      metal: "Ag",
      containedMin: 1.2,
      containedMax: 1.5,
      unit: "kt",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      notes:
        "Pay-metal credit. Ranges reflect tonnage uncertainty only; grades assumed from historical averages.",
    },
    {
      metal: "Au",
      containedMin: 3,
      containedMax: 4,
      unit: "t",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      notes:
        "Approximately 100–130 koz. Ranges reflect tonnage uncertainty only; grades assumed from historical averages.",
    },
  ],

  // Gold Context
  goldContext: {
    baseCase: {
      id: "gold-base-case",
      label: "Gold Base Case",
      value: 130,
      unit: "koz",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      description: "Base case estimated gold capacity",
      notes: "Based on ~20 Mt sulphide tonnage scenario at ~0.20 g/t Au grade",
    },
    upside: {
      id: "gold-upside",
      label: "Gold Upside",
      value: 240,
      unit: "koz",
      confidenceTag: "conceptual",
      complianceTag: "non-JORC",
      description: "Upside estimated gold capacity",
      notes: "Based on ~30 Mt sulphide tonnage scenario at ~0.25 g/t Au grade",
    },
    scenarios: [
      {
        scenario: "Low / Brownfield",
        sulphideTonnageMt: 10,
        auGradeGt: 0.15,
        containedAu: {
          id: "gold-scenario-low",
          label: "Contained Au (Low Scenario)",
          value: 50,
          unit: "koz",
          confidenceTag: "conceptual",
          complianceTag: "non-JORC",
          description: "Low scenario gold capacity",
        },
        indicativeValue: {
          id: "gold-value-low",
          label: "Indicative Gross Value (Low)",
          value: 220,
          unit: "USD",
          confidenceTag: "conceptual",
          complianceTag: "non-JORC",
          description: "In-situ value at ~$4,450/oz Au (illustrative only)",
          notes: "NSR-based economics apply",
        },
      },
      {
        scenario: "Base Case",
        sulphideTonnageMt: 20,
        auGradeGt: 0.2,
        containedAu: {
          id: "gold-scenario-base",
          label: "Contained Au (Base Case)",
          value: 130,
          unit: "koz",
          confidenceTag: "conceptual",
          complianceTag: "non-JORC",
          description: "Base case gold capacity",
        },
        indicativeValue: {
          id: "gold-value-base",
          label: "Indicative Gross Value (Base)",
          value: 580,
          unit: "USD",
          confidenceTag: "conceptual",
          complianceTag: "non-JORC",
          description: "In-situ value at ~$4,450/oz Au (illustrative only)",
          notes: "NSR-based economics apply",
        },
      },
      {
        scenario: "Upside / District",
        sulphideTonnageMt: 30,
        auGradeGt: 0.25,
        containedAu: {
          id: "gold-scenario-upside",
          label: "Contained Au (Upside)",
          value: 240,
          unit: "koz",
          confidenceTag: "conceptual",
          complianceTag: "non-JORC",
          description: "Upside scenario gold capacity (~7,460 kg)",
        },
        indicativeValue: {
          id: "gold-value-upside",
          label: "Indicative Gross Value (Upside)",
          value: 1180,
          unit: "USD",
          confidenceTag: "conceptual",
          complianceTag: "non-JORC",
          description: "In-situ value at ~$4,450/oz Au (illustrative only)",
          notes: "NSR-based economics apply",
        },
      },
    ],
  },

  // Comparables
  comparables: {
    description: "Global VMS assets vs Norve'ge Killingdal - Value Creation Path",
    assets: [
      {
        id: "comparable-1",
        name: "Pre-JORC Stage",
        location: "Various",
        maturityStage: "pre-jorc",
        gateMapping: {
          geologicalConfidence: true,
          economicValidation: false,
          districtValidation: false,
        },
        notes: "Early exploration stage",
      },
      {
        id: "comparable-2",
        name: "Restart Stage",
        location: "Various",
        maturityStage: "restart",
        gateMapping: {
          geologicalConfidence: true,
          economicValidation: true,
          districtValidation: false,
        },
        notes: "Brownfield restart with resource definition",
      },
      {
        id: "comparable-3",
        name: "District Scale",
        location: "Various",
        maturityStage: "district-scale",
        gateMapping: {
          geologicalConfidence: true,
          economicValidation: true,
          districtValidation: true,
        },
        notes: "District-scale validation complete",
      },
    ],
    note: "Illustrative-only. Market peers shown to demonstrate consistent re-rating path. For illustrative purposes only. Not to scale.",
  },

  // Disclaimers
  disclaimers: [
    {
      id: "disclaimer-1",
      type: "forward-looking",
      title: "Forward-Looking Statements",
      text: "This presentation is provided for information purposes only and contains forward-looking statements relating to mineral projects in Norway. Such statements involve risks and uncertainties, and actual results may differ materially from those expressed or implied.",
      isRequired: true,
    },
    {
      id: "disclaimer-2",
      type: "non-compliant",
      title: "Non-JORC / Non-PERC Compliance",
      text: "All historical production data, drilling, sampling, assays, and estimates are derived from public sources, including the Norwegian Geological Survey (NGU), and are non-JORC / non-PERC compliant, provided for context only. No Mineral Resources or Ore Reserves have been declared.",
      isRequired: true,
    },
    {
      id: "disclaimer-3",
      type: "conceptual",
      title: "Conceptual Exploration Targets",
      text: "References to exploration targets, geological potential, conceptual grade-tonnage ranges, or indicative economic metrics (including by-products such as Au and Ag) are conceptual, prefeasibility level, and non-JORC / non-PERC compliant. There is no assurance that further exploration will result in a compliant Mineral Resource or Ore Reserve.",
      isRequired: true,
    },
    {
      id: "disclaimer-4",
      type: "no-resources",
      title: "No Resources or Reserves Declared",
      text: "No Mineral Resources or Ore Reserves have been declared. All tonnage, grade, and value estimates are conceptual and for illustrative purposes only.",
      isRequired: true,
    },
    {
      id: "disclaimer-5",
      type: "illustrative",
      title: "Illustrative Economics",
      text: "Order-of-magnitude only; not NPVs, not recoverable value, and not economic forecasts. All economic metrics are illustrative and non-JORC compliant.",
      isRequired: true,
    },
  ],

  // Attachments
  attachments: [
    {
      id: "attachment-1",
      name: "Norve'ge Minerals - Killingdal Investor Presentation 2026",
      fileName: "Final Draft RK Norve'ge  Pitch-for Mikael  2026012_260206_192433.pdf",
      filePath: "/documents/killingdal-investor-presentation-2026.pdf",
      mimeType: "application/pdf",
      version: "2026",
      uploadedAt: "2026-01-12T00:00:00Z",
      description: "Complete investor presentation for Killingdal polymetallic VMS mine project",
      isSourceDocument: true,
    },
  ],

  // Metadata
  lastUpdated: "2026-01-12T00:00:00Z",
  dataQualityNotes:
    "All data extracted from investor presentation PDF. Values marked as conceptual/non-JORC are clearly flagged. No values have been invented or modified beyond what exists in the source document.",
};

/**
 * Helper function to get data room by project slug
 */
export function getProjectDataRoomBySlug(slug: string): IProjectDataRoom | undefined {
  if (slug === "killingdal") {
    return killingdalDataRoom;
  }
  return undefined;
}

/**
 * Get all available project data rooms
 */
export function getAllProjectDataRooms(): IProjectDataRoom[] {
  return [killingdalDataRoom];
}
