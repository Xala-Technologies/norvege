import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import AboutPageContent from "./AboutPageContent";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return generateSEOMetadata({
    title: t("hero.title") + " " + t("hero.highlight"),
    description: t("overview.description"),
    path: `/${locale}/about`,
  });
}

export default async function AboutPage() {
  return <AboutPageContent />;
}
