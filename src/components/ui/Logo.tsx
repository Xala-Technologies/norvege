"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface LogoProps {
  className?: string;
  size?: "default" | "large";
}

export default function Logo({ className = "", size = "default" }: LogoProps) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      className={`relative flex items-center transition-all duration-200 ${className}`}
      aria-label="Norvegen Group Home"
      style={{ WebkitTapHighlightColor: "transparent" }}
      onClick={handleClick}
      scroll={!isHomePage}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className="relative flex items-center transition-all duration-200"
        style={{
          filter: isActive ? "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))" : "none",
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Norvegen Group"
          width={200}
          height={51}
          className={`w-auto object-contain ${size === "large" ? "h-14 sm:h-16 md:h-18" : "h-10 sm:h-11 md:h-12"}`}
          priority
        />
      </div>
    </Link>
  );
}
