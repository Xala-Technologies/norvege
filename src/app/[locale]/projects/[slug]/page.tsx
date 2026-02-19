import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { getProjectBySlug, getAllProjectSlugs } from "@/content/projects";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import Timeline from "@/components/ui/timeline";
import { getTranslations } from "next-intl/server";
import { getProjectDataRoomBySlug } from "@/content/killingdal-data-room";
import ProjectDataRoom from "@/components/projects/ProjectDataRoom";
import ProjectsHeroImage from "@/components/ui/ProjectsHeroImage";

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

  const isNo = locale === "no";
  const description = isNo && project.description_no ? project.description_no : project.description;
  const overview = isNo && project.overview_no ? project.overview_no : project.overview;
  const geology = isNo && project.geology_no ? project.geology_no : project.geology;
  const exploration = isNo && project.exploration_no ? project.exploration_no : project.exploration;
  const coverage = isNo && project.coverage_no ? project.coverage_no : project.coverage;
  const timeline =
    isNo && project.timeline_no && project.timeline_no.length > 0
      ? project.timeline_no
      : project.timeline;

  // Helper to split project name for styling
  const nameParts = project.name.split(" ");
  const nameMain = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : nameParts[0];
  const nameHighlight = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";

  const sectionEyebrowClass =
    "block text-xs font-semibold uppercase tracking-widest mb-2 opacity-70";

  const overviewImage =
    project.slug === "killingdal"
      ? "/images/projects/killingdal/overview.jpg"
      : "/images/hero/02.jpg";
  const geologyImage =
    project.slug === "killingdal"
      ? "/images/projects/killingdal/geology-ore.jpg"
      : "/images/hero/01.jpg";
  const explorationImage =
    project.slug === "killingdal"
      ? "/images/projects/killingdal/exploration.jpg"
      : "/images/hero/03.jpg";
  const licenseImage =
    project.slug === "killingdal"
      ? "/images/projects/killingdal/license.jpg"
      : "/images/hero/05.jpg";
  const heroImage =
    project.slug === "killingdal" ? "/images/projects/killingdal/hero.jpg" : undefined;

  return (
    <div className="min-h-screen">
      {/* Hero Section - Matching Investors Layout */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <ProjectsHeroImage src={heroImage} alt={`${project.name} Hero Image`} />

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
            {/* Stage Badge */}
            <div className="flex justify-center mb-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-semibold uppercase tracking-wider"
                style={{
                  background: "color-mix(in srgb, var(--color-accent-main) 18%, transparent)",
                  borderColor: "color-mix(in srgb, var(--color-accent-main) 50%, transparent)",
                  color: "var(--color-accent-main)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {t(`stages.${project.stage}`)}
              </div>
            </div>

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
              {nameHighlight ? (
                <>
                  {nameMain}{" "}
                  <span style={{ color: "var(--color-accent-main)" }}>{nameHighlight}</span>
                </>
              ) : (
                nameMain
              )}
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
              {description}
            </p>

            {/* Key Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-12">
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  {project.licenses}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("licenses")}
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  {project.area}
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
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  {project.priority}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  {t("priority")}
                </div>
              </div>
            </div>

            {/* Minerals List (Optional addition to hero if space permits, or just keep stats clean) */}
            {project.minerals.length > 0 && (
              <div className="mt-12 flex flex-wrap justify-center gap-2">
                {project.minerals.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 rounded-full text-sm font-medium border border-white/20 bg-white/5 text-white/90"
                  >
                    {t(`mineralNames.${m}`) || m}
                  </span>
                ))}
              </div>
            )}
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

      {/* Project Overview - Enhanced Layout with Image */}
      {overview && (
        <section
          id="overview"
          className="section relative overflow-hidden"
          style={{ background: "var(--color-bg-default)" }}
        >
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "var(--color-primary-main)" }}
            />
          </div>

          <div className="container max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <span className={sectionEyebrowClass} style={{ color: "var(--color-primary-main)" }}>
                {t("eyebrow.project")}
              </span>
              <h2
                className="text-display mb-6"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("projectOverview")}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Text Column */}
              <div
                className="group p-8 lg:p-12 rounded-md relative overflow-hidden flex flex-col justify-center"
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
                <p
                  className="text-lg md:text-xl leading-relaxed whitespace-pre-line relative z-10"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "1.8",
                  }}
                >
                  {overview}
                </p>
              </div>

              {/* Image Column */}
              <div className="relative min-h-[400px] lg:min-h-full rounded-md overflow-hidden group border border-gray-200 shadow-sm">
                <Image
                  src={overviewImage}
                  alt="Killingdal Mines Overview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("captions.overview")}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Geology - Enhanced Layout with Image */}
      {geology && (
        <section
          id="geology"
          className="section relative overflow-hidden"
          style={{ background: "var(--color-bg-subtle)" }}
        >
          <div className="container max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <span className={sectionEyebrowClass} style={{ color: "var(--color-primary-main)" }}>
                {t("eyebrow.technical")}
              </span>
              <h2
                className="text-display mb-6"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("geology")}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Image Column */}
              <div className="relative min-h-[400px] lg:min-h-full rounded-md overflow-hidden group border border-gray-200 order-2 lg:order-1 shadow-sm">
                <Image
                  src={geologyImage}
                  alt="Geological Ore Sample"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("captions.geology")}
                </div>
              </div>

              {/* Text Column */}
              <div
                className="group p-8 lg:p-12 rounded-md relative overflow-hidden flex flex-col justify-center order-1 lg:order-2"
                style={{
                  background: "var(--color-bg-default)",
                  border:
                    "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{
                    color: "var(--color-primary-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  VMS System Characteristics
                </h3>
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "1.7",
                  }}
                >
                  {geology}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Exploration - Enhanced Layout with Image */}
      {exploration && (
        <section
          id="exploration"
          className="section relative overflow-hidden"
          style={{ background: "var(--color-bg-default)" }}
        >
          <div className="container max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <span className={sectionEyebrowClass} style={{ color: "var(--color-primary-main)" }}>
                {t("eyebrow.progress")}
              </span>
              <h2
                className="text-display mb-6"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("explorationActivities")}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Text Column */}
              <div
                className="group p-8 lg:p-12 rounded-md relative overflow-hidden flex flex-col justify-center"
                style={{
                  background: "var(--color-bg-default)",
                  border:
                    "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{
                    color: "var(--color-primary-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  Modern Exploration Strategy
                </h3>
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "1.7",
                  }}
                >
                  {exploration}
                </p>
              </div>

              {/* Image Column */}
              <div className="relative min-h-[400px] lg:min-h-full rounded-md overflow-hidden group border border-gray-200 shadow-sm">
                <Image
                  src={explorationImage}
                  alt="Exploration Fieldwork"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("captions.exploration")}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Timeline */}
      {timeline && timeline.length > 0 && (
        <section
          id="timeline"
          className="section relative overflow-hidden"
          style={{ background: "var(--color-bg-default)" }}
        >
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className={sectionEyebrowClass} style={{ color: "var(--color-primary-main)" }}>
                {t("eyebrow.history")}
              </span>
              <h2
                className="text-display mb-6"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("projectTimeline")}
              </h2>
            </div>
            <Timeline items={timeline} />
          </div>
        </section>
      )}

      {/* License Coverage */}
      {coverage && (
        <section
          id="license"
          className="section relative overflow-hidden"
          style={{ background: "var(--color-bg-subtle)" }}
        >
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "var(--color-accent-main)" }}
            />
          </div>
          <div className="container max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <span className={sectionEyebrowClass} style={{ color: "var(--color-primary-main)" }}>
                {t("eyebrow.license")}
              </span>
              <h2
                className="text-display mb-6"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t("licenseCoverage")}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Image Column */}
              <div className="relative min-h-[300px] lg:min-h-full rounded-md overflow-hidden group border border-gray-200 order-2 lg:order-1 shadow-sm">
                <Image
                  src={licenseImage}
                  alt="License Area Map"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-medium tracking-wide flex items-center gap-2 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  {t("captions.license")}
                </div>
              </div>

              {/* Text Column */}
              <div
                className="group p-8 lg:p-12 rounded-md relative overflow-hidden text-center flex flex-col justify-center order-1 lg:order-2"
                style={{
                  background: "var(--color-bg-default)",
                  border:
                    "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />
                <div className="relative z-10">
                  <p
                    className="text-xl md:text-2xl leading-relaxed font-bold"
                    style={{
                      color: "var(--color-text-body)",
                      fontFamily: "var(--font-family-heading)",
                    }}
                  >
                    {coverage}
                  </p>
                  <div className="mt-8 flex justify-center">
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm"
                      style={{
                        background: "var(--color-bg-subtle)",
                        color: "var(--color-success)",
                        border:
                          "1px solid color-mix(in srgb, var(--color-success) 20%, transparent)",
                      }}
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {t("activeLicense")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Data Room */}
      {dataRoom && (
        <section
          id="data-room"
          aria-label="Project Data Room"
          className="section relative overflow-hidden"
          style={{
            background: "var(--color-bg-default)",
            borderTop: "1px solid color-mix(in srgb, var(--color-primary-main) 20%, transparent)",
          }}
        >
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className={sectionEyebrowClass} style={{ color: "var(--color-accent-main)" }}>
                {t("eyebrow.investor")}
              </span>
            </div>
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "var(--color-bg-subtle)",
                border: "1px solid color-mix(in srgb, var(--color-primary-main) 25%, transparent)",
              }}
            >
              <div className="px-4 sm:px-6 lg:px-8 py-8">
                <ProjectDataRoom dataRoom={dataRoom} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer / Back to Projects */}
      <footer className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm font-bold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
              style={{
                background: "var(--color-accent-main)",
                color: "var(--color-accent-contrast)",
                fontFamily: "var(--font-family-heading)",
              }}
            >
              <svg
                className="w-5 h-5 shrink-0 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
      </footer>
    </div>
  );
}
