"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
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
      className={`relative flex items-center gap-3 transition-all duration-200 ${className}`}
      aria-label="Norvege Minerals Home"
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
      onClick={handleClick}
      scroll={!isHomePage}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className="relative h-28 md:h-32 lg:h-40 w-auto flex items-center transition-all duration-200"
        style={{
          filter: isActive ? "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))" : "none",
        }}
      >
        <div className="relative w-full h-full flex items-center">
          <Image
            src="/images/logo.png"
            alt="Norvege Minerals"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
