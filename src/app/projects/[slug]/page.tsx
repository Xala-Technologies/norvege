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
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background:
                    project.priority === "High"
                      ? "var(--color-copper-500)"
                      : "var(--color-slate-500)",
                  color: "white",
                }}
              >
                {project.stage}
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              {project.name}
            </h1>
            <p className="text-xl mb-4" style={{ color: "var(--color-sand-100)" }}>
              {project.region}, {project.country}
            </p>
            <p className="text-lg" style={{ color: "var(--color-sand-200)" }}>
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      {project.overview && (
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
              Project Overview
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">{project.overview}</p>
            </div>
          </div>
        </section>
      )}

      {/* Key Metrics */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container max-w-4xl">
          <h2
            className="text-4xl font-bold mb-8 text-center"
            style={{ color: "var(--color-navy-900)" }}
          >
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "var(--color-copper-600)" }}>
                {project.licenses}
              </div>
              <div
                className="text-lg font-semibold mb-1"
                style={{ color: "var(--color-navy-900)" }}
              >
                Exploration Licenses
              </div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "var(--color-copper-600)" }}>
                {project.area}
              </div>
              <div
                className="text-lg font-semibold mb-1"
                style={{ color: "var(--color-navy-900)" }}
              >
                Total Area
              </div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: "var(--color-copper-600)" }}>
                {project.minerals.join(", ")}
              </div>
              <div
                className="text-lg font-semibold mb-1"
                style={{ color: "var(--color-navy-900)" }}
              >
                Target Minerals
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
              style={{ color: "var(--color-navy-900)" }}
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
