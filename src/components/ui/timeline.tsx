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
        className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5"
        style={{ backgroundColor: "var(--color-copper-400)" }}
        aria-hidden="true"
      />

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6 md:gap-8">
            {/* Timeline dot */}
            <div className="flex-shrink-0 relative z-10">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-lg md:text-xl text-white shadow-lg"
                style={{ backgroundColor: "var(--color-copper-600)" }}
              >
                {item.year}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-2 md:pt-4 pb-8">
              <h3
                className="text-xl md:text-2xl font-semibold mb-2"
                style={{ color: "var(--color-navy-900)" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
