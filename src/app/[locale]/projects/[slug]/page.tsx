import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { getProjectBySlug, getAllProjectSlugs } from "@/content/projects";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import Timeline from "@/components/ui/timeline";
import { getTranslations } from "next-intl/server";
import { getProjectDataRoomBySlug } from "@/content/killingdal-data-room";
import ProjectDataRoom from "@/components/projects/ProjectDataRoom";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const t = await getTranslations({ locale, namespace: "projects" });

  return generateSEOMetadata({
    title: `${project.name} - NORVEGE MINERALS AS`,
    description: project.description,
    path: `/${locale}/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const project = getProjectBySlug(slug);
  const t = await getTranslations({ locale, namespace: "projects" });
  const dataRoom = getProjectDataRoomBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background: "var(--color-navy-900)",
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "var(--color-accent-main)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10"
            style={{ background: "var(--color-accent-main)" }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            {/* Stage Badge */}
            <div
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{
                background: "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                borderColor: "color-mix(in srgb, var(--color-accent-main) 40%, transparent)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--color-accent-main)" }}
              />
              <span
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-accent-main)" }}
              >
                {project.stage}
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-[0.9] tracking-tight"
              style={{
                color: "var(--color-text-on-dark)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.04em",
              }}
            >
              {project.name}
            </h1>

            {/* Location & Description Row */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: "color-mix(in srgb, var(--color-accent-main) 20%, transparent)",
                    }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "var(--color-accent-main)" }}
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
                  </div>
                  <div>
                    <p
                      className="text-sm uppercase tracking-wider opacity-70"
                      style={{ color: "var(--color-text-on-dark)" }}
                    >
                      Location
                    </p>
                    <p
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: "var(--color-text-on-dark)" }}
                    >
                      {project.region}, {project.country}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className="text-xl md:text-2xl leading-relaxed"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 90%, transparent)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "var(--line-height-loose)",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>

            {/* Key Stats - Enhanced */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 pt-8 border-t"
              style={{
                borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
              }}
            >
              <div className="text-center lg:text-left">
                <div
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-2"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.licenses}
                </div>
                <div
                  className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-80"
                  style={{
                    color: "var(--color-text-on-dark)",
                  }}
                >
                  {t("licenses")}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-2"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.area}
                </div>
                <div
                  className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-80"
                  style={{
                    color: "var(--color-text-on-dark)",
                  }}
                >
                  {t("totalArea")}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-2"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.minerals.length}
                </div>
                <div
                  className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-80"
                  style={{
                    color: "var(--color-text-on-dark)",
                  }}
                >
                  Minerals
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-2"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.priority}
                </div>
                <div
                  className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-80"
                  style={{
                    color: "var(--color-text-on-dark)",
                  }}
                >
                  {t("priority")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview - Split Layout */}
      {project.overview && (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{ background: "var(--color-accent-main)" }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <div className="sticky top-24">
                    <span
                      className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
                      style={{ color: "var(--color-accent-main)" }}
                    >
                      Overview
                    </span>
                    <h2
                      className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
                      style={{
                        color: "var(--color-text-body)",
                        fontFamily: "var(--font-family-heading)",
                        fontWeight: "var(--font-weight-black)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      Project
                      <br />
                      <span style={{ color: "var(--color-accent-main)" }}>Overview</span>
                    </h2>
                    <div
                      className="h-2 w-32 rounded-full"
                      style={{ background: "var(--color-accent-main)" }}
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div
                    className="p-8 lg:p-12 rounded-2xl border-2"
                    style={{
                      background: "var(--color-bg-default)",
                      borderColor: "color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
                    }}
                  >
                    <p
                      className="text-lg md:text-xl lg:text-2xl leading-relaxed"
                      style={{
                        color: "var(--color-text-body)",
                        fontFamily: "var(--font-family-body)",
                        lineHeight: "var(--line-height-loose)",
                      }}
                    >
                      {project.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Metrics - Card Grid */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{
          background: "var(--color-bg-subtle)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span
                className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-accent-main)" }}
              >
                Metrics
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
                style={{
                  color: "var(--color-text-body)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.03em",
                }}
              >
                Key <span style={{ color: "var(--color-accent-main)" }}>Metrics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Licenses Card */}
              <div
                className="group p-8 lg:p-10 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "var(--color-bg-default)",
                  borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: "var(--color-accent-main)",
                  }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div
                  className="text-6xl md:text-7xl font-black mb-4"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.licenses}
                </div>
                <div
                  className="text-lg font-bold uppercase tracking-wider"
                  style={{
                    color: "var(--color-text-body)",
                  }}
                >
                  {t("explorationLicenses")}
                </div>
              </div>

              {/* Area Card */}
              <div
                className="group p-8 lg:p-10 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "var(--color-bg-default)",
                  borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: "var(--color-primary-main)",
                  }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div
                  className="text-6xl md:text-7xl font-black mb-4"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.area}
                </div>
                <div
                  className="text-lg font-bold uppercase tracking-wider"
                  style={{
                    color: "var(--color-text-body)",
                  }}
                >
                  {t("totalArea")}
                </div>
              </div>

              {/* Minerals Card */}
              <div
                className="group p-8 lg:p-10 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "var(--color-bg-default)",
                  borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: "var(--color-accent-main)",
                  }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div
                  className="text-6xl md:text-7xl font-black mb-4"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.minerals.length}
                </div>
                <div
                  className="text-lg font-bold uppercase tracking-wider mb-4"
                  style={{
                    color: "var(--color-text-body)",
                  }}
                >
                  {t("targetMinerals")}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.minerals.slice(0, 3).map((mineral, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                      style={{
                        background: "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                        color: "var(--color-accent-main)",
                      }}
                    >
                      {mineral}
                    </span>
                  ))}
                  {project.minerals.length > 3 && (
                    <span
                      className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                      style={{
                        background:
                          "color-mix(in srgb, var(--color-primary-main) 15%, transparent)",
                        color: "var(--color-primary-main)",
                      }}
                    >
                      +{project.minerals.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geology & Exploration - Side by Side */}
      {(project.geology || project.exploration) && (
        <section className="relative py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Geology */}
                {project.geology && (
                  <div>
                    <span
                      className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
                      style={{ color: "var(--color-accent-main)" }}
                    >
                      Geology
                    </span>
                    <h2
                      className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
                      style={{
                        color: "var(--color-text-body)",
                        fontFamily: "var(--font-family-heading)",
                        fontWeight: "var(--font-weight-black)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      Geological
                      <br />
                      <span style={{ color: "var(--color-accent-main)" }}>Context</span>
                    </h2>
                    <div
                      className="p-8 lg:p-10 rounded-2xl border-2"
                      style={{
                        background: "var(--color-bg-default)",
                        borderColor:
                          "color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
                      }}
                    >
                      <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{
                          color: "var(--color-text-body)",
                          fontFamily: "var(--font-family-body)",
                          lineHeight: "var(--line-height-loose)",
                        }}
                      >
                        {project.geology}
                      </p>
                    </div>
                  </div>
                )}

                {/* Exploration */}
                {project.exploration && (
                  <div>
                    <span
                      className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
                      style={{ color: "var(--color-accent-main)" }}
                    >
                      Exploration
                    </span>
                    <h2
                      className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
                      style={{
                        color: "var(--color-text-body)",
                        fontFamily: "var(--font-family-heading)",
                        fontWeight: "var(--font-weight-black)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      Exploration
                      <br />
                      <span style={{ color: "var(--color-accent-main)" }}>Strategy</span>
                    </h2>
                    <div
                      className="p-8 lg:p-10 rounded-2xl border-2"
                      style={{
                        background: "var(--color-bg-default)",
                        borderColor:
                          "color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
                      }}
                    >
                      <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{
                          color: "var(--color-text-body)",
                          fontFamily: "var(--font-family-body)",
                          lineHeight: "var(--line-height-loose)",
                        }}
                      >
                        {project.exploration}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Timeline */}
      {project.timeline && project.timeline.length > 0 && (
        <section
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{
            background: "var(--color-bg-subtle)",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span
                  className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  History
                </span>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: "var(--font-weight-black)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Project <span style={{ color: "var(--color-accent-main)" }}>Timeline</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Key milestones and historical development
                </p>
              </div>
              <Timeline items={project.timeline} />
            </div>
          </div>
        </section>
      )}

      {/* License Coverage */}
      {project.coverage && (
        <section className="relative py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span
                className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-accent-main)" }}
              >
                License
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-8"
                style={{
                  color: "var(--color-text-body)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.03em",
                }}
              >
                License <span style={{ color: "var(--color-accent-main)" }}>Coverage</span>
              </h2>
              <div
                className="p-8 lg:p-12 rounded-2xl border-2 inline-block"
                style={{
                  background: "var(--color-bg-default)",
                  borderColor: "color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
                }}
              >
                <p
                  className="text-xl md:text-2xl leading-relaxed"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "var(--line-height-loose)",
                  }}
                >
                  {project.coverage}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Data Room */}
      {dataRoom && (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
              style={{ background: "var(--color-accent-main)" }}
            />
          </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ProjectDataRoom dataRoom={dataRoom} />
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section
        className="relative py-16 lg:py-20 bg-white border-t-2"
        style={{ borderColor: "color-mix(in srgb, var(--color-primary-main) 20%, transparent)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:gap-5"
              style={{
                background: "var(--color-accent-main)",
                color: "var(--color-accent-contrast)",
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {t("backToProjects")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
