import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partners" });

  return generateSEOMetadata({
    title: t("title") + " - Norvegen Group",
    description: t("subtitle"),
    path: `/${locale}/partners`,
  });
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
