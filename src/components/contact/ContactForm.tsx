"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const subjects = [
  "Investment Inquiry",
  "Partnership Opportunity",
  "Project Information",
  "Media Inquiry",
  "General Inquiry",
  "Other",
];

export default function ContactForm() {
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

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold mb-2"
          style={{ color: "var(--color-navy-900)" }}
        >
          Full Name <span style={{ color: "var(--color-copper-600)" }}>*</span>
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
          className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
            errors.name ? "border-2 border-red-400" : ""
          }`}
          style={{
            background: focusedField === "name" ? "#f5f5f0" : "#fafaf5",
            border:
              focusedField === "name"
                ? "2px solid var(--color-copper-600)"
                : errors.name
                  ? "2px solid rgba(239, 68, 68, 0.6)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
            color: "var(--color-navy-900)",
            outline: "none",
          }}
          placeholder="John Doe"
          aria-required="true"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-500 mt-1.5"
            role="alert"
          >
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold mb-2"
          style={{ color: "var(--color-navy-900)" }}
        >
          Email <span style={{ color: "var(--color-copper-600)" }}>*</span>
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
          className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
            errors.email ? "border-2 border-red-400" : ""
          }`}
          style={{
            background: focusedField === "email" ? "#f5f5f0" : "#fafaf5",
            border:
              focusedField === "email"
                ? "2px solid var(--color-copper-600)"
                : errors.email
                  ? "2px solid rgba(239, 68, 68, 0.6)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
            color: "var(--color-navy-900)",
            outline: "none",
          }}
          placeholder="john@example.com"
          aria-required="true"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-500 mt-1.5"
            role="alert"
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold mb-2"
          style={{ color: "var(--color-navy-900)" }}
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          onFocus={() => setFocusedField("company")}
          onBlur={() => setFocusedField(null)}
          className="w-full px-4 py-3 rounded-lg transition-all duration-300"
          style={{
            background: focusedField === "company" ? "#f5f5f0" : "#fafaf5",
            border:
              focusedField === "company"
                ? "2px solid var(--color-copper-600)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            color: "var(--color-navy-900)",
            outline: "none",
          }}
          placeholder="Your Company"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold mb-2"
          style={{ color: "var(--color-navy-900)" }}
        >
          Subject <span style={{ color: "var(--color-copper-600)" }}>*</span>
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
            className={`w-full px-4 py-3 rounded-lg transition-all duration-300 appearance-none cursor-pointer pr-10 ${
              errors.subject ? "border-2 border-red-400" : ""
            }`}
            style={{
              background: focusedField === "subject" ? "#f5f5f0" : "#fafaf5",
              border:
                focusedField === "subject"
                  ? "2px solid var(--color-copper-600)"
                  : errors.subject
                    ? "2px solid rgba(239, 68, 68, 0.6)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
              color: formData.subject ? "var(--color-navy-900)" : "#999",
              outline: "none",
            }}
            aria-required="true"
          >
            <option value="" disabled style={{ color: "#999" }}>
              Select a subject
            </option>
            {subjects.map((subject) => (
              <option
                key={subject}
                value={subject}
                style={{ background: "white", color: "var(--color-navy-900)" }}
              >
                {subject}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{ color: "var(--color-gray-600)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-500 mt-1.5"
            role="alert"
          >
            {errors.subject}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold mb-2"
          style={{ color: "var(--color-navy-900)" }}
        >
          Message <span style={{ color: "var(--color-copper-600)" }}>*</span>
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
          className={`w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none ${
            errors.message ? "border-2 border-red-400" : ""
          }`}
          style={{
            background: focusedField === "message" ? "#f5f5f0" : "#fafaf5",
            border:
              focusedField === "message"
                ? "2px solid var(--color-copper-600)"
                : errors.message
                  ? "2px solid rgba(239, 68, 68, 0.6)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
            color: "var(--color-navy-900)",
            outline: "none",
          }}
          placeholder="How can we help you?"
          aria-required="true"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-500 mt-1.5"
            role="alert"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Status Messages */}
      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="p-4 rounded-lg border-2 flex items-start gap-3"
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              borderColor: "rgba(34, 197, 94, 0.3)",
              color: "#16a34a",
            }}
            role="alert"
          >
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold mb-1">Message Sent Successfully!</p>
              <p className="text-sm opacity-90">
                Thank you for contacting us. We&apos;ll get back to you within 24-48 hours.
              </p>
            </div>
          </motion.div>
        )}

        {status === "error" && Object.keys(errors).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="p-4 rounded-lg border-2 flex items-start gap-3"
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              borderColor: "rgba(239, 68, 68, 0.3)",
              color: "#dc2626",
            }}
            role="alert"
          >
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold mb-1">Please fix the errors below</p>
              <p className="text-sm opacity-90">
                Some required fields are missing or invalid. Please check and try again.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button and Required Note */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs" style={{ color: "var(--color-gray-500)" }}>
          <span style={{ color: "var(--color-copper-600)" }}>*</span> Required fields
        </p>
        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={status !== "submitting" ? { scale: 1.02, y: -2 } : {}}
          whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
          className="px-8 py-3.5 rounded-lg font-bold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group flex items-center gap-2"
          style={{
            background:
              status === "submitting"
                ? "rgba(182, 125, 66, 0.5)"
                : "linear-gradient(135deg, #d4a574 0%, #8b6f47 100%)",
            color: "white",
            boxShadow:
              status === "submitting"
                ? "0 4px 15px rgba(182, 125, 66, 0.2)"
                : "0 8px 25px rgba(182, 125, 66, 0.4)",
          }}
          aria-disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2 relative z-10">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              Sending...
            </span>
          ) : (
            <>
              <span className="relative z-10">Send Message</span>
              <svg
                className="w-5 h-5 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </>
          )}
        </motion.button>
      </div>
    </form>
  );
}
