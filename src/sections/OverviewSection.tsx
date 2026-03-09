"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const NAVY = "#1B2A4A";

export default function OverviewSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "white" }}>
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: "rgba(27, 42, 74, 0.12)" }}
        >
          {/* Column 1: Our Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-0 md:px-8 lg:px-10 py-8 md:py-0 first:pl-0 last:pr-0"
          >
            <h3
              className="text-xl lg:text-2xl mb-6"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                fontStyle: "italic",
                color: NAVY,
              }}
            >
              Our Strategy
            </h3>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(27, 42, 74, 0.65)" }}
            >
              District-scale exploration &amp; brownfield mine restart opportunities.
            </p>
            <div className="relative h-48 lg:h-56 rounded-sm overflow-hidden">
              <Image
                src="/images/projects/killingdal/overview.jpg"
                alt="Historic mining district"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Column 2: Sustainable Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="px-0 md:px-8 lg:px-10 py-8 md:py-0"
          >
            <h3
              className="text-xl lg:text-2xl mb-6"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                fontStyle: "italic",
                color: NAVY,
              }}
            >
              Sustainable Development
            </h3>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(27, 42, 74, 0.65)" }}
            >
              Responsible resource development aligned with strong ESG principles.
            </p>
            <div className="relative h-48 lg:h-56 rounded-sm overflow-hidden">
              <Image
                src="/images/projects/killingdal/exploration.jpg"
                alt="Sustainable mining operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Column 3: Portfolio Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="px-0 md:px-8 lg:px-10 py-8 md:py-0 last:pr-0"
          >
            <h3
              className="text-xl lg:text-2xl mb-6"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                fontStyle: "italic",
                color: NAVY,
              }}
            >
              Portfolio Highlights
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5"
                  style={{ background: NAVY }}
                />
                <p className="text-base leading-relaxed" style={{ color: "rgba(27, 42, 74, 0.7)" }}>
                  <span className="text-2xl font-bold" style={{ color: NAVY }}>
                    140
                  </span>{" "}
                  Exploration Licences Across Norway
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5"
                  style={{ background: NAVY }}
                />
                <p className="text-base leading-relaxed" style={{ color: "rgba(27, 42, 74, 0.7)" }}>
                  <span className="text-2xl font-bold" style={{ color: NAVY }}>
                    ~1,400
                  </span>{" "}
                  km² of Exploration Area
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5"
                  style={{ background: NAVY }}
                />
                <p className="text-base leading-relaxed" style={{ color: "rgba(27, 42, 74, 0.7)" }}>
                  Copper | Zinc, Rare Earths, Titanium &amp; More
                </p>
              </li>
            </ul>

            <div className="grid grid-cols-3 gap-2">
              <div className="relative h-24 lg:h-28 rounded-sm overflow-hidden">
                <Image
                  src="/images/projects/killingdal/geology-ore.jpg"
                  alt="Mineral sample"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 11vw"
                />
              </div>
              <div className="relative h-24 lg:h-28 rounded-sm overflow-hidden">
                <Image
                  src="/images/hero/01.jpg"
                  alt="Geological formation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 11vw"
                />
              </div>
              <div className="relative h-24 lg:h-28 rounded-sm overflow-hidden">
                <Image
                  src="/images/hero/05.jpg"
                  alt="Mining landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 11vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
