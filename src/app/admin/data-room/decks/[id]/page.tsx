"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import { getStrategyDeckById } from "@/content/strategy-deck-feb2026";
import type { IStrategyDeck } from "@/content/types";
import { formatDateDisplay } from "@/lib/date-utils";
import { generateStrategyDeckExport, downloadMarkdown } from "@/lib/project-data-room-export";
import Link from "next/link";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "thesis", label: "DSM vs Onshore Thesis" },
  { id: "maps", label: "Maps & Licenses" },
  { id: "geology", label: "Geology Primer" },
  { id: "alignment", label: "Strategy Alignment" },
  { id: "capital", label: "Capital & Timeline" },
  { id: "economics", label: "Economics Benchmark" },
  { id: "disclaimers", label: "Disclaimers/Confidentiality" },
  { id: "attachments", label: "Attachments" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function AdminStrategyDeckPage() {
  const params = useParams();
  const id = params?.id as string;
  const deck = useMemo(() => getStrategyDeckById(id ?? ""), [id]);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  if (!deck) {
    return (
      <div className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Strategy Deck Not Found</h1>
          <p className="text-gray-600">No deck found for id: {id}</p>
          <Link href="/admin" className="mt-4 inline-block text-blue-600 hover:underline">
            ← Back to Admin
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{deck.documentMeta.title}</h1>
              <p className="text-sm text-gray-500 mt-1">
                {deck.authorOrDept} | {deck.monthYear} | Last updated:{" "}
                {formatDateDisplay(deck.lastUpdated)}
              </p>
              {deck.confidentiality && (
                <span className="inline-block mt-2 px-2 py-0.5 text-xs font-semibold bg-amber-100 text-amber-800 rounded">
                  Confidential
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const md = generateStrategyDeckExport(deck);
                  downloadMarkdown(
                    md,
                    `strategy-deck-${deck.slug}-${new Date().toISOString().split("T")[0]}.md`
                  );
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Export Markdown
              </button>
              <Link
                href={`/data-room/decks/${deck.slug}`}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium"
              >
                View Public Page
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto py-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && <OverviewTab deck={deck} />}
        {activeTab === "thesis" && <ThesisTab deck={deck} />}
        {activeTab === "maps" && <MapsTab deck={deck} />}
        {activeTab === "geology" && <GeologyTab deck={deck} />}
        {activeTab === "alignment" && <AlignmentTab deck={deck} />}
        {activeTab === "capital" && <CapitalTab deck={deck} />}
        {activeTab === "economics" && <EconomicsTab deck={deck} />}
        {activeTab === "disclaimers" && <DisclaimersTab deck={deck} />}
        {activeTab === "attachments" && <AttachmentsTab deck={deck} />}
      </main>
    </div>
  );
}

function OverviewTab({ deck }: { deck: IStrategyDeck }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Document Metadata</h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <dt className="text-sm font-medium text-gray-500">Title</dt>
          <dd className="text-gray-900">{deck.documentMeta.title}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Subtitle</dt>
          <dd className="text-gray-900">{deck.documentMeta.subtitle ?? "—"}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Author / Dept</dt>
          <dd className="text-gray-900">{deck.documentMeta.authorOrDept}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Month / Year</dt>
          <dd className="text-gray-900">{deck.documentMeta.monthYear}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Confidentiality</dt>
          <dd className="text-gray-900">{deck.documentMeta.confidentiality ? "Yes" : "No"}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Company</dt>
          <dd className="text-gray-900">{deck.companyName}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Related Project</dt>
          <dd className="text-gray-900">{deck.relatedProjectSlug}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Topic</dt>
          <dd className="text-gray-900">{deck.topic}</dd>
        </div>
      </dl>
    </div>
  );
}

function ThesisTab({ deck }: { deck: IStrategyDeck }) {
  const { thesisWhyShiftAway, thesisWhyOnshore } = deck;
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-8">
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {thesisWhyShiftAway.title}{" "}
          <span className="text-sm font-normal text-gray-500">
            (p.{thesisWhyShiftAway.pageRef})
          </span>
        </h2>
        {thesisWhyShiftAway.costDrivers && (
          <p className="text-sm text-gray-600 mb-2">
            Cost drivers: {thesisWhyShiftAway.costDrivers.join(", ")}
          </p>
        )}
        {thesisWhyShiftAway.locationReference && (
          <p className="text-sm text-gray-600">Location: {thesisWhyShiftAway.locationReference}</p>
        )}
        {thesisWhyShiftAway.depthReference && (
          <p className="text-sm text-gray-600">Depth: {thesisWhyShiftAway.depthReference}</p>
        )}
        {thesisWhyShiftAway.exampleSite && (
          <p className="text-sm text-gray-600">Example site: {thesisWhyShiftAway.exampleSite}</p>
        )}
        {thesisWhyShiftAway.bullets && (
          <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
            {thesisWhyShiftAway.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {thesisWhyOnshore.title}{" "}
          <span className="text-sm font-normal text-gray-500">(p.{thesisWhyOnshore.pageRef})</span>
        </h2>
        {thesisWhyOnshore.sameMineralSystemNote && (
          <p className="text-gray-700 mb-2">{thesisWhyOnshore.sameMineralSystemNote}</p>
        )}
        {thesisWhyOnshore.knownDistricts && (
          <p className="text-sm text-gray-600">
            Known districts: {thesisWhyOnshore.knownDistricts.join(", ")}
          </p>
        )}
        {thesisWhyOnshore.bullets && (
          <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
            {thesisWhyOnshore.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function MapsTab({ deck }: { deck: IStrategyDeck }) {
  const s = deck.licensePortfolioSummary;
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">
        Licensing Portfolio (p.{s.pageRef ?? "—"})
      </h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <dt className="text-sm font-medium text-gray-500">Approved count</dt>
          <dd className="text-gray-900">{s.approvedCount ?? "— (unknown)"}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Pending count</dt>
          <dd className="text-gray-900">{s.pendingCount ?? "— (unknown)"}</dd>
        </div>
      </dl>
      <p className="text-gray-600">{s.notes}</p>
      {deck.licenseMapExplanation && (
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Map explanation</h3>
          <p className="text-gray-700 whitespace-pre-line">{deck.licenseMapExplanation}</p>
        </div>
      )}
    </div>
  );
}

function GeologyTab({ deck }: { deck: IStrategyDeck }) {
  const g = deck.geologyPrimer;
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Geology Primer (p.{g.pageRef})</h2>
      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Ophiolite definition</h3>
        <p className="text-gray-700">{g.ophioliteDefinition}</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Timing ranges</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {g.timingRanges.map((t, i) => (
            <li key={i}>
              <strong>{t.label}:</strong> {t.range}
              {t.pageRef != null && <span className="text-gray-500"> (p.{t.pageRef})</span>}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Tectonic setting</h3>
        <p className="text-gray-700">{g.tectonicSetting}</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">VMS formation steps</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {g.vmsFormationSteps.map((step, i) => (
            <li key={i}>
              {step.description}
              {step.pageRef != null && <span className="text-gray-500"> (p.{step.pageRef})</span>}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Typical metals</h3>
        <div className="flex flex-wrap gap-2">
          {g.typicalMetals.map((m, i) => (
            <span key={i} className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-sm">
              {m.element} ({m.category})
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

function AlignmentTab({ deck }: { deck: IStrategyDeck }) {
  const a = deck.strategyAlignment;
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Strategy Alignment (p.{a.pageRef})</h2>
      <dl className="space-y-4">
        <div>
          <dt className="text-sm font-medium text-gray-500">Long-term (state-led)</dt>
          <dd className="text-gray-900">{a.longTerm}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Strategic bridge</dt>
          <dd className="text-gray-900">{a.strategicBridge}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Near-term (market-led)</dt>
          <dd className="text-gray-900">{a.nearTerm}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Target metals</dt>
          <dd className="text-gray-900">{a.targetMetals.join(" · ")}</dd>
        </div>
      </dl>
    </div>
  );
}

function CapitalTab({ deck }: { deck: IStrategyDeck }) {
  const c = deck.comparison;
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Capital & Timeline (p.{c.pageRef})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">DSM</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {c.dsmTraits.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
          {c.dsmTimelineBands && c.dsmTimelineBands.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Timeline bands</h4>
              <ul className="list-disc pl-6 text-gray-700 text-sm">
                {c.dsmTimelineBands.map((b, i) => (
                  <li key={i}>{b.label}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Onshore</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {c.onshoreTraits.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
          {c.onshoreTimelineBands && c.onshoreTimelineBands.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Timeline bands</h4>
              <ul className="list-disc pl-6 text-gray-700 text-sm">
                {c.onshoreTimelineBands.map((b, i) => (
                  <li key={i}>{b.label}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {c.timelineYears && c.timelineYears.length > 0 && (
        <p className="text-gray-600">
          Timeline years: {c.timelineYears.join(" ")}
          {c.indicativeLabel && ` (${c.indicativeLabel})`}
        </p>
      )}
    </div>
  );
}

function EconomicsTab({ deck }: { deck: IStrategyDeck }) {
  const e = deck.economicsBenchmark;
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Economics Benchmark (p.{e.pageRef})</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {e.narrativeBullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-500">
        Do not invent numeric CAPEX/OPEX values from charts. Chart asset ID: {e.chartAssetId ?? "—"}
      </p>
      {deck.chartAssets.length > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Chart assets</h3>
          {deck.chartAssets.map((chart) => (
            <div key={chart.id} className="mb-4 p-4 bg-gray-50 rounded">
              <p className="text-sm font-medium text-gray-700">{chart.id}</p>
              {chart.caption && <p className="text-sm text-gray-600 mt-1">{chart.caption}</p>}
              {chart.capexMin != null ||
              chart.capexMax != null ||
              chart.opexMin != null ||
              chart.opexMax != null ? (
                <p className="text-xs text-gray-500 mt-2">
                  CAPEX: {chart.capexMin ?? "—"}–{chart.capexMax ?? "—"} | OPEX:{" "}
                  {chart.opexMin ?? "—"}–{chart.opexMax ?? "—"}
                </p>
              ) : (
                <p className="text-xs text-gray-500 mt-2">
                  No numeric values stored (admin can add later).
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DisclaimersTab({ deck }: { deck: IStrategyDeck }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Disclaimers / Confidentiality</h2>
      {deck.confidentiality && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="font-semibold text-amber-900">Confidential</p>
          <p className="text-sm text-amber-800 mt-1">
            This document and all slides are labeled Confidential. Preserve this label on all UI and
            exports.
          </p>
        </div>
      )}
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {deck.disclaimers.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}

function AttachmentsTab({ deck }: { deck: IStrategyDeck }) {
  const a = deck.attachment;
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Attachments</h2>
      <div className="p-4 border border-gray-200 rounded-lg">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <dt className="text-sm font-medium text-gray-500">File name</dt>
            <dd className="text-gray-900">{a.fileName}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Uploaded at</dt>
            <dd className="text-gray-900">{formatDateDisplay(a.uploadedAt)}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Version</dt>
            <dd className="text-gray-900">{a.versionTag ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Source document</dt>
            <dd className="text-gray-900">{a.isSourceDocument ? "Yes" : "No"}</dd>
          </div>
        </dl>
        {a.filePath && (
          <p className="mt-4 text-sm text-gray-600">
            Path: <code className="bg-gray-100 px-1 rounded">{a.filePath}</code>
          </p>
        )}
      </div>
    </div>
  );
}
