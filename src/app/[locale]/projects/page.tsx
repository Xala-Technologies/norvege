"use client";

import { Link } from "@/i18n/routing";
import { projects } from "@/content/projects";
import ProjectsHeroImage from "@/components/ui/ProjectsHeroImage";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const tProjects = useTranslations("projects.items");
  const locale = useLocale();

  // Create translated projects
  const translatedProjects = projects.map((project) => {
    const projectKey = project.slug.replace(/-/g, "");
    const isNo = locale === "no";

    return {
      ...project,
      name: (isNo && project.name_no) || project.name,
      description:
        (isNo && project.description_no) ||
        tProjects(`${projectKey}.description`) ||
        project.description,
      overview:
        (isNo && project.overview_no) || tProjects(`${projectKey}.overview`) || project.overview,
      coverage:
        (isNo && project.coverage_no) || tProjects(`${projectKey}.coverage`) || project.coverage,
    };
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <ProjectsHeroImage />

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

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mt-12">
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  {projects.length}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("activeProjects")}
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  {projects.reduce((sum, p) => sum + p.licenses, 0)}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("totalLicenses")}
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  {projects.reduce((sum, p) => {
                    const area = parseInt(p.area.replace(/[^\d]/g, "")) || 0;
                    return sum + area;
                  }, 0)}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("totalArea")}
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

      {/* Projects Grid */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-default)" }}
      >
        {/* Refined background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03]"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03]"
            style={{ background: "var(--color-accent-main)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2
              className="text-display mb-6"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
              }}
            >
              {t("portfolio.title").split(" ")[0]}{" "}
              <span style={{ color: "var(--color-accent-main)" }}>
                {t("portfolio.title").split(" ")[1]}
              </span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
              }}
            >
              {t("portfolio.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {translatedProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full group">
                  <div
                    className="h-full relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white/50 backdrop-blur-sm dark:bg-slate-900/50"
                    style={{
                      border:
                        "1px solid color-mix(in srgb, var(--color-primary-main) 15%, transparent)",
                    }}
                  >
                    {/* Enhanced border glow on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        border: "2px solid var(--color-primary-main)",
                        boxShadow:
                          "0 0 20px color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
                      }}
                    />

                    <div className="p-8 lg:p-10 flex flex-col h-full relative z-10">
                      {/* Header: Stage Badge & Location */}
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                        <span
                          className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm"
                          style={{
                            background:
                              project.priority === "High"
                                ? "var(--color-accent-main)"
                                : "var(--color-slate-500)",
                            color: "white",
                          }}
                        >
                          {project.stage === "Resource Definition"
                            ? t("resourceDefinition")
                            : project.stage === "Advanced Exploration"
                              ? t("advancedExploration")
                              : project.stage === "Early Exploration"
                                ? t("earlyExploration")
                                : project.stage === "Active Exploration"
                                  ? t("activeExploration") || project.stage
                                  : project.stage}
                        </span>

                        <div
                          className="flex items-center text-sm font-medium"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          <svg
                            className="w-4 h-4 mr-1.5 opacity-70"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {project.region}, {project.country}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3
                        className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-[var(--color-primary-main)] transition-colors duration-300"
                        style={{
                          color: "var(--color-text-body)",
                          fontFamily: "var(--font-family-heading)",
                        }}
                      >
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-lg mb-8 line-clamp-3 leading-relaxed"
                        style={{
                          color: "var(--color-text-secondary)",
                          fontFamily: "var(--font-family-body)",
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Metrics Grid */}
                      <div
                        className="grid grid-cols-2 gap-y-6 gap-x-8 mt-auto pt-8 border-t"
                        style={{
                          borderColor:
                            "color-mix(in srgb, var(--color-text-body) 10%, transparent)",
                        }}
                      >
                        {/* Target Minerals - Full width if needed or spanning col */}
                        <div className="col-span-2">
                          <span
                            className="text-xs font-bold uppercase tracking-wider block mb-2 opacity-70"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {t("targetMinerals")}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.minerals.map((mineral) => (
                              <span
                                key={mineral}
                                className="inline-block px-3 py-1 rounded-md text-sm font-semibold bg-[var(--color-bg-subtle)] text-[var(--color-accent-main)]"
                              >
                                {t(`mineralNames.${mineral}`) || mineral}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Licenses */}
                        <div>
                          <span
                            className="text-xs font-bold uppercase tracking-wider block mb-1 opacity-70"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {t("licenses")}
                          </span>
                          <span
                            className="text-lg font-bold"
                            style={{ color: "var(--color-text-body)" }}
                          >
                            {project.licenses}
                          </span>
                        </div>

                        {/* Area */}
                        <div>
                          <span
                            className="text-xs font-bold uppercase tracking-wider block mb-1 opacity-70"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {t("area")}
                          </span>
                          <span
                            className="text-lg font-bold"
                            style={{ color: "var(--color-text-body)" }}
                          >
                            {project.area}
                          </span>
                        </div>
                      </div>

                      {/* View Details Indicator */}
                      <div
                        className="mt-8 flex items-center text-sm font-bold group/link"
                        style={{ color: "var(--color-accent-main)" }}
                      >
                        <span className="group-hover:underline underline-offset-4">
                          {t("viewProjectDetails")}
                        </span>
                        <svg
                          className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
