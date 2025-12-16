"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/content/projects";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/investors", label: "Investors" },
    { href: "/contact", label: "Contact" },
  ];

  const goldAccent = "#d4a574"; // Gold/Copper color

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(10, 22, 40, 0.98) 0%, rgba(15, 23, 42, 0.95) 100%)"
          : "linear-gradient(180deg, rgba(10, 22, 40, 0.95) 0%, rgba(15, 23, 42, 0.92) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 165, 116, 0.1)"
          : "0 2px 12px rgba(0, 0, 0, 0.2)",
        borderBottom: `1px solid ${scrolled ? "rgba(212, 165, 116, 0.2)" : "rgba(212, 165, 116, 0.1)"}`,
      }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(255, 255, 255, 0.05) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 40px 40px",
          opacity: 0.3,
        }}
      />
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Logo showTagline={true} className="!text-white" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2.5 text-base font-semibold transition-all duration-300 rounded-lg group"
                style={{ color: "var(--color-sand-50)" }}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                  style={{ background: `rgba(212, 165, 116, 0.15)` }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute bottom-1 left-1/2 h-0.5 w-0 group-hover:w-3/4"
                  style={{
                    transform: "translateX(-50%)",
                    background: goldAccent,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}

            {/* Projects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="relative px-5 py-2.5 text-base font-semibold transition-all duration-300 rounded-lg flex items-center gap-1.5 group"
                style={{ color: "var(--color-sand-50)" }}
                aria-expanded={projectsDropdownOpen}
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
                <motion.span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                  style={{ background: `rgba(212, 165, 116, 0.15)` }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute bottom-1 left-1/2 h-0.5 w-0 group-hover:w-3/4"
                  style={{
                    transform: "translateX(-50%)",
                    background: goldAccent,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>

              <AnimatePresence>
                {projectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 mt-3 w-72 rounded-xl shadow-2xl py-2 z-50 overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10, 22, 40, 0.98) 0%, rgba(15, 23, 42, 0.95) 100%)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: `1px solid rgba(212, 165, 116, 0.2)`,
                      boxShadow:
                        "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 165, 116, 0.1)",
                    }}
                  >
                    <div className="relative">
                      <Link
                        href="/projects"
                        className="block px-5 py-3 text-sm font-semibold transition-all duration-200 hover:pl-6"
                        style={{
                          color: "var(--color-sand-50)",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(212, 165, 116, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                        onClick={() => setProjectsDropdownOpen(false)}
                        role="menuitem"
                      >
                        Overview
                      </Link>
                      <div
                        className="border-t my-1"
                        style={{ borderColor: "rgba(212, 165, 116, 0.2)" }}
                      />
                      {projects.map((project, idx) => (
                        <motion.div
                          key={project.slug}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={`/projects/${project.slug}`}
                            className="block px-5 py-2.5 text-sm transition-all duration-200 hover:pl-6 group"
                            style={{
                              color: "var(--color-sand-100)",
                              background: "transparent",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(212, 165, 116,0.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                            }}
                            onClick={() => setProjectsDropdownOpen(false)}
                            role="menuitem"
                          >
                            <span className="flex items-center gap-2">
                              {project.name === "Skrattås-Byafossen" ? "Skrattåsen" : project.name}
                              <motion.svg
                                className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
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
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg transition-colors relative z-50"
            style={{
              color: "var(--color-sand-50)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(212, 165, 116, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-24 right-0 bottom-0 w-80 backdrop-blur-xl shadow-2xl z-40 lg:hidden overflow-y-auto"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10, 22, 40, 0.98) 0%, rgba(15, 23, 42, 0.95) 100%)",
                borderLeft: `1px solid rgba(212, 165, 116, 0.2)`,
                boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="p-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-200"
                      style={{
                        color: "var(--color-sand-50)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(212, 165, 116, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Projects Section */}
                <div className="pt-2">
                  <Link
                    href="/projects"
                    className="block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-200"
                    style={{
                      color: "var(--color-sand-50)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(212, 165, 116, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/projects"
                      className="block py-2 px-4 text-sm rounded-lg transition-all duration-200"
                      style={{
                        color: "var(--color-sand-200)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(212, 165, 116, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Overview
                    </Link>
                    {projects.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="block py-2 px-4 text-sm rounded-lg transition-all duration-200"
                        style={{
                          color: "var(--color-sand-200)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(212, 165, 116, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {project.name === "Skrattås-Byafossen" ? "Skrattåsen" : project.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
