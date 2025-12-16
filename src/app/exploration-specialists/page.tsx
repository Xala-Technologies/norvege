import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Exploration Specialists - NORVEGE MINERALS AS",
  description: "Our team of experienced exploration geologists and specialists.",
  path: "/exploration-specialists",
});

export default function ExplorationSpecialistsPage() {
  return (
    <div className="min-h-screen">
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              Exploration Specialists
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Expert geologists and exploration professionals
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Our exploration team consists of experienced geologists and specialists with deep
              knowledge of Norwegian geology and mineral deposits. We combine traditional field
              geology with modern exploration techniques to identify and evaluate mineral prospects.
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-navy-900)" }}>
              Expertise Areas
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Volcanogenic massive sulfide (VMS) deposits</li>
              <li>Magmatic nickel-copper deposits</li>
              <li>Rare earth element mineralization</li>
              <li>Structural geology and prospectivity mapping</li>
              <li>Geophysical interpretation</li>
              <li>Resource estimation</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Our team works closely with academic institutions, research organizations, and
              industry partners to stay at the forefront of exploration technology and best
              practices.
            </p>
            <div className="mt-8">
              <a href="/contact" className="btn btn-primary">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
