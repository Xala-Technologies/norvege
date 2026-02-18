"use client";

import Image from "next/image";
import type { IStrategyDeck } from "@/content/types";
import { formatDateDisplay } from "@/lib/date-utils";

interface StrategyDeckViewProps {
  deck: IStrategyDeck;
  showConfidentialityLabel?: boolean;
  showPdfLink?: boolean;
}

/**
 * Read-only view of a Strategy Deck. Renders all sections with page refs.
 * Chart assets render even when numeric fields are null (per NFR).
 */
export default function StrategyDeckView({
  deck,
  showConfidentialityLabel = true,
  showPdfLink = true,
}: StrategyDeckViewProps) {
  const { documentMeta, thesisWhyShiftAway, thesisWhyOnshore, licensePortfolioSummary } = deck;
  const { geologyPrimer, strategyAlignment, comparison, economicsBenchmark, closingClaims } = deck;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div
        className="text-center pb-8 border-b-2"
        style={{ borderColor: "color-mix(in srgb, var(--color-primary-main) 20%, transparent)" }}
      >
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={{
            color: "var(--color-text-body)",
            fontFamily: "var(--font-family-heading)",
            fontWeight: "var(--font-weight-black)",
            letterSpacing: "-0.03em",
          }}
        >
          {documentMeta.title}
        </h1>
        {documentMeta.subtitle && (
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {documentMeta.subtitle}
          </p>
        )}
        <p className="text-sm text-gray-500">
          {documentMeta.authorOrDept} | {documentMeta.monthYear}
        </p>
        {showConfidentialityLabel && deck.confidentiality && (
          <div className="mt-4 inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-lg text-sm font-semibold">
            Confidential
          </div>
        )}
      </div>

      {/* Thesis: Why shift away from DSM */}
      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "var(--color-primary-main)", fontFamily: "var(--font-family-heading)" }}
        >
          Why shift away from Mid-Atlantic Ridge DSM
          <span className="text-sm font-normal text-gray-500 ml-2">
            (p.{thesisWhyShiftAway.pageRef})
          </span>
        </h2>
        {thesisWhyShiftAway.costDrivers && thesisWhyShiftAway.costDrivers.length > 0 && (
          <p className="text-gray-600 mb-2">
            Cost drivers: {thesisWhyShiftAway.costDrivers.join(", ")}
          </p>
        )}
        {(thesisWhyShiftAway.locationReference ||
          thesisWhyShiftAway.depthReference ||
          thesisWhyShiftAway.exampleSite) && (
          <ul className="text-gray-600 text-sm space-y-1 mb-4">
            {thesisWhyShiftAway.locationReference && (
              <li>Location: {thesisWhyShiftAway.locationReference}</li>
            )}
            {thesisWhyShiftAway.depthReference && (
              <li>Depth: {thesisWhyShiftAway.depthReference}</li>
            )}
            {thesisWhyShiftAway.exampleSite && (
              <li>Example site: {thesisWhyShiftAway.exampleSite}</li>
            )}
          </ul>
        )}
        {thesisWhyShiftAway.bullets && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {thesisWhyShiftAway.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Thesis: Why onshore Norway */}
      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "var(--color-primary-main)", fontFamily: "var(--font-family-heading)" }}
        >
          Why onshore Norway is preferred
          <span className="text-sm font-normal text-gray-500 ml-2">
            (p.{thesisWhyOnshore.pageRef})
          </span>
        </h2>
        {thesisWhyOnshore.bullets && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {thesisWhyOnshore.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Maps & Licenses */}
      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "var(--color-primary-main)", fontFamily: "var(--font-family-heading)" }}
        >
          Licensing portfolio
          {licensePortfolioSummary.pageRef != null && (
            <span className="text-sm font-normal text-gray-500 ml-2">
              (p.{licensePortfolioSummary.pageRef})
            </span>
          )}
        </h2>
        <p className="text-gray-700 mb-2">{licensePortfolioSummary.notes}</p>
        {(licensePortfolioSummary.approvedCount != null ||
          licensePortfolioSummary.pendingCount != null) && (
          <p className="text-sm text-gray-600">
            Approved: {licensePortfolioSummary.approvedCount ?? "—"} | Pending:{" "}
            {licensePortfolioSummary.pendingCount ?? "—"}
          </p>
        )}
        {deck.licenseMapExplanation && (
          <p className="text-gray-700 mt-4 whitespace-pre-line">{deck.licenseMapExplanation}</p>
        )}
      </section>

      {/* Geology Primer */}
      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "var(--color-primary-main)", fontFamily: "var(--font-family-heading)" }}
        >
          Geology primer: Ophiolite & VMS genesis
          <span className="text-sm font-normal text-gray-500 ml-2">
            (p.{geologyPrimer.pageRef})
          </span>
        </h2>
        <p className="text-gray-700 mb-4">{geologyPrimer.ophioliteDefinition}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Timing</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
          {geologyPrimer.timingRanges.map((t, i) => (
            <li key={i}>
              {t.label}: {t.range}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mb-4">{geologyPrimer.tectonicSetting}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">VMS formation</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          {geologyPrimer.vmsFormationSteps.map((step, i) => (
            <li key={i}>{step.description}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Typical metals</h3>
        <div className="flex flex-wrap gap-2">
          {geologyPrimer.typicalMetals.map((m, i) => (
            <span key={i} className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-sm">
              {m.element} ({m.category})
            </span>
          ))}
        </div>
      </section>

      {/* Strategy Alignment */}
      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "var(--color-primary-main)", fontFamily: "var(--font-family-heading)" }}
        >
          Strategy alignment to Norway / EU critical minerals
          <span className="text-sm font-normal text-gray-500 ml-2">
            (p.{strategyAlignment.pageRef})
          </span>
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Long-term:</strong> {strategyAlignment.longTerm}
          </li>
          <li>
            <strong>Strategic bridge:</strong> {strategyAlignment.strategicBridge}
          </li>
          <li>
            <strong>Near-term:</strong> {strategyAlignment.nearTerm}
          </li>
          <li>
            <strong>Target metals:</strong> {strategyAlignment.targetMetals.join(" · ")}
          </li>
        </ul>
      </section>

      {/* Capital & Timeline */}
      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "var(--color-primary-main)", fontFamily: "var(--font-family-heading)" }}
        >
          Capital reality: DSM vs Onshore
          <span className="text-sm font-normal text-gray-500 ml-2">(p.{comparison.pageRef})</span>
        </h2>
        <p className="text-gray-700 mb-4 italic">
          The difference is not geology; it is capital rigidity vs capital flexibility.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="p-4 rounded-lg border"
            style={{
              borderColor: "color-mix(in srgb, var(--color-primary-main) 30%, transparent)",
            }}
          >
            <h3 className="font-semibold text-gray-800 mb-2">DSM</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {comparison.dsmTraits.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          <div
            className="p-4 rounded-lg border"
            style={{ borderColor: "color-mix(in srgb, var(--color-accent-main) 40%, transparent)" }}
          >
            <h3 className="font-semibold text-gray-800 mb-2">Onshore</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {comparison.onshoreTraits.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        {comparison.timelineYears && comparison.timelineYears.length > 0 && (
          <p className="mt-4 text-gray-600">
            Timeline: {comparison.timelineYears.join(" ")}
            {comparison.indicativeLabel && ` (${comparison.indicativeLabel})`}
          </p>
        )}
      </section>

      {/* Economics Benchmark */}
      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "var(--color-primary-main)", fontFamily: "var(--font-family-heading)" }}
        >
          Economics benchmark
          <span className="text-sm font-normal text-gray-500 ml-2">
            (p.{economicsBenchmark.pageRef})
          </span>
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          {economicsBenchmark.narrativeBullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {deck.chartAssets.map((chart) => (
          <div key={chart.id} className="p-4 bg-gray-50 rounded-lg">
            {chart.imagePathOrRef ? (
              <Image
                src={chart.imagePathOrRef}
                alt={chart.caption ?? chart.id}
                width={800}
                height={600}
                className="max-w-full h-auto rounded"
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              <p className="text-sm text-gray-500 italic">
                Chart image not linked. Admin can add image reference.
              </p>
            )}
            {chart.caption && <p className="text-sm text-gray-600 mt-2">{chart.caption}</p>}
            {(chart.capexMin != null ||
              chart.capexMax != null ||
              chart.opexMin != null ||
              chart.opexMax != null) && (
              <p className="text-xs text-gray-500 mt-2">
                CAPEX: {chart.capexMin ?? "—"}–{chart.capexMax ?? "—"} | OPEX:{" "}
                {chart.opexMin ?? "—"}–{chart.opexMax ?? "—"}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Closing claims */}
      <section>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "var(--color-primary-main)", fontFamily: "var(--font-family-heading)" }}
        >
          Onshore critical minerals: Market-led & proven
          <span className="text-sm font-normal text-gray-500 ml-2">
            (p.{closingClaims.pageRef})
          </span>
        </h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">General</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
          {closingClaims.generalBullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Norve&apos;Ge</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {closingClaims.norvegeBullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      {/* Disclaimers */}
      <section className="p-6 rounded-lg bg-amber-50 border border-amber-200">
        <h2 className="text-xl font-bold text-amber-900 mb-4">Disclaimers</h2>
        <ul className="list-disc pl-6 space-y-2 text-amber-900">
          {deck.disclaimers.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </section>

      {/* Source / PDF link */}
      {showPdfLink && deck.attachment && (
        <section className="pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Source document</h2>
          <p className="text-gray-700 mb-2">
            {deck.attachment.name ?? deck.attachment.fileName} (
            {deck.attachment.versionTag ?? "N/A"})
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Uploaded: {formatDateDisplay(deck.attachment.uploadedAt)}
          </p>
          {deck.attachment.filePath && (
            <a
              href={deck.attachment.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-colors"
              style={{ background: "var(--color-primary-main)" }}
            >
              Download PDF
            </a>
          )}
        </section>
      )}
    </div>
  );
}
