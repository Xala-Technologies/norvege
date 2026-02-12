"use client";

import { Link } from "@/i18n/routing";
import { partnerships } from "@/content/company";
import { useTranslations } from "next-intl";

export default function PartnersPage() {
  const t = useTranslations("partners");
  return (
    <div className="min-h-screen">
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl mb-6"
              style={{
                color: "var(--color-text-on-dark)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              {t("title")}
            </h1>
            <p
              className="text-xl"
              style={{
                color: "color-mix(in srgb, var(--color-text-on-dark) 90%, transparent)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p
              className="mb-8"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
              }}
            >
              {t("description")}
            </p>

            <h2
              className="text-3xl mb-6"
              style={{
                color: "var(--color-text-body)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              {t("ourPartners")}
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
                        className="text-2xl"
                        style={{
                          color: "var(--color-text-body)",
                          fontFamily: "var(--font-family-heading)",
                          fontWeight: "var(--font-weight-black)",
                        }}
                      >
                        {partner.name}
                      </h3>
                      <span
                        className="px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                        style={{
                          background: `color-mix(in srgb, var(--color-accent-main) 15%, transparent)`,
                          color: "var(--color-accent-main)",
                          border: `1px solid color-mix(in srgb, var(--color-accent-main) 30%, transparent)`,
                          fontFamily: "var(--font-family-body)",
                          fontWeight: "var(--font-weight-bold)",
                        }}
                      >
                        {partner.type}
                      </span>
                    </div>
                    {partner.description && (
                      <p
                        style={{
                          color: "var(--color-text-secondary)",
                          fontFamily: "var(--font-family-body)",
                          lineHeight: "var(--line-height-loose)",
                        }}
                      >
                        {partner.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h2
              className="text-3xl mb-4"
              style={{
                color: "var(--color-text-body)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              {t("partnershipAreas")}
            </h2>
            <ul
              className="list-disc list-inside space-y-2 mb-6"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
              }}
            >
              {(t.raw("areas") as string[]).map((area: string, index: number) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
            <p
              className="mb-6"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
              }}
            >
              {t("ctaDescription")}
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                {t("cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
