"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const NAVY = "#1B2A4A";
const GOLD = "#e3a142";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const subjects = [
    t("subjects.investmentInquiry"),
    t("subjects.partnershipOpportunity"),
    t("subjects.projectInformation"),
    t("subjects.mediaInquiry"),
    t("subjects.generalInquiry"),
    t("subjects.other"),
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t("errors.nameRequired");
    if (!formData.email.trim()) newErrors.email = t("errors.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errors.emailInvalid");
    }
    if (!formData.subject.trim()) newErrors.subject = t("errors.subjectRequired");
    if (!formData.message.trim()) newErrors.message = t("errors.messageRequired");

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  if (!mounted) return null;

  const inputBaseClass = "w-full px-4 py-3.5 rounded-md text-base transition-all duration-200";

  const inputStyle = (field: string) => ({
    background: focusedField === field ? "white" : "rgba(27, 42, 74, 0.02)",
    border: errors[field]
      ? "2px solid #dc2626"
      : focusedField === field
        ? `2px solid ${GOLD}`
        : "1px solid rgba(27, 42, 74, 0.1)",
    color: NAVY,
    outline: "none",
    boxShadow: focusedField === field ? `0 0 0 3px rgba(227, 161, 66, 0.1)` : "none",
  });

  return (
    <div
      className="p-8 lg:p-10 rounded-lg"
      style={{
        background: "white",
        border: "1px solid rgba(27, 42, 74, 0.08)",
        boxShadow: "0 1px 3px rgba(27, 42, 74, 0.04), 0 8px 32px rgba(27, 42, 74, 0.06)",
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2"
              style={{ color: NAVY }}
            >
              {t("fullName")} <span style={{ color: GOLD }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className={inputBaseClass}
              style={inputStyle("name")}
              placeholder={t("placeholders.fullName")}
              aria-required="true"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p
                className="text-xs mt-1.5 flex items-center gap-1"
                style={{ color: "#dc2626" }}
                role="alert"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2"
              style={{ color: NAVY }}
            >
              {t("email")} <span style={{ color: GOLD }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={inputBaseClass}
              style={inputStyle("email")}
              placeholder={t("placeholders.email")}
              aria-required="true"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p
                className="text-xs mt-1.5 flex items-center gap-1"
                style={{ color: "#dc2626" }}
                role="alert"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Company + Subject row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold mb-2"
              style={{ color: NAVY }}
            >
              {t("company")}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
              className={inputBaseClass}
              style={inputStyle("company")}
              placeholder={t("placeholders.company")}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-2"
              style={{ color: NAVY }}
            >
              {t("subject")} <span style={{ color: GOLD }}>*</span>
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className={`${inputBaseClass} appearance-none cursor-pointer pr-10`}
                style={{
                  ...inputStyle("subject"),
                  color: formData.subject ? NAVY : "rgba(27, 42, 74, 0.35)",
                }}
                aria-required="true"
              >
                <option value="" disabled>
                  {t("selectSubject")}
                </option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: NAVY }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.subject && (
              <p
                className="text-xs mt-1.5 flex items-center gap-1"
                style={{ color: "#dc2626" }}
                role="alert"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.subject}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold mb-2"
            style={{ color: NAVY }}
          >
            {t("message")} <span style={{ color: GOLD }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className={`${inputBaseClass} resize-none`}
            style={inputStyle("message")}
            placeholder={t("placeholders.message")}
            aria-required="true"
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p
              className="text-xs mt-1.5 flex items-center gap-1"
              style={{ color: "#dc2626" }}
              role="alert"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.message}
            </p>
          )}
        </div>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="p-5 rounded-md flex items-start gap-3"
              style={{
                background: "rgba(22, 163, 74, 0.06)",
                border: "1px solid rgba(22, 163, 74, 0.15)",
                color: "#16a34a",
              }}
              role="alert"
            >
              <svg className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold mb-0.5">{t("success.title")}</p>
                <p className="text-sm opacity-80">{t("success.description")}</p>
              </div>
            </motion.div>
          )}

          {status === "error" && Object.keys(errors).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="p-5 rounded-md flex items-start gap-3"
              style={{
                background: "rgba(220, 38, 38, 0.04)",
                border: "1px solid rgba(220, 38, 38, 0.12)",
                color: "#dc2626",
              }}
              role="alert"
            >
              <svg className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold mb-0.5">{t("error.title")}</p>
                <p className="text-sm opacity-80">{t("error.description")}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Divider */}
        <div className="w-full h-px" style={{ background: "rgba(27, 42, 74, 0.06)" }} />

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "rgba(27, 42, 74, 0.45)" }}>
            <span style={{ color: GOLD }}>*</span> {t("requiredFields")}
          </p>
          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileHover={status !== "submitting" ? { y: -2 } : {}}
            whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
            className="px-8 py-3.5 rounded-md text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2.5 w-full sm:w-auto justify-center"
            style={{
              background: NAVY,
              color: "white",
              boxShadow: "0 2px 8px rgba(27, 42, 74, 0.2)",
            }}
            aria-disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                {t("sending")}
              </span>
            ) : (
              <>
                <span>{t("sendMessage")}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
