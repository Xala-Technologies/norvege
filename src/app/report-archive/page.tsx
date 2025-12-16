import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { reportArchive } from "@/content/resources";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "Report Archive - NORVEGE MINERALS AS",
  description: "Access our annual reports, quarterly reports, and ESG reports.",
  path: "/report-archive",
});

export default function ReportArchivePage() {
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
              Report Archive
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Access our annual reports, quarterly reports, and ESG documentation
            </p>
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {reportArchive.map((report, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-semibold mb-2"
                      style={{ color: "var(--color-navy-900)" }}
                    >
                      {report.title}
                    </h3>
                    {report.description && (
                      <p className="text-gray-600 mb-2">{report.description}</p>
                    )}
                    {report.date && (
                      <p className="text-sm text-gray-500">
                        Published:{" "}
                        {new Date(report.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                  <div>
                    {report.type === "pdf" ? (
                      <a
                        href={report.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`Download ${report.title} (PDF)`}
                      >
                        Download PDF
                      </a>
                    ) : (
                      <Link href={report.href} className="btn btn-primary">
                        View
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
