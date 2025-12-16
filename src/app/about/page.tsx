import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { companyInfo, companyTimeline, teamMembers } from "@/content/company";
import Timeline from "@/components/ui/timeline";
import Table from "@/components/ui/table";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - NORVEGE MINERALS AS",
  description:
    "Learn about NORVEGE MINERALS AS, our mission, team, and strategy for sustainable mineral exploration in Norway.",
  path: "/about",
});

export default function AboutPage() {
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
              About NORVEGE MINERALS AS
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Building Norway&apos;s mineral future through responsible exploration and sustainable
              development
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              NORVEGE MINERALS AS is a Norwegian mining company focused on the exploration and
              development of critical minerals essential for the global energy transition. Founded
              on the principles of sustainable mining and community engagement, we are committed to
              unlocking Norway&apos;s mineral potential while maintaining the highest environmental
              and social standards.
            </p>
            <p className="text-gray-600 mb-4">
              Norway has a rich mining heritage dating back centuries. Today, we stand at the
              forefront of a new era—one where critical minerals like copper, nickel, cobalt, and
              rare earth elements are essential for batteries, renewable energy systems, and the
              electrification of society.
            </p>
            <p className="text-gray-600">
              Our exploration portfolio spans multiple regions across Norway, targeting both
              historical mining districts with modern exploration techniques and greenfield
              opportunities in underexplored areas.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container max-w-4xl">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: "var(--color-navy-900)" }}
          >
            Key Milestones
          </h2>
          <Timeline items={companyTimeline} />
        </div>
      </section>

      {/* Strategy */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
            Our Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "var(--color-copper-600)" }}
              >
                Long-term Vision
              </h3>
              <p className="text-gray-600">
                To become a leading supplier of critical minerals in Europe, supporting the
                continent&apos;s transition to renewable energy and electrified transportation.
              </p>
            </div>
            <div>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "var(--color-copper-600)" }}
              >
                European Context
              </h3>
              <p className="text-gray-600">
                As Europe seeks to reduce dependence on imported critical minerals, Norway&apos;s
                stable jurisdiction and mineral potential position us as a strategic domestic
                supplier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Comparison Table */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
            Mineral Grade Comparison
          </h2>
          <Table
            columns={[
              { header: "Mineral", accessor: "mineral" },
              { header: "Typical Grade (%)", accessor: "grade" },
              { header: "Application", accessor: "application" },
            ]}
            data={[
              {
                mineral: "Copper",
                grade: "0.5 - 2.0",
                application: "Electronics, renewable energy",
              },
              {
                mineral: "Nickel",
                grade: "0.5 - 1.5",
                application: "Batteries, stainless steel",
              },
              {
                mineral: "Zinc",
                grade: "3.0 - 10.0",
                application: "Galvanization, alloys",
              },
              {
                mineral: "Cobalt",
                grade: "0.1 - 0.5",
                application: "Batteries, superalloys",
              },
            ]}
            caption="Typical grade ranges for target minerals in our exploration projects"
          />
        </div>
      </section>

      {/* Management Team */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: "var(--color-navy-900)" }}
          >
            Management & Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((person, index) => (
              <div key={index} className="card text-center">
                <div
                  className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                  style={{ background: "var(--color-gray-200)" }}
                  aria-hidden="true"
                >
                  👤
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--color-navy-900)" }}
                >
                  {person.name}
                </h3>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: "var(--color-copper-600)" }}
                >
                  {person.role}
                </p>
                <p className="text-sm text-gray-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
