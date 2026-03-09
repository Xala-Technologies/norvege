"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const NAVY = "#1B2A4A";

export default function HeroSection() {
  const t = useTranslations("home.newHero");

  return (
    <section className="relative w-full overflow-hidden min-h-[85vh]" style={{ background: NAVY }}>
      <Image
        src="/images/hero/background.jpg"
        alt="Norwegian mountain landscape"
        fill
        className="object-cover"
        priority
        quality={90}
        style={{ opacity: 0.18 }}
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(27, 42, 74, 0.6) 0%, rgba(27, 42, 74, 0.2) 50%, rgba(27, 42, 74, 0.5) 100%)",
        }}
      />

      <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.9rem] xl:text-5xl leading-[1.15] mb-10"
              style={{
                color: "white",
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              {t("title")}
            </h1>

            <div className="space-y-5 max-w-xl">
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                {t("description1")}
              </p>

              <div className="w-16 h-px" style={{ background: "rgba(255, 255, 255, 0.2)" }} />

              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                {t("description2")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center px-7 py-3 text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 hover:opacity-90"
                style={{ background: "white", color: NAVY }}
              >
                {t("ctaProjects")}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3 text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 hover:bg-white/10"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "1.5px solid rgba(255, 255, 255, 0.35)",
                }}
              >
                {t("ctaContact")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
