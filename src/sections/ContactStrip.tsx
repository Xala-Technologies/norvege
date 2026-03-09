"use client";

import { motion } from "framer-motion";

const NAVY = "#1B2A4A";

const leadership = [
  {
    title: "Executive Chairman",
    description:
      "Provides strategic leadership of Norvegen Group, overseeing corporate development, partnerships, financing strategy and long-term value creation.",
  },
  {
    title: "Technical Director – Geoscience",
    description:
      "Leads geological strategy, exploration programs and technical evaluation across Norvegen's mineral portfolio, supporting profitable exploration.",
  },
  {
    title: "Energy Advisor",
    description:
      "Advises on geothermal and subsurface energy development opportunities, including mine-water energy systems and integrated Norvegen Energy.",
  },
  {
    title: "ESG Advisor",
    description:
      "Advises on environmental stewardship, sustainability and regulatory compliance, aligned with Norvegen and international best-practice standards.",
  },
];

const board = [
  {
    title: "Non-Executive Director",
    description:
      "Provides independent oversight of Norvegen Group's strategy, corporate governance and capital markets activities, supporting long-term shareholder value creation.",
  },
  {
    title: "Non-Executive Director",
    description:
      "Supports board-level governance on project development, risk management and strategic partnerships across Norvegen Group's mineral and energy platform.",
  },
];

export default function ContactStrip() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "white" }}>
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl mb-10"
            style={{
              fontFamily: "var(--font-family-heading)",
              fontWeight: 700,
              fontStyle: "italic",
              color: NAVY,
            }}
          >
            Experienced Exploration and Development Team
          </motion.h2>

          <div className="w-20 h-px mx-auto" style={{ background: "rgba(27, 42, 74, 0.2)" }} />
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 lg:mb-28"
        >
          <h3
            className="text-2xl lg:text-3xl text-center mb-16"
            style={{
              fontFamily: "var(--font-family-heading)",
              fontWeight: 700,
              fontStyle: "italic",
              color: NAVY,
            }}
          >
            Leadership
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-md p-6 text-center"
                style={{
                  background: NAVY,
                }}
              >
                <h4 className="text-base font-bold mb-4" style={{ color: "white" }}>
                  {person.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {person.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Board & Governance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-2xl lg:text-3xl text-center mb-16"
            style={{
              fontFamily: "var(--font-family-heading)",
              fontWeight: 700,
              fontStyle: "italic",
              color: NAVY,
            }}
          >
            Board &amp; Governance
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {board.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-md p-6 text-center"
                style={{
                  background: NAVY,
                }}
              >
                <h4 className="text-base font-bold mb-4" style={{ color: "white" }}>
                  {person.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {person.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
