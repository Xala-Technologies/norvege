import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return generateSEOMetadata({
    title: t("title") + " - Norvegen Group",
    description: t("subtitle"),
    path: `/${locale}/contact`,
  });
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
