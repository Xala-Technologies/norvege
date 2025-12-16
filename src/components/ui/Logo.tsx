import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`relative flex items-center gap-3 group ${className}`}
      aria-label="Norvege Minerals Home"
    >
      {/* Enhanced glow effect matching navbar accent */}
      <div
        className="absolute -inset-3 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, var(--color-accent-main) 0%, transparent 70%)",
        }}
      />

      {/* Subtle background glow for better visibility */}
      <div
        className="absolute -inset-1 blur-lg rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative h-24 md:h-28 lg:h-36 w-auto transition-all duration-300 group-hover:scale-105 flex items-center">
        <div
          className="relative w-full h-full flex items-center"
          style={{
            filter:
              "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Norvege Minerals"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto object-contain"
            style={{ lineHeight: "30px" }}
            priority
          />
        </div>
      </div>
    </Link>
  );
}
