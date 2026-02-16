"use client";

import type { ITimelineItem } from "@/content/types";
import { motion } from "framer-motion";

interface TimelineProps {
  items: ITimelineItem[];
  className?: string;
}

/**
 * Timeline Component
 * Displays chronological events in a vertical timeline
 * Clean, modern structure with proper spacing and animations
 */
export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line for desktop */}
      <div
        className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5"
        style={{
          background: `linear-gradient(180deg, var(--color-accent-main) 0%, color-mix(in srgb, var(--color-accent-main) 60%, transparent) 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Timeline Items */}
      <div className="relative">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-4 md:gap-6 group mb-8 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="flex-shrink-0 relative z-10">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-xs md:text-sm text-white transition-all duration-300 group-hover:scale-110 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-gold-400) 100%)`,
                }}
              >
                <span className="text-center leading-tight px-1">{item.year}</span>
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 pt-1">
              <div
                className="p-6 lg:p-8 rounded-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 100%)`,
                  border: `2px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "var(--line-height-base)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
