import type { Metadata } from "next";
import HeroSection from "@/sections/HeroSection";
import StatsSection from "@/sections/StatsSection";
import ProjectsTeaser from "@/sections/ProjectsTeaser";
import RareEarthSection from "@/sections/RareEarthSection";
import BlockchainSection from "@/sections/BlockchainSection";
import NorChainSection from "@/sections/NorChainSection";
import ContactStrip from "@/sections/ContactStrip";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  try {
    const messages = await getMessages({ locale });
    const home = messages.home as {
      hero?: { slide4?: { title?: string; highlight?: string; description?: string } };
    };
    const slide4 = home?.hero?.slide4;

    if (slide4?.title && slide4?.highlight && slide4?.description) {
      return generateSEOMetadata({
        title: `${slide4.title} - ${slide4.highlight} - NORVEGE MINERALS AS`,
        description: slide4.description,
        path: `/${locale}`,
      });
    }
  } catch {
    // Fallback if translations fail
  }

  // Fallback metadata
  return generateSEOMetadata({
    title: "Science-Driven Discovery - Innovation - NORVEGE MINERALS AS",
    description:
      "Pioneering a new era of mineral exploration in Europe with cutting-edge technology and proven expertise.",
    path: `/${locale}`,
  });
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <RareEarthSection />
      <ProjectsTeaser />
      <BlockchainSection />
      <NorChainSection />
      <ContactStrip />
    </>
  );
}
