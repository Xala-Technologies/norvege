import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { projects } from "@/content/projects";

export const metadata: Metadata = generateSEOMetadata({
  title: "Projects - NORVEGE MINERALS AS",
  description: "Explore our portfolio of critical mineral exploration projects across Norway.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              Our Projects
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Exploring critical mineral resources across Norway&apos;s most promising regions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.slug} className="card group">
                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
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

                <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--color-navy-900)" }}>
                  {project.name}
                </h2>

                <p className="text-lg text-gray-600 mb-4">
                  {project.region}, {project.country}
                </p>

                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Licenses</p>
                    <p className="text-lg font-semibold" style={{ color: "var(--color-navy-900)" }}>
                      {project.licenses}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="text-lg font-semibold" style={{ color: "var(--color-navy-900)" }}>
                      {project.area}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Target Minerals</p>
                    <p
                      className="text-lg font-semibold"
                      style={{ color: "var(--color-copper-600)" }}
                    >
                      {project.minerals.join(", ")}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-[var(--color-copper-600)] focus:ring-offset-2 rounded"
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
