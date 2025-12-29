"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/content/projects";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/investors", label: "Investors" },
    { href: "/contact", label: "Contact" },
  ];

  const accentColor = "var(--color-accent-main)";
  const navyColor = "var(--color-primary-main)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: `${navyColor}`,
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
          <div className="hidden lg:flex items-center space-x-1 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-2.5 text-lg font-semibold transition-all duration-300 rounded-lg group"
                  style={{
                    color: "var(--color-text-on-dark)",
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Active state background */}
                  <motion.span
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: isActive
                        ? `color-mix(in srgb, var(--color-accent-main) 15%, transparent)`
                        : `transparent`,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Hover state background */}
                  <motion.span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                    style={{
                      background: `color-mix(in srgb, var(--color-accent-main) 15%, transparent)`,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Blue border glow on hover or active */}
                  <motion.span
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      border: `2px solid var(--color-primary-main)`,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      border: `2px solid var(--color-primary-main)`,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Active underline */}
                  <motion.span
                    className="absolute bottom-1 left-1/2 h-0.5"
                    style={{
                      transform: "translateX(-50%)",
                      background: accentColor,
                      width: isActive ? "75%" : "0",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Hover underline */}
                  <motion.span
                    className="absolute bottom-1 left-1/2 h-0.5 w-0 group-hover:w-3/4"
                    style={{
                      transform: "translateX(-50%)",
                      background: accentColor,
                    }}
                    transition={{ duration: 0.3 }}
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
                    className="relative px-5 py-2.5 text-lg font-semibold transition-all duration-300 rounded-lg flex items-center gap-1.5 group"
                    style={{
                      color: "var(--color-text-on-dark)",
                    }}
                    aria-expanded={projectsDropdownOpen ? "true" : "false"}
                    aria-haspopup="true"
                    onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                  >
                    <span className="relative z-10">Projects</span>
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
                    {/* Active state background */}
                    <motion.span
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: isProjectsActive
                          ? `color-mix(in srgb, var(--color-accent-main) 15%, transparent)`
                          : `transparent`,
                        opacity: isProjectsActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    {/* Hover state background */}
                    <motion.span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                      style={{
                        background: `color-mix(in srgb, var(--color-accent-main) 15%, transparent)`,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    {/* Blue border glow on active or hover */}
                    <motion.span
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        border: `2px solid var(--color-primary-main)`,
                        opacity: isProjectsActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        border: `2px solid var(--color-primary-main)`,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    {/* Active underline */}
                    <motion.span
                      className="absolute bottom-1 left-1/2 h-0.5"
                      style={{
                        transform: "translateX(-50%)",
                        background: accentColor,
                        width: isProjectsActive ? "75%" : "0",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Hover underline */}
                    <motion.span
                      className="absolute bottom-1 left-1/2 h-0.5 w-0 group-hover:w-3/4"
                      style={{
                        transform: "translateX(-50%)",
                        background: accentColor,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                );
              })()}

              <AnimatePresence>
                {projectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 mt-1 w-80 shadow-2xl py-2 z-50 overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    style={{
                      background: `${navyColor}`,
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                      borderRadius: "0",
                      boxShadow:
                        "0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px color-mix(in srgb, var(--color-accent-main) 20%, transparent)",
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
                        className="block px-6 py-3.5 text-sm font-bold transition-all duration-200 group/overview relative"
                        style={{
                          color: "var(--color-accent-main)",
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
                        {projects.map((project, idx) => (
                          <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                          >
                            <Link
                              href={`/projects/${project.slug}`}
                              className="block px-6 py-3 text-sm transition-all duration-200 group/item relative"
                              style={{
                                color: "var(--color-gray-100)",
                                background: "transparent",
                                fontFamily: "var(--font-family-body)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background =
                                  "color-mix(in srgb, var(--color-accent-main) 12%, transparent)";
                                e.currentTarget.style.color = "var(--color-gray-50)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "var(--color-gray-100)";
                              }}
                              onClick={() => setProjectsDropdownOpen(false)}
                              role="menuitem"
                            >
                              <span className="flex items-center justify-between relative z-10">
                                <span className="flex items-center gap-3">
                                  {/* Project indicator dot */}
                                  <span
                                    className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                                    style={{
                                      background: "var(--color-accent-main)",
                                      opacity: 0.5,
                                    }}
                                  />
                                  {project.name === "Skrattås-Byafossen"
                                    ? "Skrattåsen"
                                    : project.name}
                                </span>
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
                              </span>
                              {/* Hover indicator */}
                              <div
                                className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover/item:opacity-100 transition-opacity"
                                style={{ background: "var(--color-accent-main)" }}
                              />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
              color: "var(--color-gray-50)",
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
                    background: `${navyColor}`,
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
                        style={{ color: "var(--color-gray-50)" }}
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
                            color: pathname === "/" ? accentColor : "var(--color-gray-50)",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: pathname === "/" ? "2px" : "1px",
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          HOME
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
                            color: pathname === "/about" ? accentColor : "var(--color-gray-50)",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: pathname === "/about" ? "2px" : "1px",
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          ABOUT
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
                            color: pathname === "/investors" ? accentColor : "var(--color-gray-50)",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: pathname === "/investors" ? "2px" : "1px",
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          INVESTORS
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
                                color: isProjectsActive ? accentColor : "var(--color-gray-50)",
                                textDecoration: "underline",
                                textUnderlineOffset: "4px",
                                textDecorationThickness: isProjectsActive ? "2px" : "1px",
                              }}
                            >
                              <span>PROJECTS</span>
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
                                    color:
                                      pathname === "/projects"
                                        ? accentColor
                                        : "rgba(255, 255, 255, 0.8)",
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
                                          : "rgba(255, 255, 255, 0.8)",
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
                            color: pathname === "/contact" ? accentColor : "var(--color-gray-50)",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: pathname === "/contact" ? "2px" : "1px",
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          CONTACT
                        </Link>
                      </div>
                    </nav>
                  </div>

                  {/* Copyright Footer */}
                  <div
                    className="px-6 py-6 border-t"
                    style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <p className="text-xs" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
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
