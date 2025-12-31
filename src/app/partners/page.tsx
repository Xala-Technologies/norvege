import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { partnerships } from "@/content/company";
import Link from "next/link";

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
            <p className="text-gray-600 mb-8">
              NORVEGE MINERALS AS collaborates with strategic partners to advance our exploration
              and development activities. Our partnerships span public institutions, municipalities,
              and strategic development organizations.
            </p>

            <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
              Our Partners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {partnerships.map((partner, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                    boxShadow: "none",
                  }}
                >
                  {/* Enhanced border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: `2px solid var(--color-primary-main)`,
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-primary-main)" }}
                      >
                        {partner.name}
                      </h3>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                        style={{
                          background: `color-mix(in srgb, var(--color-accent-main) 15%, transparent)`,
                          color: "var(--color-accent-main)",
                          border: `1px solid color-mix(in srgb, var(--color-accent-main) 30%, transparent)`,
                        }}
                      >
                        {partner.type}
                      </span>
                    </div>
                    {partner.description && (
                      <p className="text-gray-600" style={{ color: "var(--color-text-body)" }}>
                        {partner.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-navy-900)" }}>
              Partnership Areas
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Exploration and development partnerships</li>
              <li>Public and municipal collaborations</li>
              <li>Regional development initiatives</li>
              <li>Strategic resource development</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We are always interested in exploring new partnership opportunities that align with
              our values and strategic objectives. If you are interested in partnering with us,
              please contact us through our contact form.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
