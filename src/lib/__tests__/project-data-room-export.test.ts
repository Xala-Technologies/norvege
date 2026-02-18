/**
 * Tests for Project Data Room Export Functions
 *
 * Note: This project doesn't currently have a test framework configured.
 * These tests are written in a test-agnostic format and can be run with:
 * - Jest (add @jest/globals)
 * - Vitest (add vitest)
 * - Or any other test framework
 *
 * To run tests, first install a test framework:
 * npm install --save-dev jest @types/jest
 * OR
 * npm install --save-dev vitest @vitest/ui
 */

import {
  generateOnePager,
  generateFullReport,
  generateStrategyDeckExport,
  generateFullReportWithStrategyDeck,
} from "../project-data-room-export";
import { killingdalDataRoom } from "@/content/killingdal-data-room";
import { strategyDeckFeb2026 } from "@/content/strategy-deck-feb2026";

// Test helper functions (framework-agnostic)
function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

function test(name: string, fn: () => void): void {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(error);
    throw error;
  }
}

// Manual test runner
export function runTests(): void {
  console.log("Running Project Data Room Export Tests...\n");

  test("generateOnePager should generate a one-pager markdown document", () => {
    const result = generateOnePager(killingdalDataRoom);
    assert(result !== undefined, "Result should be defined");
    assert(typeof result === "string", "Result should be a string");
    assert(result.length > 0, "Result should not be empty");
  });

  test("generateOnePager should include project name in header", () => {
    const result = generateOnePager(killingdalDataRoom);
    assert(result.includes(killingdalDataRoom.projectName), "Should include project name");
  });

  test("generateOnePager should include company name", () => {
    const result = generateOnePager(killingdalDataRoom);
    assert(result.includes(killingdalDataRoom.companyName), "Should include company name");
  });

  test("generateOnePager should include investment thesis sections", () => {
    const result = generateOnePager(killingdalDataRoom);
    killingdalDataRoom.investmentThesis.forEach((thesis) => {
      assert(result.includes(thesis.title), `Should include thesis: ${thesis.title}`);
    });
  });

  test("generateOnePager should include disclaimers", () => {
    const result = generateOnePager(killingdalDataRoom);
    const requiredDisclaimers = killingdalDataRoom.disclaimers.filter((d) => d.isRequired);
    requiredDisclaimers.forEach((disclaimer) => {
      assert(result.includes(disclaimer.title), `Should include disclaimer: ${disclaimer.title}`);
    });
  });

  test("generateFullReport should generate a full report markdown document", () => {
    const result = generateFullReport(killingdalDataRoom);
    assert(result !== undefined, "Result should be defined");
    assert(typeof result === "string", "Result should be a string");
    assert(result.length > 0, "Result should not be empty");
  });

  test("generateFullReport should include table of contents", () => {
    const result = generateFullReport(killingdalDataRoom);
    assert(result.includes("Table of Contents"), "Should include table of contents");
  });

  test("generateFullReport should include all major sections", () => {
    const result = generateFullReport(killingdalDataRoom);
    assert(result.includes("Executive Summary"), "Should include Executive Summary");
    assert(result.includes("Project Overview"), "Should include Project Overview");
    assert(result.includes("Investment Thesis"), "Should include Investment Thesis");
    assert(result.includes("Geology & Deposit"), "Should include Geology & Deposit");
    assert(result.includes("Funding & Permitting"), "Should include Funding & Permitting");
    assert(result.includes("Work Program & Development Gates"), "Should include Work Program");
    assert(result.includes("Economics (Conceptual)"), "Should include Economics");
    assert(result.includes("Metals & By-products"), "Should include Metals");
    assert(result.includes("Disclaimers & Sources"), "Should include Disclaimers");
  });

  test("generateFullReport should include all disclaimers", () => {
    const result = generateFullReport(killingdalDataRoom);
    killingdalDataRoom.disclaimers.forEach((disclaimer) => {
      assert(result.includes(disclaimer.title), `Should include disclaimer: ${disclaimer.title}`);
      assert(
        result.includes(disclaimer.text),
        `Should include disclaimer text: ${disclaimer.title}`
      );
    });
  });

  test("generateFullReport should include all attachments", () => {
    const result = generateFullReport(killingdalDataRoom);
    killingdalDataRoom.attachments.forEach((attachment) => {
      assert(result.includes(attachment.name), `Should include attachment: ${attachment.name}`);
    });
  });

  test("generateFullReport should include compliance warnings for economics", () => {
    const result = generateFullReport(killingdalDataRoom);
    assert(result.includes("non-JORC"), "Should include non-JORC warning");
    assert(result.includes("conceptual"), "Should include conceptual warning");
  });

  test("metrics should be properly flagged as conceptual/non-JORC", () => {
    assert(
      killingdalDataRoom.economics.isConceptual === true,
      "Economics should be flagged as conceptual"
    );
    assert(
      killingdalDataRoom.economics.isNonJORC === true,
      "Economics should be flagged as non-JORC"
    );
  });

  // --- Strategy Deck export tests ---

  test("generateStrategyDeckExport should include confidentiality flag when deck is confidential", () => {
    const result = generateStrategyDeckExport(strategyDeckFeb2026);
    assert(result !== undefined, "Result should be defined");
    assert(typeof result === "string", "Result should be a string");
    assert(
      strategyDeckFeb2026.confidentiality && result.includes("CONFIDENTIAL"),
      "Export must include CONFIDENTIAL when deck.confidentiality is true"
    );
  });

  test("generateStrategyDeckExport should preserve page refs in section headings", () => {
    const result = generateStrategyDeckExport(strategyDeckFeb2026);
    assert(result.includes("(p.1)"), "Should include page ref p.1");
    assert(result.includes("(p.2)"), "Should include page ref p.2");
    assert(result.includes("(p.3)"), "Should include page ref p.3");
    assert(result.includes("(p.4)"), "Should include page ref p.4");
    assert(result.includes("(p.5)"), "Should include page ref p.5");
    assert(result.includes("(p.6)"), "Should include page ref p.6");
    assert(result.includes("(p.7)"), "Should include page ref p.7");
    assert(result.includes("(p.8)"), "Should include page ref p.8");
    assert(result.includes("(p.9)"), "Should include page ref p.9");
  });

  test("generateStrategyDeckExport should include PDF attachment reference", () => {
    const result = generateStrategyDeckExport(strategyDeckFeb2026);
    assert(
      result.includes("Source document") || result.includes("PDF attachment"),
      "Should include source document / PDF attachment section"
    );
    assert(
      result.includes(strategyDeckFeb2026.attachment.fileName) ||
        result.includes(strategyDeckFeb2026.attachment.name ?? ""),
      "Should include attachment file name or name"
    );
  });

  test("chart assets with null numeric fields should not break export", () => {
    const deckWithNullChart = { ...strategyDeckFeb2026 };
    deckWithNullChart.chartAssets = [
      {
        id: "test-chart",
        imagePathOrRef: "",
        caption: "Test caption",
        pageRef: 8,
      },
    ];
    const result = generateStrategyDeckExport(deckWithNullChart);
    assert(result.length > 0, "Export should succeed with chart that has no CAPEX/OPEX");
    assert(!result.includes("undefined"), "Export should not contain literal 'undefined'");
    assert(!result.includes("NaN"), "Export should not contain NaN");
  });

  test("generateFullReportWithStrategyDeck should append strategy deck when provided", () => {
    const withDeck = generateFullReportWithStrategyDeck(killingdalDataRoom, strategyDeckFeb2026);
    const withoutDeck = generateFullReportWithStrategyDeck(killingdalDataRoom, null);
    assert(withDeck.length > withoutDeck.length, "Report with deck should be longer");
    assert(
      withDeck.includes("Strategy Rationale: Onshore vs Deep-Sea Exploration"),
      "Should include strategy deck title"
    );
    assert(
      withDeck.includes("CONFIDENTIAL"),
      "Combined export should include confidentiality note from deck"
    );
  });

  console.log("\nAll tests passed! ✓");
}

// Export for manual testing
if (typeof window === "undefined") {
  // Node.js environment - can run tests
  // Uncomment to run: runTests();
}
