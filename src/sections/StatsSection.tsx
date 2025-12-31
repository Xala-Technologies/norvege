"use client";

import { motion } from "framer-motion";
import { companyMetrics } from "@/content/company";

// Modern icon components
const MountainIcon = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const CompassIcon = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
    />
  </svg>
);

const PickaxeIcon = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const MineCartIcon = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    />
  </svg>
);

const iconComponents = [MountainIcon, CompassIcon, PickaxeIcon, MineCartIcon];

const labelMap: Record<string, string> = {
  "Exploration Licenses": "EXPLORATION LICENSES",
  "km² Licensed Area": "KM² LICENSED AREA",
  "Viable Finds": "VIABLE FINDS",
  "Billion NOK Est. Value": "BILLION NOK EST. VALUE",
  "Trillion NOK Est. Value": "TRILLION NOK EST. VALUE",
  "Significant REE Finds": "SIGNIFICANT REE FINDS",
  "REE Mineral Types": "REE MINERAL TYPES",
  "Public Partnerships": "PUBLIC PARTNERSHIPS",
  "Strategic Partnerships": "STRATEGIC PARTNERSHIPS",
  "Mining Licenses": "MINERAL HOLDINGS",
  "km² Exploration Area": "EXPLORATION AREA",
  "Elements Analyzed": "ELEMENTS ANALYZED",
  "Historic Mines": "HISTORIC MINES",
};

// Color schemes for each card - Deep Navy & Mustard Gold palette
const cardStyles = [
  {
    // Card 1: Deep Navy with Mustard Gold accent
    bg: "linear-gradient(135deg, var(--color-primary-main) 0%, var(--color-navy-800) 100%)",
    iconBg: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-hover) 10%, transparent) 100%)`,
    iconColor: "var(--color-accent-main)",
    numberColor: "var(--color-accent-main)",
    textColor: "var(--color-text-on-dark)",
    descriptionColor: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
  },
  {
    // Card 2: White with Mustard Gold accent
    bg: `linear-gradient(135deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 100%)`,
    iconBg: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 0%, color-mix(in srgb, var(--color-gold-400) 5%, transparent) 100%)`,
    iconColor: "var(--color-primary-main)",
    numberColor: "var(--color-accent-main)",
    textColor: "var(--color-primary-main)",
    descriptionColor: "var(--color-text-secondary)",
    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
  },
  {
    // Card 3: Mustard Gold gradient
    bg: `linear-gradient(135deg, color-mix(in srgb, var(--color-gold-400) 15%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
    iconBg: "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-gold-400) 100%)",
    iconColor: "var(--color-text-on-dark)",
    numberColor: "var(--color-primary-main)",
    textColor: "var(--color-primary-main)",
    descriptionColor: "var(--color-text-secondary)",
    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
  },
  {
    // Card 4: Deep Navy with Mustard Gold accent
    bg: "linear-gradient(135deg, var(--color-navy-800) 0%, var(--color-navy-700) 100%)",
    iconBg: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-hover) 10%, transparent) 100%)`,
    iconColor: "var(--color-accent-main)",
    numberColor: "var(--color-accent-main)",
    textColor: "var(--color-text-on-dark)",
    descriptionColor: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
  },
  {
    // Card 5: White with Deep Navy accent
    bg: `linear-gradient(135deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 100%)`,
    iconBg: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 15%, transparent) 0%, color-mix(in srgb, var(--color-navy-800) 10%, transparent) 100%)`,
    iconColor: "var(--color-primary-main)",
    numberColor: "var(--color-primary-main)",
    textColor: "var(--color-primary-main)",
    descriptionColor: "var(--color-text-secondary)",
    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
  },
  {
    // Card 6: Mustard Gold with Deep Navy text
    bg: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-gold-400) 15%, transparent) 100%)`,
    iconBg: "linear-gradient(135deg, var(--color-primary-main) 0%, var(--color-navy-800) 100%)",
    iconColor: "var(--color-accent-main)",
    numberColor: "var(--color-primary-main)",
    textColor: "var(--color-primary-main)",
    descriptionColor: "var(--color-text-secondary)",
    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
  },
];

export default function StatsSection() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-gray-50) 0%, #ffffff 50%, var(--color-gray-50) 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-accent-main)", opacity: 0.1 }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-accent-main)", opacity: 0.1 }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-eyebrow inline-block px-4 py-2 rounded-full mb-6"
            style={{
              background: "color-mix(in srgb, var(--color-accent-main) 10%, transparent)",
              color: "var(--color-accent-main)",
              border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
            }}
          >
            Our Impact
          </motion.span>
          <h2
            className="text-display"
            style={{
              color: "var(--color-text-body)",
              marginBottom: "var(--space-8)",
            }}
          >
            Exploration at Scale
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center block"
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-loose)",
              fontFamily: "var(--font-family-body)",
              fontWeight: "var(--font-weight-regular)",
              letterSpacing: "-0.01em",
            }}
          >
            Norve&apos;Ge Minerals is a Norwegian exploration company focused on unlocking mineral
            value from historic mines and future-critical resources, combining traditional mining
            with advanced water-based mineral extraction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {companyMetrics.map((stat, index) => {
            const IconComponent = iconComponents[index % iconComponents.length];
            const style = cardStyles[index % cardStyles.length];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="relative group w-full"
              >
                {/* Card */}
                <div
                  className="card relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300"
                  style={{
                    background: style.bg,
                    border: style.border,
                    boxShadow: "none",
                  }}
                >
                  {/* Hover glow effect with border - Enhanced visibility */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${style.iconColor}30 0%, transparent 70%)`,
                      border: `2px solid var(--color-primary-main)`,
                      borderRadius: "inherit",
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative mb-4 sm:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex-shrink-0"
                    style={{
                      background: style.iconBg,
                    }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div style={{ color: style.iconColor }} className="w-full h-full">
                      <IconComponent className="w-full h-full" />
                    </div>
                  </motion.div>

                  {/* Number */}
                  <motion.div
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 sm:mb-4 leading-none break-words"
                    style={{ color: style.numberColor }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <div
                    className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 sm:mb-3 tracking-wider uppercase leading-tight"
                    style={{ color: style.textColor }}
                  >
                    {labelMap[stat.label] || stat.label}
                  </div>

                  {/* Description */}
                  <p
                    className="text-xs sm:text-sm md:text-base leading-relaxed mt-auto"
                    style={{ color: style.descriptionColor }}
                  >
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 h-1 rounded-full mx-auto max-w-2xl"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--color-accent-main) 50%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
