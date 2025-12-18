import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { companyTimeline } from "@/content/company";
import Timeline from "@/components/ui/timeline";
import AboutHeroImage from "@/components/ui/AboutHeroImage";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - NORVEGE MINERALS AS",
  description:
    "Learn about NORVEGE MINERALS AS, our mission, and strategy for sustainable mineral exploration in Norway.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <AboutHeroImage />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none z-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="container relative z-20 pt-32 pb-20 lg:pt-36 lg:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight"
              style={{
                color: "var(--color-text-on-dark)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              About{" "}
              <span
                style={{
                  color: "var(--color-accent-main)",
                }}
              >
                NORVEGE MINERALS AS
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{
                color: "color-mix(in srgb, var(--color-text-on-dark) 90%, transparent)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Building Norway&apos;s mineral future through responsible exploration and sustainable
              development
            </p>

            {/* Key Values */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  Responsible
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  Mining
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  Sustainable
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  Development
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  Strategic
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                  }}
                >
                  Exploration
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--color-accent-main) 50%, transparent 100%)",
          }}
        />
      </section>

      {/* Company Overview */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-default)" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
        </div>

        <div className="container max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              Our <span style={{ color: "var(--color-accent-main)" }}>Story</span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              A Norwegian mining company committed to responsible exploration and sustainable
              development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* First Paragraph Card */}
            <div
              className="lg:col-span-2 p-8 lg:p-10 rounded-3xl"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                    color: "var(--color-accent-main)",
                    boxShadow: "var(--shadow-accent)",
                  }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    Our Mission
                  </h3>
                  <p
                    className="text-base lg:text-lg leading-relaxed"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    NORVEGE MINERALS AS is a Norwegian mining company focused on the exploration and
                    development of critical minerals essential for the global energy transition.
                    Founded on the principles of sustainable mining and community engagement, we are
                    committed to unlocking Norway&apos;s mineral potential while maintaining the
                    highest environmental and social standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Paragraph Card */}
            <div
              className="p-8 lg:p-10 rounded-3xl"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div className="flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 100%)`,
                    color: "var(--color-primary-main)",
                    boxShadow: "var(--shadow-primary)",
                  }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-primary-main)" }}
                >
                  Rich Heritage
                </h3>
                <p
                  className="text-base lg:text-lg leading-relaxed flex-1"
                  style={{ color: "var(--color-text-body)" }}
                >
                  Norway has a rich mining heritage dating back centuries. Today, we stand at the
                  forefront of a new era—one where critical minerals like copper, nickel, cobalt,
                  and rare earth elements are essential for batteries, renewable energy systems, and
                  the electrification of society.
                </p>
              </div>
            </div>

            {/* Third Paragraph Card */}
            <div
              className="lg:col-span-3 p-8 lg:p-10 rounded-3xl"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                    color: "var(--color-accent-main)",
                    boxShadow: "var(--shadow-accent)",
                  }}
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    Exploration Portfolio
                  </h3>
                  <p
                    className="text-base lg:text-lg leading-relaxed"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    Our exploration portfolio spans multiple regions across Norway, targeting both
                    historical mining districts with modern exploration techniques and greenfield
                    opportunities in underexplored areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-subtle)" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
        </div>

        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-10">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.02em",
              }}
            >
              Key <span style={{ color: "var(--color-accent-main)" }}>Milestones</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Our journey from founding to becoming a leading exploration company in Norway
            </p>
          </div>
          <Timeline items={companyTimeline} />
        </div>
      </section>

      {/* Strategy */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-default)" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
        </div>

        <div className="container max-w-5xl relative z-10">
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
              Our <span style={{ color: "var(--color-accent-main)" }}>Strategy</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              A comprehensive approach to responsible mining and sustainable development
            </p>
          </div>

          <div className="space-y-8">
            {/* Green Mining Strategy Card */}
            <div
              className="p-8 lg:p-10 rounded-3xl"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                    color: "var(--color-accent-main)",
                    boxShadow: "var(--shadow-accent)",
                  }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: "var(--color-primary-main)" }}
                  >
                    Green Mining Strategy
                  </h3>
                  <p
                    className="text-base lg:text-lg leading-relaxed mb-4"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    Green mining will reduce the footprint on the environment in the future. Our
                    strategy is to use underground operations, which reduces natural encroachment,
                    emissions and land requirements for disposal.
                  </p>
                  <p
                    className="text-base lg:text-lg leading-relaxed"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    While there will be a need for landfill, by thinking about backfilling of rock
                    caverns and using new technology for increased use of secondary resources for
                    crushed stone production and fines in concrete and asphalt production, it is
                    possible to reduce this considerably.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision & Context Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div
                className="p-8 lg:p-10 rounded-3xl group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                  border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 100%)`,
                      color: "var(--color-primary-main)",
                      boxShadow: "var(--shadow-primary)",
                    }}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      Long-term Vision
                    </h3>
                    <p
                      className="text-base lg:text-lg leading-relaxed"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      To become a leading supplier of critical minerals in Europe, supporting the
                      continent&apos;s transition to renewable energy and electrified
                      transportation.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="p-8 lg:p-10 rounded-3xl group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                  border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                      color: "var(--color-accent-main)",
                      boxShadow: "var(--shadow-accent)",
                    }}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      European Context
                    </h3>
                    <p
                      className="text-base lg:text-lg leading-relaxed"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      As Europe seeks to reduce dependence on imported critical minerals,
                      Norway&apos;s stable jurisdiction and mineral potential position us as a
                      strategic domestic supplier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Comparison Table */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-default)" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "var(--color-accent-main)" }}
          />
        </div>

        <div className="container max-w-5xl relative z-10">
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
              Mineral Grade <span style={{ color: "var(--color-accent-main)" }}>Comparison</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Typical grade ranges for target minerals in our exploration projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                mineral: "Copper",
                grade: "0.5 - 2.0",
                application: "Electronics, renewable energy",
                icon: "⚡",
                color: "var(--color-accent-main)",
              },
              {
                mineral: "Nickel",
                grade: "0.5 - 1.5",
                application: "Batteries, stainless steel",
                icon: "🔋",
                color: "var(--color-primary-main)",
              },
              {
                mineral: "Zinc",
                grade: "3.0 - 10.0",
                application: "Galvanization, alloys",
                icon: "🛡️",
                color: "var(--color-accent-main)",
              },
              {
                mineral: "Cobalt",
                grade: "0.1 - 0.5",
                application: "Batteries, superalloys",
                icon: "🔬",
                color: "var(--color-primary-main)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                  border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 text-2xl"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, ${item.color} 20%, transparent) 0%, color-mix(in srgb, ${item.color} 10%, transparent) 100%)`,
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: "var(--color-primary-main)" }}
                    >
                      {item.mineral}
                    </h3>
                    <div
                      className="text-xl md:text-2xl font-extrabold mb-3"
                      style={{ color: item.color }}
                    >
                      {item.grade}%
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      {item.application}
                    </p>
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
