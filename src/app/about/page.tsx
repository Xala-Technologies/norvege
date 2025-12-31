import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - NORVEGE MINERALS AS",
  description:
    "Learn about NORVEGE MINERALS AS, our mission, and strategy for sustainable mineral exploration in Norway.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
