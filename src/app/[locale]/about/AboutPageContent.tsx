"use client";

import { companyTimeline, futurePlans, teamMembers } from "@/content/company";
import Timeline from "@/components/ui/timeline";
import AboutHeroImage from "@/components/ui/AboutHeroImage";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutPageContent() {
  const t = useTranslations("about");
  const tTimeline = useTranslations("about.timeline.items");
  const tFuturePlans = useTranslations("about.futurePlans.items");
  const tTeam = useTranslations("about.team");

  // Create translated timeline items
  const translatedTimeline = companyTimeline.map((item) => {
    // Use the year as-is (e.g., "2026+" or "2026") for translation key lookup
    // The year key must match exactly what's in the translation files
    const yearKey = item.year;
    return {
      ...item,
      title: tTimeline(`${yearKey}.title`),
      description: tTimeline(`${yearKey}.description`),
    };
  });

  // Create translated future plans
  const translatedFuturePlans = futurePlans.map((plan, index) => {
    const key =
      plan.year === "2025-2027"
        ? "2025-2027"
        : `2025-2029-${index === 1 ? "1" : index === 2 ? "2" : "3"}`;
    return {
      ...plan,
      title: tFuturePlans(`${key}.title`),
      description: tFuturePlans(`${key}.description`),
    };
  });

  // Create translated team members
  const translatedTeamMembers = teamMembers.map((member) => ({
    ...member,
    role: tTeam(`roles.${member.role}`) || member.role,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <AboutHeroImage />

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
              {t("hero.title")}{" "}
              <span
                style={{
                  color: "var(--color-accent-main)",
                }}
              >
                {t("hero.highlight")}
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
              {t("hero.description")}
            </p>

            {/* Key Values */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  {t("hero.values.responsible")}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("hero.values.mining")}
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  {t("hero.values.sustainable")}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("hero.values.development")}
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  {t("hero.values.strategic")}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("hero.values.exploration")}
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

      {/* Company Overview */}
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

        <div className="container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-display mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              {t("overview.storyTitle").split(" ")[0]}{" "}
              <span style={{ color: "var(--color-accent-main)" }}>
                {t("overview.storyTitle").split(" ")[1]}
              </span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("overview.storySubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* First Paragraph Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group lg:col-span-2 p-8 lg:p-10 rounded-3xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                boxShadow: "none",
              }}
            >
              {/* Enhanced border glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: `2px solid var(--color-primary-main)`,
                }}
              />
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                    color: "var(--color-accent-main)",
                    boxShadow: "none",
                  }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    {t("overview.missionTitle")}
                  </h3>
                  <p
                    className="text-base lg:text-lg leading-relaxed"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {t("overview.description")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Second Paragraph Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group p-8 lg:p-10 rounded-3xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                boxShadow: "none",
              }}
            >
              {/* Enhanced border glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: `2px solid var(--color-primary-main)`,
                }}
              />
              <div className="flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 100%)`,
                    color: "var(--color-primary-main)",
                    boxShadow: "none",
                  }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-primary-main)" }}
                >
                  {t("overview.richHeritage.title")}
                </h3>
                <p
                  className="text-base lg:text-lg leading-relaxed flex-1"
                  style={{ color: "var(--color-text-body)" }}
                >
                  {t("overview.richHeritage.description")}
                </p>
              </div>
            </motion.div>

            {/* Third Paragraph Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group lg:col-span-3 p-8 lg:p-10 rounded-3xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                boxShadow: "none",
              }}
            >
              {/* Enhanced border glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: `2px solid var(--color-primary-main)`,
                }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                    color: "var(--color-accent-main)",
                    boxShadow: "none",
                  }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    {t("overview.explorationPortfolio.title")}
                  </h3>
                  <p
                    className="text-base lg:text-lg leading-relaxed"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {t("overview.explorationPortfolio.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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

        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2
              className="text-display mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              {t("timeline.title").split(" ")[0]}{" "}
              <span style={{ color: "var(--color-accent-main)" }}>
                {t("timeline.title").split(" ")[1]}
              </span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("timeline.subtitle")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Timeline items={translatedTimeline} />
          </motion.div>
        </div>
      </section>

      {/* Strategy */}
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

        <div className="container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-display mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              Our <span style={{ color: "var(--color-accent-main)" }}>Strategy</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("futurePlans.intro")}
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Green Mining Strategy Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group p-8 lg:p-10 rounded-3xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                boxShadow: "none",
              }}
            >
              {/* Enhanced border glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: `2px solid var(--color-primary-main)`,
                }}
              />
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                    color: "var(--color-accent-main)",
                    boxShadow: "none",
                  }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    {t("futurePlans.greenMining.title")}
                  </h3>
                  <p
                    className="text-base lg:text-lg leading-relaxed mb-4"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {t("futurePlans.greenMining.description1")}
                  </p>
                  <p
                    className="text-base lg:text-lg leading-relaxed"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {t("futurePlans.greenMining.description2")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision & Context Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="p-8 lg:p-10 rounded-3xl group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                  border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                  boxShadow: "none",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 100%)`,
                      color: "var(--color-primary-main)",
                      boxShadow: "none",
                    }}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      {t("futurePlans.longTermVision.title")}
                    </h3>
                    <p
                      className="text-base lg:text-lg leading-relaxed"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      {t("futurePlans.longTermVision.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="p-8 lg:p-10 rounded-3xl group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                  border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                  boxShadow: "none",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                      color: "var(--color-accent-main)",
                      boxShadow: "none",
                    }}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      {t("overview.europeanContext.title")}
                    </h3>
                    <p
                      className="text-base lg:text-lg leading-relaxed"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      {t("overview.europeanContext.description")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Comparison Table */}
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

        <div className="container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-display mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              {t("mineralGrade.title")}{" "}
              <span style={{ color: "var(--color-accent-main)" }}>
                {t("mineralGrade.comparison")}
              </span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("mineralGrade.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                mineral: t("mineralGrade.minerals.copper.name"),
                grade: "0.5 - 2.0",
                application: t("mineralGrade.minerals.copper.application"),
                icon: "⚡",
                color: "var(--color-accent-main)",
              },
              {
                mineral: t("mineralGrade.minerals.nickel.name"),
                grade: "0.5 - 1.5",
                application: t("mineralGrade.minerals.nickel.application"),
                icon: "🔋",
                color: "var(--color-primary-main)",
              },
              {
                mineral: t("mineralGrade.minerals.zinc.name"),
                grade: "3.0 - 10.0",
                application: t("mineralGrade.minerals.zinc.application"),
                icon: "🛡️",
                color: "var(--color-accent-main)",
              },
              {
                mineral: t("mineralGrade.minerals.cobalt.name"),
                grade: "0.1 - 0.5",
                application: t("mineralGrade.minerals.cobalt.application"),
                icon: "🔬",
                color: "var(--color-primary-main)",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                  border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                  boxShadow: "none",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 text-2xl"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, ${item.color} 20%, transparent) 0%, color-mix(in srgb, ${item.color} 10%, transparent) 100%)`,
                      boxShadow: "none",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      {item.mineral}
                    </h3>
                    <div
                      className="text-xl md:text-2xl font-extrabold mb-3"
                      style={{ color: item.color }}
                    >
                      {item.grade}%
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      {item.application}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-display mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              {t("futurePlans.title").split(" & ")[0]} &{" "}
              <span style={{ color: "var(--color-accent-main)" }}>
                {t("futurePlans.title").split(" & ")[1]}
              </span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("futurePlans.subtitle")}
            </p>
          </motion.div>

          <div className="space-y-6">
            {translatedFuturePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-8 lg:p-10 rounded-3xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                  border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                  boxShadow: "none",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />
                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                      color: "var(--color-accent-main)",
                      boxShadow: "none",
                    }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider"
                        style={{
                          background:
                            "color-mix(in srgb, var(--color-primary-main) 15%, transparent)",
                          color: "var(--color-primary-main)",
                          border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                        }}
                      >
                        {plan.year}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-4"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      {plan.title}
                    </h3>
                    <p
                      className="text-base lg:text-lg leading-relaxed"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      {plan.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management & Team */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-default)" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
        </div>

        <div className="container max-w-6xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2
              className="text-display mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              {t("team.title").split(" & ")[0]} &{" "}
              <span style={{ color: "var(--color-accent-main)" }}>
                {t("team.title").split(" & ")[1]}
              </span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("team.subtitle")}
            </p>
          </motion.div>

          {/* Tree Structure */}
          <div className="space-y-12 lg:space-y-16">
            {/* Management - Top Level */}
            {(() => {
              const management = translatedTeamMembers.filter((m) => m.category === "Management");
              if (management.length === 0) return null;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Category Label */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                        color: "var(--color-accent-main)",
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      {tTeam("management")}
                    </h3>
                  </div>

                  {/* Management Cards - Horizontal */}
                  <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                    {management.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                          border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                          boxShadow: "none",
                          minWidth: "200px",
                          flex: "1 1 auto",
                          maxWidth: "280px",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            border: `2px solid var(--color-primary-main)`,
                          }}
                        />
                        <div className="p-4 lg:p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
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
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4
                                className="text-base lg:text-lg font-bold mb-1 leading-tight truncate"
                                style={{ color: "var(--color-primary-main)" }}
                              >
                                {member.name}
                              </h4>
                              <p
                                className="text-xs lg:text-sm font-semibold leading-snug"
                                style={{ color: "var(--color-accent-main)" }}
                              >
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}

            {/* Board - Second Level */}
            {(() => {
              const board = translatedTeamMembers.filter((m) => m.category === "Board");
              if (board.length === 0) return null;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Connecting Line */}
                  <div
                    className="absolute left-1/2 top-0 w-0.5 h-6 -translate-x-1/2 opacity-30"
                    style={{ background: "var(--color-primary-main)" }}
                  />

                  {/* Category Label */}
                  <div className="flex items-center gap-3 mb-6 mt-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                        color: "var(--color-accent-main)",
                      }}
                    >
                      <svg
                        className="w-5 h-5"
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
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      {tTeam("board")}
                    </h3>
                  </div>

                  {/* Board Cards - Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
                    {board.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                          border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                          boxShadow: "none",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            border: `2px solid var(--color-primary-main)`,
                          }}
                        />
                        <div className="p-4 lg:p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                              style={{
                                background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 100%)`,
                                color: "var(--color-primary-main)",
                              }}
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4
                                className="text-sm lg:text-base font-bold mb-1 leading-tight"
                                style={{ color: "var(--color-primary-main)" }}
                              >
                                {member.name}
                              </h4>
                              <p
                                className="text-xs font-semibold leading-snug"
                                style={{ color: "var(--color-accent-main)" }}
                              >
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}

            {/* Advisory - Third Level */}
            {(() => {
              const advisory = translatedTeamMembers.filter((m) => m.category === "Advisory");
              if (advisory.length === 0) return null;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative"
                >
                  {/* Connecting Line */}
                  <div
                    className="absolute left-1/2 top-0 w-0.5 h-6 -translate-x-1/2 opacity-30"
                    style={{ background: "var(--color-primary-main)" }}
                  />

                  {/* Category Label */}
                  <div className="flex items-center gap-3 mb-6 mt-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                        color: "var(--color-accent-main)",
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      {tTeam("advisory")}
                    </h3>
                  </div>

                  {/* Advisory Cards - Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
                    {advisory.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                          border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                          boxShadow: "none",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            border: `2px solid var(--color-primary-main)`,
                          }}
                        />
                        <div className="p-4 lg:p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                              style={{
                                background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 100%)`,
                                color: "var(--color-primary-main)",
                              }}
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4
                                className="text-sm lg:text-base font-bold mb-1 leading-tight"
                                style={{ color: "var(--color-primary-main)" }}
                              >
                                {member.name}
                              </h4>
                              <p
                                className="text-xs font-semibold leading-snug"
                                style={{ color: "var(--color-accent-main)" }}
                              >
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </div>
      </section>
    </div>
  );
}
