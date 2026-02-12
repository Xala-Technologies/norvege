import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-source-sans",
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang={locale}>
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
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
