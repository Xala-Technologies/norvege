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
    color: "from-red-500 to-orange-500",
    bgColor: "rgba(239, 68, 68, 0.1)",
  },
  {
    number: "100%",
    title: "Import Dependency",
    description:
      "The EU currently imports 100% of its rare earth elements with no domestic extraction, exposing Europe to supply disruptions.",
    icon: GlobeAltIcon,
    color: "from-blue-500 to-indigo-500",
    bgColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    number: "5×",
    title: "Demand Growth by 2030",
    description:
      "EU demand for REEs in strategic technologies—electric vehicles, wind turbines, defense systems—is projected to increase 5 times by 2030.",
    icon: GrowthIcon,
    color: "from-orange-500 to-amber-500",
    bgColor: "rgba(249, 115, 22, 0.1)",
  },
];

const responseTargets = [
  {
    label: "Extraction Target (2030)",
    value: 10,
    color: "from-green-500 to-emerald-600",
  },
  {
    label: "Processing Target (2030)",
    value: 40,
    color: "from-green-500 to-emerald-600",
  },
  {
    label: "Recycling Target (2030)",
    value: 25,
    color: "from-green-500 to-emerald-600",
  },
];

export default function RareEarthSection() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, var(--color-sand-50) 50%, #ffffff 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-navy-900)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-copper-400)" }}
        />
      </div>

      <div className="container max-w-7xl relative z-10">
        {/* Header */}
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
            Strategic Context
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
            Europe&apos;s Race for{" "}
            <span style={{ color: "var(--color-copper-600)" }}>Rare Earths</span>
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
            From Dependency to Dominance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - The Critical Dependency */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(249, 115, 22, 0.1) 100%)",
                  color: "var(--color-copper-600)",
                }}
              >
                <ExclamationTriangleIcon className="w-6 h-6" />
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "var(--color-navy-900)" }}
              >
                The Critical Dependency
              </h3>
            </div>

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
                      className="relative p-8 rounded-3xl transition-all duration-500 overflow-hidden"
                      style={{
                        background: "white",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${stat.bgColor} 0%, transparent 70%)`,
                        }}
                      />

                      <div className="relative flex items-start gap-6">
                        {/* Number Badge */}
                        <div className="flex-shrink-0">
                          <div
                            className={`w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-extrabold bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                          >
                            {stat.number}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-2">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{
                                background: stat.bgColor,
                                color: "var(--color-navy-900)",
                              }}
                            >
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <h4
                              className="text-xl md:text-2xl font-bold"
                              style={{ color: "var(--color-navy-900)" }}
                            >
                              {stat.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{stat.description}</p>
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
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)",
                  color: "#22c55e",
                }}
              >
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "var(--color-navy-900)" }}
              >
                The European Response
              </h3>
            </div>

            <div className="space-y-6">
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
                      background:
                        "radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
                    }}
                  />

                  <div className="relative flex items-start gap-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                        color: "white",
                      }}
                    >
                      <CheckCircleIcon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{ color: "var(--color-navy-900)" }}
                      >
                        The Critical Raw Materials Act
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
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
                      background:
                        "radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                          color: "white",
                        }}
                      >
                        <ChartBarIcon className="w-8 h-8" />
                      </div>
                      <h4
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: "var(--color-navy-900)" }}
                      >
                        Domestic Production Targets
                      </h4>
                    </div>

                    <div className="space-y-5">
                      {responseTargets.map((target, index) => (
                        <motion.div
                          key={target.label}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-gray-700">
                              {target.label}
                            </span>
                            <span
                              className="text-lg font-bold"
                              style={{ color: "var(--color-navy-900)" }}
                            >
                              {target.value}%
                            </span>
                          </div>
                          <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${target.color}`}
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
                      "linear-gradient(135deg, var(--color-navy-900) 0%, var(--color-navy-800) 100%)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Decorative elements */}
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
                    style={{ background: "var(--color-copper-400)" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-2xl"
                    style={{ background: "var(--color-copper-400)" }}
                  />

                  <div className="relative flex items-start gap-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-copper-400) 0%, var(--color-copper-600) 100%)",
                        boxShadow: "0 10px 30px rgba(212, 165, 116, 0.4)",
                        color: "white",
                      }}
                    >
                      <GlobeAltIcon className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <motion.div
                        className="text-5xl md:text-6xl font-extrabold mb-3"
                        style={{ color: "var(--color-copper-400)" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                      >
                        8.8 Mt
                      </motion.div>
                      <h4 className="text-2xl font-bold mb-3 text-white">
                        Unlocking Domestic Resources
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
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
