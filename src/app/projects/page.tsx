"use client";

import Link from "next/link";
import { projects } from "@/content/projects";
import ProjectsHeroImage from "@/components/ui/ProjectsHeroImage";
import { motion } from "framer-motion";

export default function ProjectsPage() {
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
              Our{" "}
              <span
                style={{
                  color: "var(--color-accent-main)",
                }}
              >
                Projects
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
              Exploring critical mineral resources across Norway&apos;s most promising regions
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
                  Active Projects
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
                  Total Licenses
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
                  km² Area
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
              Exploration <span style={{ color: "var(--color-accent-main)" }}>Portfolio</span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
              }}
            >
              Our strategic portfolio of critical mineral exploration projects across Norway&apos;s
              most promising geological regions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="card group flex flex-col h-full relative overflow-hidden">
                  {/* Enhanced border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: `2px solid var(--color-primary-main)`,
                      borderRadius: "var(--radius-lg)",
                    }}
                  />
                  <div className="flex-grow flex flex-col relative z-10">
                    <div className="mb-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background:
                            project.priority === "High"
                              ? "var(--color-accent-main)"
                              : "var(--color-slate-500)",
                          color: "white",
                        }}
                      >
                        {project.stage}
                      </span>
                    </div>

                    <h2
                      className="text-3xl font-bold mb-2"
                      style={{ color: "var(--color-navy-900)" }}
                    >
                      {project.name}
                    </h2>

                    <p className="text-lg text-gray-600 mb-4">
                      {project.region}, {project.country}
                    </p>

                    <p className="text-gray-600 mb-4">{project.description}</p>

                    {/* Overview preview if available */}
                    {project.overview && (
                      <p className="text-sm text-gray-500 mb-6 line-clamp-3">{project.overview}</p>
                    )}

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">Licenses</p>
                        <p
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-navy-900)" }}
                        >
                          {project.licenses}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Area</p>
                        <p
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-navy-900)" }}
                        >
                          {project.area}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">Target Minerals</p>
                        <p
                          className="text-lg font-semibold"
                          style={{ color: "var(--color-accent-main)" }}
                        >
                          {project.minerals.join(", ")}
                        </p>
                      </div>
                      {project.coverage && (
                        <div className="col-span-2">
                          <p className="text-sm text-gray-500">Coverage</p>
                          <p className="text-base font-medium text-gray-700">{project.coverage}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-main)] focus:ring-offset-2 rounded mt-auto relative z-10"
                    style={{ color: "var(--color-copper-600)" }}
                  >
                    View Project Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
