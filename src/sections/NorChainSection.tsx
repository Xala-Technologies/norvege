"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Icons
const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
    />
  </svg>
);

const GlobeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.6 9h16.8" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.6 15h16.8" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z"
    />
  </svg>
);

const LockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11c1.1 0 2 .9 2 2v2a2 2 0 11-4 0v-2c0-1.1.9-2 2-2z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11V8a5 5 0 0110 0v3" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 11h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z"
    />
  </svg>
);

const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14L21 3" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 14v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6"
    />
  </svg>
);

type Feature = {
  icon: (p: { className?: string }) => React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: ShieldIcon,
    title: "Tokenized Assets",
    description:
      "Our mineral assets are securely tokenized on the NorChain blockchain for transparent ownership.",
  },
  {
    icon: GlobeIcon,
    title: "Global Access",
    description:
      "Enabling worldwide investment opportunities in Norwegian mineral exploration with compliant infrastructure.",
  },
  {
    icon: LockIcon,
    title: "Secure & Transparent",
    description:
      "Blockchain-verified transactions with complete audit trails and stronger governance for stakeholders.",
  },
];

export default function NorChainSection() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F6F1E8 0%, #FAF7F1 45%, #FFFFFF 100%)",
      }}
    >
      {/* Soft background tint + subtle texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            background:
              "radial-gradient(900px 520px at 25% 30%, color-mix(in srgb, var(--color-accent-main) 14%, transparent) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container max-w-7xl relative z-10">
        {/* Header (centered) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span
            className="inline-block px-5 py-2.5 rounded-full text-eyebrow mb-7"
            style={{
              background: "rgba(227, 161, 66, 0.16)",
              color: "var(--color-accent-main)",
              border: "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
            }}
          >
            Blockchain Integration
          </span>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            style={{
              color: "var(--color-text-body)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.03em",
            }}
          >
            Our Assets are Tokenized on{" "}
            <span style={{ color: "var(--color-accent-main)" }}>NorChain</span>
          </h1>

          <p
            className="mt-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-family-body)",
              lineHeight: "var(--line-height-loose)",
            }}
          >
            Norvege Minerals has partnered with NorChain to bring transparency and accessibility to
            mineral exploration—enabling secure, verifiable ownership and investment opportunities
            powered by blockchain technology.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.norchain.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-gold-400) 100%)",
                color: "var(--color-accent-contrast)",
                boxShadow: "none",
                fontFamily: "var(--font-family-body)",
              }}
            >
              Visit NorChain <ExternalLinkIcon />
            </a>
            <Link
              href="/investors"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
              style={{
                background: "rgba(255,255,255,0.75)",
                color: "var(--color-text-body)",
                border: "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                boxShadow: "none",
                fontFamily: "var(--font-family-body)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* New layout: visual panel + numbered features */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Visual / summary panel */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="group lg:col-span-6 rounded-3xl overflow-hidden relative"
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
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                border: `2px solid var(--color-primary-main)`,
              }}
            />

            <div className="relative p-8 md:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(15, 23, 42, 0.06)",
                      color: "var(--color-text-body)",
                      border:
                        "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                      fontFamily: "var(--font-family-body)",
                    }}
                  >
                    Powered by NorChain
                  </div>
                  <h3
                    className="mt-5 text-2xl md:text-3xl font-bold"
                    style={{
                      color: "var(--color-text-body)",
                      fontFamily: "var(--font-family-heading)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Transparent ownership with compliant infrastructure
                  </h3>
                  <p
                    className="mt-4 text-base md:text-lg leading-relaxed max-w-xl"
                    style={{
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-family-body)",
                      lineHeight: "var(--line-height-base)",
                    }}
                  >
                    A clean on-chain record of assets, governance and audit trails—designed for
                    institutional-grade access and reporting.
                  </p>
                </div>

                {/* Simple NorChain mark */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(227, 161, 66, 0.14)",
                    border:
                      "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                    color: "var(--color-accent-main)",
                  }}
                  aria-hidden="true"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z" />
                    <path d="M12 6a6 6 0 106 6h-2a4 4 0 11-4-4V6z" />
                  </svg>
                </div>
              </div>

              {/* Mini “token chips” */}
              <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Asset Token", "Audit Trail", "Investor Access"].map((label) => (
                  <div
                    key={label}
                    className="px-4 py-3 rounded-2xl text-sm font-semibold"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      border:
                        "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                      color: "var(--color-text-body)",
                      fontFamily: "var(--font-family-body)",
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Summary stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { k: "Security", v: "On-chain" },
                  { k: "Reporting", v: "Auditable" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl p-5"
                    style={{
                      background: "rgba(15, 23, 42, 0.05)",
                      border:
                        "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                    }}
                  >
                    <div
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{
                        color: "var(--color-text-secondary)",
                        fontFamily: "var(--font-family-body)",
                      }}
                    >
                      {s.k}
                    </div>
                    <div
                      className="mt-1 text-lg font-bold"
                      style={{
                        color: "var(--color-text-body)",
                        fontFamily: "var(--font-family-heading)",
                      }}
                    >
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Numbered feature list */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-6"
          >
            <div className="space-y-4">
              {features.map((f, idx) => {
                const Icon = f.icon;
                const step = String(idx + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.12 + idx * 0.08 }}
                    className="group rounded-2xl p-6 md:p-7 relative overflow-hidden"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      border:
                        "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                      boxShadow: "none",
                    }}
                  >
                    {/* Enhanced border glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        border: `2px solid var(--color-primary-main)`,
                      }}
                    />
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                          style={{
                            background: "rgba(227, 161, 66, 0.14)",
                            color: "var(--color-accent-main)",
                            border:
                              "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                            fontFamily: "var(--font-family-body)",
                          }}
                        >
                          {step}
                        </div>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: "rgba(15, 23, 42, 0.05)",
                            border:
                              "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                            color: "var(--color-primary-main)",
                          }}
                        >
                          {Icon({ className: "w-6 h-6" })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-xl md:text-2xl font-bold mb-2"
                          style={{
                            color: "var(--color-text-body)",
                            fontFamily: "var(--font-family-heading)",
                          }}
                        >
                          {f.title}
                        </h3>
                        <p
                          className="text-sm md:text-base leading-relaxed"
                          style={{
                            color: "var(--color-text-secondary)",
                            fontFamily: "var(--font-family-body)",
                          }}
                        >
                          {f.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Powered by bar (kept, more compact) */}
              <div
                className="rounded-2xl p-5 md:p-6"
                style={{
                  background: "rgba(15, 23, 42, 0.06)",
                  border: "1px solid rgba(15, 23, 42, 0.10)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(15, 23, 42, 0.08)",
                      color: "var(--color-primary-main)",
                    }}
                    aria-hidden="true"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z" />
                      <path d="M12 6a6 6 0 106 6h-2a4 4 0 11-4-4V6z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "var(--color-text-body)" }}>
                      Powered by NorChain
                    </div>
                    <div className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      The Complete Blockchain Operating System
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
