import type { Metadata } from "next";
import HeroSection from "@/sections/HeroSection";
import LeadershipSection from "@/sections/LeadershipSection";
import StatsSection from "@/sections/StatsSection";
import ProjectsTeaser from "@/sections/ProjectsTeaser";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata({
    title: "Building Norway's Critical Minerals & Subsurface Energy Platform - NORVEGEN GROUP",
    description:
      "Developing one of Norway's largest critical mineral exploration portfolios to support electrification and renewable energy systems.",
    path: `/${locale}`,
  });
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <LeadershipSection />
      <StatsSection />
      <ProjectsTeaser />
    </>
  );
}
