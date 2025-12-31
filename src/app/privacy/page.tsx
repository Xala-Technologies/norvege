import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getLegalPageBySlug } from "@/content/legal";
import LegalContent from "@/components/ui/LegalContent";

export const metadata: Metadata = generateSEOMetadata({
  title: "Privacy Policy - NORVEGE MINERALS AS",
  description: "Our privacy policy and data protection practices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const page = getLegalPageBySlug("privacy");

  if (!page) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              {page.title}
            </h1>
            {page.lastUpdated && (
              <p className="text-lg" style={{ color: "var(--color-sand-100)" }}>
                Last Updated: {new Date(page.lastUpdated).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <LegalContent content={page.content} />
        </div>
      </section>
    </div>
  );
}
