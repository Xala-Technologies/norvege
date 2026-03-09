"use client";

import { Link } from "@/i18n/routing";
import { projects } from "@/content/projects";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const NAVY = "#1B2A4A";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const tProjects = useTranslations("projects.items");
  const locale = useLocale();

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
    };
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20" style={{ background: NAVY }}>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
              style={{
                color: "white",
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl leading-relaxed mb-10"
              style={{ color: "rgba(255, 255, 255, 0.75)" }}
            >
              {t("subtitle")}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-10"
            >
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: "white" }}>
                  {projects.length}
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {t("activeProjects")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: "white" }}>
                  {projects.reduce((sum, p) => sum + p.licenses, 0)}
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {t("totalLicenses")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: "white" }}>
                  {projects.reduce(
                    (sum, p) => sum + (parseInt(p.area.replace(/[^\d]/g, "")) || 0),
                    0
                  )}{" "}
                  km²
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {t("totalArea")}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24" style={{ background: "var(--color-bg-default)" }}>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2
              className="text-3xl lg:text-4xl"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                color: NAVY,
              }}
            >
              {t("portfolio.title")}
            </h2>
            <div
              className="w-20 h-px mx-auto mt-4 mb-4"
              style={{ background: "rgba(27, 42, 74, 0.25)" }}
            />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(27, 42, 74, 0.6)" }}>
              {t("portfolio.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {translatedProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full group">
                  <div
                    className="h-full p-8 rounded-md transition-all duration-200 hover:-translate-y-1"
                    style={{
                      background: "white",
                      border: "1px solid rgba(27, 42, 74, 0.1)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
                      <span
                        className="px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider"
                        style={{
                          background: "rgba(27, 42, 74, 0.08)",
                          color: NAVY,
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
                      <span className="text-sm" style={{ color: "rgba(27, 42, 74, 0.5)" }}>
                        {project.region}, {project.country}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl mb-3 transition-colors"
                      style={{
                        fontFamily: "var(--font-family-heading)",
                        fontWeight: 700,
                        color: NAVY,
                      }}
                    >
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-base leading-relaxed mb-6 line-clamp-3"
                      style={{ color: "rgba(27, 42, 74, 0.6)" }}
                    >
                      {project.description}
                    </p>

                    {/* Minerals */}
                    <div className="mb-6">
                      <span
                        className="text-xs font-bold uppercase tracking-wider block mb-2"
                        style={{ color: "rgba(27, 42, 74, 0.4)" }}
                      >
                        {t("targetMinerals")}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.minerals.map((mineral) => (
                          <span
                            key={mineral}
                            className="px-2.5 py-1 rounded-sm text-xs font-medium"
                            style={{
                              background: "rgba(27, 42, 74, 0.05)",
                              color: "rgba(27, 42, 74, 0.7)",
                            }}
                          >
                            {t(`mineralNames.${mineral}`) || mineral}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div
                      className="flex gap-8 pt-5 border-t"
                      style={{ borderColor: "rgba(27, 42, 74, 0.08)" }}
                    >
                      <div>
                        <span
                          className="text-xs uppercase tracking-wider block mb-1"
                          style={{ color: "rgba(27, 42, 74, 0.4)" }}
                        >
                          {t("licenses")}
                        </span>
                        <span className="text-lg font-bold" style={{ color: NAVY }}>
                          {project.licenses}
                        </span>
                      </div>
                      <div>
                        <span
                          className="text-xs uppercase tracking-wider block mb-1"
                          style={{ color: "rgba(27, 42, 74, 0.4)" }}
                        >
                          {t("area")}
                        </span>
                        <span className="text-lg font-bold" style={{ color: NAVY }}>
                          {project.area}
                        </span>
                      </div>
                    </div>

                    {/* View link */}
                    <div
                      className="mt-6 flex items-center text-sm font-semibold"
                      style={{ color: NAVY }}
                    >
                      <span className="group-hover:underline underline-offset-4">
                        {t("viewProjectDetails")}
                      </span>
                      <svg
                        className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1"
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
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
