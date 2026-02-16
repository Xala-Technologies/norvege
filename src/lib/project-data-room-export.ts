/**
 * Project Data Room Export Functions
 * Generates markdown exports (one-pager and full report) from project data room
 */

import type { IProjectDataRoom, IMetric } from "@/content/types";

/**
 * Format a metric value for display
 */
function formatMetric(metric: IMetric): string {
  if (metric.valueMin !== undefined && metric.valueMax !== undefined) {
    return `${metric.valueMin}–${metric.valueMax} ${metric.unit}`;
  }
  if (metric.value !== undefined) {
    return `${metric.value} ${metric.unit}`;
  }
  return "N/A";
}

/**
 * Format metric with compliance tags
 */
function formatMetricWithTags(metric: IMetric): string {
  const value = formatMetric(metric);
  return `${value} (${metric.confidenceTag}, ${metric.complianceTag})`;
}

/**
 * Generate one-pager markdown export
 */
export function generateOnePager(dataRoom: IProjectDataRoom): string {
  const lines: string[] = [];

  // Header
  lines.push(`# ${dataRoom.projectName} - Investment One-Pager`);
  lines.push(`\n**Company:** ${dataRoom.companyName}`);
  lines.push(`**Location:** ${dataRoom.locationCountry}`);
  lines.push(`**Deposit Type:** ${dataRoom.depositType}`);
  lines.push(`**Project Type:** ${dataRoom.projectType}`);
  lines.push("");

  // License Info
  if (dataRoom.licenseInfo.licenseNumber) {
    lines.push("## License Information");
    lines.push(`- **License Number:** ${dataRoom.licenseInfo.licenseNumber}`);
    if (dataRoom.licenseInfo.licenseName) {
      lines.push(`- **License Name:** ${dataRoom.licenseInfo.licenseName}`);
    }
    if (dataRoom.licenseInfo.areaKm2) {
      lines.push(`- **Area:** ${dataRoom.licenseInfo.areaKm2} km²`);
    }
    if (dataRoom.licenseInfo.awardedDate) {
      lines.push(
        `- **Awarded:** ${new Date(dataRoom.licenseInfo.awardedDate).toLocaleDateString()}`
      );
    }
    lines.push("");
  }

  // Historic Production
  if (dataRoom.historicMinedTonnes) {
    lines.push("## Historic Production");
    lines.push(`- **Period:** ${dataRoom.historicProductionPeriod || "N/A"}`);
    lines.push(`- **Mined Tonnes:** ${formatMetricWithTags(dataRoom.historicMinedTonnes)}`);
    if (dataRoom.historicMinedTonnes.description) {
      lines.push(`- **Description:** ${dataRoom.historicMinedTonnes.description}`);
    }
    lines.push("");
  }

  // Investment Thesis (Summary)
  lines.push("## Investment Thesis");
  dataRoom.investmentThesis.forEach((thesis) => {
    lines.push(`### ${thesis.title}`);
    lines.push(thesis.description);
    if (thesis.keyPoints.length > 0) {
      thesis.keyPoints.forEach((point) => {
        lines.push(`- ${point}`);
      });
    }
    lines.push("");
  });

  // Key Metrics
  lines.push("## Key Metrics");
  if (dataRoom.economics.remainingTonnesConceptual) {
    lines.push(
      `- **Remaining Tonnes (Conceptual):** ${formatMetricWithTags(dataRoom.economics.remainingTonnesConceptual)}`
    );
  }
  if (dataRoom.economics.inSituValuePerTonne) {
    lines.push(
      `- **In-Situ Value Per Tonne:** ${formatMetricWithTags(dataRoom.economics.inSituValuePerTonne)}`
    );
  }
  lines.push("");

  // Metal Exposure (Summary)
  lines.push("## Metal Exposure (Conceptual)");
  dataRoom.metalExposure.forEach((metal) => {
    if (metal.containedMin !== undefined && metal.containedMax !== undefined) {
      lines.push(
        `- **${metal.metal}:** ${metal.containedMin}–${metal.containedMax} ${metal.unit} (${metal.confidenceTag}, ${metal.complianceTag})`
      );
    }
  });
  lines.push("");

  // Development Gates (Summary)
  lines.push("## Development Plan");
  dataRoom.developmentGates.forEach((gate) => {
    lines.push(`### Gate ${gate.gateNumber}: ${gate.gateName}`);
    lines.push(`- **Target Date:** ${gate.targetDate}`);
    lines.push(`- **Status:** ${gate.status}`);
    lines.push(`- **Description:** ${gate.description}`);
    lines.push("");
  });

  // Disclaimers
  lines.push("## Important Disclaimers");
  dataRoom.disclaimers
    .filter((d) => d.isRequired)
    .forEach((disclaimer) => {
      lines.push(`### ${disclaimer.title}`);
      lines.push(disclaimer.text);
      lines.push("");
    });

  // Source Citation
  const sourceDoc = dataRoom.attachments.find((a) => a.isSourceDocument);
  if (sourceDoc) {
    lines.push("## Source Document");
    lines.push(
      `This one-pager is derived from: **${sourceDoc.name}** (${sourceDoc.version || "N/A"})`
    );
    lines.push(`Uploaded: ${new Date(sourceDoc.uploadedAt).toLocaleDateString()}`);
    lines.push("");
  }

  // Footer
  lines.push("---");
  lines.push(
    `*Generated on ${new Date().toLocaleDateString()} from ${dataRoom.companyName} Project Data Room*`
  );

  return lines.join("\n");
}

/**
 * Generate full report markdown export
 */
export function generateFullReport(dataRoom: IProjectDataRoom): string {
  const lines: string[] = [];

  // Title Page
  lines.push(`# ${dataRoom.projectName} - Project Data Room`);
  lines.push(`\n**Full Report**`);
  lines.push(`\n**Company:** ${dataRoom.companyName}`);
  lines.push(`**Project:** ${dataRoom.projectName}`);
  lines.push(`**Location:** ${dataRoom.locationCountry}`);
  lines.push(`**Report Date:** ${new Date().toLocaleDateString()}`);
  lines.push("");
  lines.push("---");
  lines.push("");

  // Table of Contents
  lines.push("## Table of Contents");
  lines.push("1. [Executive Summary](#executive-summary)");
  lines.push("2. [Project Overview](#project-overview)");
  lines.push("3. [Investment Thesis](#investment-thesis)");
  lines.push("4. [Geology & Deposit](#geology--deposit)");
  lines.push("5. [History & Infrastructure](#history--infrastructure)");
  lines.push("6. [Funding & Permitting](#funding--permitting)");
  lines.push("7. [Work Program & Development Gates](#work-program--development-gates)");
  lines.push("8. [Economics (Conceptual)](#economics-conceptual)");
  lines.push("9. [Metals & By-products](#metals--by-products)");
  lines.push("10. [Gold Context](#gold-context)");
  lines.push("11. [Comparables](#comparables)");
  lines.push("12. [Disclaimers & Sources](#disclaimers--sources)");
  lines.push("");
  lines.push("---");
  lines.push("");

  // Executive Summary
  lines.push("## Executive Summary");
  lines.push(
    `${dataRoom.projectName} is a ${dataRoom.depositType} ${dataRoom.projectType} project located in ${dataRoom.locationCountry}.`
  );
  if (dataRoom.historicMinedTonnes) {
    lines.push(
      `Historic production of ${formatMetric(dataRoom.historicMinedTonnes)} demonstrates a proven mineral system.`
    );
  }
  lines.push("");
  lines.push("---");
  lines.push("");

  // Project Overview
  lines.push("## Project Overview");
  lines.push(`**Project Name:** ${dataRoom.projectName}`);
  lines.push(`**Company:** ${dataRoom.companyName}`);
  lines.push(`**Location:** ${dataRoom.locationCountry}`);
  lines.push(`**Deposit Type:** ${dataRoom.depositType}`);
  lines.push(`**Project Type:** ${dataRoom.projectType}`);
  lines.push(`**Commodities:** ${dataRoom.commoditySet.join(", ")}`);
  if (dataRoom.historicProductionPeriod) {
    lines.push(`**Historic Production Period:** ${dataRoom.historicProductionPeriod}`);
  }
  lines.push("");
  lines.push("### License Information");
  if (dataRoom.licenseInfo.licenseNumber) {
    lines.push(`- **License Number:** ${dataRoom.licenseInfo.licenseNumber}`);
  }
  if (dataRoom.licenseInfo.licenseName) {
    lines.push(`- **License Name:** ${dataRoom.licenseInfo.licenseName}`);
  }
  if (dataRoom.licenseInfo.areaKm2) {
    lines.push(`- **Area:** ${dataRoom.licenseInfo.areaKm2} km²`);
  }
  if (dataRoom.licenseInfo.awardedDate) {
    lines.push(
      `- **Awarded Date:** ${new Date(dataRoom.licenseInfo.awardedDate).toLocaleDateString()}`
    );
  }
  lines.push("");
  lines.push("---");
  lines.push("");

  // Investment Thesis
  lines.push("## Investment Thesis");
  dataRoom.investmentThesis.forEach((thesis) => {
    lines.push(`### ${thesis.title}`);
    lines.push(thesis.description);
    if (thesis.keyPoints.length > 0) {
      lines.push("\n**Key Points:**");
      thesis.keyPoints.forEach((point) => {
        lines.push(`- ${point}`);
      });
    }
    lines.push("");
  });
  lines.push("---");
  lines.push("");

  // Geology & Deposit
  lines.push("## Geology & Deposit");
  lines.push(`**Deposit Type:** ${dataRoom.depositType}`);
  lines.push(`**Commodity Set:** ${dataRoom.commoditySet.join(", ")}`);
  if (dataRoom.historicMinedTonnes) {
    lines.push("\n### Historic Production");
    lines.push(`- **Tonnes Mined:** ${formatMetricWithTags(dataRoom.historicMinedTonnes)}`);
    if (dataRoom.historicMinedTonnes.description) {
      lines.push(`- **Description:** ${dataRoom.historicMinedTonnes.description}`);
    }
    if (dataRoom.historicMinedTonnes.source) {
      lines.push(`- **Source:** ${dataRoom.historicMinedTonnes.source}`);
    }
  }
  lines.push("");
  lines.push("---");
  lines.push("");

  // History & Infrastructure
  lines.push("## History & Infrastructure");
  if (dataRoom.historicProductionPeriod) {
    lines.push(`**Historic Production Period:** ${dataRoom.historicProductionPeriod}`);
  }
  if (dataRoom.historicMinedTonnes) {
    lines.push(`**Historic Production:** ${formatMetric(dataRoom.historicMinedTonnes)}`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");

  // Funding & Permitting
  lines.push("## Funding & Permitting");
  lines.push("### Public Funding Programs");
  dataRoom.fundingPrograms.forEach((program) => {
    lines.push(`### ${program.programName}`);
    lines.push(`- **Organization:** ${program.organization}`);
    lines.push(`- **Stage:** ${program.stage}`);
    lines.push(`- **Max Funding:** ${program.maxFundingPercentage}%`);
    lines.push(`- **Funding Type:** ${program.fundingType}`);
    lines.push(`- **Description:** ${program.description}`);
    if (program.applicationStatus) {
      lines.push(`- **Status:** ${program.applicationStatus}`);
    }
    lines.push("");
  });
  lines.push("---");
  lines.push("");

  // Work Program & Development Gates
  lines.push("## Work Program & Development Gates");
  dataRoom.developmentGates.forEach((gate) => {
    lines.push(`### Gate ${gate.gateNumber}: ${gate.gateName}`);
    lines.push(`- **Target Date:** ${gate.targetDate}`);
    lines.push(`- **Status:** ${gate.status}`);
    lines.push(`- **Description:** ${gate.description}`);
    if (gate.keyActions.length > 0) {
      lines.push("\n**Key Actions:**");
      gate.keyActions.forEach((action) => {
        lines.push(`- ${action}`);
      });
    }
    if (gate.deliverables.length > 0) {
      lines.push("\n**Deliverables:**");
      gate.deliverables.forEach((deliverable) => {
        lines.push(`- ${deliverable}`);
      });
    }
    if (gate.decisionCriteria && gate.decisionCriteria.length > 0) {
      lines.push("\n**Decision Criteria:**");
      gate.decisionCriteria.forEach((criteria) => {
        lines.push(`- ${criteria}`);
      });
    }
    lines.push("");
  });
  lines.push("---");
  lines.push("");

  // Economics (Conceptual)
  lines.push("## Economics (Conceptual)");
  lines.push(
    "⚠️ **IMPORTANT:** All economics are conceptual and non-JORC compliant. Order-of-magnitude only; not NPVs, not recoverable value, and not economic forecasts."
  );
  lines.push("");
  if (dataRoom.economics.remainingTonnesConceptual) {
    lines.push(`### ${dataRoom.economics.remainingTonnesConceptual.label}`);
    lines.push(
      `- **Value:** ${formatMetricWithTags(dataRoom.economics.remainingTonnesConceptual)}`
    );
    if (dataRoom.economics.remainingTonnesConceptual.notes) {
      lines.push(`- **Notes:** ${dataRoom.economics.remainingTonnesConceptual.notes}`);
    }
    lines.push("");
  }
  if (dataRoom.economics.inSituValuePerTonne) {
    lines.push(`### ${dataRoom.economics.inSituValuePerTonne.label}`);
    lines.push(`- **Value:** ${formatMetricWithTags(dataRoom.economics.inSituValuePerTonne)}`);
    lines.push("");
  }
  if (dataRoom.economics.NSRProxyPerTonne) {
    lines.push(`### ${dataRoom.economics.NSRProxyPerTonne.label}`);
    lines.push(`- **Value:** ${formatMetricWithTags(dataRoom.economics.NSRProxyPerTonne)}`);
    lines.push("");
  }
  if (dataRoom.economics.historicMinedMaterialInSituValue) {
    lines.push(`### ${dataRoom.economics.historicMinedMaterialInSituValue.label}`);
    lines.push(
      `- **Value:** ${formatMetricWithTags(dataRoom.economics.historicMinedMaterialInSituValue)}`
    );
    lines.push("");
  }
  if (dataRoom.economics.totalMineralisedSystemInSitu) {
    lines.push(`### ${dataRoom.economics.totalMineralisedSystemInSitu.label}`);
    lines.push(
      `- **Value:** ${formatMetricWithTags(dataRoom.economics.totalMineralisedSystemInSitu)}`
    );
    lines.push("");
  }
  lines.push("---");
  lines.push("");

  // Metals & By-products
  lines.push("## Metals & By-products");
  lines.push(
    "⚠️ **IMPORTANT:** All metal exposure estimates are conceptual and non-JORC compliant."
  );
  lines.push("");
  dataRoom.metalExposure.forEach((metal) => {
    lines.push(`### ${metal.metal}`);
    if (metal.containedMin !== undefined && metal.containedMax !== undefined) {
      lines.push(`- **Contained:** ${metal.containedMin}–${metal.containedMax} ${metal.unit}`);
    }
    if (metal.gradeMin !== undefined && metal.gradeMax !== undefined) {
      lines.push(`- **Grade:** ${metal.gradeMin}–${metal.gradeMax} ${metal.gradeUnit}`);
    }
    lines.push(`- **Confidence:** ${metal.confidenceTag}`);
    lines.push(`- **Compliance:** ${metal.complianceTag}`);
    if (metal.notes) {
      lines.push(`- **Notes:** ${metal.notes}`);
    }
    lines.push("");
  });
  lines.push("---");
  lines.push("");

  // Gold Context
  if (dataRoom.goldContext) {
    lines.push("## Gold Context");
    lines.push("⚠️ **IMPORTANT:** All gold estimates are illustrative and non-JORC compliant.");
    lines.push("");
    if (dataRoom.goldContext.baseCase) {
      lines.push(`### Base Case: ${formatMetricWithTags(dataRoom.goldContext.baseCase)}`);
    }
    if (dataRoom.goldContext.upside) {
      lines.push(`### Upside: ${formatMetricWithTags(dataRoom.goldContext.upside)}`);
    }
    if (dataRoom.goldContext.scenarios && dataRoom.goldContext.scenarios.length > 0) {
      lines.push("\n### Gold Scenarios");
      dataRoom.goldContext.scenarios.forEach((scenario) => {
        lines.push(`#### ${scenario.scenario}`);
        lines.push(`- **Sulphide Tonnage:** ~${scenario.sulphideTonnageMt} Mt`);
        lines.push(`- **Au Grade:** ${scenario.auGradeGt} g/t`);
        lines.push(`- **Contained Au:** ${formatMetricWithTags(scenario.containedAu)}`);
        if (scenario.indicativeValue) {
          lines.push(`- **Indicative Value:** ${formatMetricWithTags(scenario.indicativeValue)}`);
        }
        lines.push("");
      });
    }
    lines.push("---");
    lines.push("");
  }

  // Comparables
  if (dataRoom.comparables) {
    lines.push("## Comparables");
    lines.push(dataRoom.comparables.description);
    lines.push("");
    dataRoom.comparables.assets.forEach((asset) => {
      lines.push(`### ${asset.name}`);
      lines.push(`- **Location:** ${asset.location}`);
      lines.push(`- **Maturity Stage:** ${asset.maturityStage}`);
      if (asset.notes) {
        lines.push(`- **Notes:** ${asset.notes}`);
      }
      lines.push("");
    });
    lines.push(`*Note: ${dataRoom.comparables.note}*`);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  // Disclaimers & Sources
  lines.push("## Disclaimers & Sources");
  lines.push("### Required Disclaimers");
  dataRoom.disclaimers.forEach((disclaimer) => {
    lines.push(`### ${disclaimer.title}`);
    lines.push(disclaimer.text);
    lines.push("");
  });
  lines.push("### Source Documents");
  dataRoom.attachments.forEach((attachment) => {
    lines.push(`- **${attachment.name}**`);
    if (attachment.description) {
      lines.push(`  - Description: ${attachment.description}`);
    }
    lines.push(`  - Uploaded: ${new Date(attachment.uploadedAt).toLocaleDateString()}`);
    if (attachment.version) {
      lines.push(`  - Version: ${attachment.version}`);
    }
    if (attachment.isSourceDocument) {
      lines.push(`  - **Source Document**`);
    }
    lines.push("");
  });
  lines.push("---");
  lines.push("");

  // Footer
  lines.push("## Report Metadata");
  lines.push(`- **Last Updated:** ${new Date(dataRoom.lastUpdated).toLocaleDateString()}`);
  lines.push(`- **Generated:** ${new Date().toLocaleDateString()}`);
  if (dataRoom.dataQualityNotes) {
    lines.push(`- **Data Quality Notes:** ${dataRoom.dataQualityNotes}`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(
    `*This report was generated from the ${dataRoom.companyName} Project Data Room. All data is sourced from the investor presentation documents listed in the Sources section above.*`
  );

  return lines.join("\n");
}

/**
 * Download markdown as file
 */
export function downloadMarkdown(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
