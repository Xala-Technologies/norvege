import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Projects - NORVEGE MINERALS AS",
  description:
    "Explore our portfolio of critical mineral exploration projects across Norway's most promising geological regions.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
