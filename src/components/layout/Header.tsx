"use client";

import { Link } from "@/i18n/routing";
import { usePathname as useNextPathname } from "next/navigation";
import { useState, useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/content/projects";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  // All hooks must be called unconditionally at the top level in the same order
  const t = useTranslations("common.nav");
  const locale = useLocale();
  const nextPathname = useNextPathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Remove locale prefix from pathname for matching
  const pathname = useMemo(() => {
    if (!nextPathname) return "";
    // Remove locale prefix (e.g., /en/about -> /about, /no/about -> /about)
    const pathWithoutLocale = nextPathname.replace(/^\/(en|no)/, "") || "/";
    return pathWithoutLocale;
  }, [nextPathname]);

  // Compute derived values after hooks
  const navLinks = useMemo(
    () => [
      { href: "/about", label: t("about") },
      { href: "/investors", label: t("investors") },
      { href: "/contact", label: t("contact") },
    ],
    [t]
  );

  const accentColor = "var(--color-accent-main)";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle mobile menu: body scroll lock and escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      // Lock body scroll
      document.body.style.overflow = "hidden";

      // Handle escape key
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#90D5FF",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "none",
        borderBottom: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
      }}
    >
      <nav className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center h-full">
            <div className="flex items-center">
              <Logo className="text-white" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-2 py-3 text-lg font-semibold transition-all duration-300 group"
                  style={{
                    color: "#1E293B",
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Underline - Always visible for active, visible on hover */}
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{
                      background: "#1E293B",
                      opacity: isActive ? 1 : 0,
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              );
            })}

            {/* Projects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              {(() => {
                const isProjectsActive = pathname?.startsWith("/projects");
                return (
                  <button
                    type="button"
                    className="relative px-2 py-3 text-lg font-semibold transition-all duration-300 flex items-center gap-1.5 group"
                    style={{
                      color: "#1E293B",
                    }}
                    aria-expanded={projectsDropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                  >
                    <span className="relative z-10">{t("projects")}</span>
                    <motion.svg
                      className="w-4 h-4 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: projectsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                    {/* Underline - Always visible for active, visible on hover */}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{
                        background: "#1E293B",
                        opacity: isProjectsActive ? 1 : 0,
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </button>
                );
              })()}

              <AnimatePresence>
                {projectsDropdownOpen && (
                  <>
                    {/* Visual connector - small triangle/arrow pointing up */}
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-8 w-0 h-0 z-50"
                      style={{
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderBottom: "8px solid #90D5FF",
                        filter: "drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.1))",
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 w-80 py-2 z-50 overflow-hidden"
                      role="menu"
                      aria-orientation="vertical"
                      style={{
                        background: "#90D5FF",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                        borderTop: "none",
                        borderRadius: "0 0 8px 8px",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                        marginTop: "0",
                      }}
                    >
                      {/* Subtle background decoration */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div
                          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl"
                          style={{ background: "var(--color-accent-main)" }}
                        />
                      </div>

                      <div className="relative">
                        {/* Overview Link - More Prominent */}
                        <Link
                          href="/projects"
                          className="block px-6 py-3.5 text-base font-bold transition-all duration-200 group/overview relative"
                          style={{
                            color: "#1E293B",
                            background: "transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "color-mix(in srgb, var(--color-accent-main) 15%, transparent)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                          onClick={() => setProjectsDropdownOpen(false)}
                          role="menuitem"
                        >
                          <span className="flex items-center gap-2.5 relative z-10">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                            Overview
                          </span>
                          {/* Hover indicator */}
                          <div
                            className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover/overview:opacity-100 transition-opacity"
                            style={{ background: "var(--color-accent-main)" }}
                          />
                        </Link>

                        {/* Divider */}
                        <div
                          className="mx-6 my-2 h-px"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--color-accent-main) 30%, transparent) 50%, transparent 100%)",
                          }}
                        />

                        {/* Project Links */}
                        <div className="py-1">
                          {projects.map((project, idx) => {
                            const isActive = pathname === `/projects/${project.slug}`;
                            const isKillingdal = project.slug === "killingdal";
                            const projectName =
                              locale === "no" && project.name_no ? project.name_no : project.name;
                            return (
                              <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                              >
                                <Link
                                  href={`/projects/${project.slug}`}
                                  className="block px-6 py-3 text-base transition-all duration-200 group/item relative"
                                  style={{
                                    color:
                                      isKillingdal && isActive
                                        ? "white"
                                        : isActive
                                          ? "var(--color-accent-main)"
                                          : "#1E293B",
                                    background:
                                      isKillingdal && isActive
                                        ? "var(--color-accent-main)"
                                        : isActive
                                          ? "color-mix(in srgb, var(--color-accent-main) 10%, transparent)"
                                          : "transparent",
                                    fontFamily: "var(--font-family-body)",
                                    fontWeight: isActive ? 700 : undefined,
                                  }}
                                  onMouseEnter={(e) => {
                                    if (isKillingdal && isActive) {
                                      e.currentTarget.style.opacity = "0.9";
                                    } else {
                                      e.currentTarget.style.background =
                                        "color-mix(in srgb, var(--color-accent-main) 12%, transparent)";
                                      e.currentTarget.style.color = isActive
                                        ? "var(--color-accent-main)"
                                        : "#1E293B";
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = "1";
                                    if (isKillingdal && isActive) {
                                      e.currentTarget.style.background = "var(--color-accent-main)";
                                      e.currentTarget.style.color = "white";
                                    } else if (isActive) {
                                      e.currentTarget.style.background =
                                        "color-mix(in srgb, var(--color-accent-main) 10%, transparent)";
                                      e.currentTarget.style.color = "var(--color-accent-main)";
                                    } else {
                                      e.currentTarget.style.background = "transparent";
                                      e.currentTarget.style.color = "#1E293B";
                                    }
                                  }}
                                  onClick={() => setProjectsDropdownOpen(false)}
                                  role="menuitem"
                                >
                                  <span className="flex items-center justify-between relative z-10">
                                    <span>
                                      {projectName === "Skrattås-Byafossen"
                                        ? "Skrattåsen"
                                        : projectName}
                                    </span>
                                    {isActive && (
                                      <motion.svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5l7 7-7 7"
                                        />
                                      </motion.svg>
                                    )}
                                    {!isActive && (
                                      <motion.svg
                                        className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5l7 7-7 7"
                                        />
                                      </motion.svg>
                                    )}
                                  </span>
                                  {/* Hover indicator */}
                                  <div
                                    className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover/item:opacity-100 transition-opacity"
                                    style={{ background: "var(--color-accent-main)" }}
                                  />
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Language Switcher - Right Side */}
          <div className="hidden lg:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 cursor-pointer"
            style={{
              color: "#1E293B",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(223, 160, 68, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="block w-full h-0.5 rounded-full origin-center"
                style={{ background: "currentColor" }}
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                className="block w-full h-0.5 rounded-full origin-center"
                style={{ background: "currentColor" }}
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  x: mobileMenuOpen ? 10 : 0,
                }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                className="block w-full h-0.5 rounded-full origin-center"
                style={{ background: "currentColor" }}
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div
                  key="mobile-menu-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-md lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ zIndex: 9998 }}
                />
                <motion.div
                  key="mobile-menu-panel"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] lg:hidden overflow-y-auto flex flex-col"
                  style={{
                    background: "#90D5FF",
                    boxShadow: "-4px 0 32px rgba(0, 0, 0, 0.8)",
                    zIndex: 9999,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button - Top Right */}
                  <div className="flex justify-end p-6 pb-4 pt-8">
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 transition-opacity hover:opacity-70"
                      aria-label="Close menu"
                      type="button"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#1E293B" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 px-6 pb-6">
                    <nav className="space-y-0">
                      {/* Home */}
                      <div>
                        <Link
                          href="/"
                          className="block py-4 text-base font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
                          style={{
                            color: pathname === "/" ? accentColor : "#1E293B",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: pathname === "/" ? "2px" : "1px",
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t("home").toUpperCase()}
                        </Link>
                        <div
                          className="h-px my-2"
                          style={{ background: "rgba(255, 255, 255, 0.2)" }}
                        />
                      </div>

                      {/* About */}
                      <div>
                        <Link
                          href="/about"
                          className="block py-4 text-base font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
                          style={{
                            color: pathname === "/about" ? accentColor : "#1E293B",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: pathname === "/about" ? "2px" : "1px",
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t("about").toUpperCase()}
                        </Link>
                        <div
                          className="h-px my-2"
                          style={{ background: "rgba(255, 255, 255, 0.2)" }}
                        />
                      </div>

                      {/* Investors */}
                      <div>
                        <Link
                          href="/investors"
                          className="block py-4 text-base font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
                          style={{
                            color: pathname === "/investors" ? accentColor : "#1E293B",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: pathname === "/investors" ? "2px" : "1px",
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t("investors").toUpperCase()}
                        </Link>
                        <div
                          className="h-px my-2"
                          style={{ background: "rgba(255, 255, 255, 0.2)" }}
                        />
                      </div>

                      {/* Projects Section with Dropdown */}
                      <div>
                        {(() => {
                          const isProjectsActive = pathname?.startsWith("/projects");
                          return (
                            <button
                              type="button"
                              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                              className="w-full flex items-center justify-between py-4 text-base font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
                              style={{
                                color: isProjectsActive ? accentColor : "#1E293B",
                                textDecoration: "underline",
                                textUnderlineOffset: "4px",
                                textDecorationThickness: isProjectsActive ? "2px" : "1px",
                              }}
                            >
                              <span>{t("projects").toUpperCase()}</span>
                              <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ rotate: mobileProjectsOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </motion.svg>
                            </button>
                          );
                        })()}

                        <AnimatePresence>
                          {mobileProjectsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-2 space-y-3">
                                <Link
                                  href="/projects"
                                  className="block text-sm font-medium transition-opacity hover:opacity-70"
                                  style={{
                                    color: pathname === "/projects" ? accentColor : "#1E293B",
                                  }}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  Overview
                                </Link>
                                {projects.map((project) => (
                                  <Link
                                    key={project.slug}
                                    href={`/projects/${project.slug}`}
                                    className="block text-sm font-medium transition-opacity hover:opacity-70"
                                    style={{
                                      color:
                                        pathname === `/projects/${project.slug}`
                                          ? accentColor
                                          : "#1E293B",
                                    }}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {project.name === "Skrattås-Byafossen"
                                      ? "Skrattåsen"
                                      : project.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div
                          className="h-px my-2"
                          style={{ background: "rgba(255, 255, 255, 0.2)" }}
                        />
                      </div>

                      {/* Contact */}
                      <div>
                        <Link
                          href="/contact"
                          className="block py-4 text-base font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
                          style={{
                            color: pathname === "/contact" ? accentColor : "#1E293B",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: pathname === "/contact" ? "2px" : "1px",
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t("contact").toUpperCase()}
                        </Link>
                      </div>
                    </nav>
                  </div>

                  {/* Language Switcher */}
                  <div
                    className="px-6 pt-6 pb-4 border-t"
                    style={{ borderColor: "color-mix(in srgb, #1E293B 15%, transparent)" }}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-3"
                      style={{ color: "#1E293B", opacity: 0.6 }}
                    >
                      {t("language")}
                    </p>
                    <LanguageSwitcher />
                  </div>

                  {/* Copyright Footer */}
                  <div
                    className="px-6 py-6 border-t"
                    style={{ borderColor: "color-mix(in srgb, #1E293B 15%, transparent)" }}
                  >
                    <p className="text-xs" style={{ color: "#1E293B" }}>
                      © {new Date().getFullYear()} NORVEGE MINERALS AS
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
