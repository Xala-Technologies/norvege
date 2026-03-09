"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const NAVY = "#1B2A4A";

export default function StrategyContent() {
  const t = useTranslations("strategy");

  const portfolioItems = [t("portfolio.item1"), t("portfolio.item2"), t("portfolio.item3")];

  return (
    <>
      {/* Hero */}
      <section className="relative w-full py-32 lg:py-40 overflow-hidden">
        <Image
          src="/images/hero/strategy.jpg"
          alt="Norwegian mining landscape"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(27, 42, 74, 0.88) 0%, rgba(27, 42, 74, 0.6) 60%, rgba(27, 42, 74, 0.35) 100%)`,
          }}
        />
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
              style={{
                color: "white",
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              {t("hero.description")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction — image left, text right */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-72 sm:h-80 lg:h-[400px] rounded-lg overflow-hidden"
              style={{ boxShadow: "0 15px 40px rgba(0, 0, 0, 0.12)" }}
            >
              <Image
                src="/images/hero/strategy-introduction.jpg"
                alt="Geologist examining mineral core samples"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-8">
                <h2
                  className="text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: NAVY,
                  }}
                >
                  {t("introduction.title")}
                </h2>
                <div className="w-16 h-px mt-4" style={{ background: "rgba(27, 42, 74, 0.25)" }} />
              </div>
              <p
                className="text-base lg:text-lg leading-relaxed mb-5"
                style={{ color: "rgba(27, 42, 74, 0.7)" }}
              >
                {t("introduction.paragraph1")}
              </p>
              <p
                className="text-base lg:text-lg leading-relaxed mb-5"
                style={{ color: "rgba(27, 42, 74, 0.7)" }}
              >
                {t("introduction.paragraph2")}
              </p>
              <p
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: "rgba(27, 42, 74, 0.7)" }}
              >
                {t("introduction.paragraph3")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy Detail — text left, image right */}
      <section className="py-20 lg:py-28" style={{ background: "var(--color-bg-default)" }}>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-8">
                <h2
                  className="text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: NAVY,
                  }}
                >
                  {t("detail.title")}
                </h2>
                <div className="w-16 h-px mt-4" style={{ background: "rgba(27, 42, 74, 0.25)" }} />
              </div>
              <p
                className="text-base lg:text-lg leading-relaxed mb-5"
                style={{ color: "rgba(27, 42, 74, 0.7)" }}
              >
                {t("detail.paragraph1")}
              </p>
              <p
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: "rgba(27, 42, 74, 0.7)" }}
              >
                {t("detail.paragraph2")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-72 sm:h-80 lg:h-[400px] rounded-lg overflow-hidden order-1 lg:order-2"
              style={{ boxShadow: "0 15px 40px rgba(0, 0, 0, 0.12)" }}
            >
              <Image
                src="/images/hero/strategy-brownfield.jpg"
                alt="Historic mine entrance with modern exploration equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights — image left, text right */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-72 sm:h-80 lg:h-[400px] rounded-lg overflow-hidden"
              style={{ boxShadow: "0 15px 40px rgba(0, 0, 0, 0.12)" }}
            >
              <Image
                src="/images/hero/strategy-portfolio.jpg"
                alt="Aerial view of Norwegian exploration territory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-8">
                <h2
                  className="text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: NAVY,
                  }}
                >
                  {t("portfolio.title")}
                </h2>
                <div className="w-16 h-px mt-4" style={{ background: "rgba(27, 42, 74, 0.25)" }} />
              </div>

              <ul className="space-y-4">
                {portfolioItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5"
                      style={{ background: NAVY }}
                    />
                    <p
                      className="text-base lg:text-lg leading-relaxed"
                      style={{ color: "rgba(27, 42, 74, 0.7)" }}
                    >
                      {item}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ background: NAVY }}>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-2xl lg:text-3xl"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                color: "white",
              }}
            >
              {t("cta.title")}
            </h2>
            <div
              className="w-16 h-px mx-auto mt-4 mb-6"
              style={{ background: "rgba(255, 255, 255, 0.25)" }}
            />
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-200"
              style={{
                background: "white",
                color: NAVY,
              }}
            >
              {t("cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
