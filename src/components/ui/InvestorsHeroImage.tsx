"use client";

import Image from "next/image";
import { useState } from "react";

export default function InvestorsHeroImage() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10, 14, 20, 0.9) 0%, rgba(15, 20, 25, 0.85) 50%, rgba(26, 31, 38, 0.9) 100%)",
        }}
      />
    );
  }

  return (
    <>
      {/* Fallback gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10, 14, 20, 0.9) 0%, rgba(15, 20, 25, 0.85) 50%, rgba(26, 31, 38, 0.9) 100%)",
        }}
      />
      <Image
        src="/images/investors/hero.jpg"
        alt="Investor Relations - NORVEGE MINERALS AS"
        fill
        className="object-cover"
        sizes="100vw"
        quality={90}
        priority
        onError={() => setImageError(true)}
      />
      {/* Dark overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-primary-main) 75%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 60%, transparent) 100%)",
        }}
      />
    </>
  );
}
