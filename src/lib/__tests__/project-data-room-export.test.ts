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

import { generateOnePager, generateFullReport } from "../project-data-room-export";
import { killingdalDataRoom } from "@/content/killingdal-data-room";

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

  console.log("\nAll tests passed! ✓");
}

// Export for manual testing
if (typeof window === "undefined") {
  // Node.js environment - can run tests
  // Uncomment to run: runTests();
}
