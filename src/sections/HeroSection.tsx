"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroVideo from "@/components/ui/HeroVideo";
import Logo from "@/components/ui/Logo";

// Hero slides with different content and project links
const heroSlides = [
  {
    src: "/videos/mining.mp4",
    type: "video",
    alt: "Minerals inside mountains - mining exploration",
    gradient:
      "linear-gradient(135deg, rgba(10, 14, 20, 0.85) 0%, rgba(15, 20, 25, 0.8) 50%, rgba(26, 31, 38, 0.85) 100%)",
    badge: "Mining Exploration",
    title: "Discovering Minerals",
    highlight: "Inside Mountains",
    description:
      "Exploring the depths of Norway's mountains to uncover critical minerals essential for Europe's green transition. Our advanced exploration techniques reveal the hidden treasures within.",
    projectSlug: "projects",
    ctaText: "Explore Our Assets",
    secondaryCtaText: "Our Technology",
  },
  {
    src: "/images/hero/01.jpg",
    type: "image",
    alt: "Mineral exploration site with geological formations",
    gradient:
      "linear-gradient(135deg, rgba(10, 14, 20, 0.85) 0%, rgba(15, 20, 25, 0.8) 50%, rgba(26, 31, 38, 0.85) 100%)",
    badge: "Responsible Mining",
    title: "Responsible Mining for the",
    highlight: "Green Transition",
    description:
      "Securing Europe's supply of vital resources. We hold 74 exploration licenses across 1,690 km², focusing on high-value minerals essential for renewable energy and geopolitical stability.",
    projectSlug: "projects",
    ctaText: "Explore Our Assets",
    secondaryCtaText: "Our Technology",
  },
  {
    src: "/images/hero/03.jpg",
    type: "image",
    alt: "Rare earth minerals and geological samples",
    gradient:
      "linear-gradient(135deg, rgba(26, 31, 38, 0.85) 0%, rgba(10, 14, 20, 0.8) 50%, rgba(15, 20, 25, 0.85) 100%)",
    badge: "Critical Minerals",
    title: "Rare Earth Elements",
    highlight: "Strategic Resources",
    description:
      "Exploring rare earth elements essential for the energy transition. Contributing to Europe's mineral independence.",
    projectSlug: "projects",
    ctaText: "View All Projects",
  },
  {
    src: "/images/hero/05.jpg",
    type: "image",
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
  const [showLogoOverlay, setShowLogoOverlay] = useState(false);
  const currentSlide = heroSlides[currentSlideIndex];
  const isVideoSlide = currentSlide.type === "video";

  useEffect(() => {
    // Use 8 seconds for video slides, 6 seconds for image slides
    const slideDuration = isVideoSlide ? 8000 : 6000;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, slideDuration);

    return () => clearInterval(interval);
  }, [currentSlideIndex, isVideoSlide]);

  // Handle video time updates to show logo at the end
  const handleVideoTimeUpdate = (currentTime: number) => {
    // Video is 8 seconds long, show logo in the last 1.5 seconds (6.5s to 8s)
    if (isVideoSlide && currentTime >= 6.5 && currentTime <= 8) {
      setShowLogoOverlay(true);
    } else {
      setShowLogoOverlay(false);
    }
  };

  // Reset logo overlay when slide changes - track previous slide index
  const prevSlideIndexRef = useRef(currentSlideIndex);
  const prevIsVideoSlideRef = useRef(isVideoSlide);

  useEffect(() => {
    const slideChanged = prevSlideIndexRef.current !== currentSlideIndex;
    const videoStateChanged = prevIsVideoSlideRef.current !== isVideoSlide;

    if (slideChanged || videoStateChanged) {
      prevSlideIndexRef.current = currentSlideIndex;
      prevIsVideoSlideRef.current = isVideoSlide;

      // Only reset if we're not on a video slide
      if (!isVideoSlide) {
        // Use setTimeout to avoid synchronous setState in effect
        setTimeout(() => {
          setShowLogoOverlay(false);
        }, 0);
      }
    }
  }, [currentSlideIndex, isVideoSlide]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Media Carousel (Images and Videos) */}
      <div className="absolute inset-0 w-full h-full z-[1]">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) => {
            if (index !== currentSlideIndex) return null;
            return (
              <motion.div
                key={`${slide.src}-${index}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Fallback gradient background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950"
                  style={{
                    backgroundImage: slide.gradient,
                  }}
                />

                {/* Render Video or Image based on slide type */}
                {slide.type === "video" ? (
                  <div className="absolute inset-0 overflow-hidden">
                    <HeroVideo
                      src={slide.src}
                      className="object-cover"
                      style={{
                        objectPosition: "center top",
                        transform: "scale(1.15)",
                      }}
                      onTimeUpdate={handleVideoTimeUpdate}
                    />
                  </div>
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                    onError={(e) => {
                      // Hide image if it fails to load, show gradient fallback
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                )}

                {/* Deep Navy Overlay for better text readability - only show on image slides */}
                {slide.type === "image" && (
                  <>
                    <div
                      className="absolute inset-0 hero-overlay"
                      style={{
                        background: `linear-gradient(to bottom, color-mix(in srgb, var(--color-primary-main) 75%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 55%, transparent) 100%)`,
                      }}
                    />
                    {/* Subtle pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Content - Changes with each slide - Hide on video slides */}
      {!isVideoSlide && (
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
                    className="text-eyebrow px-5 py-2.5 rounded-full backdrop-blur-sm"
                    style={{
                      background: "color-mix(in srgb, var(--color-accent-main) 15%, transparent)",
                      color: "var(--color-accent-main)",
                      border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                      boxShadow: "none",
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
                  style={{ color: "var(--color-gray-50)" }}
                >
                  {currentSlide.title}{" "}
                  <span
                    style={{
                      color: "var(--color-accent-main)",
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
                  style={{
                    color: "var(--color-text-on-dark)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "var(--line-height-loose)",
                  }}
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
                      className="inline-block px-10 py-5 rounded-lg font-bold text-lg lg:text-xl transition-all duration-300"
                      style={{
                        background: "var(--color-accent-main)",
                        color: "var(--color-accent-contrast)",
                        boxShadow: "none",
                        fontFamily: "var(--font-family-heading)",
                      }}
                    >
                      {currentSlide.ctaText}
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={currentSlide.secondaryCtaText ? "/about" : "/projects"}
                      className="inline-block px-10 py-5 rounded-lg font-bold text-lg lg:text-xl border-2 transition-all duration-300 backdrop-blur-sm"
                      style={{
                        borderColor: "var(--color-gray-200)",
                        color: "var(--color-gray-50)",
                        background: "rgba(255, 255, 255, 0.08)",
                        boxShadow: "none",
                      }}
                    >
                      {currentSlide.secondaryCtaText || "View All Projects"}
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Image Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlideIndex ? "w-10 shadow-lg" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            style={index === currentSlideIndex ? { background: "var(--color-accent-main)" } : {}}
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
            style={{ color: "var(--color-gray-300)" }}
          >
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg className="w-8 h-8" fill="none" stroke="var(--color-gray-300)" viewBox="0 0 24 24">
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

      {/* Logo Overlay - Shows at the end of video */}
      {isVideoSlide && (
        <AnimatePresence>
          {showLogoOverlay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
            >
              <div className="relative">
                <Logo className="text-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
}
