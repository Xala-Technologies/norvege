"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/content/projects";

// Hero slides with different content and project links
const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    alt: "Mineral exploration site with geological formations",
    gradient:
      "linear-gradient(135deg, rgba(10, 22, 40, 0.7) 0%, rgba(15, 31, 58, 0.6) 50%, rgba(26, 47, 77, 0.7) 100%)",
    badge: "Active Exploration",
    title: "Skrattås-Byafossen",
    highlight: "Exceptional Grades",
    description:
      "Primary focus area with exceptional grades: 28.8% Zn, 539 ppm Ag, 10 ppm Au. Historic production of 34% Zn ore.",
    projectSlug: "skrattasen",
    ctaText: "Explore Skrattåsen",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    alt: "Mining operations and heavy machinery",
    gradient:
      "linear-gradient(135deg, rgba(15, 31, 58, 0.7) 0%, rgba(10, 22, 40, 0.6) 50%, rgba(26, 47, 77, 0.7) 100%)",
    badge: "Historic Mining District",
    title: "Gaulstad/Mokk",
    highlight: "Proven Mineralization",
    description:
      "Historic mining district with over 50 documented mines dating back to 1760. Confirmed 7.95% Cu grades.",
    projectSlug: "gaulstad-mokk",
    ctaText: "Explore Gaulstad/Mokk",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop",
    alt: "Rare earth minerals and geological samples",
    gradient:
      "linear-gradient(135deg, rgba(26, 47, 77, 0.7) 0%, rgba(10, 22, 40, 0.6) 50%, rgba(15, 31, 58, 0.7) 100%)",
    badge: "Critical Minerals",
    title: "Rare Earth Elements",
    highlight: "Strategic Resources",
    description:
      "Exploring rare earth elements essential for the energy transition. Contributing to Europe's mineral independence.",
    projectSlug: "projects",
    ctaText: "View All Projects",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    alt: "Norwegian mining landscape with mountains",
    gradient:
      "linear-gradient(135deg, rgba(20, 35, 60, 0.7) 0%, rgba(15, 31, 58, 0.6) 50%, rgba(10, 22, 40, 0.7) 100%)",
    badge: "Norwegian Excellence",
    title: "Trøndelag Region",
    highlight: "Mineral Rich",
    description:
      "Strategic license holdings in one of Norway's most promising mineral districts. 179 km² of exploration area.",
    projectSlug: "projects",
    ctaText: "Discover Our Portfolio",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
    alt: "Underground mining tunnel and mineral deposits",
    gradient:
      "linear-gradient(135deg, rgba(15, 31, 58, 0.7) 0%, rgba(26, 47, 77, 0.6) 50%, rgba(20, 35, 60, 0.7) 100%)",
    badge: "Investment Opportunity",
    title: "Science-Driven Discovery",
    highlight: "Innovation",
    description:
      "Pioneering a new era of mineral exploration in Europe with cutting-edge technology and proven expertise.",
    projectSlug: "investors",
    ctaText: "Investor Relations",
  },
];

export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = heroSlides[currentSlideIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={`${slide.src}-${index}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: index === currentSlideIndex ? 1 : 0,
                scale: index === currentSlideIndex ? 1 : 1.1,
              }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Fallback gradient background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                style={{
                  backgroundImage: slide.gradient,
                }}
              />
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
                quality={90}
                unoptimized={slide.src.startsWith("http")}
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
              {/* Subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Content - Changes with each slide */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6 lg:mb-8"
              >
                <span
                  className="px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm"
                  style={{
                    background: "rgba(212, 165, 116, 0.2)",
                    color: "var(--color-copper-400)",
                    border: "1px solid rgba(212, 165, 116, 0.4)",
                    boxShadow: "0 4px 20px rgba(212, 165, 116, 0.2)",
                  }}
                >
                  {currentSlide.badge}
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 leading-tight"
                style={{ color: "var(--color-sand-50)" }}
              >
                {currentSlide.title}{" "}
                <span
                  style={{
                    color: "var(--color-copper-400)",
                    textShadow: "0 0 40px rgba(212, 165, 116, 0.5)",
                  }}
                >
                  {currentSlide.highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl mb-10 lg:mb-12 max-w-4xl mx-auto lg:mx-0 leading-relaxed"
                style={{ color: "var(--color-sand-100)" }}
              >
                {currentSlide.description}
              </motion.p>

              {/* CTA - Links to specific project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`/${currentSlide.projectSlug}`}
                    className="inline-block px-10 py-5 rounded-lg font-bold text-lg lg:text-xl transition-all duration-300 shadow-2xl"
                    style={{
                      background: "var(--color-copper-600)",
                      color: "white",
                      boxShadow: "0 8px 30px rgba(182, 125, 66, 0.5)",
                    }}
                  >
                    {currentSlide.ctaText}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/projects"
                    className="inline-block px-10 py-5 rounded-lg font-bold text-lg lg:text-xl border-2 transition-all duration-300 backdrop-blur-sm"
                    style={{
                      borderColor: "var(--color-sand-100)",
                      color: "var(--color-sand-50)",
                      background: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    View All Projects
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Image Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlideIndex
                ? "w-10 bg-[var(--color-copper-400)] shadow-lg"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentSlideIndex(index)}
            aria-label={`View slide ${index + 1}: ${heroSlides[index].title}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3">
          <span
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: "var(--color-sand-200)" }}
          >
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg className="w-8 h-8" fill="none" stroke="var(--color-sand-200)" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
