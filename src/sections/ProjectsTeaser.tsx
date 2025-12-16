"use client";

import Link from "next/link";
import Image from "next/image";
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

const projectImages: { [key: string]: string } = {
  // Skrattås-Byafossen - Zinc/Lead mining exploration
  skrattasen:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  // Gaulstad/Mokk - Copper mining, historic district
  "gaulstad-mokk":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
};

// Helper to get image path (supports both local and remote)
const getProjectImage = (slug: string): string => {
  // Check if local image exists (you can implement a check here)
  // For now, return the mapped image or fallback
  return projectImages[slug] || projectImages.skrattasen;
};

export default function ProjectsTeaser() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-navy-900) 0%, var(--color-navy-800) 50%, var(--color-navy-900) 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-copper-400)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-slate-400)" }}
        />
      </div>

      {/* Subtle gradient overlay with middle accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10, 22, 40, 0.95) 0%, rgba(15, 23, 42, 0.92) 50%, rgba(10, 22, 40, 0.95) 100%)",
        }}
      />
      {/* Weak middle gradient accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212, 165, 116, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
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
              background: "rgba(212, 165, 116, 0.2)",
              color: "var(--color-copper-400)",
              border: "1px solid rgba(212, 165, 116, 0.3)",
            }}
          >
            Our Projects
          </motion.span>
          <h2
            className="text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]"
            style={{
              color: "var(--color-sand-50)",
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontWeight: 900,
              fontStyle: "normal",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              marginBottom: "2.5rem",
            }}
          >
            Exploration Areas
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center block"
            style={{
              color: "var(--color-sand-100)",
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
            Strategic license holdings in Fensfeltet – the world&apos;s largest rare earth deposit
            in Norway.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {projects.map((project, index) => {
            const projectImage = getProjectImage(project.slug);
            const isFirst = index === 0;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <motion.div
                    className="relative bg-white rounded-3xl overflow-hidden transition-all duration-500 h-full"
                    style={{
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                      background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
                    }}
                    whileHover={{
                      boxShadow: "0 30px 80px rgba(0, 0, 0, 0.4)",
                      background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)",
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      {/* Background Image */}
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        {/* Fallback gradient - shown behind image */}
                        <div
                          className="absolute inset-0 z-0"
                          style={{
                            background: isFirst
                              ? "linear-gradient(135deg, var(--color-navy-800) 0%, var(--color-navy-700) 50%, var(--color-navy-800) 100%)"
                              : "linear-gradient(135deg, var(--color-navy-700) 0%, var(--color-navy-800) 50%, var(--color-navy-700) 100%)",
                          }}
                        />
                        {/* Actual Image */}
                        <Image
                          src={projectImage}
                          alt={`${project.name} - ${project.region}, ${project.country}`}
                          fill
                          className="object-cover z-10"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                          quality={90}
                          priority={index === 0}
                          unoptimized={projectImage.startsWith("http")}
                          onError={(e) => {
                            // Hide image if it fails to load, show gradient fallback
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </motion.div>

                      {/* Enhanced Multi-layer Overlays */}
                      {/* Base dark overlay */}
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.4 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, rgba(10, 22, 40, 0.9) 0%, rgba(15, 31, 58, 0.8) 50%, rgba(10, 22, 40, 0.9) 100%)",
                        }}
                      />

                      {/* Copper accent overlay on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-40"
                        transition={{ duration: 0.6 }}
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, rgba(212, 165, 116, 0.4) 0%, rgba(182, 125, 66, 0.3) 50%, rgba(212, 165, 116, 0.4) 100%)",
                        }}
                      />

                      {/* Enhanced radial gradient for focus */}
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0.4 }}
                        whileHover={{ opacity: 0.6 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          backgroundImage:
                            "radial-gradient(ellipse at center 70%, transparent 0%, rgba(10, 22, 40, 0.95) 100%)",
                        }}
                      />

                      {/* Shimmer effect on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20"
                        initial={{ x: "-100%", rotate: -25 }}
                        whileHover={{ x: "200%", rotate: -25 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)",
                          width: "50%",
                          height: "200%",
                          top: "-50%",
                        }}
                      />

                      {/* Corner accent glow */}
                      <motion.div
                        className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(212, 165, 116, 0.4) 0%, transparent 70%)",
                          transform: "translate(30%, -30%)",
                        }}
                      />

                      {/* Stage Badge - Enhanced */}
                      <div className="absolute top-6 left-6 z-10">
                        <motion.span
                          className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(212, 165, 116, 0.95) 0%, rgba(182, 125, 66, 0.9) 100%)",
                            color: "white",
                            boxShadow:
                              "0 8px 24px rgba(212, 165, 116, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                          }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {project.stage}
                        </motion.span>
                      </div>

                      {/* Enhanced Bottom Gradient for Text Readability */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-40"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 0.95 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%)",
                        }}
                      />

                      {/* Project Title Overlay - Enhanced */}
                      <motion.div
                        className="absolute bottom-6 left-6 right-6 z-10"
                        initial={{ y: 10, opacity: 0.9 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.h3
                          className="text-3xl md:text-4xl font-bold mb-3"
                          style={{
                            color: "var(--color-sand-50)",
                            textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          {project.name === "Skrattås-Byafossen"
                            ? "Skrattås-Byafossen"
                            : project.name}
                        </motion.h3>
                        <motion.div
                          className="flex items-center gap-2"
                          style={{ color: "var(--color-sand-200)" }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}>
                            <MapPinIcon className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-semibold">{project.region}</span>
                        </motion.div>
                      </motion.div>

                      {/* Enhanced Hover Indicator Line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, var(--color-copper-400) 20%, var(--color-copper-500) 50%, var(--color-copper-400) 80%, transparent 100%)",
                          boxShadow: "0 -4px 20px rgba(212, 165, 116, 0.6)",
                        }}
                      />
                    </div>

                    {/* Content Section - Enhanced Visibility */}
                    <div className="p-8 lg:p-10" style={{ background: "transparent" }}>
                      {/* Description - Improved Readability */}
                      <motion.p
                        className="mb-6 text-lg leading-relaxed"
                        style={{
                          color: "var(--color-navy-900)",
                          fontWeight: 500,
                          minHeight: "auto",
                        }}
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Minerals Tags - Enhanced Visibility */}
                      <div className="flex flex-wrap gap-2.5 mb-8">
                        {project.minerals.slice(0, 5).map((mineral, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2.5 rounded-lg text-sm font-bold"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(182, 125, 66, 0.15) 100%)",
                              color: "var(--color-copper-700)",
                              border: "2px solid rgba(212, 165, 116, 0.3)",
                              boxShadow: "0 2px 8px rgba(212, 165, 116, 0.15)",
                            }}
                          >
                            {mineral}
                          </motion.span>
                        ))}
                        {project.minerals.length > 5 && (
                          <motion.span
                            className="px-4 py-2.5 rounded-lg text-sm font-bold"
                            whileHover={{ scale: 1.05, y: -2 }}
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(15, 23, 42, 0.1) 0%, rgba(10, 22, 40, 0.08) 100%)",
                              color: "var(--color-navy-800)",
                              border: "2px solid rgba(15, 23, 42, 0.2)",
                              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                            }}
                          >
                            +{project.minerals.length - 5} more
                          </motion.span>
                        )}
                      </div>

                      {/* Enhanced Stats Row - Improved Visibility */}
                      <div
                        className="flex items-center justify-between pt-6 border-t-2"
                        style={{ borderColor: "rgba(212, 165, 116, 0.2)" }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span
                            className="text-xs font-bold uppercase tracking-wider block mb-2.5"
                            style={{ color: "var(--color-gray-600)" }}
                          >
                            License Area
                          </span>
                          <span
                            className="text-2xl font-bold block"
                            style={{
                              color: "var(--color-navy-900)",
                            }}
                          >
                            {project.area}
                          </span>
                        </motion.div>
                        <motion.div
                          className="text-right"
                          whileHover={{ scale: 1.05, x: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span
                            className="text-xs font-bold uppercase tracking-wider block mb-2.5"
                            style={{ color: "var(--color-gray-600)" }}
                          >
                            Licenses
                          </span>
                          <span
                            className="text-2xl font-bold block"
                            style={{
                              color: "var(--color-navy-900)",
                            }}
                          >
                            {project.licenses}
                          </span>
                        </motion.div>
                      </div>

                      {/* Enhanced CTA Arrow - Improved Visibility */}
                      <motion.div
                        className="flex items-center gap-3 mt-6 pt-6 border-t-2 group/cta"
                        style={{
                          color: "var(--color-copper-600)",
                          borderColor: "rgba(212, 165, 116, 0.2)",
                        }}
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-base font-bold uppercase tracking-wider">
                          Explore Project
                        </span>
                        <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                          <ArrowRightIcon className="w-5 h-5" />
                        </motion.div>
                        <motion.div
                          className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent to-[var(--color-copper-600)] opacity-0 group-hover/cta:opacity-100"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-copper-600) 0%, var(--color-copper-500) 100%)",
                color: "white",
                boxShadow: "0 10px 40px rgba(182, 125, 66, 0.4)",
              }}
            >
              View All Projects
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
