import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Laboratories - NORVEGE MINERALS AS",
  description: "Information about our laboratory partnerships and analytical capabilities.",
  path: "/laboratories",
});

export default function LaboratoriesPage() {
  return (
    <div className="min-h-screen">
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              Laboratories
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Quality analytical services for exploration and development
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              NORVEGE MINERALS AS works with leading analytical laboratories to ensure accurate and
              reliable geochemical and mineralogical analysis of our exploration samples. Quality
              assurance and quality control (QA/QC) are fundamental to our exploration programs.
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-navy-900)" }}>
              Analytical Capabilities
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Multi-element geochemical analysis</li>
              <li>Mineralogical characterization</li>
              <li>Assay services for base and precious metals</li>
              <li>Rare earth element analysis</li>
              <li>Quality control and standards</li>
            </ul>
            <p className="text-gray-600">
              For more information about our laboratory partnerships and analytical procedures,
              please contact us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
