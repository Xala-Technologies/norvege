"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const NAVY = "#1B2A4A";

export default function ProjectsTeaser() {
  const t = useTranslations("home.keyProjects");

  const keyProjects = [
    {
      title: t("killingdalTitle"),
      subtitle: t("killingdalSubtitle"),
      image: "/images/projects/killingdal/hero.jpg",
      href: "/projects/killingdal",
    },
    {
      title: t("portfolioTitle"),
      subtitle: t("portfolioSubtitle"),
      image: "/images/projects/mineral-portfolio.jpg",
      href: "/projects",
    },
    {
      title: t("geothermalTitle"),
      subtitle: t("geothermalSubtitle"),
      image: "/images/projects/geothermal-energy.jpg",
      href: "/strategy",
    },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ background: NAVY }}>
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
              color: "white",
            }}
          >
            {t("title")}
          </h2>
          <div
            className="w-20 h-px mx-auto mt-4"
            style={{ background: "rgba(255, 255, 255, 0.25)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {keyProjects.map((project, idx) => (
            <motion.div
              key={project.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Link href={project.href} className="group block relative rounded-md overflow-hidden">
                <div className="relative h-72 lg:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(27, 42, 74, 0.9) 0%, rgba(27, 42, 74, 0.3) 50%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{
                        color: "white",
                        fontFamily: "var(--font-family-heading)",
                        fontStyle: "italic",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
