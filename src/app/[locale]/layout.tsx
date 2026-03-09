import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display } from "next/font/google";
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

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Norvegen Group - Critical Minerals & Energy Platform",
    template: "%s | Norvegen Group",
  },
  description:
    "Building Norway's next-generation minerals and energy platform. Critical minerals exploration, brownfield mine redevelopment, and subsurface energy solutions.",
  keywords: [
    "mining",
    "minerals",
    "Norway",
    "critical minerals",
    "rare earth elements",
    "zinc",
    "copper",
    "exploration",
    "geothermal",
    "energy transition",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://norvegengroup.com"),
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

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

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
      <body
        className={`antialiased ${sourceSans.variable} ${playfairDisplay.variable} ${sourceSans.className}`}
      >
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
