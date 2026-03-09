"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const NAVY = "#1B2A4A";

export default function StatsSection() {
  const t = useTranslations("home.portfolio");

  return (
    <section className="py-20 lg:py-28" style={{ background: "white" }}>
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl lg:text-3xl inline-block"
            style={{
              fontFamily: "var(--font-family-heading)",
              fontWeight: 700,
              fontStyle: "italic",
              color: NAVY,
            }}
          >
            {t("title")}
          </h2>
          <div
            className="w-20 h-px mx-auto mt-4"
            style={{ background: "rgba(27, 42, 74, 0.25)" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 lg:gap-24 mb-10"
        >
          <div className="text-center">
            <span className="text-5xl lg:text-6xl font-bold" style={{ color: NAVY }}>
              140
            </span>
            <p className="text-sm mt-2" style={{ color: "rgba(27, 42, 74, 0.55)" }}>
              {t("licences")}
            </p>
          </div>

          <div className="text-center">
            <span className="text-5xl lg:text-6xl font-bold" style={{ color: NAVY }}>
              ~1,400
            </span>
            <span className="text-2xl font-medium ml-1" style={{ color: NAVY }}>
              km²
            </span>
            <p className="text-sm mt-2" style={{ color: "rgba(27, 42, 74, 0.55)" }}>
              {t("area")}
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-center tracking-wide mb-16"
          style={{ color: "rgba(27, 42, 74, 0.5)" }}
        >
          {t("minerals")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center px-6 py-5 rounded-md"
          style={{
            background: "rgba(27, 42, 74, 0.04)",
            border: "1px solid rgba(27, 42, 74, 0.1)",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "rgba(27, 42, 74, 0.6)" }}>
            <span className="font-semibold" style={{ color: NAVY }}>
              {t("updateTitle")}
            </span>{" "}
            {t("updateText")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
