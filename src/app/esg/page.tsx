import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG & Sustainability - NORVEGE MINERALS AS",
  description:
    "Our commitment to environmental, social, and governance excellence in mineral exploration.",
};

export default function ESGPage() {
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
              ESG & Sustainability
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Responsible mining is not optional—it&apos;s fundamental to everything we do
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
            Our Commitment
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At NORVEGE MINERALS AS, we recognize that the minerals we explore are essential for the
            global energy transition. However, we also understand that how we extract these
            resources matters just as much as what we extract. We are committed to the highest
            standards of environmental stewardship, social responsibility, and corporate governance.
          </p>
          <p className="text-lg text-gray-600">
            Our operations align with Norwegian regulations, EU standards, and international best
            practices for responsible mining.
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
            <h2 className="text-4xl font-bold" style={{ color: "var(--color-navy-900)" }}>
              Environmental
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                Land Use & Biodiversity
              </h3>
              <p className="text-gray-600">
                We conduct comprehensive environmental impact assessments before any exploration
                activity. Our goal is to minimize disturbance to ecosystems and protect biodiversity
                in the areas where we operate.
              </p>
            </div>

            <div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                Water Management
              </h3>
              <p className="text-gray-600">
                Protecting water resources is a top priority. We implement strict water management
                protocols to prevent contamination and ensure sustainable use.
              </p>
            </div>

            <div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                Emissions & Climate
              </h3>
              <p className="text-gray-600">
                We track and work to minimize our carbon footprint, recognizing the irony of
                extracting minerals for the energy transition while contributing to emissions. Our
                exploration methods prioritize low-impact techniques.
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
            <h2 className="text-4xl font-bold" style={{ color: "var(--color-navy-900)" }}>
              Social
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                Local Communities
              </h3>
              <p className="text-gray-600">
                We engage with local communities early and often, ensuring that our activities are
                transparent and that community concerns are heard and addressed.
              </p>
            </div>

            <div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                Indigenous Rights
              </h3>
              <p className="text-gray-600">
                We respect the rights of indigenous peoples, including the Sami, and ensure that our
                operations do not infringe on traditional lands or cultural heritage.
              </p>
            </div>

            <div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                Jobs & Safety
              </h3>
              <p className="text-gray-600">
                We prioritize the health and safety of our workers and aim to create quality
                employment opportunities in the regions where we operate.
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
            <h2 className="text-4xl font-bold" style={{ color: "var(--color-navy-900)" }}>
              Governance
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                Transparency
              </h3>
              <p className="text-gray-600">
                We maintain open and transparent reporting on our activities, financials, and ESG
                performance. Stakeholders have a right to know how we operate.
              </p>
            </div>

            <div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                We adhere to all Norwegian mining regulations and work closely with regulatory
                authorities to ensure full compliance.
              </p>
            </div>

            <div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--color-accent-main)" }}
              >
                Ethical Business Practices
              </h3>
              <p className="text-gray-600">
                Our business is conducted with integrity, honesty, and respect for all stakeholders.
                We have zero tolerance for corruption or unethical behavior.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
