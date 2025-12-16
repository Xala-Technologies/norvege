import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Virtual Data Room (VDR) - NORVEGE MINERALS AS",
  description: "Access our virtual data room for investors and partners.",
  path: "/vdr",
});

export default function VDRPage() {
  return (
    <div className="min-h-screen">
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              Virtual Data Room
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Secure access to confidential company documents and data
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Our Virtual Data Room (VDR) provides authorized investors and partners with secure
              access to confidential company documents, financial information, technical reports,
              and due diligence materials.
            </p>
            <p className="text-gray-600 mb-6">
              To request access to the VDR, please contact us through our contact form or email us
              directly at{" "}
              <a
                href="mailto:contact@norvegeminerals.no"
                className="text-[var(--color-copper-600)] hover:underline"
              >
                contact@norvegeminerals.no
              </a>
              . Access is granted on a case-by-case basis to qualified investors and partners.
            </p>
            <div className="mt-8">
              <a href="/contact" className="btn btn-primary">
                Request VDR Access
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
