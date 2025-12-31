"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/content/projects";

// Custom icons
const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
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

// Project-specific images - mineral exploration and mining related
// Priority: Local images in /public/images/ > Unsplash fallbacks
// To add local images:
// 1. Place images in /public/images/ directory
// 2. Name them: project-skrattasen.jpg, project-gaulstad-mokk.jpg
// 3. Update the paths below to use /images/ instead of Unsplash URLs

const getLocalProjectImages = (slug: string): string[] => {
  // Return available images (at least 3, up to 5)
  // The image checker will filter out missing files
  return [
    `/images/projects/${slug}/01.jpg`,
    `/images/projects/${slug}/02.jpg`,
    `/images/projects/${slug}/03.jpg`,
    `/images/projects/${slug}/04.jpg`,
    `/images/projects/${slug}/05.jpg`,
  ].filter((_, index) => index < 5); // Limit to 5 max, but let the checker filter missing ones
};

// Helper to get image candidates: local only (no remote fallbacks)
const getProjectImages = (slug: string): string[] => {
  return getLocalProjectImages(slug);
};

function ProjectImageRotator({ images, alt }: { images: string[]; alt: string }) {
  const candidates = useMemo(() => images, [images]);
  const [available, setAvailable] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);

  // Filter candidates to ones that actually load (so missing local files don't show broken images)
  useEffect(() => {
    let cancelled = false;
    const check = (src: string) =>
      new Promise<string | null>((resolve) => {
        const img = new window.Image();
        // Set a timeout to avoid hanging on missing images
        const timeout = setTimeout(() => {
          if (!cancelled) resolve(null);
        }, 2000);
        img.onload = () => {
          clearTimeout(timeout);
          if (!cancelled) resolve(src);
        };
        img.onerror = () => {
          clearTimeout(timeout);
          if (!cancelled) resolve(null);
        };
        img.src = src;
      });

    (async () => {
      const results = await Promise.all(candidates.map(check));
      if (cancelled) return;
      const loaded = results.filter(Boolean) as string[];
      setAvailable(loaded.length > 0 ? loaded : []);
      setIdx(0);
    })();

    return () => {
      cancelled = true;
    };
  }, [candidates]);

  useEffect(() => {
    if (available.length <= 1) return;
    const id = window.setInterval(() => {
      setIdx((prev) => (prev + 1) % available.length);
    }, 6000); // Switch every 6 seconds
    return () => window.clearInterval(id);
  }, [available.length]);

  if (!available.length) {
    // No local images found; keep the card's gradient fallback visible.
    return null;
  }

  const src = available[idx % available.length];

  return (
    <motion.div
      key={src}
      className="absolute inset-0"
      initial={{ opacity: 0.0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0.0, scale: 1.01 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover z-10"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        quality={90}
        unoptimized={src.startsWith("http")}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
        }}
      />
    </motion.div>
  );
}

export default function ProjectsTeaser() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-charcoal-900) 0%, var(--color-charcoal-800) 50%, var(--color-charcoal-900) 100%)",
      }}
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "var(--color-primary-main)" }}
        />
      </div>

      {/* Enhanced gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--color-base-black) 98%, transparent) 0%, color-mix(in srgb, var(--color-base-black) 95%, transparent) 50%, color-mix(in srgb, var(--color-base-black) 98%, transparent) 100%)",
        }}
      />

      {/* Enhanced radial gradient accent with gold tint */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          background: `
              radial-gradient(900px 520px at 50% 35%,
                color-mix(in srgb, var(--color-accent-main) 14%, transparent) 0%,
                color-mix(in srgb, var(--color-accent-main) 6%, transparent) 35%,
                transparent 70%
              ),
              radial-gradient(1200px 800px at 50% 110%,
                rgba(0, 0, 0, 0.55) 0%,
                transparent 60%
              )
            `,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-accent-main) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-accent-main) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span
            className="text-eyebrow inline-block px-5 py-2.5 rounded-full mb-8"
            style={{
              background: "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
              color: "var(--color-accent-main)",
              border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
              boxShadow: "none",
            }}
          >
            Our Projects
          </span>
          <h2
            className="text-display mb-6"
            style={{
              color: "var(--color-text-on-dark)",
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.03em",
            }}
          >
            Exploration{" "}
            <span
              style={{
                color: "var(--color-accent-main)",
              }}
            >
              Areas
            </span>
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center block"
            style={{
              color: "color-mix(in srgb, var(--color-text-on-dark) 85%, transparent)",
              lineHeight: "var(--line-height-loose)",
              fontFamily: "var(--font-family-body)",
              fontWeight: "var(--font-weight-medium)",
              letterSpacing: "-0.01em",
            }}
          >
            Strategic license holdings in Fensfeltet – the world&apos;s largest rare earth deposit
            in Norway.
          </p>
        </div>

        {/* Project Cards - Show only first 2 projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-16">
          {projects.slice(0, 2).map((project, index) => {
            const projectImageList = getProjectImages(project.slug);
            const isFirst = index === 0;

            return (
              <div key={project.slug} className="group">
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <div
                    className="relative bg-white rounded-3xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                    style={{
                      boxShadow: "none",
                      background: `linear-gradient(180deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 100%)`,
                      border:
                        "1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        {/* Fallback gradient - shown behind image */}
                        <div
                          className="absolute inset-0 z-0"
                          style={{
                            background: isFirst
                              ? "linear-gradient(135deg, var(--color-charcoal-800) 0%, var(--color-charcoal-700) 50%, var(--color-charcoal-800) 100%)"
                              : "linear-gradient(135deg, var(--color-charcoal-700) 0%, var(--color-charcoal-800) 50%, var(--color-charcoal-700) 100%)",
                          }}
                        />
                        {/* Actual Image */}
                        <ProjectImageRotator
                          images={projectImageList}
                          alt={`${project.name} - ${project.region}, ${project.country}`}
                        />
                      </div>

                      {/* Enhanced Multi-layer Overlays */}
                      {/* Base dark overlay */}
                      <div
                        className="absolute inset-0 group-hover:opacity-40 transition-opacity duration-300"
                        style={{
                          opacity: 0.6,
                          backgroundImage:
                            "linear-gradient(135deg, rgba(10, 22, 40, 0.9) 0%, rgba(15, 31, 58, 0.8) 50%, rgba(10, 22, 40, 0.9) 100%)",
                        }}
                      />

                      {/* Mustard Gold accent overlay on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 40%, transparent) 0%, color-mix(in srgb, var(--color-gold-400) 30%, transparent) 50%, color-mix(in srgb, var(--color-accent-main) 40%, transparent) 100%)`,
                        }}
                      />

                      {/* Enhanced radial gradient for focus */}
                      <div
                        className="absolute inset-0 group-hover:opacity-60 transition-opacity duration-300"
                        style={{
                          opacity: 0.4,
                          backgroundImage:
                            "radial-gradient(ellipse at center 70%, transparent 0%, rgba(10, 22, 40, 0.95) 100%)",
                        }}
                      />

                      {/* Stage Badge - Enhanced */}
                      <div className="absolute top-6 left-6 z-10">
                        <span
                          className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-gold-400) 100%)",
                            color: "var(--color-accent-contrast)",
                            boxShadow:
                              "var(--shadow-accent-lg), 0 0 0 1px color-mix(in srgb, var(--color-base-white) 20%, transparent)",
                          }}
                        >
                          {project.stage}
                        </span>
                      </div>

                      {/* Enhanced Bottom Gradient for Text Readability */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-40 group-hover:opacity-95 transition-opacity duration-300"
                        style={{
                          opacity: 0.8,
                          background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%)",
                        }}
                      />

                      {/* Project Title Overlay - Enhanced */}
                      <div className="absolute bottom-6 left-6 right-6 z-10">
                        <h3
                          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                          style={{
                            color: "var(--color-text-on-dark)",
                            fontFamily: "var(--font-family-heading)",
                            fontWeight: "var(--font-weight-black)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {project.name === "Skrattås-Byafossen"
                            ? "Skrattås-Byafossen"
                            : project.name}
                        </h3>
                        <div
                          className="flex items-center gap-2"
                          style={{
                            color: "color-mix(in srgb, var(--color-text-on-dark) 80%, transparent)",
                            fontFamily: "var(--font-family-body)",
                          }}
                        >
                          <div style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}>
                            <MapPinIcon className="w-5 h-5" />
                          </div>
                          <span
                            className="text-sm font-semibold"
                            style={{ fontWeight: "var(--font-weight-semibold)" }}
                          >
                            {project.region}
                          </span>
                        </div>
                      </div>

                      {/* Enhanced Hover Indicator Line */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(90deg, transparent 0%, var(--color-accent-main) 20%, var(--color-gold-400) 50%, var(--color-accent-main) 80%, transparent 100%)`,
                          boxShadow: "none",
                        }}
                      />
                    </div>

                    {/* Content Section - Enhanced Visibility */}
                    <div
                      className="p-8 lg:p-10 flex flex-col flex-grow"
                      style={{ background: "transparent" }}
                    >
                      <div className="flex-grow">
                        {/* Description - Improved Readability */}
                        <p
                          className="mb-8 text-lg leading-relaxed"
                          style={{
                            color: "var(--color-text-body)",
                            fontFamily: "var(--font-family-body)",
                            fontWeight: "var(--font-weight-medium)",
                            lineHeight: "var(--line-height-base)",
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Minerals Tags - Enhanced Visibility */}
                        <div className="flex flex-wrap gap-2.5 mb-8">
                          {project.minerals.slice(0, 5).map((mineral, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2.5 rounded-lg text-sm font-bold"
                              style={{
                                background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-gold-400) 15%, transparent) 100%)`,
                                color: "var(--color-accent-hover)",
                                border: `2px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                                boxShadow: "none",
                                fontFamily: "var(--font-family-body)",
                                fontWeight: "var(--font-weight-bold)",
                              }}
                            >
                              {mineral}
                            </span>
                          ))}
                          {project.minerals.length > 5 && (
                            <span
                              className="px-4 py-2.5 rounded-lg text-sm font-bold"
                              style={{
                                background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 10%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 8%, transparent) 100%)`,
                                color: "var(--color-text-secondary)",
                                border: `2px solid color-mix(in srgb, var(--color-primary-main) 20%, transparent)`,
                                boxShadow: "none",
                                fontFamily: "var(--font-family-body)",
                                fontWeight: "var(--font-weight-bold)",
                              }}
                            >
                              +{project.minerals.length - 5} more
                            </span>
                          )}
                        </div>

                        {/* Enhanced Stats Row - Improved Visibility */}
                        <div
                          className="flex items-center justify-between pt-8 border-t-2"
                          style={{
                            borderColor:
                              "color-mix(in srgb, var(--color-accent-main) 20%, transparent)",
                          }}
                        >
                          <div>
                            <span
                              className="text-xs font-bold uppercase tracking-wider block mb-2.5"
                              style={{
                                color: "var(--color-text-secondary)",
                                fontFamily: "var(--font-family-body)",
                                fontWeight: "var(--font-weight-bold)",
                              }}
                            >
                              License Area
                            </span>
                            <span
                              className="text-2xl font-bold block"
                              style={{
                                color: "var(--color-text-body)",
                                fontFamily: "var(--font-family-heading)",
                                fontWeight: "var(--font-weight-bold)",
                              }}
                            >
                              {project.area}
                            </span>
                          </div>
                          <div className="text-right">
                            <span
                              className="text-xs font-bold uppercase tracking-wider block mb-2.5"
                              style={{
                                color: "var(--color-text-secondary)",
                                fontFamily: "var(--font-family-body)",
                                fontWeight: "var(--font-weight-bold)",
                              }}
                            >
                              Licenses
                            </span>
                            <span
                              className="text-2xl font-bold block"
                              style={{
                                color: "var(--color-text-body)",
                                fontFamily: "var(--font-family-heading)",
                                fontWeight: "var(--font-weight-bold)",
                              }}
                            >
                              {project.licenses}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced CTA Arrow - Improved Visibility - Always at bottom */}
                      <div
                        className="flex items-center gap-3 mt-8 pt-8 border-t-2 group/cta"
                        style={{
                          color: "var(--color-accent-main)",
                          borderColor:
                            "color-mix(in srgb, var(--color-accent-main) 20%, transparent)",
                          fontFamily: "var(--font-family-body)",
                          fontWeight: "var(--font-weight-bold)",
                        }}
                      >
                        <span className="text-base font-bold uppercase tracking-wider">
                          Explore Project
                        </span>
                        <div>
                          <ArrowRightIcon className="w-5 h-5" />
                        </div>
                        <div
                          className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent opacity-0 group-hover/cta:opacity-100 transition-all duration-300 w-0 group-hover/cta:w-full"
                          style={{
                            background: `linear-gradient(to right, transparent, var(--color-accent-main))`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/projects"
            className="btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "var(--color-accent-main)",
              color: "var(--color-accent-contrast)",
              boxShadow: "var(--shadow-accent-lg)",
              fontFamily: "var(--font-family-body)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            View All Projects
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
