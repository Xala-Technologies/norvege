"use client";

import { motion } from "framer-motion";

// Custom SVG Icons
const WarningIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

const GrowthIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ChartBarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const GlobeAltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const ExclamationTriangleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

const dependencyStats = [
  {
    number: "98%",
    title: "Lack of Refining Capacity",
    description:
      "Europe depends on external sources for rare earth refining, creating significant supply chain vulnerabilities and geopolitical risks.",
    icon: WarningIcon,
    color: "from-gold-500 to-gold-400",
    bgColor: "color-mix(in srgb, var(--color-accent-main) 10%, transparent)",
  },
  {
    number: "100%",
    title: "Import Dependency",
    description:
      "The EU currently imports 100% of its rare earth elements with no domestic extraction, exposing Europe to supply disruptions.",
    icon: GlobeAltIcon,
    color: "from-gold-500 to-gold-400",
    bgColor: "rgba(104, 211, 136, 0.1)",
  },
  {
    number: "5×",
    title: "Demand Growth by 2030",
    description:
      "EU demand for REEs in strategic technologies—electric vehicles, wind turbines, defense systems—is projected to increase 5 times by 2030.",
    icon: GrowthIcon,
    color: "from-gold-500 to-gold-400",
    bgColor: "color-mix(in srgb, var(--color-accent-main) 10%, transparent)",
  },
];

const responseTargets = [
  {
    label: "Extraction Target (2030)",
    value: 10,
  },
  {
    label: "Processing Target (2030)",
    value: 40,
  },
  {
    label: "Recycling Target (2030)",
    value: 25,
  },
];

export default function RareEarthSection() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 30%, var(--color-bg-subtle) 70%, var(--color-bg-default) 100%)`,
      }}
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "var(--color-primary-main)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "var(--color-accent-main)" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-primary-main) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-primary-main) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-eyebrow inline-block px-5 py-2.5 rounded-full mb-8"
            style={{
              background: "color-mix(in srgb, var(--color-accent-main) 12%, transparent)",
              color: "var(--color-accent-main)",
              border: `1px solid color-mix(in srgb, var(--color-accent-main) 25%, transparent)`,
              boxShadow: "var(--shadow-accent)",
            }}
          >
            Strategic Context
          </motion.span>
          <h2
            className="text-display mb-6"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.03em",
            }}
          >
            Europe&apos;s Race for{" "}
            <span
              style={{
                color: "var(--color-accent-main)",
              }}
            >
              Rare Earths
            </span>
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center block"
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-loose)",
              fontFamily: "var(--font-family-body)",
              fontWeight: "var(--font-weight-medium)",
              letterSpacing: "-0.01em",
            }}
          >
            From Dependency to Dominance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left Column - The Critical Dependency */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 25%, transparent) 0%, color-mix(in srgb, var(--color-gold-400) 15%, transparent) 100%)`,
                  color: "var(--color-accent-main)",
                  boxShadow: "var(--shadow-accent)",
                }}
              >
                <ExclamationTriangleIcon className="w-7 h-7" />
              </div>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{
                  color: "var(--color-text-body)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                The Critical Dependency
              </h3>
            </div>

            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{
                color: "var(--color-text-body)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-base)",
              }}
            >
              Europe is heavily dependent on imports for strategic resources. Renewable energy and
              5G infrastructure require large amounts of{" "}
              <strong>Copper, Nickel, Lithium, Cobalt, and Rare Earth Elements (REEs)</strong>.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{
                color: "var(--color-text-body)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-base)",
              }}
            >
              Recycling alone cannot cover the demand. Responsible, domestic mining is crucial for
              Norway&apos;s security of supply and independence.
            </p>

            <div className="space-y-6">
              {dependencyStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="group relative"
                  >
                    <div
                      className="relative p-8 lg:p-10 rounded-3xl transition-all duration-500 overflow-hidden card-elevated"
                      style={{
                        background: "var(--color-surface-card)",
                        border: `1px solid color-mix(in srgb, var(--color-border-light) 50%, transparent)`,
                        boxShadow: "var(--shadow-md)",
                      }}
                    >
                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, color-mix(in srgb, var(--color-accent-main) 8%, transparent) 0%, transparent 70%)`,
                        }}
                      />

                      {/* Subtle border glow on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          border: `2px solid color-mix(in srgb, var(--color-accent-main) 20%, transparent)`,
                          pointerEvents: "none",
                        }}
                      />

                      <div className="relative flex items-start gap-6">
                        {/* Number Badge */}
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center text-3xl lg:text-4xl font-extrabold text-white"
                            style={{
                              background:
                                "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-accent-hover) 100%)",
                              boxShadow: "var(--shadow-accent-lg)",
                            }}
                            whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                            transition={{ duration: 0.3 }}
                          >
                            {stat.number}
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-2">
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{
                                background: stat.bgColor,
                                color: "var(--color-primary-main)",
                              }}
                            >
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <h4
                              className="text-xl md:text-2xl font-bold"
                              style={{
                                color: "var(--color-text-body)",
                                fontFamily: "var(--font-family-heading)",
                                fontWeight: "var(--font-weight-bold)",
                              }}
                            >
                              {stat.title}
                            </h4>
                          </div>
                          <p
                            className="leading-relaxed"
                            style={{
                              color: "var(--color-text-secondary)",
                              fontFamily: "var(--font-family-body)",
                              lineHeight: "var(--line-height-base)",
                            }}
                          >
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - The European Response */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 25%, transparent) 0%, color-mix(in srgb, var(--color-gold-400) 15%, transparent) 100%)`,
                  color: "var(--color-accent-main)",
                  boxShadow: "var(--shadow-accent)",
                }}
              >
                <CheckCircleIcon className="w-7 h-7" />
              </div>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{
                  color: "var(--color-text-body)",
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: "var(--font-weight-black)",
                  letterSpacing: "-0.02em",
                }}
              >
                The European Response
              </h3>
            </div>

            <div className="space-y-8">
              {/* Critical Raw Materials Act Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div
                  className="relative p-8 rounded-3xl transition-all duration-500 overflow-hidden"
                  style={{
                    background: "white",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative flex items-start gap-6">
                    <motion.div
                      className="w-18 h-18 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-accent-hover) 100%)",
                        color: "var(--color-accent-contrast)",
                        boxShadow: "var(--shadow-accent-lg)",
                      }}
                      whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircleIcon className="w-9 h-9 lg:w-10 lg:h-10" />
                    </motion.div>
                    <div className="flex-1">
                      <h4
                        className="text-xl md:text-2xl font-bold mb-4"
                        style={{
                          color: "var(--color-text-body)",
                          fontFamily: "var(--font-family-heading)",
                          fontWeight: "var(--font-weight-bold)",
                        }}
                      >
                        The Critical Raw Materials Act
                      </h4>
                      <p
                        className="leading-relaxed"
                        style={{
                          color: "var(--color-text-secondary)",
                          fontFamily: "var(--font-family-body)",
                          lineHeight: "var(--line-height-base)",
                        }}
                      >
                        EU strategic plan to build a secure and resilient domestic supply chain,
                        reducing dependency on third countries for critical raw materials.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Production Targets Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div
                  className="relative p-8 rounded-3xl transition-all duration-500 overflow-hidden"
                  style={{
                    background: "white",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div
                        className="w-18 h-18 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-accent-hover) 100%)",
                          color: "var(--color-accent-contrast)",
                          boxShadow: "var(--shadow-accent-lg)",
                        }}
                        whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChartBarIcon className="w-9 h-9 lg:w-10 lg:h-10" />
                      </motion.div>
                      <h4
                        className="text-xl md:text-2xl font-bold"
                        style={{
                          color: "var(--color-text-body)",
                          fontFamily: "var(--font-family-heading)",
                          fontWeight: "var(--font-weight-bold)",
                        }}
                      >
                        Domestic Production Targets
                      </h4>
                    </div>

                    <div className="space-y-6">
                      {responseTargets.map((target, index) => (
                        <motion.div
                          key={target.label}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <span
                              className="text-sm font-semibold"
                              style={{
                                color: "var(--color-text-body)",
                                fontFamily: "var(--font-family-body)",
                                fontWeight: "var(--font-weight-semibold)",
                              }}
                            >
                              {target.label}
                            </span>
                            <span
                              className="text-lg font-bold"
                              style={{
                                color: "var(--color-accent-main)",
                                fontFamily: "var(--font-family-heading)",
                                fontWeight: "var(--font-weight-bold)",
                              }}
                            >
                              {target.value}%
                            </span>
                          </div>
                          <div
                            className="relative w-full h-3 rounded-full overflow-hidden progress-bar-track"
                            style={{
                              background:
                                "color-mix(in srgb, var(--color-primary-main) 10%, transparent)",
                            }}
                          >
                            <motion.div
                              className="h-full rounded-full progress-bar-filled"
                              style={{ background: "var(--color-accent-main)" }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${target.value}%` }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.4 + index * 0.1,
                                duration: 1,
                                ease: "easeOut",
                              }}
                            />
                            <div
                              className="absolute inset-0 opacity-30"
                              style={{
                                background:
                                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Highlight Card - 8.8 Mt */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div
                  className="relative p-10 rounded-3xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-800) 100%)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Decorative elements */}
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
                    style={{ background: "var(--color-gold-mustard)" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-2xl"
                    style={{ background: "var(--color-gold-mustard)" }}
                  />

                  <div className="relative flex items-start gap-6">
                    <motion.div
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-accent-hover) 100%)",
                        boxShadow: "var(--shadow-accent-lg)",
                        color: "var(--color-accent-contrast)",
                      }}
                      whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <GlobeAltIcon className="w-11 h-11 lg:w-12 lg:h-12" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.div
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"
                        style={{
                          color: "var(--color-accent-main)",
                          fontFamily: "var(--font-family-heading)",
                          fontWeight: "var(--font-weight-black)",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                      >
                        8.8 Mt
                      </motion.div>
                      <h4
                        className="text-2xl lg:text-3xl font-bold mb-4"
                        style={{
                          color: "var(--color-text-on-dark)",
                          fontFamily: "var(--font-family-heading)",
                          fontWeight: "var(--font-weight-bold)",
                        }}
                      >
                        Unlocking Domestic Resources
                      </h4>
                      <p
                        className="leading-relaxed"
                        style={{
                          color: "color-mix(in srgb, var(--color-text-on-dark) 85%, transparent)",
                          fontFamily: "var(--font-family-body)",
                          lineHeight: "var(--line-height-base)",
                        }}
                      >
                        Europe&apos;s largest REE deposit discovery in Fen, Norway positions the EU
                        to reduce import dependency. Norvege Minerals is strategically positioned to
                        play a key role in securing Europe&apos;s future supply of critical raw
                        materials.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
