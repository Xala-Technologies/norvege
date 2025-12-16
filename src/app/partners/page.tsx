import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Partners - NORVEGE MINERALS AS",
  description: "Our strategic partners and collaborations.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              Partners
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Strategic partnerships for sustainable mineral development
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              NORVEGE MINERALS AS collaborates with a range of partners including research
              institutions, technology providers, service companies, and local communities to
              advance our exploration and development activities.
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-navy-900)" }}>
              Partnership Areas
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Research and development collaborations</li>
              <li>Technology and innovation partnerships</li>
              <li>Community engagement and local partnerships</li>
              <li>Supply chain and processing partnerships</li>
              <li>Environmental and sustainability initiatives</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We are always interested in exploring new partnership opportunities that align with
              our values and strategic objectives. If you are interested in partnering with us,
              please contact us through our contact form.
            </p>
            <div className="mt-8">
              <a href="/contact" className="btn btn-primary">
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
