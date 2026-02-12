"use client";

import { useTranslations } from "next-intl";

export default function ESGPage() {
  const t = useTranslations("esg");
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
              {t("heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2
            className="text-4xl mb-6"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.03em",
            }}
          >
            {t("commitment.title")}
          </h2>
          <p
            className="text-lg mb-6"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-loose)",
            }}
          >
            {t("commitment.description1")}
          </p>
          <p
            className="text-lg"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-loose)",
            }}
          >
            {t("commitment.description2")}
          </p>
        </div>
      </section>

      {/* Environmental */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
              style={{ background: "var(--color-accent-main)" }}
            >
              🌱
            </div>
            <h2
              className="text-4xl"
              style={{
                color: "var(--color-text-body)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              {t("environmental.title")}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {t("environmental.landUse.title")}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {t("environmental.landUse.description")}
              </p>
            </div>

            <div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {t("environmental.waterManagement.title")}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {t("environmental.waterManagement.description")}
              </p>
            </div>

            <div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {t("environmental.emissions.title")}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {t("environmental.emissions.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
              style={{ background: "var(--color-accent-main)" }}
            >
              🤝
            </div>
            <h2
              className="text-4xl"
              style={{
                color: "var(--color-text-body)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              {t("social.title")}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {t("social.communities.title")}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {t("social.communities.description")}
              </p>
            </div>

            <div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {t("social.indigenousRights.title")}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {t("social.indigenousRights.description")}
              </p>
            </div>

            <div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {t("social.jobsSafety.title")}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {t("social.jobsSafety.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
              style={{ background: "var(--color-accent-main)" }}
            >
              📊
            </div>
            <h2
              className="text-4xl"
              style={{
                color: "var(--color-text-body)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              {t("governance.title")}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {t("governance.transparency.title")}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {t("governance.transparency.description")}
              </p>
            </div>

            <div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {t("governance.compliance.title")}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {t("governance.compliance.description")}
              </p>
            </div>

            <div>
              <h3
                className="text-2xl mb-3"
                style={{
                  color: "var(--color-accent-main)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {t("governance.ethics.title")}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {t("governance.ethics.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
