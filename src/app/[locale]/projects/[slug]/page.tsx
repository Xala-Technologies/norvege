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

const NAVY = "#1B2A4A";

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
    return { title: "Project Not Found" };
  }

  return generateSEOMetadata({
    title: `${project.name} - Norvegen Group`,
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

  const heroImage =
    project.slug === "killingdal"
      ? "/images/projects/killingdal/hero-wide.jpg"
      : "/images/hero/background.jpg";
  const geologyImage =
    project.slug === "killingdal"
      ? "/images/projects/killingdal/geology.jpg"
      : "/images/hero/01.jpg";
  const explorationImage =
    project.slug === "killingdal"
      ? "/images/projects/killingdal/exploration.jpg"
      : "/images/hero/03.jpg";

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section
        className="relative w-full overflow-hidden min-h-[70vh]"
        style={{ background: NAVY }}
      >
        <Image
          src={heroImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
          quality={90}
          style={{ opacity: 0.18 }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(135deg, rgba(27, 42, 74, 0.7) 0%, rgba(27, 42, 74, 0.2) 50%, rgba(27, 42, 74, 0.6) 100%)",
          }}
        />

        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32">
          <div className="max-w-3xl">
            <span
              className="inline-block px-3 py-1 rounded-sm text-[11px] font-semibold uppercase tracking-widest mb-8"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {t(`stages.${project.stage}`)}
            </span>

            <h1
              className="text-3xl sm:text-4xl lg:text-[2.9rem] xl:text-5xl leading-[1.15] mb-8"
              style={{
                color: "white",
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              {project.name}
            </h1>

            <div className="space-y-5 max-w-2xl mb-12">
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                {description}
              </p>
              <div className="w-16 h-px" style={{ background: "rgba(255, 255, 255, 0.2)" }} />
            </div>

            {/* Key metrics row */}
            <div className="flex flex-wrap gap-10 mb-8">
              {[
                { value: project.licenses, label: t("licenses") },
                { value: project.area, label: t("totalArea") },
                { value: project.region, label: t("location") || "Location" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "white" }}>
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Licence badge */}
            {coverage && (
              <div className="mb-8">
                <span
                  className="inline-flex items-center gap-2 text-xs"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <svg
                    className="w-3.5 h-3.5"
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
                  {coverage}
                </span>
              </div>
            )}

            {/* Mineral tags */}
            {project.minerals.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.minerals.map((m) => (
                  <span
                    key={m}
                    className="px-2.5 py-1 rounded-sm text-[11px] font-medium tracking-wide"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {t(`mineralNames.${m}`) || m}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      {overview && (
        <section className="py-20 lg:py-28" style={{ background: "white" }}>
          <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-3">
                <h2
                  className="text-2xl lg:text-3xl mb-2"
                  style={{
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: NAVY,
                  }}
                >
                  {t("projectOverview")}
                </h2>
                <div className="w-14 h-px mb-7" style={{ background: "rgba(27, 42, 74, 0.2)" }} />
                <p className="text-base leading-[1.9]" style={{ color: "rgba(27, 42, 74, 0.65)" }}>
                  {overview}
                </p>
              </div>
              <div className="lg:col-span-2">
                <div
                  className="relative h-64 lg:h-[320px] rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
                >
                  <Image
                    src={heroImage}
                    alt={`${project.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Geology & Exploration ── */}
      {(geology || exploration) && (
        <section className="py-20 lg:py-28" style={{ background: "var(--color-bg-default)" }}>
          <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {geology && (
                <div>
                  <div
                    className="relative h-48 lg:h-56 rounded-lg overflow-hidden mb-6"
                    style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                  >
                    <Image
                      src={geologyImage}
                      alt="Geological analysis"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <h3
                    className="text-xl lg:text-2xl mb-2"
                    style={{
                      fontFamily: "var(--font-family-heading)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: NAVY,
                    }}
                  >
                    {t("geology")}
                  </h3>
                  <div
                    className="w-10 h-px mb-5"
                    style={{ background: "rgba(27, 42, 74, 0.15)" }}
                  />
                  <p className="text-sm leading-[1.9]" style={{ color: "rgba(27, 42, 74, 0.6)" }}>
                    {geology}
                  </p>
                </div>
              )}

              {exploration && (
                <div>
                  <div
                    className="relative h-48 lg:h-56 rounded-lg overflow-hidden mb-6"
                    style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                  >
                    <Image
                      src={explorationImage}
                      alt="Exploration activities"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <h3
                    className="text-xl lg:text-2xl mb-2"
                    style={{
                      fontFamily: "var(--font-family-heading)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: NAVY,
                    }}
                  >
                    {t("explorationActivities")}
                  </h3>
                  <div
                    className="w-10 h-px mb-5"
                    style={{ background: "rgba(27, 42, 74, 0.15)" }}
                  />
                  <p className="text-sm leading-[1.9]" style={{ color: "rgba(27, 42, 74, 0.6)" }}>
                    {exploration}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Timeline ── */}
      {timeline && timeline.length > 0 && (
        <section className="py-20 lg:py-28" style={{ background: "white" }}>
          <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2
                className="text-2xl lg:text-3xl mb-2"
                style={{
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: NAVY,
                }}
              >
                {t("projectTimeline")}
              </h2>
              <div className="w-14 h-px mx-auto" style={{ background: "rgba(27, 42, 74, 0.2)" }} />
            </div>
            <Timeline items={timeline} />
          </div>
        </section>
      )}

      {/* ── Data Room ── */}
      {dataRoom && (
        <section
          className="py-20 lg:py-28"
          style={{
            background: "var(--color-bg-default)",
            borderTop: "1px solid rgba(27, 42, 74, 0.06)",
          }}
        >
          <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <ProjectDataRoom dataRoom={dataRoom} />
          </div>
        </section>
      )}
    </div>
  );
}
