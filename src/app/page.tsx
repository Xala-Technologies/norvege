import type { Metadata } from "next";
import HeroSection from "@/sections/HeroSection";
import StatsSection from "@/sections/StatsSection";
import ProjectsTeaser from "@/sections/ProjectsTeaser";
import RareEarthSection from "@/sections/RareEarthSection";
import BlockchainSection from "@/sections/BlockchainSection";
import NorChainSection from "@/sections/NorChainSection";
import ContactStrip from "@/sections/ContactStrip";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Norvege Minerals - Science-Driven Discovery",
  description:
    "Norwegian exploration company focused on sustainable mineral development and critical minerals for the energy transition.",
  path: "/",
});

export default function Home() {
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
