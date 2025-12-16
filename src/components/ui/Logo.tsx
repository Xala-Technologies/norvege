import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = "", showTagline = true }: LogoProps) {
  const isWhiteTheme = className.includes("!text-white") || className.includes("text-white");
  const textColor = isWhiteTheme ? "var(--color-sand-50)" : "var(--color-navy-900)";
  const taglineColor = isWhiteTheme ? "var(--color-sand-200)" : "var(--color-gray-600)";

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="Norvege Minerals Home"
    >
      {/* Logo Icon - Stylized N with mineral formation */}
      <div className="relative">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-lg transition-transform group-hover:scale-105"
          style={{
            background: "linear-gradient(135deg, var(--color-copper-600), var(--color-copper-500))",
            boxShadow: "0 4px 12px rgba(182, 125, 66, 0.3)",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            {/* Stylized N with geological layers */}
            <path
              d="M8 6L8 26L12 22L12 10L20 18L20 26L24 26L24 6L20 10L20 18L12 10L12 6L8 6Z"
              fill="currentColor"
            />
            {/* Mineral accent dots */}
            <circle cx="14" cy="14" r="1.5" fill="currentColor" opacity="0.8" />
            <circle cx="18" cy="18" r="1.5" fill="currentColor" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <div
          className="text-xl md:text-2xl font-bold tracking-tight leading-tight"
          style={{ color: textColor }}
        >
          NORVEGE
        </div>
        {showTagline && (
          <div
            className="text-xs md:text-sm font-medium tracking-wider uppercase leading-tight"
            style={{ color: taglineColor }}
          >
            MINERALS
          </div>
        )}
      </div>
    </Link>
  );
}
