"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const NAVY = "#1B2A4A";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
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
        {children}
      </h2>
      <div className="w-20 h-px mx-auto mt-4" style={{ background: "rgba(27, 42, 74, 0.25)" }} />
    </motion.div>
  );
}

function PersonCard({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="rounded-sm overflow-hidden"
      style={{ border: `1.5px solid ${NAVY}` }}
    >
      <div className="px-5 py-4 text-center" style={{ background: NAVY }}>
        <h4
          className="text-sm font-bold leading-snug whitespace-pre-line"
          style={{ color: "white" }}
        >
          {title}
        </h4>
      </div>
      <div className="px-5 py-5">
        <p className="text-xs leading-relaxed" style={{ color: "rgba(27, 42, 74, 0.6)" }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function LeadershipSection() {
  const t = useTranslations("home.leadership");

  const leadership = [
    { title: t("executiveChairman"), description: t("executiveChairmanDesc") },
    { title: t("technicalDirector"), description: t("technicalDirectorDesc") },
    { title: t("energyAdvisor"), description: t("energyAdvisorDesc") },
    { title: t("esgAdvisor"), description: t("esgAdvisorDesc") },
  ];

  const board = [
    { title: t("nonExecDirector"), description: t("nonExecDirector1Desc") },
    { title: t("nonExecDirector"), description: t("nonExecDirector2Desc") },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ background: "var(--color-bg-default)" }}>
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 lg:mb-28">
          <SectionHeading>{t("title")}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((person, idx) => (
              <PersonCard
                key={idx}
                title={person.title}
                description={person.description}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading>{t("boardTitle")}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {board.map((person, idx) => (
              <PersonCard
                key={idx}
                title={person.title}
                description={person.description}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
