"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NorChainLogo() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Fallback to "N" text if image fails to load
    return (
      <Link
        href="https://www.norchain.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl lg:text-3xl font-bold hover:opacity-80 transition-opacity"
        style={{
          color: "var(--color-accent-main)",
          fontFamily: "var(--font-family-heading)",
          fontWeight: "var(--font-weight-black)",
        }}
      >
        N
      </Link>
    );
  }

  return (
    <Link
      href="https://www.norchain.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      <Image
        src="/images/logos/norchain.png"
        alt="NorChain Logo"
        width={80}
        height={80}
        className="object-contain"
        onError={() => setImageError(true)}
      />
    </Link>
  );
}
