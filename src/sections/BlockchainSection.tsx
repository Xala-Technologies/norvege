"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Custom SVG Icons
const TokenIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
);

const GlobeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const ShieldIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const ChartIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const features = [
  {
    icon: TokenIcon,
    title: "Tokenized Assets",
    description:
      "Fractional ownership and liquidity through blockchain tokenization of mineral assets. Each asset is represented as a secure, tradeable token.",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    icon: GlobeIcon,
    title: "Global Access",
    description:
      "Opening investment opportunities to a global audience, breaking down traditional barriers and enabling borderless participation.",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "rgba(34, 197, 94, 0.1)",
  },
  {
    icon: ShieldIcon,
    title: "Secure & Transparent",
    description:
      "Immutable records and verifiable ownership through blockchain technology. Every transaction is transparent and auditable.",
    gradient: "from-purple-500 to-pink-600",
    bgColor: "rgba(168, 85, 247, 0.1)",
  },
  {
    icon: ChartIcon,
    title: "Direct Investment",
    description:
      "Direct investment in exploration projects with transparent tracking and returns. Real-time visibility into project performance.",
    gradient: "from-orange-500 to-amber-600",
    bgColor: "rgba(249, 115, 22, 0.1)",
  },
];

export default function BlockchainSection() {
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
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-copper-400)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-navy-900)" }}
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
            Blockchain Technology
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
            Tokenized on <span style={{ color: "var(--color-copper-600)" }}>NorChain</span>
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
            Norvege Minerals has partnered with NorChain to bring transparency and accessibility to
            mineral exploration. Our assets are tokenized, enabling secure, verifiable ownership and
            investment opportunities powered by blockchain technology.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
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
                className="group relative"
              >
                {/* Card */}
                <div
                  className="relative p-8 lg:p-10 rounded-3xl transition-all duration-500 overflow-hidden h-full"
                  style={{
                    background: "white",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${feature.bgColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl md:text-2xl font-bold mb-4"
                    style={{ color: "var(--color-navy-900)" }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-br ${feature.gradient}`}
                    style={{
                      transform: "translate(30%, -30%)",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://www.norchain.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-copper-600) 0%, var(--color-copper-500) 100%)",
                  color: "white",
                  boxShadow: "0 10px 40px rgba(182, 125, 66, 0.4)",
                }}
              >
                Invest on NorChain
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg border-2 transition-all duration-300"
                style={{
                  borderColor: "var(--color-navy-900)",
                  color: "var(--color-navy-900)",
                  background: "white",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                Learn More
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

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
