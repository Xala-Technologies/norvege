"use client";

import { motion } from "framer-motion";
import type { IProjectDataRoom } from "@/content/types";
import {
  generateOnePager,
  generateFullReport,
  downloadMarkdown,
} from "@/lib/project-data-room-export";
import { formatDateDisplay } from "@/lib/date-utils";

interface ProjectDataRoomProps {
  dataRoom: IProjectDataRoom;
}

export default function ProjectDataRoom({ dataRoom }: ProjectDataRoomProps) {
  const formatMetric = (metric: {
    value?: number;
    valueMin?: number;
    valueMax?: number;
    unit: string;
  }) => {
    if (metric.valueMin !== undefined && metric.valueMax !== undefined) {
      return `${metric.valueMin}–${metric.valueMax} ${metric.unit}`;
    }
    if (metric.value !== undefined) {
      return `${metric.value} ${metric.unit}`;
    }
    return "N/A";
  };

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* Hero Section */}
      <div
        className="text-center pb-8 border-b-2"
        style={{ borderColor: "color-mix(in srgb, var(--color-primary-main) 20%, transparent)" }}
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          style={{
            color: "var(--color-text-body)",
            fontFamily: "var(--font-family-heading)",
            fontWeight: "var(--font-weight-black)",
            letterSpacing: "-0.03em",
          }}
        >
          Project Data Room
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive investment information and technical data for {dataRoom.projectName}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <span>
            Deposit Type: <strong className="text-gray-700">{dataRoom.depositType}</strong>
          </span>
          <span>•</span>
          <span>
            Project Type: <strong className="text-gray-700">{dataRoom.projectType}</strong>
          </span>
          {dataRoom.licenseInfo.licenseNumber && (
            <>
              <span>•</span>
              <span>
                License:{" "}
                <strong className="text-gray-700">{dataRoom.licenseInfo.licenseNumber}</strong>
              </span>
            </>
          )}
        </div>
      </div>

      {/* Compliance Box - Prominent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 md:p-8 shadow-lg"
      >
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">⚠️</span>
          <h3 className="text-xl md:text-2xl font-bold text-yellow-900">Important Disclaimers</h3>
        </div>
        <ul className="space-y-3 text-sm md:text-base text-yellow-900">
          {dataRoom.disclaimers
            .filter((d) => d.isRequired)
            .map((disclaimer) => (
              <li key={disclaimer.id} className="flex items-start gap-3">
                <span className="text-yellow-600 mt-1 font-bold">•</span>
                <span>
                  <strong className="font-semibold">{disclaimer.title}:</strong> {disclaimer.text}
                </span>
              </li>
            ))}
        </ul>
      </motion.div>

      {/* Investment Thesis Section */}
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.02em",
            }}
          >
            Investment Thesis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Five key pillars supporting the {dataRoom.projectName} investment opportunity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dataRoom.investmentThesis.map((thesis, idx) => (
            <motion.div
              key={thesis.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 lg:p-8 rounded-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <span
                  className="text-2xl font-bold flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--color-accent-main)",
                    color: "var(--color-accent-contrast)",
                  }}
                >
                  {thesis.order}
                </span>
                <h3
                  className="text-xl lg:text-2xl font-bold flex-1"
                  style={{ color: "var(--color-text-body)" }}
                >
                  {thesis.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-5 leading-relaxed">{thesis.description}</p>
              {thesis.keyPoints.length > 0 && (
                <ul className="space-y-2.5">
                  {thesis.keyPoints.map((point, pointIdx) => (
                    <li
                      key={pointIdx}
                      className="text-sm md:text-base text-gray-600 flex items-start gap-2.5"
                    >
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--color-accent-main)" }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.02em",
            }}
          >
            Key Metrics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Historic production and conceptual resource estimates
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dataRoom.historicMinedTonnes && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-lg text-center border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                {formatMetric(dataRoom.historicMinedTonnes)}
              </div>
              <div
                className="text-base md:text-lg font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--color-text-body)" }}
              >
                Historic Production
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {dataRoom.historicProductionPeriod} • {dataRoom.historicMinedTonnes.complianceTag}
              </div>
            </motion.div>
          )}
          {dataRoom.economics.remainingTonnesConceptual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-lg text-center border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                {formatMetric(dataRoom.economics.remainingTonnesConceptual)}
              </div>
              <div
                className="text-base md:text-lg font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--color-text-body)" }}
              >
                Remaining (Conceptual)
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {dataRoom.economics.remainingTonnesConceptual.complianceTag}
              </div>
            </motion.div>
          )}
          {dataRoom.economics.inSituValuePerTonne && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-lg text-center border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                US${formatMetric(dataRoom.economics.inSituValuePerTonne)}
              </div>
              <div
                className="text-base md:text-lg font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--color-text-body)" }}
              >
                In-Situ Value/Tonne
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {dataRoom.economics.inSituValuePerTonne.complianceTag}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Development Timeline */}
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.02em",
            }}
          >
            Development Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stage-gated execution plan with clear milestones and deliverables
          </p>
        </div>
        <div className="space-y-6 lg:space-y-8">
          {dataRoom.developmentGates.map((gate, idx) => (
            <motion.div
              key={gate.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 lg:p-8 rounded-lg border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                    style={{
                      background: "var(--color-accent-main)",
                      color: "var(--color-accent-contrast)",
                    }}
                  >
                    {gate.gateNumber}
                  </div>
                  <div>
                    <h3
                      className="text-2xl lg:text-3xl font-bold mb-1"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      {gate.gateName}
                    </h3>
                    <p className="text-gray-600">{gate.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      gate.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : gate.status === "in-progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {gate.status}
                  </span>
                  <span className="text-lg font-semibold text-gray-700">{gate.targetDate}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {gate.keyActions.length > 0 && (
                  <div>
                    <h4
                      className="font-semibold text-lg mb-3"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      Key Actions:
                    </h4>
                    <ul className="space-y-2.5">
                      {gate.keyActions.map((action, actionIdx) => (
                        <li key={actionIdx} className="text-gray-700 flex items-start gap-2.5">
                          <span
                            className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ background: "var(--color-accent-main)" }}
                          />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {gate.deliverables.length > 0 && (
                  <div>
                    <h4
                      className="font-semibold text-lg mb-3"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      Deliverables:
                    </h4>
                    <ul className="space-y-2.5">
                      {gate.deliverables.map((deliverable, delIdx) => (
                        <li key={delIdx} className="text-gray-700 flex items-start gap-2.5">
                          <span className="text-green-600 mt-2">✓</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Funding Pathway */}
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.02em",
            }}
          >
            Public Funding Pathway
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Norwegian public funding programs supporting project development
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {dataRoom.fundingPrograms.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 lg:p-8 rounded-lg border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-xl lg:text-2xl font-bold"
                  style={{ color: "var(--color-text-body)" }}
                >
                  {program.programName}
                </h3>
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-bold flex-shrink-0"
                  style={{
                    background: "var(--color-accent-main)",
                    color: "var(--color-accent-contrast)",
                  }}
                >
                  {program.maxFundingPercentage}%
                </span>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-sm font-semibold text-gray-700">Organization:</span>
                  <span className="ml-2 text-gray-900">{program.organization}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">Stage:</span>
                  <span className="ml-2 text-gray-900 capitalize">{program.stage}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">Type:</span>
                  <span className="ml-2 text-gray-900 capitalize">{program.fundingType}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{program.description}</p>
              {program.applicationStatus && (
                <div
                  className="pt-4 border-t"
                  style={{
                    borderColor: "color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
                  }}
                >
                  <span className="text-sm font-semibold text-gray-700">Status: </span>
                  <span className="text-sm text-gray-900 capitalize">
                    {program.applicationStatus}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metal Exposure */}
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.02em",
            }}
          >
            Metal Exposure (Conceptual)
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-yellow-800">
              ⚠️ All metal exposure estimates are conceptual and non-JORC compliant.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dataRoom.metalExposure.map((metal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 lg:p-8 rounded-lg border-2 text-center transition-all duration-300 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <h3
                className="text-4xl md:text-5xl font-bold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                {metal.metal}
              </h3>
              {metal.containedMin !== undefined && metal.containedMax !== undefined && (
                <div className="mb-3">
                  <div
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {metal.containedMin}–{metal.containedMax} {metal.unit}
                  </div>
                  <div className="text-sm text-gray-600">Contained</div>
                </div>
              )}
              {metal.gradeMin !== undefined && metal.gradeMax !== undefined && (
                <div className="mb-3">
                  <div className="text-lg font-semibold mb-1 text-gray-700">
                    Grade: {metal.gradeMin}–{metal.gradeMax} {metal.gradeUnit}
                  </div>
                </div>
              )}
              <div
                className="text-xs text-gray-600 pt-3 border-t"
                style={{
                  borderColor: "color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
                }}
              >
                {metal.confidenceTag} | {metal.complianceTag}
              </div>
              {metal.notes && <p className="text-xs text-gray-500 mt-2 italic">{metal.notes}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gold Context */}
      {dataRoom.goldContext && (
        <section className="space-y-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{
                color: "var(--color-text-body)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              Gold Context (Illustrative)
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-3xl mx-auto">
              <p className="text-sm md:text-base text-yellow-800">
                ⚠️ All gold estimates are illustrative and non-JORC compliant.
              </p>
            </div>
          </div>
          {dataRoom.goldContext.scenarios && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {dataRoom.goldContext.scenarios.map((scenario, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 lg:p-8 rounded-lg border-2 transition-all duration-300 hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                    borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                  }}
                >
                  <h3
                    className="text-xl lg:text-2xl font-bold mb-4"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {scenario.scenario}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Sulphide Tonnage:</span>
                      <span className="ml-2 text-gray-900 font-bold">
                        ~{scenario.sulphideTonnageMt} Mt
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Au Grade:</span>
                      <span className="ml-2 text-gray-900 font-bold">{scenario.auGradeGt} g/t</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Contained Au:</span>
                      <span className="ml-2 text-gray-900 font-bold text-lg">
                        {formatMetric(scenario.containedAu)}
                      </span>
                    </div>
                    {scenario.indicativeValue && (
                      <div
                        className="pt-3 border-t"
                        style={{
                          borderColor:
                            "color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
                        }}
                      >
                        <span className="text-sm font-semibold text-gray-700">
                          Indicative Value:
                        </span>
                        <span className="ml-2 text-gray-900 font-bold">
                          US${formatMetric(scenario.indicativeValue)} B
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Economics Section */}
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.02em",
            }}
          >
            Economics (Conceptual)
          </h2>
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 md:p-6 max-w-4xl mx-auto">
            <p className="text-yellow-800 font-medium text-sm md:text-base">
              ⚠️ All economics are conceptual and non-JORC compliant. Order-of-magnitude only; not
              NPVs, not recoverable value, and not economic forecasts.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {dataRoom.economics.NSRProxyPerTonne && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 lg:p-8 rounded-lg border-2"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-text-body)" }}
              >
                {dataRoom.economics.NSRProxyPerTonne.label}
              </h3>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "var(--color-accent-main)" }}
              >
                US${formatMetric(dataRoom.economics.NSRProxyPerTonne)}
              </div>
              <div className="text-xs text-gray-600">
                {dataRoom.economics.NSRProxyPerTonne.complianceTag}
              </div>
            </motion.div>
          )}
          {dataRoom.economics.totalMineralisedSystemInSitu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 lg:p-8 rounded-lg border-2"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-text-body)" }}
              >
                {dataRoom.economics.totalMineralisedSystemInSitu.label}
              </h3>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "var(--color-accent-main)" }}
              >
                US${formatMetric(dataRoom.economics.totalMineralisedSystemInSitu)} B
              </div>
              <div className="text-xs text-gray-600">
                {dataRoom.economics.totalMineralisedSystemInSitu.complianceTag}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Source Documents & Export */}
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.02em",
            }}
          >
            Source Documents & Export
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download source documents and export comprehensive reports
          </p>
        </div>
        <div
          className="p-6 lg:p-8 rounded-lg border-2"
          style={{
            background:
              "linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)",
            borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
          }}
        >
          <div className="space-y-6 mb-8">
            {dataRoom.attachments.map((attachment) => (
              <div
                key={attachment.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 bg-white rounded-lg border"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className="font-semibold text-lg"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      {attachment.name}
                    </h3>
                    {attachment.isSourceDocument && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded font-medium">
                        Source Document
                      </span>
                    )}
                  </div>
                  {attachment.description && (
                    <p className="text-sm text-gray-600 mb-2">{attachment.description}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    Uploaded: {formatDateDisplay(attachment.uploadedAt)}
                    {attachment.version && ` | Version: ${attachment.version}`}
                  </p>
                </div>
                <a
                  href={attachment.filePath}
                  download
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center flex-shrink-0"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t"
            style={{
              borderColor: "color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
            }}
          >
            <button
              onClick={() => {
                const onePager = generateOnePager(dataRoom);
                downloadMarkdown(
                  onePager,
                  `${dataRoom.projectSlug}-one-pager-${new Date().toISOString().split("T")[0]}.md`
                );
              }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Export One-Pager
            </button>
            <button
              onClick={() => {
                const fullReport = generateFullReport(dataRoom);
                downloadMarkdown(
                  fullReport,
                  `${dataRoom.projectSlug}-full-report-${new Date().toISOString().split("T")[0]}.md`
                );
              }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Export Full Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
