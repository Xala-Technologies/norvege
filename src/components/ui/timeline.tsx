import type { ITimelineItem } from "@/content/types";

interface TimelineProps {
  items: ITimelineItem[];
  className?: string;
}

/**
 * Timeline Component
 * Displays chronological events in a vertical timeline
 * Responsive: vertical on desktop, stacked on mobile
 */
export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line for desktop */}
      <div
        className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 rounded-full"
        style={{
          background: `linear-gradient(180deg, var(--color-accent-main) 0%, color-mix(in srgb, var(--color-accent-main) 60%, transparent) 100%)`,
        }}
        aria-hidden="true"
      />

      <div className="space-y-6 md:space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-4 md:gap-6 group">
            {/* Timeline dot */}
            <div className="flex-shrink-0 relative z-10">
              <div
                className="w-16 h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center font-bold text-sm md:text-base text-white transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, var(--color-accent-main) 0%, var(--color-gold-400) 100%)`,
                  boxShadow: "none",
                }}
              >
                {item.year}
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 pt-0.5 pb-4">
              <div
                className="p-5 lg:p-6 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 100%)`,
                  border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                  boxShadow: "none",
                }}
              >
                {/* Enhanced border glow on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid var(--color-primary-main)`,
                  }}
                />
                <h3
                  className="text-lg md:text-xl lg:text-2xl font-bold mb-2"
                  style={{
                    color: "var(--color-primary-main)",
                    fontFamily: "var(--font-family-heading)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "var(--color-text-body)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
