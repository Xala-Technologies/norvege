"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAVY = "#1B2A4A";
const GOLD = "#e3a142";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
        style={{
          background: NAVY,
          borderTop: `2px solid ${GOLD}`,
          boxShadow: "0 -4px 24px rgba(27, 42, 74, 0.3)",
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
            {/* Cookie Icon */}
            <div className="shrink-0">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `rgba(227, 161, 66, 0.15)`,
                  border: `1px solid rgba(227, 161, 66, 0.25)`,
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: GOLD }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className="text-lg font-bold mb-2"
                style={{
                  color: "white",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Cookie Consent
              </h3>
              <p
                className="text-sm lg:text-base leading-relaxed mb-2"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontFamily: "var(--font-family-body)",
                }}
              >
                We use cookies to enhance your browsing experience, analyze site traffic, and
                personalize content. By clicking &quot;Accept All&quot;, you consent to our use of
                cookies. You can learn more about our cookie practices in our{" "}
                <Link
                  href="/privacy"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: GOLD }}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:shrink-0">
              <button
                onClick={handleReject}
                className="px-6 py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-200 border-2 hover:bg-white/10"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  color: "white",
                  background: "transparent",
                }}
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-200 hover:opacity-90"
                style={{
                  background: GOLD,
                  color: NAVY,
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
