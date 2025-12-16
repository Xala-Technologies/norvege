"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function InvestorCTA() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "var(--color-navy-deep)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20 lg:mb-24"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-sand-50)" }}
          >
            Partner With Us
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--color-sand-100)" }}>
            Join us in building the foundation for a sustainable energy future. Whether you&apos;re
            an investor, partner, or stakeholder, we invite you to be part of Norway&apos;s mineral
            renaissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/investors" className="btn btn-primary text-lg px-8 py-4">
              Investor Information
            </Link>
            <Link
              href="/contact"
              className="btn btn-secondary text-lg px-8 py-4"
              style={{
                borderColor: "var(--color-sand-100)",
                color: "var(--color-sand-100)",
              }}
            >
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
