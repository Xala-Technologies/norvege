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

const NAVY = "#1B2A4A";

export default function Header() {
  const t = useTranslations("common.nav");
  const locale = useLocale();
  const nextPathname = useNextPathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = useMemo(() => {
    if (!nextPathname) return "";
    return nextPathname.replace(/^\/(en|no)/, "") || "/";
  }, [nextPathname]);

  const navLinks = useMemo(
    () => [
      { href: "/", label: t("home") },
      { href: "/strategy", label: t("strategy") },
    ],
    [t]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") setMobileMenuOpen(false);
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
        background: "rgba(255, 255, 255, 0.97)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
        borderBottom: "1px solid rgba(27, 42, 74, 0.08)",
      }}
    >
      <nav className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center h-full">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 h-full">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-[15px] font-medium tracking-wide uppercase transition-colors duration-200"
                  style={{ color: isActive ? NAVY : "rgba(27, 42, 74, 0.7)" }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ background: NAVY }}
                    />
                  )}
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
                    className="relative py-2 text-[15px] font-medium tracking-wide uppercase transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
                    style={{ color: isProjectsActive ? NAVY : "rgba(27, 42, 74, 0.7)" }}
                    aria-expanded={projectsDropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                  >
                    {t("projects")}
                    <motion.svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: projectsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                    {isProjectsActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        style={{ background: NAVY }}
                      />
                    )}
                  </button>
                );
              })()}

              <AnimatePresence>
                {projectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 w-64 mt-2 py-2 rounded-md z-50"
                    role="menu"
                    style={{
                      background: "white",
                      border: "1px solid rgba(27, 42, 74, 0.1)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    {[...projects]
                      .sort((a, b) =>
                        a.slug === "killingdal" ? -1 : b.slug === "killingdal" ? 1 : 0
                      )
                      .map((project) => {
                        const projectName =
                          locale === "no" && project.name_no ? project.name_no : project.name;
                        const isKillingdal = project.slug === "killingdal";
                        const isActive = pathname === `/projects/${project.slug}`;

                        if (isKillingdal) {
                          return (
                            <Link
                              key={project.slug}
                              href={`/projects/${project.slug}`}
                              className="block px-5 py-2.5 text-sm transition-colors hover:bg-gray-50"
                              style={{
                                color: isActive ? NAVY : "rgba(27, 42, 74, 0.7)",
                                fontWeight: isActive ? 600 : 400,
                              }}
                              onClick={() => setProjectsDropdownOpen(false)}
                              role="menuitem"
                            >
                              {projectName}
                            </Link>
                          );
                        }

                        return (
                          <span
                            key={project.slug}
                            className="flex items-center justify-between px-5 py-2.5 text-sm"
                            style={{ color: "rgba(27, 42, 74, 0.35)" }}
                            role="menuitem"
                            aria-disabled="true"
                          >
                            {projectName}
                            <span
                              className="text-[10px] uppercase tracking-wider font-medium"
                              style={{ color: "rgba(27, 42, 74, 0.25)" }}
                            >
                              Coming soon
                            </span>
                          </span>
                        );
                      })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="relative py-2 text-[15px] font-medium tracking-wide uppercase transition-colors duration-200"
              style={{ color: pathname === "/contact" ? NAVY : "rgba(27, 42, 74, 0.7)" }}
            >
              {t("contact")}
              {pathname === "/contact" && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: NAVY }}
                />
              )}
            </Link>

            <LanguageSwitcher />
          </div>

          {/* Mobile: Language Switcher + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher variant="dropdown" />
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50 flex flex-col items-center justify-center w-10 h-10 rounded-md transition-all duration-200 cursor-pointer"
              style={{ color: NAVY }}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="block w-full h-[1.5px] rounded-full origin-center"
                  style={{ background: "currentColor" }}
                  animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block w-full h-[1.5px] rounded-full origin-center"
                  style={{ background: "currentColor" }}
                  animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="block w-full h-[1.5px] rounded-full origin-center"
                  style={{ background: "currentColor" }}
                  animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
                  transition={{ duration: 0.25 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div
                  key="mobile-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ zIndex: 9998 }}
                />
                <motion.div
                  key="mobile-panel"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] lg:hidden overflow-y-auto flex flex-col"
                  style={{
                    background: "white",
                    boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.1)",
                    zIndex: 9999,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-end p-5">
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-md transition-colors hover:bg-gray-100"
                      aria-label="Close menu"
                      type="button"
                    >
                      <svg className="w-5 h-5" fill="none" stroke={NAVY} viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1 px-6 pb-6">
                    <nav className="space-y-1">
                      {[
                        { href: "/", label: t("home") },
                        { href: "/strategy", label: t("strategy") },
                      ].map((link) => {
                        const isActive =
                          link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block py-3 text-[15px] font-medium uppercase tracking-wider transition-colors"
                            style={{ color: isActive ? NAVY : "rgba(27, 42, 74, 0.6)" }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        );
                      })}

                      {/* Projects with expandable sub-items */}
                      <div>
                        <button
                          type="button"
                          onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                          className="w-full flex items-center justify-between py-3 text-[15px] font-medium uppercase tracking-wider transition-colors cursor-pointer"
                          style={{
                            color: pathname?.startsWith("/projects")
                              ? NAVY
                              : "rgba(27, 42, 74, 0.6)",
                          }}
                        >
                          <span>{t("projects")}</span>
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

                        <AnimatePresence>
                          {mobileProjectsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-2 space-y-2">
                                {projects.map((project) => {
                                  const isKillingdal = project.slug === "killingdal";

                                  if (isKillingdal) {
                                    return (
                                      <Link
                                        key={project.slug}
                                        href={`/projects/${project.slug}`}
                                        className="block py-1.5 text-sm transition-colors"
                                        style={{
                                          color:
                                            pathname === `/projects/${project.slug}`
                                              ? NAVY
                                              : "rgba(27, 42, 74, 0.6)",
                                        }}
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {project.name}
                                      </Link>
                                    );
                                  }

                                  return (
                                    <span
                                      key={project.slug}
                                      className="flex items-center justify-between py-1.5 text-sm"
                                      style={{ color: "rgba(27, 42, 74, 0.3)" }}
                                    >
                                      {project.name}
                                      <span
                                        className="text-[10px] uppercase tracking-wider"
                                        style={{ color: "rgba(27, 42, 74, 0.2)" }}
                                      >
                                        Soon
                                      </span>
                                    </span>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <Link
                        href="/contact"
                        className="block py-3 text-[15px] font-medium uppercase tracking-wider transition-colors"
                        style={{ color: pathname === "/contact" ? NAVY : "rgba(27, 42, 74, 0.6)" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t("contact")}
                      </Link>
                    </nav>
                  </div>

                  <div
                    className="px-6 py-5 border-t"
                    style={{ borderColor: "rgba(27, 42, 74, 0.08)" }}
                  >
                    <p className="text-xs" style={{ color: "rgba(27, 42, 74, 0.5)" }}>
                      &copy; {new Date().getFullYear()} NORVEGEN GROUP
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
