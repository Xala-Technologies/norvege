"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";

const languageNames: Record<string, { name: string; nativeName: string }> = {
  en: { name: "English", nativeName: "EN" },
  no: { name: "Norwegian", nativeName: "NO" },
};

type LanguageSwitcherProps = {
  variant?: "toggle" | "dropdown";
};

export default function LanguageSwitcher({ variant = "toggle" }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const isEnglish = locale === "en";

  if (variant === "dropdown") {
    return (
      <div ref={dropdownRef} className="relative w-full">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
          style={{
            background: "color-mix(in srgb, #1E293B 8%, transparent)",
            color: "#1E293B",
            border: "1px solid color-mix(in srgb, #1E293B 20%, transparent)",
          }}
          aria-expanded={dropdownOpen}
          aria-haspopup="listbox"
          aria-label="Select language"
        >
          <span>{languageNames[locale]?.nativeName ?? locale.toUpperCase()}</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: dropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 right-0 mt-2 py-2 rounded-lg overflow-hidden z-50 min-w-[100px]"
              style={{
                background: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                border: "1px solid color-mix(in srgb, #1E293B 15%, transparent)",
              }}
            >
              {(["en", "no"] as const).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => switchLocale(loc)}
                  className="w-full text-left px-4 py-3 text-sm font-medium transition-colors"
                  style={{
                    color: locale === loc ? "var(--color-primary-main)" : "#1E293B",
                    background:
                      locale === loc
                        ? "color-mix(in srgb, var(--color-primary-main) 10%, transparent)"
                        : "transparent",
                  }}
                >
                  {languageNames[loc].nativeName}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Modern Toggle Switch */}
      <div
        className="relative inline-flex items-center rounded-full p-1"
        style={{
          background: "var(--color-bg-subtle)",
          border: `1px solid color-mix(in srgb, var(--color-primary-main) 20%, transparent)`,
        }}
        role="group"
        aria-label="Language switcher"
      >
        {/* Background slider */}
        <motion.div
          className="absolute rounded-full"
          style={{
            background: `var(--color-primary-main)`,
            height: "calc(100% - 8px)",
            width: "calc(50% - 4px)",
            left: "4px",
            top: "4px",
          }}
          animate={{
            x: isEnglish ? 0 : "100%",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />

        {/* English Button */}
        <button
          onClick={() => switchLocale("en")}
          className="relative z-10 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 min-w-[60px] flex items-center justify-center"
          style={{
            color: isEnglish ? "white" : "var(--color-text-body)",
          }}
          aria-pressed={isEnglish}
          aria-label="Switch to English"
        >
          <span>{languageNames.en.nativeName}</span>
        </button>

        {/* Norwegian Button */}
        <button
          onClick={() => switchLocale("no")}
          className="relative z-10 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 min-w-[60px] flex items-center justify-center"
          style={{
            color: !isEnglish ? "white" : "var(--color-text-body)",
          }}
          aria-pressed={!isEnglish}
          aria-label="Switch to Norwegian"
        >
          <span>{languageNames.no.nativeName}</span>
        </button>
      </div>
    </div>
  );
}
