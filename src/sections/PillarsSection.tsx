"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Critical Minerals",
    description:
      "Exploration and development of copper, zinc, rare earths and other strategic minerals essential to electrification and modern industry.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76M11.25 2.25L12 2.25"
        />
      </svg>
    ),
  },
  {
    title: "Brownfield Mine Restart",
    description:
      "Evaluating historic Norwegian mining districts where legacy data, infrastructure and geology create opportunities for redevelopment.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
        />
      </svg>
    ),
  },
  {
    title: "Energy Solutions",
    description:
      "Developing geothermal and mine-water heat opportunities through Norvegen Energy to support low-carbon industrial systems.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
];

export default function PillarsSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "white" }}>
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="text-center"
            >
              <div
                className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ background: "rgba(27, 42, 74, 0.06)", color: "#1B2A4A" }}
              >
                {pillar.icon}
              </div>
              <h3
                className="text-xl lg:text-2xl mb-4"
                style={{
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: 700,
                  color: "#1B2A4A",
                }}
              >
                {pillar.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "rgba(27, 42, 74, 0.65)" }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
