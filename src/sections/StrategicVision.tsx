"use client";

import { motion } from "framer-motion";

const visionPoints = [
  {
    title: "Strategic Position",
    description:
      "Leading the Norwegian mineral sector with a focus on critical minerals essential for the energy transition",
    icon: "🎯",
  },
  {
    title: "Critical Minerals Focus",
    description:
      "Targeting minerals vital for batteries, renewable energy, and electrification of society",
    icon: "⚡",
  },
  {
    title: "Long-term Value",
    description:
      "Building sustainable value for stakeholders through responsible exploration and development",
    icon: "📈",
  },
  {
    title: "Experienced Team",
    description: "Backed by industry experts and strong partnerships across the mining sector",
    icon: "👥",
  },
];

export default function StrategicVision() {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          <h2 className="text-display mb-4" style={{ color: "var(--color-navy-deep)" }}>
            Why NORVEGE MINERALS
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-loose)",
            }}
          >
            Positioned at the intersection of Norway&apos;s rich mineral heritage and the global
            energy transition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                style={{ background: "var(--color-sand-100)" }}
              >
                {point.icon}
              </div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "var(--color-text-body)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-family-body)",
                  lineHeight: "var(--line-height-loose)",
                }}
              >
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
