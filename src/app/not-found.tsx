import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, var(--color-navy-900) 0%, #0a1628 100%)",
      }}
    >
      {/* Dark speckled background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(255, 255, 255, 0.1) 1px, transparent 0),
            radial-gradient(circle at 5px 5px, rgba(255, 255, 255, 0.08) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 40px 40px, 60px 60px",
          opacity: 0.4,
        }}
      />

      <div className="text-center max-w-2xl mx-auto relative z-10">
        <div className="mb-8">
          <div
            className="text-8xl md:text-9xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--color-sand-50)" }}
        >
          Page Not Found
        </h1>
        <p className="text-lg mb-8" style={{ color: "var(--color-sand-200)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-lg font-bold text-base transition-all hover:scale-105"
            style={{
              background: "#f97316",
              color: "white",
              boxShadow: "0 8px 25px rgba(249, 115, 22, 0.4)",
            }}
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold text-base border-2 transition-all hover:scale-105"
            style={{
              borderColor: "rgba(255, 255, 255, 0.3)",
              color: "var(--color-sand-50)",
              background: "rgba(255, 255, 255, 0.1)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
