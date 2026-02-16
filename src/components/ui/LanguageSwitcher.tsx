"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";

const languageNames: Record<string, { name: string; nativeName: string }> = {
  en: { name: "English", nativeName: "EN" },
  no: { name: "Norwegian", nativeName: "NO" },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const isEnglish = locale === "en";

  return (
    <div className="relative">
      {/* Modern Toggle Switch */}
      <div
        className="relative inline-flex items-center rounded-full p-1"
        style={{
          background: "#90D5FF",
          border: `1px solid color-mix(in srgb, #1E293B 30%, transparent)`,
        }}
        role="group"
        aria-label="Language switcher"
      >
        {/* Background slider */}
        <motion.div
          className="absolute rounded-full"
          style={{
            background: `#1E293B`,
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
            color: isEnglish ? "var(--color-accent-main)" : "#1E293B",
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
            color: !isEnglish ? "var(--color-text-on-dark)" : "#1E293B",
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
