"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const platforms = [
  {
    title: "NORVEGEN MINERALS",
    description: "Critical minerals exploration and brownfield mine redevelopment across Norway.",
    detail:
      "The company is building one of the larger private mineral exploration portfolios in the country.",
    image: "/images/projects/killingdal/geology-ore.jpg",
  },
  {
    title: "NORVEGEN ENERGY",
    description:
      "Development of geothermal and mine-heat energy solutions linked to subsurface and industrial environments.",
    detail:
      "The company is developing integrated and smart mineral solutions fitted to subsurface and industrial environments.",
    image: "/images/hero/04.jpg",
  },
];

export default function BusinessPlatformSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "white" }}>
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl text-center mb-24"
          style={{
            fontFamily: "var(--font-family-heading)",
            fontWeight: 700,
            color: "#1B2A4A",
          }}
        >
          Our Business Platform
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-md overflow-hidden"
              style={{
                border: "1px solid rgba(27, 42, 74, 0.1)",
              }}
            >
              <div className="relative h-64 lg:h-72">
                <Image src={platform.image} alt={platform.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3
                  className="text-xl font-bold mb-3 uppercase tracking-wider"
                  style={{ color: "#1B2A4A", fontSize: "1.1rem" }}
                >
                  {platform.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-3"
                  style={{ color: "rgba(27, 42, 74, 0.7)" }}
                >
                  {platform.description}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(27, 42, 74, 0.5)" }}>
                  {platform.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
