"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { getProjectDataRoomBySlug } from "@/content/killingdal-data-room";
import type { IProjectDataRoom } from "@/content/types";
import {
  generateOnePager,
  generateFullReport,
  downloadMarkdown,
} from "@/lib/project-data-room-export";
import { formatDateDisplay } from "@/lib/date-utils";

export default function AdminProjectDataRoomPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [dataRoom] = useState<IProjectDataRoom | null>(() => {
    return getProjectDataRoomBySlug(slug) || null;
  });
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);

  if (!dataRoom) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p>No data room found for project: {slug}</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "geology", label: "Geology & Deposit" },
    { id: "history", label: "History & Infrastructure" },
    { id: "funding", label: "Funding & Permitting" },
    { id: "work-program", label: "Work Program & Gates" },
    { id: "economics", label: "Economics (Conceptual)" },
    { id: "metals", label: "Metals & By-products" },
    { id: "comparables", label: "Comparables" },
    { id: "disclaimers", label: "Disclaimers & Sources" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {dataRoom.projectName} - Data Room Admin
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Last updated: {formatDateDisplay(dataRoom.lastUpdated)}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
              <div className="relative group">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Export
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                  <button
                    onClick={() => {
                      if (dataRoom) {
                        const onePager = generateOnePager(dataRoom);
                        downloadMarkdown(
                          onePager,
                          `${dataRoom.projectSlug}-one-pager-${new Date().toISOString().split("T")[0]}.md`
                        );
                      }
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Generate One-Pager
                  </button>
                  <button
                    onClick={() => {
                      if (dataRoom) {
                        const fullReport = generateFullReport(dataRoom);
                        downloadMarkdown(
                          fullReport,
                          `${dataRoom.projectSlug}-full-report-${new Date().toISOString().split("T")[0]}.md`
                        );
                      }
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Generate Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
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
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && <OverviewTab dataRoom={dataRoom} isEditing={isEditing} />}
        {activeTab === "geology" && <GeologyTab dataRoom={dataRoom} isEditing={isEditing} />}
        {activeTab === "history" && <HistoryTab dataRoom={dataRoom} isEditing={isEditing} />}
        {activeTab === "funding" && <FundingTab dataRoom={dataRoom} isEditing={isEditing} />}
        {activeTab === "work-program" && (
          <WorkProgramTab dataRoom={dataRoom} isEditing={isEditing} />
        )}
        {activeTab === "economics" && <EconomicsTab dataRoom={dataRoom} isEditing={isEditing} />}
        {activeTab === "metals" && <MetalsTab dataRoom={dataRoom} isEditing={isEditing} />}
        {activeTab === "comparables" && (
          <ComparablesTab dataRoom={dataRoom} isEditing={isEditing} />
        )}
        {activeTab === "disclaimers" && (
          <DisclaimersTab dataRoom={dataRoom} isEditing={isEditing} />
        )}
      </div>
    </div>
  );
}

// Tab Components
function OverviewTab({ dataRoom, isEditing }: { dataRoom: IProjectDataRoom; isEditing: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Project Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
          {isEditing ? (
            <input
              type="text"
              defaultValue={dataRoom.projectName}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-900">{dataRoom.projectName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          {isEditing ? (
            <input
              type="text"
              defaultValue={dataRoom.companyName}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-900">{dataRoom.companyName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <p className="text-gray-900">{dataRoom.locationCountry}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Deposit Type</label>
          <p className="text-gray-900">{dataRoom.depositType}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
          <p className="text-gray-900">{dataRoom.projectType}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Commodities</label>
          <p className="text-gray-900">{dataRoom.commoditySet.join(", ")}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">License Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
            <p className="text-gray-900">{dataRoom.licenseInfo.licenseNumber || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">License Name</label>
            <p className="text-gray-900">{dataRoom.licenseInfo.licenseName || "N/A"}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
            <p className="text-gray-900">
              {dataRoom.licenseInfo.areaKm2 ? `${dataRoom.licenseInfo.areaKm2} km²` : "N/A"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Awarded Date</label>
            <p className="text-gray-900">
              {dataRoom.licenseInfo.awardedDate
                ? formatDateDisplay(dataRoom.licenseInfo.awardedDate)
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GeologyTab({ dataRoom }: { dataRoom: IProjectDataRoom; isEditing: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Geology & Deposit Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Deposit Type</label>
          <p className="text-gray-900">{dataRoom.depositType}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Commodity Set</label>
          <p className="text-gray-900">{dataRoom.commoditySet.join(", ")}</p>
        </div>
        {dataRoom.historicMinedTonnes && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Historic Mined Tonnes
            </label>
            <p className="text-gray-900">
              {dataRoom.historicMinedTonnes.value} {dataRoom.historicMinedTonnes.unit} (
              {dataRoom.historicMinedTonnes.confidenceTag},{" "}
              {dataRoom.historicMinedTonnes.complianceTag})
            </p>
            {dataRoom.historicMinedTonnes.description && (
              <p className="text-sm text-gray-600 mt-1">
                {dataRoom.historicMinedTonnes.description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function HistoryTab({ dataRoom }: { dataRoom: IProjectDataRoom; isEditing: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">History & Infrastructure</h2>
      <div className="space-y-4">
        {dataRoom.historicProductionPeriod && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Historic Production Period
            </label>
            <p className="text-gray-900">{dataRoom.historicProductionPeriod}</p>
          </div>
        )}
        {dataRoom.historicMinedTonnes && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Historic Production
            </label>
            <p className="text-gray-900">
              {dataRoom.historicMinedTonnes.value} {dataRoom.historicMinedTonnes.unit}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FundingTab({ dataRoom }: { dataRoom: IProjectDataRoom; isEditing: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Funding & Permitting</h2>
      <div className="space-y-6">
        {dataRoom.fundingPrograms.map((program) => (
          <div key={program.id} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">{program.programName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                <p className="text-gray-900">{program.organization}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stage</label>
                <p className="text-gray-900 capitalize">{program.stage}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Funding</label>
                <p className="text-gray-900">{program.maxFundingPercentage}%</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Funding Type</label>
                <p className="text-gray-900 capitalize">{program.fundingType}</p>
              </div>
            </div>
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <p className="text-gray-900">{program.description}</p>
            </div>
            {program.applicationStatus && (
              <div className="mt-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    program.applicationStatus === "approved"
                      ? "bg-green-100 text-green-800"
                      : program.applicationStatus === "applied"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {program.applicationStatus}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkProgramTab({ dataRoom }: { dataRoom: IProjectDataRoom; isEditing: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Work Program & Gates</h2>
      <div className="space-y-6">
        {dataRoom.developmentGates.map((gate) => (
          <div key={gate.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-lg">
                Gate {gate.gateNumber}: {gate.gateName}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  gate.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : gate.status === "in-progress"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                }`}
              >
                {gate.status}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Date</label>
                <p className="text-gray-900">{gate.targetDate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <p className="text-gray-900">{gate.description}</p>
              </div>
            </div>
            {gate.keyActions.length > 0 && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Key Actions</label>
                <ul className="list-disc list-inside space-y-1">
                  {gate.keyActions.map((action, idx) => (
                    <li key={idx} className="text-gray-900">
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {gate.deliverables.length > 0 && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Deliverables</label>
                <ul className="list-disc list-inside space-y-1">
                  {gate.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="text-gray-900">
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function EconomicsTab({ dataRoom }: { dataRoom: IProjectDataRoom; isEditing: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800 font-medium">
          ⚠️ All economics are conceptual and non-JORC compliant. Order-of-magnitude only; not NPVs,
          not recoverable value, and not economic forecasts.
        </p>
      </div>
      <h2 className="text-xl font-bold mb-4">Economics (Conceptual)</h2>
      <div className="space-y-6">
        {dataRoom.economics.remainingTonnesConceptual && (
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              {dataRoom.economics.remainingTonnesConceptual.label}
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {dataRoom.economics.remainingTonnesConceptual.value}{" "}
              {dataRoom.economics.remainingTonnesConceptual.unit}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {dataRoom.economics.remainingTonnesConceptual.complianceTag} |{" "}
              {dataRoom.economics.remainingTonnesConceptual.confidenceTag}
            </p>
          </div>
        )}
        {dataRoom.economics.inSituValuePerTonne && (
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{dataRoom.economics.inSituValuePerTonne.label}</h3>
            <p className="text-2xl font-bold text-gray-900">
              US${dataRoom.economics.inSituValuePerTonne.valueMin}–
              {dataRoom.economics.inSituValuePerTonne.valueMax} /
              {dataRoom.economics.inSituValuePerTonne.unit}
            </p>
          </div>
        )}
        {dataRoom.economics.NSRProxyPerTonne && (
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{dataRoom.economics.NSRProxyPerTonne.label}</h3>
            <p className="text-2xl font-bold text-gray-900">
              US${dataRoom.economics.NSRProxyPerTonne.valueMin}–
              {dataRoom.economics.NSRProxyPerTonne.valueMax} /
              {dataRoom.economics.NSRProxyPerTonne.unit}
            </p>
          </div>
        )}
        {dataRoom.economics.totalMineralisedSystemInSitu && (
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              {dataRoom.economics.totalMineralisedSystemInSitu.label}
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              US${dataRoom.economics.totalMineralisedSystemInSitu.valueMin}–
              {dataRoom.economics.totalMineralisedSystemInSitu.valueMax}{" "}
              {dataRoom.economics.totalMineralisedSystemInSitu.unit === "USD" ? "B" : ""}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function MetalsTab({ dataRoom }: { dataRoom: IProjectDataRoom; isEditing: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Metals & By-products</h2>
      <div className="space-y-4">
        {dataRoom.metalExposure.map((metal, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">{metal.metal}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {metal.containedMin !== undefined && metal.containedMax !== undefined && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contained</label>
                  <p className="text-gray-900">
                    {metal.containedMin}–{metal.containedMax} {metal.unit}
                  </p>
                </div>
              )}
              {metal.gradeMin !== undefined && metal.gradeMax !== undefined && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                  <p className="text-gray-900">
                    {metal.gradeMin}–{metal.gradeMax} {metal.gradeUnit}
                  </p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confidence</label>
                <p className="text-gray-900 capitalize">{metal.confidenceTag}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Compliance</label>
                <p className="text-gray-900">{metal.complianceTag}</p>
              </div>
            </div>
            {metal.notes && <p className="text-sm text-gray-600 mt-2">{metal.notes}</p>}
          </div>
        ))}
      </div>

      {dataRoom.goldContext && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Gold Context</h3>
          {dataRoom.goldContext.scenarios && (
            <div className="space-y-4">
              {dataRoom.goldContext.scenarios.map((scenario, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{scenario.scenario}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Sulphide Tonnage
                      </label>
                      <p className="text-gray-900">~{scenario.sulphideTonnageMt} Mt</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Au Grade
                      </label>
                      <p className="text-gray-900">{scenario.auGradeGt} g/t</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contained Au
                      </label>
                      <p className="text-gray-900">
                        {scenario.containedAu.value} {scenario.containedAu.unit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ComparablesTab({ dataRoom }: { dataRoom: IProjectDataRoom; isEditing: boolean }) {
  if (!dataRoom.comparables) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Comparables</h2>
      <p className="text-gray-700 mb-4">{dataRoom.comparables.description}</p>
      <div className="space-y-4">
        {dataRoom.comparables.assets.map((asset) => (
          <div key={asset.id} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">{asset.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <p className="text-gray-900">{asset.location}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maturity Stage
                </label>
                <p className="text-gray-900 capitalize">{asset.maturityStage}</p>
              </div>
            </div>
            {asset.notes && <p className="text-sm text-gray-600 mt-2">{asset.notes}</p>}
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 italic">{dataRoom.comparables.note}</p>
      </div>
    </div>
  );
}

function DisclaimersTab({ dataRoom }: { dataRoom: IProjectDataRoom; isEditing: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Disclaimers & Sources</h2>
      <div className="space-y-4 mb-8">
        {dataRoom.disclaimers.map((disclaimer) => (
          <div key={disclaimer.id} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{disclaimer.title}</h3>
            <p className="text-gray-700">{disclaimer.text}</p>
            {disclaimer.isRequired && (
              <span className="inline-block mt-2 px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                Required
              </span>
            )}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Source Documents</h3>
        <div className="space-y-4">
          {dataRoom.attachments.map((attachment) => (
            <div key={attachment.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{attachment.name}</h4>
                  {attachment.description && (
                    <p className="text-sm text-gray-600 mt-1">{attachment.description}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Uploaded: {formatDateDisplay(attachment.uploadedAt)}
                    {attachment.version && ` | Version: ${attachment.version}`}
                  </p>
                </div>
                <a
                  href={attachment.filePath}
                  download
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Download
                </a>
              </div>
              {attachment.isSourceDocument && (
                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  Source Document
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
