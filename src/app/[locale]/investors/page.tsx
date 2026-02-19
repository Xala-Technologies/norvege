"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import InvestorsHeroImage from "@/components/ui/InvestorsHeroImage";
import { useTranslations } from "next-intl";

export default function InvestorsPage() {
  const t = useTranslations("investors");
  const tStats = useTranslations("home.stats.metrics");

  const documents = [
    { title: "Company Presentation 2024", type: "PDF", date: "2024-01-15" },
    { title: "Q4 2023 Exploration Update", type: "PDF", date: "2024-01-10" },
    { title: "Annual Report 2023", type: "PDF", date: "2024-03-01" },
  ];

  const keyFacts = [
    { label: tStats("explorationLicenses.label"), value: "74", icon: "📋" },
    { label: tStats("licensedArea.label"), value: "1,690", unit: "km²", icon: "🗺️" },
    { label: tStats("viableFinds.label"), value: "31", icon: "💎" },
    {
      label: tStats("estValue.label"),
      value: "4,885",
      unit: tStats("estValue.label").split(" ").slice(1).join(" "),
      icon: "💰",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <InvestorsHeroImage />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none z-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="container relative z-20 pt-32 pb-20 lg:pt-36 lg:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight"
              style={{
                color: "var(--color-text-on-dark)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              {t("title").split(" ")[0]}{" "}
              <span
                style={{
                  color: "var(--color-accent-main)",
                }}
              >
                {t("title").split(" ")[1]}
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{
                color: "color-mix(in srgb, var(--color-text-on-dark) 90%, transparent)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              {t("subtitle")}
            </p>

            {/* Key Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-12">
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  4,885
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("keyStats.estValue")}
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  74
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("keyStats.licenses")}
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  1,690
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("keyStats.area")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--color-accent-main) 50%, transparent 100%)",
          }}
        />
      </section>

      {/* Investment Summary */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "var(--color-bg-default)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-auto min-h-[500px]">
            <Image
              src="/images/investors/investment-summary.jpg"
              alt="Investment Opportunity"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center p-8 lg:p-20 relative z-10">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2
                className="text-display mb-8"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("investmentOpportunity").split(" ")[0]}{" "}
                <span style={{ color: "var(--color-accent-main)" }}>
                  {t("investmentOpportunity").split(" ")[1]}
                </span>
              </h2>

              <div className="grid gap-6">
                {/* Strategic Position Card */}
                <div
                  className="group p-6 lg:p-8 rounded-sm transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background: `var(--color-bg-subtle)`,
                    border: `1px solid color-mix(in srgb, var(--color-primary-main) 10%, transparent)`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                        color: "var(--color-accent-main)",
                      }}
                    >
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
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-xl mb-2 font-bold"
                        style={{ color: "var(--color-text-body)" }}
                      >
                        {t("strategicPosition.title")}
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {t("strategicPosition.description")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Value Creation Card */}
                <div
                  className="group p-6 lg:p-8 rounded-sm transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background: `var(--color-bg-subtle)`,
                    border: `1px solid color-mix(in srgb, var(--color-primary-main) 10%, transparent)`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 100%)`,
                        color: "var(--color-primary-main)",
                      }}
                    >
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-xl mb-2 font-bold"
                        style={{ color: "var(--color-text-body)" }}
                      >
                        {t("valueCreation.title")}
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {t("valueCreation.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Onshore: Capital Reality */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "var(--color-bg-subtle)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side (Left) */}
          <div className="flex flex-col justify-center p-8 lg:p-20 relative z-10 order-2 lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2
                className="text-display mb-6"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("whyOnshore.title")}{" "}
                <span style={{ color: "var(--color-accent-main)" }}>
                  {t("whyOnshore.subtitle")}
                </span>
              </h2>
              <p className="text-lg mb-8" style={{ color: "var(--color-text-body)" }}>
                {t("whyOnshore.intro")}
              </p>

              <div className="space-y-6">
                {/* DSM Card */}
                <div
                  className="p-6 lg:p-8 rounded-sm overflow-hidden"
                  style={{
                    background: "var(--color-bg-default)",
                    border:
                      "1px solid color-mix(in srgb, var(--color-primary-main) 25%, transparent)",
                  }}
                >
                  <div
                    className="text-sm font-bold uppercase tracking-wider mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {t("whyOnshore.dsm.label")}
                  </div>
                  <ul className="space-y-3" style={{ color: "var(--color-text-body)" }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-primary-main)" }}>•</span>
                      {t("whyOnshore.dsm.point1")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-primary-main)" }}>•</span>
                      {t("whyOnshore.dsm.point2")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-primary-main)" }}>•</span>
                      {t("whyOnshore.dsm.point3")}
                    </li>
                  </ul>
                </div>

                {/* Onshore Card */}
                <div
                  className="p-6 lg:p-8 rounded-sm overflow-hidden"
                  style={{
                    background: "var(--color-bg-default)",
                    border:
                      "2px solid color-mix(in srgb, var(--color-accent-main) 40%, transparent)",
                  }}
                >
                  <div
                    className="text-sm font-bold uppercase tracking-wider mb-4"
                    style={{ color: "var(--color-accent-main)" }}
                  >
                    {t("whyOnshore.onshore.label")}
                  </div>
                  <ul className="space-y-3" style={{ color: "var(--color-text-body)" }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("whyOnshore.onshore.point1")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("whyOnshore.onshore.point2")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("whyOnshore.onshore.point3")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("whyOnshore.onshore.point4")}
                    </li>
                  </ul>
                  <div
                    className="mt-6 pt-6 border-t border-solid flex flex-wrap gap-4"
                    style={{
                      borderColor: "color-mix(in srgb, var(--color-accent-main) 30%, transparent)",
                    }}
                  >
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {t("whyOnshore.timeline.y2026")}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {t("whyOnshore.timeline.y2027")}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {t("whyOnshore.timeline.y2028")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side (Right) */}
          <div className="relative h-[400px] lg:h-auto min-h-[500px] order-1 lg:order-2">
            <Image
              src="/images/investors/why-onshore.jpg"
              alt="Why Onshore"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </div>
      </section>

      {/* Onshore Critical Minerals: Market-Led & Proven */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "var(--color-bg-default)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side (Left) */}
          <div className="relative h-[400px] lg:h-auto min-h-[500px]">
            <Image
              src="/images/investors/critical-minerals.jpg"
              alt="Critical Minerals"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Content Side (Right) */}
          <div className="flex flex-col justify-center p-8 lg:p-20 relative z-10">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2
                className="text-display mb-2"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("onshoreProven.title")}{" "}
                <span style={{ color: "var(--color-accent-main)" }}>
                  {t("onshoreProven.subtitle")}
                </span>
              </h2>

              <div className="space-y-6 mt-8">
                <div
                  className="group p-6 lg:p-8 rounded-sm overflow-hidden"
                  style={{
                    background: "var(--color-bg-default)",
                    border:
                      "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                  }}
                >
                  <p
                    className="text-base lg:text-lg leading-relaxed mb-6"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {t("onshoreProven.column1.intro")}
                  </p>
                  <ul className="space-y-3" style={{ color: "var(--color-text-body)" }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("onshoreProven.column1.point1")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("onshoreProven.column1.point2")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("onshoreProven.column1.point3")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("onshoreProven.column1.point4")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("onshoreProven.column1.point5")}
                    </li>
                  </ul>
                </div>

                <div
                  className="group p-6 lg:p-8 rounded-sm overflow-hidden"
                  style={{
                    background: "var(--color-bg-default)",
                    border:
                      "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                  }}
                >
                  <p
                    className="text-base lg:text-lg leading-relaxed mb-6"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {t("onshoreProven.column2.intro")}
                  </p>
                  <ul className="space-y-3" style={{ color: "var(--color-text-body)" }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("onshoreProven.column2.point1")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("onshoreProven.column2.point2")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("onshoreProven.column2.point3")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "var(--color-accent-main)" }}>•</span>
                      {t("onshoreProven.column2.point4")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-subtle)" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-display mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              {t("keyFacts.title").split(" ")[0]}{" "}
              <span style={{ color: "var(--color-accent-main)" }}>
                {t("keyFacts.title").split(" ")[1]}
              </span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("keyFacts.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {keyFacts.map((fact, index) => (
              <div
                key={index}
                className="group relative p-8 lg:p-10 rounded-md transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{
                  background: `var(--color-bg-default)`,
                  border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                  boxShadow: "none",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />

                {/* Icon */}
                <div className="text-center mb-6">
                  <div
                    className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                      boxShadow: "none",
                    }}
                  >
                    <span className="text-3xl">{fact.icon}</span>
                  </div>
                </div>

                {/* Value */}
                <div className="text-center mb-3">
                  <div
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-1 leading-none"
                    style={{ color: "var(--color-accent-main)" }}
                  >
                    {fact.value}
                  </div>
                  {fact.unit && (
                    <div
                      className="text-lg"
                      style={{
                        color: "var(--color-accent-main)",
                        fontFamily: "var(--font-family-body)",
                        fontWeight: "var(--font-weight-bold)",
                      }}
                    >
                      {fact.unit}
                    </div>
                  )}
                </div>

                {/* Label */}
                <div
                  className="text-center text-base lg:text-lg"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-body)",
                    fontWeight: "var(--font-weight-black)",
                  }}
                >
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Valuation Methodology */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-default)" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
        </div>

        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-display mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              {t("methodology.title").split(" ")[0]}{" "}
              <span style={{ color: "var(--color-accent-main)" }}>
                {t("methodology.title").split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("methodology.subtitle")}
            </p>
          </div>

          <div
            className="group p-8 lg:p-10 rounded-md relative overflow-hidden"
            style={{
              background: `var(--color-bg-default)`,
              border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
              boxShadow: "none",
            }}
          >
            {/* Enhanced border glow on hover */}
            <div
              className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                border: `2px solid var(--color-primary-main)`,
              }}
            />
            <div className="relative">
              <div className="prose prose-lg max-w-none">
                <p
                  className="text-base lg:text-lg leading-relaxed whitespace-pre-line"
                  style={{ color: "var(--color-text-body)" }}
                >
                  {t("methodology.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-subtle)" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
        </div>

        <div className="container max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-display mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              {t("documents.title").split(" & ")[0]} &{" "}
              <span style={{ color: "var(--color-accent-main)" }}>
                {t("documents.title").split(" & ")[1]}
              </span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("documents.subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="group relative p-6 lg:p-8 rounded-sm transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: `var(--color-bg-default)`,
                  border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                  boxShadow: "none",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />

                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-5 flex-1">
                    {/* PDF Icon */}
                    <div
                      className="w-16 h-16 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, var(--color-error) 20%, transparent) 0%, color-mix(in srgb, var(--color-error) 10%, transparent) 100%)`,
                        color: "var(--color-error)",
                        boxShadow: "none",
                      }}
                    >
                      <svg
                        className="w-8 h-8"
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

                    {/* Document Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                          style={{
                            background: "color-mix(in srgb, var(--color-error) 15%, transparent)",
                            color: "var(--color-error)",
                            border: `1px solid color-mix(in srgb, var(--color-error) 30%, transparent)`,
                          }}
                        >
                          {doc.type}
                        </span>
                      </div>
                      <h3
                        className="text-xl lg:text-2xl font-bold mb-2"
                        style={{ color: "var(--color-primary-main)" }}
                      >
                        {doc.title}
                      </h3>
                      <div
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>
                          {new Date(doc.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    className="group/btn flex items-center gap-3 px-6 py-3.5 rounded-sm font-bold text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background: "var(--color-accent-main)",
                      color: "var(--color-accent-contrast)",
                      boxShadow: "none",
                      fontFamily: "var(--font-family-body)",
                    }}
                  >
                    <span>{t("documents.download")}</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container max-w-3xl text-center">
          <h2
            className="text-3xl mb-4"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.03em",
            }}
          >
            {t("inquiries.title")}
          </h2>
          <p
            className="text-lg mb-6"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-loose)",
            }}
          >
            {t("inquiries.description")}
          </p>
          <Link href="/contact" className="btn btn-primary group/contact">
            <span className="inline-flex items-center gap-2">
              {t("inquiries.cta")}
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover/contact:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
