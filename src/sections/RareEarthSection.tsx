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
        background: `linear-gradient(180deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 35%, var(--color-bg-subtle) 65%, var(--color-bg-default) 100%)`,
      }}
    >
      {/* Refined background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            background:
              "radial-gradient(900px 520px at 20% 25%, color-mix(in srgb, var(--color-accent-main) 12%, transparent) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.10) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
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
            className="text-eyebrow inline-block px-5 py-2.5 rounded-full mb-7"
            style={{
              background: "rgba(227, 161, 66, 0.16)",
              color: "var(--color-accent-main)",
              border: "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
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
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-loose)",
              fontFamily: "var(--font-family-body)",
            }}
          >
            From Dependency to Dominance
          </p>
        </motion.div>

        {/* Quick stats (refined cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {dependencyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group rounded-3xl p-8 lg:p-9 relative overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.78)",
                  border:
                    "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                  boxShadow: "none",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                {/* Enhanced border glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                    borderRadius: "inherit",
                  }}
                />
                <div
                  className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full opacity-35"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in srgb, var(--color-text-body) 8%, transparent) 0%, transparent 65%)",
                  }}
                />
                <div className="relative flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(227, 161, 66, 0.14)",
                        color: "var(--color-accent-main)",
                        border:
                          "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                      }}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div
                        className="text-4xl lg:text-5xl font-extrabold leading-none"
                        style={{
                          color: "var(--color-accent-main)",
                          fontFamily: "var(--font-family-heading)",
                          fontWeight: "var(--font-weight-black)",
                        }}
                      >
                        {stat.number}
                      </div>
                      <div
                        className="mt-2 text-xl md:text-2xl font-bold"
                        style={{
                          color: "var(--color-text-body)",
                          fontFamily: "var(--font-family-heading)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {stat.title}
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-family-body)",
                      lineHeight: "var(--line-height-base)",
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative + Response (refined layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Narrative + key minerals chips */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 25%, transparent) 0%, color-mix(in srgb, var(--color-gold-400) 15%, transparent) 100%)`,
                  color: "var(--color-accent-main)",
                  boxShadow: "none",
                }}
              >
                <ExclamationTriangleIcon className="w-7 h-7" />
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold"
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

            <div
              className="group rounded-3xl p-8 md:p-9 lg:p-10 relative overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.78)",
                border: "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                boxShadow: "none",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {/* Enhanced border glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: `2px solid var(--color-primary-main)`,
                  borderRadius: "inherit",
                }}
              />
              <div
                className="absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--color-primary-main) 18%, transparent) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "var(--line-height-base)",
                  }}
                >
                  Europe is heavily dependent on imports for strategic resources. Renewable energy
                  and 5G infrastructure require large amounts of{" "}
                  <strong style={{ color: "var(--color-text-body)" }}>
                    Copper, Nickel, Lithium, Cobalt, and Rare Earth Elements (REEs)
                  </strong>
                  .
                </p>

                <div className="flex flex-wrap gap-2.5 mb-6">
                  {["Copper", "Nickel", "Lithium", "Cobalt", "Rare Earths"].map((m) => (
                    <span
                      key={m}
                      className="px-4 py-2.5 rounded-full text-sm font-semibold"
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        color: "var(--color-text-body)",
                        border: "1px solid rgba(15, 23, 42, 0.10)",
                        fontFamily: "var(--font-family-body)",
                        boxShadow: "none",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "var(--line-height-base)",
                  }}
                >
                  Recycling alone cannot cover the demand. Responsible, domestic mining is crucial
                  for Norway&apos;s security of supply and independence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Response cards + targets + highlight */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 25%, transparent) 0%, color-mix(in srgb, var(--color-gold-400) 15%, transparent) 100%)`,
                  color: "var(--color-accent-main)",
                  boxShadow: "none",
                }}
              >
                <CheckCircleIcon className="w-7 h-7" />
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold"
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

            {/* Act + targets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div
                className="group rounded-3xl p-8 md:p-9 relative overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.78)",
                  border:
                    "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                  boxShadow: "none",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                {/* Enhanced border glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                    borderRadius: "inherit",
                  }}
                />
                <div
                  className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in srgb, var(--color-text-body) 8%, transparent) 0%, transparent 65%)",
                  }}
                />
                <div className="relative flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-accent-hover) 100%)",
                      color: "var(--color-accent-contrast)",
                      boxShadow: "none",
                    }}
                  >
                    <CheckCircleIcon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h4
                      className="text-xl md:text-2xl font-bold mb-3"
                      style={{
                        color: "var(--color-text-body)",
                        fontFamily: "var(--font-family-heading)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Critical Raw Materials Act
                    </h4>
                    <p
                      className="text-base md:text-lg leading-relaxed"
                      style={{
                        color: "var(--color-text-secondary)",
                        fontFamily: "var(--font-family-body)",
                        lineHeight: "var(--line-height-base)",
                      }}
                    >
                      A strategic plan to build a secure and resilient domestic supply chain and
                      reduce dependency on third countries for critical raw materials.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="group rounded-3xl p-8 md:p-9 relative overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.78)",
                  border:
                    "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                  boxShadow: "none",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                {/* Enhanced border glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                    borderRadius: "inherit",
                  }}
                />
                <div
                  className="absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in srgb, var(--color-primary-main) 18%, transparent) 0%, transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-accent-hover) 100%)",
                        color: "var(--color-accent-contrast)",
                        boxShadow: "none",
                      }}
                    >
                      <ChartBarIcon className="w-7 h-7" />
                    </div>
                    <h4
                      className="text-xl md:text-2xl font-bold"
                      style={{
                        color: "var(--color-text-body)",
                        fontFamily: "var(--font-family-heading)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      2030 Targets
                    </h4>
                  </div>

                  <div className="space-y-5">
                    {responseTargets.map((target, i) => (
                      <div key={target.label}>
                        <div className="flex justify-between items-center mb-2.5">
                          <span
                            className="text-sm md:text-base font-semibold"
                            style={{
                              color: "var(--color-text-body)",
                              fontFamily: "var(--font-family-body)",
                            }}
                          >
                            {target.label}
                          </span>
                          <span
                            className="text-base md:text-lg font-bold"
                            style={{
                              color: "var(--color-accent-main)",
                              fontFamily: "var(--font-family-heading)",
                            }}
                          >
                            {target.value}%
                          </span>
                        </div>
                        <div
                          className="relative w-full h-3 rounded-full overflow-hidden"
                          style={{
                            background: "rgba(15, 23, 42, 0.08)",
                          }}
                        >
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background:
                                "linear-gradient(90deg, var(--color-accent-main) 0%, var(--color-gold-400) 100%)",
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${target.value}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.08, duration: 0.9, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight card */}
            <div
              className="group rounded-3xl p-9 md:p-10 lg:p-12 relative overflow-hidden transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-800) 100%)",
                border: "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                boxShadow: "none",
              }}
            >
              {/* Enhanced border glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: `2px solid var(--color-primary-main)`,
                  borderRadius: "inherit",
                }}
              />

              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                <div
                  className="w-18 h-18 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-accent-hover) 100%)",
                    boxShadow: "none",
                    color: "var(--color-accent-contrast)",
                  }}
                >
                  <GlobeAltIcon className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <div
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none"
                    style={{
                      color: "var(--color-accent-main)",
                      fontFamily: "var(--font-family-heading)",
                      fontWeight: "var(--font-weight-black)",
                    }}
                  >
                    8.8 Mt
                  </div>
                  <div
                    className="mt-3 text-2xl md:text-3xl font-bold"
                    style={{
                      color: "var(--color-text-on-dark)",
                      fontFamily: "var(--font-family-heading)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Unlocking Domestic Resources
                  </div>
                  <p
                    className="mt-4 text-base md:text-lg leading-relaxed"
                    style={{
                      color: "color-mix(in srgb, var(--color-text-on-dark) 88%, transparent)",
                      fontFamily: "var(--font-family-body)",
                      lineHeight: "var(--line-height-base)",
                    }}
                  >
                    Europe&apos;s largest REE deposit discovery in Fen, Norway positions the EU to
                    reduce import dependency. Norvege Minerals is strategically positioned to play a
                    key role in securing Europe&apos;s future supply of critical raw materials.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
