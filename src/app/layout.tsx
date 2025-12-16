import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Norvege Minerals - Science-Driven Discovery",
    template: "%s | Norvege Minerals",
  },
  description:
    "Norwegian exploration company focused on sustainable mineral development and critical minerals for the energy transition.",
  keywords: [
    "mining",
    "minerals",
    "Norway",
    "critical minerals",
    "rare earth elements",
    "zinc",
    "copper",
    "exploration",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`antialiased ${sourceSans.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
