"use client";

import { Link } from "@/i18n/routing";
import Logo from "@/components/ui/Logo";
import NorChainLogo from "@/components/ui/NorChainLogo";
import { projects } from "@/content/projects";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("common.footer");

  const companyLinks = [
    { href: "/about", label: t("aboutUs") },
    { href: "/privacy", label: t("privacyPolicy") },
    { href: "/terms", label: t("termsOfService") },
  ];

  const projectLinks = [
    { href: "/projects", label: t("overview") },
    ...projects.map((project) => ({
      href: `/projects/${project.slug}`,
      label: project.name === "Skrattås-Byafossen" ? "Skrattåsen" : project.name,
    })),
  ];

  const resourcesLinks = [
    { href: "/partners", label: t("partners") },
    { href: "/contact", label: t("contact") },
    { href: "https://www.norchain.org/", label: "NorChain", external: true },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "var(--color-base-black)",
        color: "var(--color-text-on-dark)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.05] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{ background: "var(--color-accent-main)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{ background: "var(--color-primary-main)" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-accent-main) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-accent-main) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Logo and Description - Left Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p
              className="text-sm lg:text-base mb-6 leading-relaxed"
              style={{
                color: "color-mix(in srgb, var(--color-text-on-dark) 75%, transparent)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-base)",
              }}
            >
              {t("description")}
            </p>
            {/* Social Media Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group"
                style={{
                  background: "color-mix(in srgb, var(--color-text-on-dark) 10%, transparent)",
                  color: "var(--color-text-on-dark)",
                  border: `1px solid color-mix(in srgb, var(--color-text-on-dark) 20%, transparent)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-accent-main)";
                  e.currentTarget.style.background =
                    "color-mix(in srgb, var(--color-accent-main) 20%, transparent)";
                  e.currentTarget.style.borderColor = "var(--color-accent-main)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-on-dark)";
                  e.currentTarget.style.background =
                    "color-mix(in srgb, var(--color-text-on-dark) 10%, transparent)";
                  e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--color-text-on-dark) 20%, transparent)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
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
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group"
                style={{
                  background: "color-mix(in srgb, var(--color-text-on-dark) 10%, transparent)",
                  color: "var(--color-text-on-dark)",
                  border: `1px solid color-mix(in srgb, var(--color-text-on-dark) 20%, transparent)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-accent-main)";
                  e.currentTarget.style.background =
                    "color-mix(in srgb, var(--color-accent-main) 20%, transparent)";
                  e.currentTarget.style.borderColor = "var(--color-accent-main)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-on-dark)";
                  e.currentTarget.style.background =
                    "color-mix(in srgb, var(--color-text-on-dark) 10%, transparent)";
                  e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--color-text-on-dark) 20%, transparent)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
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
              style={{
                color: "var(--color-accent-main)",
                fontFamily: "var(--font-family-body)",
                fontWeight: "var(--font-weight-bold)",
              }}
            >
              {t("company").toUpperCase()}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={`company-${link.label}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-base transition-colors duration-200 group"
                    style={{
                      color: "color-mix(in srgb, var(--color-text-on-dark) 80%, transparent)",
                      fontFamily: "var(--font-family-body)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-accent-main)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "color-mix(in srgb, var(--color-text-on-dark) 80%, transparent)";
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
              style={{
                color: "var(--color-accent-main)",
                fontFamily: "var(--font-family-body)",
                fontWeight: "var(--font-weight-bold)",
              }}
            >
              {t("projects").toUpperCase()}
            </h3>
            <ul className="space-y-3">
              {projectLinks.map((link, index) => (
                <li key={`project-${link.label}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-base transition-colors duration-200 group"
                    style={{
                      color: "color-mix(in srgb, var(--color-text-on-dark) 80%, transparent)",
                      fontFamily: "var(--font-family-body)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-accent-main)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "color-mix(in srgb, var(--color-text-on-dark) 80%, transparent)";
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
              style={{
                color: "var(--color-accent-main)",
                fontFamily: "var(--font-family-body)",
                fontWeight: "var(--font-weight-bold)",
              }}
            >
              {t("resources").toUpperCase()}
            </h3>
            <ul className="space-y-3">
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
                      className="text-sm lg:text-base transition-colors duration-200"
                      style={{
                        color: "color-mix(in srgb, var(--color-text-on-dark) 80%, transparent)",
                        fontFamily: "var(--font-family-body)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--color-accent-main)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          "color-mix(in srgb, var(--color-text-on-dark) 80%, transparent)";
                      }}
                    >
                      {link.label}
                    </LinkComponent>
                    {link.external && (
                      <svg
                        className="w-3.5 h-3.5 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          color: "color-mix(in srgb, var(--color-text-on-dark) 50%, transparent)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--color-accent-main)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color =
                            "color-mix(in srgb, var(--color-text-on-dark) 50%, transparent)";
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
      </div>

      {/* NorChain Banner - Full Width */}
      <div
        className="border-t py-8 lg:py-10 relative w-full overflow-hidden"
        style={{
          background: "var(--color-bg-subtle)",
          borderColor: "color-mix(in srgb, var(--color-primary-main) 25%, transparent)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="flex items-center gap-6 lg:gap-8">
              {/* NorChain Logo */}
              <div className="flex-shrink-0">
                <NorChainLogo />
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 leading-tight"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: "var(--font-weight-bold)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {t("norchain.title")}
                </h3>
                <p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-family-body)",
                  }}
                >
                  {t("norchain.subtitle")}
                </p>
              </div>
            </div>
            <a
              href="https://www.norchain.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 flex-shrink-0"
              style={{
                background: "var(--color-primary-main)",
                color: "var(--color-text-on-dark)",
                fontFamily: "var(--font-family-body)",
                fontWeight: "var(--font-weight-semibold)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-accent-main)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-primary-main)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {t("norchain.visit")}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="border-t pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{
            borderColor: "color-mix(in srgb, var(--color-text-on-dark) 20%, transparent)",
          }}
        >
          <p
            style={{
              color: "color-mix(in srgb, var(--color-text-on-dark) 60%, transparent)",
              fontFamily: "var(--font-family-body)",
            }}
          >
            {t("copyright", { year: currentYear })} {t("allRightsReserved")}
          </p>
          <p
            style={{
              color: "color-mix(in srgb, var(--color-text-on-dark) 60%, transparent)",
              fontFamily: "var(--font-family-body)",
            }}
          >
            Developed by{" "}
            <a
              href="https://xala.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity inline-flex items-center gap-1.5"
              style={{
                color: "var(--color-accent-main)",
              }}
            >
              Xala Technologies
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </footer>
  );
}
