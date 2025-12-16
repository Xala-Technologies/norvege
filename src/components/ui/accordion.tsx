"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
  id?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

/**
 * Accessible FAQ Accordion Component
 * Supports keyboard navigation and ARIA attributes
 */
export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(index);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = index < items.length - 1 ? index + 1 : 0;
      setOpenIndex(nextIndex);
      // Focus the next button
      const nextButton = document.getElementById(`accordion-button-${nextIndex}`);
      nextButton?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = index > 0 ? index - 1 : items.length - 1;
      setOpenIndex(prevIndex);
      // Focus the previous button
      const prevButton = document.getElementById(`accordion-button-${prevIndex}`);
      prevButton?.focus();
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const itemId = item.id || `accordion-item-${index}`;
        const buttonId = `accordion-button-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div key={itemId} className="border border-gray-200 rounded-lg overflow-hidden">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-main)] focus:ring-offset-2 transition-colors"
                style={{
                  backgroundColor: isOpen ? "var(--color-sand-50)" : "white",
                }}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                <span className="font-semibold text-lg" style={{ color: "var(--color-navy-900)" }}>
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform flex-shrink-0 ml-4`}
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    color: "var(--color-accent-main)",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 py-4 text-gray-600">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
