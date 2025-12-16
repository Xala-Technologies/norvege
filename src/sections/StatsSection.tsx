"use client";

import { motion } from "framer-motion";
import { companyMetrics } from "@/content/company";

// Modern icon components
const MountainIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const CompassIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
    />
  </svg>
);

const PickaxeIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const MineCartIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  "Mining Licenses": "MINERAL HOLDINGS",
  "km² Exploration Area": "EXPLORATION AREA",
  "Elements Analyzed": "ELEMENTS ANALYZED",
  "Historic Mines": "HISTORIC MINES",
};

// Color schemes for each card
const cardStyles = [
  {
    // Card 1: Navy with copper accent
    bg: "linear-gradient(135deg, var(--color-navy-900) 0%, var(--color-navy-800) 100%)",
    iconBg: "linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(182, 125, 66, 0.1) 100%)",
    iconColor: "var(--color-copper-400)",
    numberColor: "var(--color-copper-400)",
    textColor: "white",
    descriptionColor: "rgba(255, 255, 255, 0.7)",
    border: "1px solid rgba(212, 165, 116, 0.2)",
  },
  {
    // Card 2: White with navy accent
    bg: "linear-gradient(135deg, #ffffff 0%, var(--color-sand-50) 100%)",
    iconBg: "linear-gradient(135deg, rgba(10, 22, 40, 0.1) 0%, rgba(15, 31, 58, 0.05) 100%)",
    iconColor: "var(--color-navy-900)",
    numberColor: "var(--color-copper-600)",
    textColor: "var(--color-navy-900)",
    descriptionColor: "var(--color-gray-600)",
    border: "1px solid rgba(10, 22, 40, 0.1)",
  },
  {
    // Card 3: Copper gradient
    bg: "linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(182, 125, 66, 0.1) 100%)",
    iconBg: "linear-gradient(135deg, var(--color-copper-600) 0%, var(--color-copper-500) 100%)",
    iconColor: "white",
    numberColor: "var(--color-navy-900)",
    textColor: "var(--color-navy-900)",
    descriptionColor: "var(--color-gray-700)",
    border: "1px solid rgba(212, 165, 116, 0.3)",
  },
  {
    // Card 4: Navy with slate accent
    bg: "linear-gradient(135deg, var(--color-navy-800) 0%, var(--color-navy-700) 100%)",
    iconBg: "linear-gradient(135deg, rgba(124, 154, 181, 0.2) 0%, rgba(90, 122, 154, 0.1) 100%)",
    iconColor: "var(--color-slate-400)",
    numberColor: "var(--color-slate-400)",
    textColor: "white",
    descriptionColor: "rgba(255, 255, 255, 0.7)",
    border: "1px solid rgba(124, 154, 181, 0.2)",
  },
];

export default function StatsSection() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-sand-50) 0%, #ffffff 50%, var(--color-sand-50) 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-copper-400)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-navy-900)" }}
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
            className="inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
            style={{
              background: "rgba(212, 165, 116, 0.1)",
              color: "var(--color-copper-600)",
              border: "1px solid rgba(212, 165, 116, 0.2)",
            }}
          >
            Our Impact
          </motion.span>
          <h2
            className="text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]"
            style={{
              color: "var(--color-navy-900)",
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontWeight: 900,
              fontStyle: "normal",
              textShadow: "0 2px 8px rgba(10, 22, 40, 0.08)",
              marginBottom: "2.5rem",
            }}
          >
            Exploration at Scale
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center block"
            style={{
              color: "var(--color-navy-800)",
              lineHeight: "1.7",
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0",
            }}
          >
            Norvege Minerals is a leading mineral exploration company in Europe, with significant
            license holdings and proven geological expertise across Norway&apos;s most promising
            mineral districts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                className="relative group"
              >
                {/* Card */}
                <div
                  className="relative p-8 lg:p-10 rounded-3xl transition-all duration-500 overflow-hidden"
                  style={{
                    background: style.bg,
                    border: style.border,
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${style.iconColor}15 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl"
                    style={{
                      background: style.iconBg,
                    }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div style={{ color: style.iconColor }}>
                      <IconComponent />
                    </div>
                  </motion.div>

                  {/* Number */}
                  <motion.div
                    className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-none"
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
                    className="text-base md:text-lg font-bold mb-3 tracking-wider uppercase"
                    style={{ color: style.textColor }}
                  >
                    {labelMap[stat.label] || stat.label}
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: style.descriptionColor }}
                  >
                    {stat.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-10"
                    style={{
                      background: `radial-gradient(circle, ${style.iconColor} 0%, transparent 70%)`,
                      transform: "translate(30%, -30%)",
                    }}
                  />
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
              "linear-gradient(90deg, transparent 0%, var(--color-copper-400) 50%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
