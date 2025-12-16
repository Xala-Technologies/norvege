"use client";

import Link from "next/link";
import { companyInfo } from "@/content/company";
import Logo from "@/components/ui/Logo";
import { projects } from "@/content/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const goldAccent = "#d4a574"; // Rich gold/copper color matching brand

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/about#team", label: "Our Team" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  const projectLinks = [
    { href: "/projects", label: "Overview" },
    ...projects.map((project) => ({
      href: `/projects/${project.slug}`,
      label: project.name === "Skrattås-Byafossen" ? "Skrattåsen" : project.name,
    })),
  ];

  const resourcesLinks = [
    { href: "/report-archive", label: "Report Archive" },
    { href: "/vdr", label: "Virtual Data Room (VDR)" },
    { href: "/laboratories", label: "Laboratories" },
    { href: "/exploration-specialists", label: "Exploration Specialists" },
    { href: "/partners", label: "Partners" },
    { href: "/news", label: "News & Updates" },
    { href: "/contact", label: "Contact" },
    { href: "https://www.norchain.org/", label: "NorChain", external: true },
  ];

  return (
    <footer className="bg-[var(--color-navy-900)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description - Left Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Norwegian exploration company focused on sustainable mineral development in the
              Trøndelag region.
            </p>
            {/* Social Media Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COMPANY Column */}
          <div>
            <h3
              className="text-sm font-bold mb-4 uppercase tracking-wider"
              style={{ color: goldAccent }}
            >
              COMPANY
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={`company-${link.label}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:transition-colors"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = goldAccent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROJECTS Column */}
          <div>
            <h3
              className="text-sm font-bold mb-4 uppercase tracking-wider"
              style={{ color: goldAccent }}
            >
              PROJECTS
            </h3>
            <ul className="space-y-2">
              {projectLinks.map((link, index) => (
                <li key={`project-${link.label}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:transition-colors"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = goldAccent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES Column */}
          <div>
            <h3
              className="text-sm font-bold mb-4 uppercase tracking-wider"
              style={{ color: goldAccent }}
            >
              RESOURCES
            </h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => {
                const LinkComponent = link.external ? "a" : Link;
                const linkProps = link.external
                  ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
                  : { href: link.href };
                return (
                  <li
                    key={`resource-${link.label}-${index}`}
                    className="flex items-center gap-1.5 group"
                  >
                    <LinkComponent
                      {...linkProps}
                      className="text-sm transition-colors duration-200 group-hover:transition-colors"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = goldAccent;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                      }}
                    >
                      {link.label}
                    </LinkComponent>
                    {link.external && (
                      <svg
                        className="w-3 h-3 transition-colors duration-200 group-hover:transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          color: "rgba(255, 255, 255, 0.5)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = goldAccent;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} {companyInfo.legalName || "Norvege Minerals AS"}. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://xala.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity inline-flex items-center gap-1"
            >
              Xala Technologies
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>

      {/* NorChain Banner */}
      <div className="border-t border-gray-700 py-6" style={{ background: "var(--color-sand-50)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* NorChain Logo */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <span className="text-2xl font-bold text-white">N</span>
                </div>
              </div>
              <div>
                <p
                  className="text-base font-semibold mb-1"
                  style={{ color: "var(--color-navy-900)" }}
                >
                  Assets Tokenized on NorChain
                </p>
                <p className="text-sm" style={{ color: "var(--color-gray-600)" }}>
                  The Complete Blockchain Operating System
                </p>
              </div>
            </div>
            <a
              href="https://www.norchain.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:opacity-80 transition-opacity inline-flex items-center gap-1.5"
              style={{ color: "var(--color-navy-900)" }}
            >
              Visit NorChain
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
