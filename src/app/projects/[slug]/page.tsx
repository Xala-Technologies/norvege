import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/content/projects";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import Timeline from "@/components/ui/timeline";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return generateSEOMetadata({
    title: `${project.name} - NORVEGE MINERALS AS`,
    description: project.description,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-navy-900)" }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
        </div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10 pt-32 pb-12 lg:pt-36 lg:pb-16">
          <div className="max-w-5xl">
            {/* Title */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{
                color: "var(--color-text-on-dark)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              {project.name}
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 mb-8">
              <svg
                className="w-5 h-5"
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
              <p
                className="text-xl md:text-2xl font-semibold"
                style={{ color: "var(--color-text-on-dark)" }}
              >
                {project.region}, {project.country}
              </p>
            </div>

            {/* Description */}
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-4xl"
              style={{
                color: "color-mix(in srgb, var(--color-text-on-dark) 85%, transparent)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
              }}
            >
              {project.description}
            </p>

            {/* Key Stats Row */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t"
              style={{
                borderColor: "color-mix(in srgb, var(--color-accent-main) 30%, transparent)",
              }}
            >
              <div>
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.licenses}
                </div>
                <div
                  className="text-sm md:text-base font-medium uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  Licenses
                </div>
              </div>
              <div>
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.area}
                </div>
                <div
                  className="text-sm md:text-base font-medium uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  Total Area
                </div>
              </div>
              <div>
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    color: "var(--color-accent-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {project.priority}
                </div>
                <div
                  className="text-sm md:text-base font-medium uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  Priority
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      {project.overview && (
        <section className="section relative overflow-hidden bg-white">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "var(--color-accent-main)" }}
            />
          </div>

          <div className="container max-w-5xl relative z-10">
            <div className="mb-8">
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                Project <span style={{ color: "var(--color-accent-main)" }}>Overview</span>
              </h2>
              <div
                className="h-1 w-24 rounded-full"
                style={{ background: "var(--color-accent-main)" }}
              />
            </div>

            <div
              className="p-8 lg:p-10 rounded-3xl"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                boxShadow: "var(--shadow-lg)",
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
        </section>
      )}

      {/* Key Metrics */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-subtle)" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
        </div>

        <div className="container max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              Key <span style={{ color: "var(--color-accent-main)" }}>Metrics</span>
            </h2>
            <div
              className="h-1 w-24 rounded-full mx-auto"
              style={{ background: "var(--color-accent-main)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Licenses Card */}
            <div
              className="p-8 lg:p-10 rounded-3xl text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 100%)`,
                  boxShadow: "var(--shadow-primary)",
                }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-primary-main)" }}
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
                className="text-5xl md:text-6xl font-bold mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                {project.licenses}
              </div>
              <div
                className="text-base md:text-lg font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-primary-main)" }}
              >
                Exploration Licenses
              </div>
            </div>

            {/* Area Card */}
            <div
              className="p-8 lg:p-10 rounded-3xl text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                  boxShadow: "var(--shadow-accent)",
                }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-accent-main)" }}
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
                className="text-5xl md:text-6xl font-bold mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                {project.area}
              </div>
              <div
                className="text-base md:text-lg font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-primary-main)" }}
              >
                Total Area
              </div>
            </div>

            {/* Minerals Card */}
            <div
              className="p-8 lg:p-10 rounded-3xl text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 100%)`,
                  boxShadow: "var(--shadow-primary)",
                }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-primary-main)" }}
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
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                {project.minerals.length}
              </div>
              <div
                className="text-base md:text-lg font-semibold uppercase tracking-wider mb-4"
                style={{ color: "var(--color-primary-main)" }}
              >
                Target Minerals
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.minerals.slice(0, 4).map((mineral, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium"
                    style={{
                      background: "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                      color: "var(--color-accent-main)",
                      border: `1px solid color-mix(in srgb, var(--color-accent-main) 30%, transparent)`,
                    }}
                  >
                    {mineral}
                  </span>
                ))}
                {project.minerals.length > 4 && (
                  <span
                    className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium"
                    style={{
                      background: "color-mix(in srgb, var(--color-primary-main) 15%, transparent)",
                      color: "var(--color-primary-main)",
                      border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                    }}
                  >
                    +{project.minerals.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geology */}
      {project.geology && (
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
              Geology
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">{project.geology}</p>
            </div>
          </div>
        </section>
      )}

      {/* Exploration */}
      {project.exploration && (
        <section className="section" style={{ background: "var(--color-sand-50)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
              Exploration Activities
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">{project.exploration}</p>
            </div>
          </div>
        </section>
      )}

      {/* Timeline */}
      {project.timeline && project.timeline.length > 0 && (
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <h2
              className="text-4xl font-bold mb-12 text-center"
              style={{ color: "var(--color-primary-main)" }}
            >
              Project Timeline
            </h2>
            <Timeline items={project.timeline} />
          </div>
        </section>
      )}

      {/* Coverage */}
      {project.coverage && (
        <section className="section" style={{ background: "var(--color-sand-50)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
              License Coverage
            </h2>
            <p className="text-lg text-gray-600">{project.coverage}</p>
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <Link href="/projects" className="btn btn-secondary">
            ← Back to All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
