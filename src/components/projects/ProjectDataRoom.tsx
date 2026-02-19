"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { IProjectDataRoom } from "@/content/types";
import {
  generateOnePager,
  generateFullReport,
  downloadMarkdown,
} from "@/lib/project-data-room-export";
import { formatDateDisplay } from "@/lib/date-utils";
import { useTranslations, useLocale } from "next-intl";

interface ProjectDataRoomProps {
  dataRoom: IProjectDataRoom;
}

export default function ProjectDataRoom({ dataRoom }: ProjectDataRoomProps) {
  const t = useTranslations("dataRoom");
  const locale = useLocale();
  const isNo = locale === "no";

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

  const cardStyle = {
    background: "var(--color-bg-default)",
    border: "1px solid color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
    boxShadow: "none",
  };

  const glowStyle = {
    border: "2px solid var(--color-primary-main)",
  };

  return (
    <div className="space-y-20 lg:space-y-32">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          style={{
            color: "var(--color-text-body)",
            fontFamily: "var(--font-family-heading)",
            letterSpacing: "-0.03em",
          }}
        >
          {t("title")}
        </h2>
        <p
          className="text-lg md:text-xl mb-8 leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {t("subtitle", { projectName: dataRoom.projectName })}
        </p>

        <div
          className="inline-flex flex-wrap justify-center gap-4 px-6 py-4 rounded-xl border"
          style={{
            background: "var(--color-bg-subtle)",
            borderColor: "color-mix(in srgb, var(--color-primary-main) 10%, transparent)",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              {t("labels.type")}
            </span>
            <span className="font-bold" style={{ color: "var(--color-text-body)" }}>
              {dataRoom.depositType}
            </span>
          </div>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              {t("labels.project")}
            </span>
            <span className="font-bold" style={{ color: "var(--color-text-body)" }}>
              {dataRoom.projectType}
            </span>
          </div>
          {dataRoom.licenseInfo.licenseNumber && (
            <>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {t("labels.license")}
                </span>
                <span className="font-bold" style={{ color: "var(--color-text-body)" }}>
                  {dataRoom.licenseInfo.licenseNumber}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Disclaimers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg p-6 md:p-8"
        style={{
          background: "color-mix(in srgb, var(--color-accent-main) 5%, transparent)",
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: "color-mix(in srgb, var(--color-accent-main) 20%, transparent)",
              color: "var(--color-accent-main)",
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text-body)" }}>
              {t("disclaimers.title")}
            </h3>
            <ul className="space-y-2">
              {dataRoom.disclaimers
                .filter((d) => d.isRequired)
                .map((disclaimer) => (
                  <li
                    key={disclaimer.id}
                    className="text-sm md:text-base"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <strong className="font-semibold" style={{ color: "var(--color-text-body)" }}>
                      {disclaimer.title}:
                    </strong>{" "}
                    {disclaimer.text}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Investment Thesis - Alternating Layout */}
      <section>
        <div className="space-y-16 lg:space-y-24">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
              }}
            >
              {t("thesis.title")}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t("thesis.subtitle", { projectName: dataRoom.projectName })}
            </p>
          </div>

          {/* Row 1: 3 Cards Left | Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="flex flex-col gap-6 order-2 lg:order-1 h-full justify-center">
              {dataRoom.investmentThesis.slice(0, 3).map((thesis, idx) => (
                <motion.div
                  key={thesis.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative p-8 rounded-lg transition-all duration-300 hover:translate-x-2 flex-grow flex flex-col justify-center"
                  style={{
                    background: "var(--color-bg-default)",
                    border:
                      "1px solid color-mix(in srgb, var(--color-primary-main) 15%, transparent)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span
                      className="text-2xl font-black opacity-100 transition-opacity"
                      style={{ color: "var(--color-accent-main)" }}
                    >
                      0{thesis.order}
                    </span>
                    <h3 className="text-xl font-bold" style={{ color: "var(--color-text-body)" }}>
                      {(isNo && thesis.title_no) || thesis.title}
                    </h3>
                  </div>
                  <p
                    className="text-base leading-relaxed mb-4 pl-10"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {(isNo && thesis.description_no) || thesis.description}
                  </p>
                  {thesis.keyPoints.length > 0 && (
                    <ul className="space-y-2 pl-10">
                      {((isNo && thesis.keyPoints_no) || thesis.keyPoints).map(
                        (point, pointIdx) => (
                          <li
                            key={pointIdx}
                            className="text-sm flex items-start gap-2.5"
                            style={{ color: "var(--color-text-body)" }}
                          >
                            <span
                              className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: "var(--color-accent-main)" }}
                            />
                            <span>{point}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-200 order-1 lg:order-2">
              <Image
                src="/images/data-room/mine-tunnel.jpg"
                alt="Historic Mine Tunnel"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2 border border-white/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {t("thesis.provenAsset")}
                </div>
                <h3
                  className="text-3xl font-bold mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-family-heading)" }}
                >
                  {t("thesis.deRiskedFoundation")}
                </h3>
                <p className="text-lg opacity-90">{t("thesis.deRiskedDesc")}</p>
              </div>
            </div>
          </div>

          {/* Row 2: Image Left | Remaining Cards Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl border border-gray-200 order-1">
              <Image
                src="/images/data-room/drilling.jpg"
                alt="Modern Exploration"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2 border border-white/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {t("thesis.growthPotential")}
                </div>
                <h3
                  className="text-3xl font-bold mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-family-heading)" }}
                >
                  {t("thesis.districtUpside")}
                </h3>
                <p className="text-lg opacity-90">{t("thesis.districtUpsideDesc")}</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 order-2 h-full justify-center">
              {dataRoom.investmentThesis.slice(3).map((thesis, idx) => (
                <motion.div
                  key={thesis.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative p-8 rounded-lg transition-all duration-300 hover:translate-x-2 flex-grow flex flex-col justify-center"
                  style={{
                    background: "var(--color-bg-default)",
                    border:
                      "1px solid color-mix(in srgb, var(--color-primary-main) 15%, transparent)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span
                      className="text-2xl font-black opacity-100 transition-opacity"
                      style={{ color: "var(--color-accent-main)" }}
                    >
                      0{thesis.order}
                    </span>
                    <h3 className="text-xl font-bold" style={{ color: "var(--color-text-body)" }}>
                      {(isNo && thesis.title_no) || thesis.title}
                    </h3>
                  </div>
                  <p
                    className="text-base leading-relaxed mb-4 pl-10"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {(isNo && thesis.description_no) || thesis.description}
                  </p>
                  {thesis.keyPoints.length > 0 && (
                    <ul className="space-y-2 pl-10">
                      {((isNo && thesis.keyPoints_no) || thesis.keyPoints).map(
                        (point, pointIdx) => (
                          <li
                            key={pointIdx}
                            className="text-sm flex items-start gap-2.5"
                            style={{ color: "var(--color-text-body)" }}
                          >
                            <span
                              className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: "var(--color-accent-main)" }}
                            />
                            <span>{point}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: "var(--color-primary-main)",
              fontFamily: "var(--font-family-heading)",
            }}
          >
            {t("metrics.title")}
          </h2>
          <p className="text-lg text-gray-500">{t("metrics.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            dataRoom.historicMinedTonnes && {
              value: formatMetric(dataRoom.historicMinedTonnes),
              label: t("metrics.historicProduction"),
              sub: `${dataRoom.historicProductionPeriod} • ${dataRoom.historicMinedTonnes.complianceTag}`,
            },
            dataRoom.economics.remainingTonnesConceptual && {
              value: formatMetric(dataRoom.economics.remainingTonnesConceptual),
              label: t("metrics.remainingConceptual"),
              sub: dataRoom.economics.remainingTonnesConceptual.complianceTag,
            },
            dataRoom.economics.inSituValuePerTonne && {
              value: `US$${formatMetric(dataRoom.economics.inSituValuePerTonne)}`,
              label: t("metrics.inSituValue"),
              sub: dataRoom.economics.inSituValuePerTonne.complianceTag,
            },
          ]
            .filter((item): item is { value: string; label: string; sub: string } => !!item)
            .map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-lg text-center overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={cardStyle}
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={glowStyle}
                />
                <div className="relative z-10">
                  <div
                    className="text-5xl lg:text-6xl font-black mb-4 tracking-tight"
                    style={{ color: "var(--color-accent-main)" }}
                  >
                    {metric.value}
                  </div>
                  <div
                    className="text-lg font-bold uppercase tracking-wide mb-3"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {metric.label}
                  </div>
                  <div
                    className="text-sm font-medium px-3 py-1 rounded-full inline-block"
                    style={{
                      background: "var(--color-bg-subtle)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {metric.sub}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Development Plan */}
      <section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: "var(--color-primary-main)",
              fontFamily: "var(--font-family-heading)",
            }}
          >
            {t("development.title")}
          </h2>
          <p className="text-lg text-gray-500">{t("development.subtitle")}</p>
        </div>
        <div className="space-y-6">
          {dataRoom.developmentGates.map((gate, idx) => (
            <motion.div
              key={gate.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-lg overflow-hidden transition-all duration-300"
              style={cardStyle}
            >
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={glowStyle}
              />
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg flex-shrink-0"
                      style={{
                        background:
                          gate.status === "completed"
                            ? "var(--color-success)"
                            : gate.status === "in-progress"
                              ? "var(--color-accent-main)"
                              : "var(--color-bg-subtle)",
                        color:
                          gate.status === "completed" || gate.status === "in-progress"
                            ? "white"
                            : "var(--color-text-body)",
                        border:
                          gate.status === "completed" || gate.status === "in-progress"
                            ? "none"
                            : "2px solid var(--color-border-light)",
                      }}
                    >
                      {gate.gateNumber}
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-text-body)" }}
                      >
                        {(isNo && gate.gateName_no) || gate.gateName}
                      </h3>
                      <p style={{ color: "var(--color-text-secondary)" }}>
                        {(isNo && gate.description_no) || gate.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-22 lg:pl-0">
                    <span
                      className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider"
                      style={{
                        background:
                          gate.status === "completed"
                            ? "color-mix(in srgb, var(--color-success) 15%, transparent)"
                            : gate.status === "in-progress"
                              ? "color-mix(in srgb, var(--color-accent-main) 15%, transparent)"
                              : "var(--color-bg-subtle)",
                        color:
                          gate.status === "completed"
                            ? "var(--color-success)"
                            : gate.status === "in-progress"
                              ? "var(--color-accent-main)"
                              : "var(--color-text-secondary)",
                      }}
                    >
                      {t(`status.${gate.status}`)}
                    </span>
                    <span className="font-bold" style={{ color: "var(--color-text-body)" }}>
                      {gate.targetDate}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 pl-0 lg:pl-22">
                  {gate.keyActions.length > 0 && (
                    <div>
                      <h4
                        className="font-bold mb-3 uppercase text-xs tracking-wider"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {t("development.keyActions")}
                      </h4>
                      <ul className="space-y-2">
                        {((isNo && gate.keyActions_no) || gate.keyActions).map((action, i) => (
                          <li
                            key={i}
                            className="text-sm flex items-start gap-3"
                            style={{ color: "var(--color-text-body)" }}
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-400" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {gate.deliverables.length > 0 && (
                    <div>
                      <h4
                        className="font-bold mb-3 uppercase text-xs tracking-wider"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {t("development.deliverables")}
                      </h4>
                      <ul className="space-y-2">
                        {((isNo && gate.deliverables_no) || gate.deliverables).map((del, i) => (
                          <li
                            key={i}
                            className="text-sm flex items-start gap-3"
                            style={{ color: "var(--color-text-body)" }}
                          >
                            <svg
                              className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Funding Pathway - Using Card Grid */}
      <section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: "var(--color-primary-main)",
              fontFamily: "var(--font-family-heading)",
            }}
          >
            {t("funding.title")}
          </h2>
          <p className="text-lg text-gray-500">{t("funding.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {dataRoom.fundingPrograms.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
              style={cardStyle}
            >
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={glowStyle}
              />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold" style={{ color: "var(--color-text-body)" }}>
                    {program.programName}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-md text-sm font-bold shadow-sm"
                    style={{
                      background: "var(--color-accent-main)",
                      color: "var(--color-accent-contrast)",
                    }}
                  >
                    {program.maxFundingPercentage}%
                  </span>
                </div>

                <div
                  className="space-y-2 mb-6 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <div className="flex justify-between border-b pb-2 border-dashed border-gray-200">
                    <span>{t("labels.organization")}</span>
                    <span className="font-medium text-gray-900">{program.organization}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-dashed border-gray-200">
                    <span>{t("labels.stage")}</span>
                    <span className="font-medium text-gray-900 capitalize">
                      {t(`fundingStage.${program.stage}`)}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-dashed border-gray-200">
                    <span>{t("labels.type")}</span>
                    <span className="font-medium text-gray-900 capitalize">
                      {t(`fundingType.${program.fundingType}`)}
                    </span>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed mb-6 flex-grow"
                  style={{ color: "var(--color-text-body)" }}
                >
                  {program.description}
                </p>

                {program.applicationStatus && (
                  <div
                    className="mt-auto pt-4 border-t"
                    style={{ borderColor: "var(--color-border-light)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          program.applicationStatus === "approved"
                            ? "bg-green-500"
                            : program.applicationStatus === "submitted"
                              ? "bg-blue-500"
                              : "bg-gray-400"
                        }`}
                      />
                      <span
                        className="text-sm font-medium capitalize"
                        style={{ color: "var(--color-text-body)" }}
                      >
                        {t("labels.status")}:{" "}
                        {program.applicationStatus
                          ? t(`status.${program.applicationStatus}`)
                          : program.applicationStatus}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metal Exposure */}
      <section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: "var(--color-primary-main)",
              fontFamily: "var(--font-family-heading)",
            }}
          >
            {t("metalExposure.title")}
          </h2>
          <div className="inline-block px-4 py-2 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm font-medium">
            ⚠️ {t("metalExposure.warning")}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {dataRoom.metalExposure.map((metal, idx) => {
            // Determine background image based on metal name
            let bgImage = null;
            const m = metal.metal.toLowerCase();
            if (m.includes("copper") || m === "cu") bgImage = "/images/data-room/copper.jpg";
            else if (m.includes("zinc") || m === "zn") bgImage = "/images/data-room/zinc.jpg";
            else if (m.includes("sulphur") || m.includes("sulphide") || m === "s")
              bgImage = "/images/data-room/sulphide.jpg";
            else if (m.includes("gold") || m === "au") bgImage = "/images/data-room/gold.jpg";
            else if (m.includes("silver") || m === "ag") bgImage = "/images/data-room/silver.jpg";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-lg text-center overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center min-h-[320px] w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1.33rem)]"
                style={{
                  ...cardStyle,
                  background: bgImage ? "transparent" : cardStyle.background,
                  border: bgImage ? "none" : cardStyle.border,
                }}
              >
                {bgImage && (
                  <>
                    <Image
                      src={bgImage}
                      alt={`${metal.metal} ore`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40" />
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ border: "2px solid var(--color-accent-main)" }}
                    />
                  </>
                )}

                {!bgImage && (
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={glowStyle}
                  />
                )}

                <div className="relative z-10">
                  <h3
                    className="text-5xl font-black mb-4 drop-shadow-md"
                    style={{
                      color: bgImage ? "var(--color-accent-main)" : "var(--color-accent-main)",
                    }}
                  >
                    {metal.metal}
                  </h3>
                  {metal.containedMin !== undefined && (
                    <div className="mb-4">
                      <div
                        className="text-2xl font-bold mb-1 drop-shadow-sm"
                        style={{ color: bgImage ? "white" : "var(--color-text-body)" }}
                      >
                        {metal.containedMin}–{metal.containedMax} {metal.unit}
                      </div>
                      <div
                        className="text-sm uppercase tracking-wider font-semibold"
                        style={{ color: bgImage ? "rgba(255,255,255,0.7)" : "gray" }}
                      >
                        {t("labels.contained")}
                      </div>
                    </div>
                  )}
                  {metal.gradeMin !== undefined && (
                    <div
                      className="mb-6 py-2 rounded-md inline-block px-4 backdrop-blur-sm"
                      style={{
                        background: bgImage ? "rgba(255,255,255,0.1)" : "var(--color-bg-subtle)",
                      }}
                    >
                      <div
                        className="text-sm font-medium"
                        style={{ color: bgImage ? "white" : "var(--color-text-body)" }}
                      >
                        {t("labels.grade")}: {metal.gradeMin}–{metal.gradeMax} {metal.gradeUnit}
                      </div>
                    </div>
                  )}
                  <div
                    className="text-xs border-t pt-4 mt-2"
                    style={{
                      borderColor: bgImage ? "rgba(255,255,255,0.2)" : "var(--color-border-light)",
                      color: bgImage ? "rgba(255,255,255,0.6)" : "gray",
                    }}
                  >
                    {metal.confidenceTag} | {metal.complianceTag}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Documents & Export */}
      <section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: "var(--color-primary-main)",
              fontFamily: "var(--font-family-heading)",
            }}
          >
            {t("downloads.title")}
          </h2>
          <p className="text-lg text-gray-500">{t("downloads.subtitle")}</p>
        </div>

        <div
          className="rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 border"
          style={{
            background: "var(--color-bg-default)",
            borderColor: "var(--color-border-light)",
          }}
        >
          {/* Report Cover Image Column */}
          <div className="relative min-h-[300px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-gray-200">
            <Image
              src="/images/data-room/report-cover.jpg"
              alt="Project Report Cover"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-sm font-bold uppercase tracking-wider mb-2 opacity-80">
                {t("downloads.confidential")}
              </div>
              <div className="text-2xl font-bold leading-tight">{t("downloads.reportTitle")}</div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="p-8 space-y-4 flex-grow">
              {dataRoom.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg border transition-colors hover:border-gray-300"
                  style={{
                    background: "var(--color-bg-subtle)",
                    borderColor: "var(--color-border-light)",
                  }}
                >
                  <div className="flex items-start gap-4 w-full md:w-auto">
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3
                          className="font-bold text-lg"
                          style={{ color: "var(--color-text-body)" }}
                        >
                          {attachment.name}
                        </h3>
                        {attachment.isSourceDocument && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-bold uppercase tracking-wider">
                            {t("labels.source")}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        {t("labels.uploaded")}: {formatDateDisplay(attachment.uploadedAt)}
                        {attachment.version && ` • v${attachment.version}`}
                      </div>
                    </div>
                  </div>

                  <a
                    href={attachment.filePath}
                    download
                    className="w-full md:w-auto px-6 py-3 rounded-md font-bold text-sm text-center transition-all hover:translate-x-1 flex items-center justify-center gap-2"
                    style={{ background: "var(--color-primary-main)", color: "white" }}
                  >
                    {t("downloads.downloadPdf")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            <div
              className="p-8 border-t flex flex-col sm:flex-row items-center gap-4"
              style={{
                background: "var(--color-bg-subtle)",
                borderColor: "var(--color-border-light)",
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-md font-bold transition-all hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                style={{
                  background: "var(--color-accent-main)",
                  color: "var(--color-accent-contrast)",
                }}
              >
                {t("downloads.exportOnePager")}
              </button>
              <button
                onClick={() => {
                  const fullReport = generateFullReport(dataRoom);
                  downloadMarkdown(
                    fullReport,
                    `${dataRoom.projectSlug}-full-report-${new Date().toISOString().split("T")[0]}.md`
                  );
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-md font-bold transition-all hover:-translate-y-1 shadow-md hover:shadow-lg border-2 flex items-center justify-center gap-2"
                style={{
                  background: "transparent",
                  borderColor: "var(--color-accent-main)",
                  color: "var(--color-accent-main)",
                }}
              >
                {t("downloads.exportFullReport")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
