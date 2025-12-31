"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          className="min-h-screen flex items-center justify-center p-4"
          style={{
            background: "linear-gradient(135deg, var(--color-navy-900) 0%, #0a1628 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "rgba(239, 68, 68, 0.2)",
                  color: "#ef4444",
                }}
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.662 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </motion.div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--color-text-on-dark)" }}
            >
              Something went wrong!
            </h1>
            <p className="text-lg mb-8" style={{ color: "var(--color-text-secondary)" }}>
              We encountered an unexpected error. Please try again or return to the homepage.
            </p>

            {error.digest && (
              <p
                className="text-sm mb-8 opacity-60"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Error ID: {error.digest}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={reset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-bold text-base transition-all"
                style={{
                  background: "var(--color-accent-main)",
                  color: "var(--color-accent-contrast)",
                  boxShadow: "var(--shadow-accent-lg)",
                }}
              >
                Try Again
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/"
                  className="inline-block px-8 py-3 rounded-lg font-bold text-base border-2 transition-all"
                  style={{
                    borderColor: "color-mix(in srgb, var(--color-text-on-dark) 30%, transparent)",
                    color: "var(--color-text-on-dark)",
                    background: "color-mix(in srgb, var(--color-text-on-dark) 10%, transparent)",
                  }}
                >
                  Go Home
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
