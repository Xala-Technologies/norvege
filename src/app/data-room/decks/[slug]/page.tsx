import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStrategyDeckBySlug, getAllStrategyDecks } from "@/content/strategy-deck-feb2026";
import StrategyDeckView from "@/components/data-room/StrategyDeckView";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const decks = getAllStrategyDecks();
  return decks.map((deck) => ({ slug: deck.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const deck = getStrategyDeckBySlug(slug);
  if (!deck) {
    return { title: "Strategy Deck Not Found" };
  }
  return generateSEOMetadata({
    title: `${deck.documentMeta.title} - ${deck.companyName}`,
    description: deck.documentMeta.subtitle ?? deck.topic,
    path: `/data-room/decks/${slug}`,
  });
}

export default async function StrategyDeckPublicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deck = getStrategyDeckBySlug(slug);

  if (!deck) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-8">
          <Link href="/vdr" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            ← Back to Data Room
          </Link>
        </div>
        <StrategyDeckView deck={deck} showConfidentialityLabel={true} showPdfLink={true} />
      </div>
    </div>
  );
}
