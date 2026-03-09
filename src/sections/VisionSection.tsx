"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--color-bg-default)" }}>
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl mb-24"
            style={{
              fontFamily: "var(--font-family-heading)",
              fontWeight: 700,
              color: "#1B2A4A",
            }}
          >
            Our Vision
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(27, 42, 74, 0.7)" }}>
              Norvegen Group is building a Norwegian platform focused on resource development and
              energy innovation. Our strategy combines district-scale mineral exploration,
              brownfield redevelopment, and energy transition opportunities to unlock long-term
              value from Norway&apos;s geological and industrial heritage.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(27, 42, 74, 0.7)" }}>
              Positioned to support Europe&apos;s secure supply of critical minerals and low-carbon
              energy solutions from Norway&apos;s geological resources.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
