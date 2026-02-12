"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const esgHighlights = [
  {
    title: "Environmental Care",
    description:
      "Minimizing environmental impact through responsible exploration and sustainable practices",
    icon: "🌱",
  },
  {
    title: "Community Engagement",
    description: "Working closely with local communities and respecting indigenous rights",
    icon: "🤝",
  },
  {
    title: "Transparency",
    description: "Open reporting and adherence to Norwegian and EU standards",
    icon: "📊",
  },
];

export default function ESGTeaser() {
  return (
    <section className="section" style={{ background: "var(--color-sand-50)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          <h2 className="text-display mb-6" style={{ color: "var(--color-primary-main)" }}>
            Responsible Mining for the Future
          </h2>
          <p
            className="text-lg mb-6 max-w-3xl mx-auto"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-loose)",
            }}
          >
            At NORVEGE MINERALS AS, sustainability is not an afterthought—it&apos;s fundamental to
            everything we do. We&apos;re committed to developing Norway&apos;s critical mineral
            resources while protecting the environment and supporting local communities.
          </p>
          <Link href="/esg" className="btn btn-primary">
            Learn About Our ESG Commitment
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {esgHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex gap-4 items-start"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                style={{ background: "var(--color-accent-main)" }}
              >
                {highlight.icon}
              </div>
              <div>
                <h3
                  className="text-xl mb-2"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  {highlight.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "var(--line-height-loose)",
                  }}
                >
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
