"use client";

import Logo from "@/components/ui/Logo";
import { useTranslations } from "next-intl";

const DARK_NAVY = "#111D32";

export default function Footer() {
  const t = useTranslations("common.footer");

  return (
    <footer className="relative" style={{ background: DARK_NAVY }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex flex-col items-center gap-5">
          <Logo className="brightness-0 invert" size="large" />

          <p
            className="text-xs sm:text-sm tracking-wide text-center"
            style={{ color: "rgba(255, 255, 255, 0.4)" }}
          >
            {t("tagline")} &nbsp;|&nbsp;{" "}
            <a
              href="mailto:contact@norvegengroup.com"
              className="transition-opacity hover:opacity-100"
              style={{ color: "rgba(255, 255, 255, 0.55)" }}
            >
              contact@norvegengroup.com
            </a>
          </p>

          <div className="flex items-center gap-3">
            <a
              href="mailto:contact@norvegengroup.com"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ background: "rgba(255, 255, 255, 0.08)" }}
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ background: "rgba(255, 255, 255, 0.08)" }}
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
