"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const LeafIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const BoltIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const CurrencyIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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

const benefits = [
  {
    icon: LeafIcon,
    title: "Sustainable",
    description:
      "Reduces CO₂ emissions by 20–40 tons per kg of minerals compared to traditional mining.",
    bgColor: "color-mix(in srgb, var(--color-accent-main) 10%, transparent)",
  },
  {
    icon: BoltIcon,
    title: "Efficient",
    description: "Recovers 750–1,500 kg of minerals per cycle.",
    bgColor: "color-mix(in srgb, var(--color-primary-main) 10%, transparent)",
  },
  {
    icon: CurrencyIcon,
    title: "Revenue",
    description: "Estimated €2.5M – €6.5M revenue per cycle.",
    bgColor: "color-mix(in srgb, var(--color-accent-main) 10%, transparent)",
  },
];

export default function BlockchainSection() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 30%, var(--color-bg-default) 70%, var(--color-bg-subtle) 100%)`,
      }}
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "var(--color-accent-main)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "var(--color-primary-main)" }}
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
              border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
              boxShadow: "none",
            }}
          >
            Innovation
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
            The Malm Mine{" "}
            <span
              style={{
                color: "var(--color-accent-main)",
              }}
            >
              Water Project
            </span>
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center block mb-8"
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-loose)",
              fontFamily: "var(--font-family-body)",
              fontWeight: "var(--font-weight-medium)",
              letterSpacing: "-0.01em",
            }}
          >
            Turning Environmental Liability into Sustainable Assets
          </p>
          <p
            className="text-base md:text-lg max-w-4xl mx-auto text-center block mb-6"
            style={{
              color: "var(--color-text-body)",
              lineHeight: "var(--line-height-loose)",
              fontFamily: "var(--font-family-body)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            We are revolutionizing extraction by utilizing{" "}
            <strong>7–10 million m³ of 26°C ion-rich mine water</strong> from the flooded Malm
            mines. By applying Selective Ion Exchange (IX) and Electro-winning (EW), we extract
            valuable metals while removing heavy metals from highly contaminated water,
            significantly reducing emissions compared to conventional mining.
          </p>
          <p
            className="text-sm md:text-base max-w-4xl mx-auto text-center block"
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-base)",
              fontFamily: "var(--font-family-body)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Combined with a thermo powerplant based on Double Flash technology (similar to
            Hellisheiði, Iceland), this creates a self-sustainable mineral processing process. The
            hot purified water is heated to 120°C using heat exchangers for power generation, then
            cooled and recirculated in a closed-loop system.
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
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
                    background: "var(--color-surface-card)",
                    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                    boxShadow: "none",
                  }}
                >
                  {/* Enhanced border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: `2px solid var(--color-primary-main)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative mb-6 inline-flex items-center justify-center w-18 h-18 lg:w-20 lg:h-20 rounded-2xl"
                    style={{
                      background:
                        benefit.title === "Sustainable"
                          ? "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-gold-400) 100%)"
                          : benefit.title === "Efficient"
                            ? "linear-gradient(135deg, var(--color-primary-main) 0%, var(--color-navy-800) 100%)"
                            : "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-accent-hover) 100%)",
                      color: "var(--color-text-on-dark)",
                      boxShadow: "none",
                    }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span
                      style={{
                        color:
                          benefit.title === "Efficient"
                            ? "var(--color-accent-main)"
                            : "var(--color-text-on-dark)",
                      }}
                    >
                      <IconComponent className="w-9 h-9 lg:w-10 lg:h-10" />
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl md:text-2xl font-bold mb-4"
                    style={{
                      color: "var(--color-text-body)",
                      fontFamily: "var(--font-family-heading)",
                      fontWeight: "var(--font-weight-bold)",
                    }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="leading-relaxed text-sm md:text-base"
                    style={{
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-family-body)",
                      lineHeight: "var(--line-height-base)",
                    }}
                  >
                    {benefit.description}
                  </p>
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
              <Link
                href="/projects"
                className="btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-gold-400) 100%)",
                  color: "var(--color-accent-contrast)",
                  boxShadow: "none",
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                Learn More About Our Projects
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg border-2 transition-all duration-300"
                style={{
                  borderColor: "var(--color-primary-main)",
                  color: "var(--color-primary-main)",
                  background: "var(--color-bg-default)",
                  boxShadow: "none",
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "var(--font-weight-bold)",
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
              "linear-gradient(90deg, transparent 0%, var(--color-accent-main) 50%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
