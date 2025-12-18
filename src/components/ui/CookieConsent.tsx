"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
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
    // Here you can initialize analytics or other tracking scripts
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
          background: "var(--color-base-black)",
          borderTop: `2px solid color-mix(in srgb, var(--color-accent-main) 30%, transparent)`,
          boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
            {/* Cookie Icon */}
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "color-mix(in srgb, var(--color-accent-main) 20%, transparent)",
                  border: `1px solid color-mix(in srgb, var(--color-accent-main) 40%, transparent)`,
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-accent-main)" }}
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
                  color: "var(--color-text-on-dark)",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Cookie Consent
              </h3>
              <p
                className="text-sm lg:text-base leading-relaxed mb-2"
                style={{
                  color: "color-mix(in srgb, var(--color-text-on-dark) 85%, transparent)",
                  fontFamily: "var(--font-family-body)",
                }}
              >
                We use cookies to enhance your browsing experience, analyze site traffic, and
                personalize content. By clicking &quot;Accept All&quot;, you consent to our use of
                cookies. You can learn more about our cookie practices in our{" "}
                <Link
                  href="/privacy"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-6 py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-200 border-2"
                style={{
                  borderColor: "color-mix(in srgb, var(--color-text-on-dark) 40%, transparent)",
                  color: "var(--color-text-on-dark)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-text-on-dark)";
                  e.currentTarget.style.background =
                    "color-mix(in srgb, var(--color-text-on-dark) 10%, transparent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--color-text-on-dark) 40%, transparent)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-200"
                style={{
                  background: "var(--color-accent-main)",
                  color: "var(--color-accent-contrast)",
                  boxShadow: "var(--shadow-accent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-accent-lg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-accent)";
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
