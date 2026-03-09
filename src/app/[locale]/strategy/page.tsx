import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import StrategyContent from "./StrategyContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSEOMetadata({
    title: "Strategy - NORVEGEN GROUP",
    description:
      "Norvegen's strategy combines district-scale exploration with brownfield mine restart opportunities in historic Norwegian mining regions.",
    path: `/${locale}/strategy`,
  });
}

export default function StrategyPage() {
  return <StrategyContent />;
}
