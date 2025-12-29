"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/content/company";
import ContactForm from "@/components/contact/ContactForm";

// Custom Icons
const BuildingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const MapPinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const EmailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const contactCards = [
  {
    icon: BuildingIcon,
    label: "COMPANY",
    title: companyInfo.legalName || "NORVEGE MINERALS AS",
    subtitle: companyInfo.orgNumber
      ? `Org.nr: ${companyInfo.orgNumber}`
      : "Org.nr: [Company Number]",
  },
  {
    icon: MapPinIcon,
    label: "ADDRESS",
    title: companyInfo.address.street || "Ølvegata 18B",
    subtitle:
      `${companyInfo.address.postalCode || ""} ${companyInfo.address.city}, ${companyInfo.address.country}`.trim(),
  },
  {
    icon: EmailIcon,
    label: "EMAIL",
    title: companyInfo.contact.email,
    subtitle: "",
  },
  {
    icon: ClockIcon,
    label: "RESPONSE TIME",
    title: "Within 24-48 hours",
    subtitle: "Monday - Friday",
  },
];

export default function ContactStrip() {
  // Google Maps embed URL - Update with actual coordinates
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.500000000004!2d10.752245399999999!3d59.9138688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e85!2sOslo%2C%20Norway!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`;

  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background: "var(--color-bg-dark)",
      }}
    >
      {/* Separator Line - Top Border */}
      <div className="absolute top-0 left-0 right-0 z-20">
        {/* Main gradient line */}
        <div
          className="h-[2px] w-full"
          style={{
            background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--color-accent-main) 40%, transparent) 15%, var(--color-accent-main) 50%, color-mix(in srgb, var(--color-accent-main) 40%, transparent) 85%, transparent 100%)`,
          }}
        />
        {/* Subtle glow effect */}
        <div
          className="h-[1px] w-full mt-[-1px]"
          style={{
            background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--color-accent-main) 60%, transparent) 20%, var(--color-accent-main) 50%, color-mix(in srgb, var(--color-accent-main) 60%, transparent) 80%, transparent 100%)`,
            boxShadow: "none",
          }}
        />
      </div>

      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "var(--color-accent-main)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "var(--color-primary-main)" }}
        />
      </div>

      {/* Dark speckled/night sky background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.12) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(255, 255, 255, 0.08) 1px, transparent 0),
            radial-gradient(circle at 5px 5px, rgba(255, 255, 255, 0.06) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 40px 40px, 60px 60px",
          opacity: 0.5,
        }}
      />

      {/* Enhanced gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 98%, transparent) 0%, color-mix(in srgb, var(--color-primary-main) 95%, transparent) 50%, color-mix(in srgb, var(--color-primary-main) 98%, transparent) 100%)`,
        }}
      />

      {/* Enhanced radial gradient accent with gold tint */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          background: `radial-gradient(ellipse at center, color-mix(in srgb, var(--color-accent-main) 8%, transparent) 0%, transparent 70%)`,
        }}
      />

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

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2
            className="text-display mb-6"
            style={{
              fontFamily: "var(--font-family-heading)",
              fontWeight: "var(--font-weight-black)",
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "var(--color-text-on-dark)" }}>Ready to Explore </span>
            <span
              style={{
                color: "var(--color-accent-main)",
              }}
            >
              Opportunities?
            </span>
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center block"
            style={{
              color: "color-mix(in srgb, var(--color-text-on-dark) 85%, transparent)",
              lineHeight: "var(--line-height-loose)",
              fontFamily: "var(--font-family-body)",
              fontWeight: "var(--font-weight-medium)",
              letterSpacing: "-0.01em",
            }}
          >
            Connect with our team to discuss exploration projects, investment opportunities, or
            partnership possibilities.
          </p>
        </motion.div>

        {/* Split Layout: Left (Dark) + Right (Light) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
          {/* Left Panel - Dark Background with Contact Info Cards + Map */}
          <div className="relative p-8 lg:p-12 xl:p-16">
            <div className="relative z-10">
              {/* Contact Info Cards - responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-10">
                {contactCards.map((card, index) => {
                  const IconComponent = card.icon;
                  return (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative p-6 lg:p-8 rounded-xl overflow-hidden min-w-0"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary-main) 90%, transparent) 0%, color-mix(in srgb, var(--color-navy-800) 85%, transparent) 100%)`,
                        border: `2px solid rgba(255, 255, 255, 0.4)`,
                        boxShadow: "none",
                      }}
                    >
                      {/* Enhanced border glow on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          border: `2px solid var(--color-primary-main)`,
                        }}
                      />

                      {/* Icon with enhanced styling */}
                      <motion.div
                        className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-5 relative z-10"
                        style={{
                          background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 25%, transparent) 0%, color-mix(in srgb, var(--color-gold-400) 15%, transparent) 100%)`,
                          color: "var(--color-accent-main)",
                          border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                          boxShadow: "none",
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <IconComponent className="w-7 h-7 lg:w-8 lg:h-8" />
                      </motion.div>

                      {/* Label - Gold accent */}
                      <p
                        className="text-xs font-bold uppercase tracking-wider mb-3 relative z-10"
                        style={{
                          color: "var(--color-accent-main)",
                          fontFamily: "var(--font-family-body)",
                          fontWeight: "var(--font-weight-bold)",
                        }}
                      >
                        {card.label}
                      </p>

                      {/* Title - White text with better typography */}
                      {card.label === "EMAIL" ? (
                        <a
                          href={`mailto:${card.title}`}
                          className="text-base md:text-lg lg:text-xl font-bold mb-2 leading-snug relative z-10 block min-w-0 break-all hover:opacity-80 transition-opacity"
                          style={{
                            color: "var(--color-text-on-dark)",
                            fontFamily: "var(--font-family-heading)",
                            fontWeight: "var(--font-weight-bold)",
                          }}
                        >
                          {card.title}
                        </a>
                      ) : (
                        <h4
                          className="text-base md:text-lg lg:text-xl font-bold mb-2 leading-snug relative z-10 min-w-0 break-words"
                          style={{
                            color: "var(--color-text-on-dark)",
                            fontFamily: "var(--font-family-heading)",
                            fontWeight: "var(--font-weight-bold)",
                          }}
                        >
                          {card.title}
                        </h4>
                      )}

                      {/* Subtitle - Light grey text with better spacing */}
                      {card.subtitle && (
                        <p
                          className="text-xs md:text-sm leading-relaxed relative z-10"
                          style={{
                            color: "color-mix(in srgb, var(--color-text-on-dark) 70%, transparent)",
                            fontFamily: "var(--font-family-body)",
                            lineHeight: "var(--line-height-base)",
                          }}
                        >
                          {card.subtitle}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Map Section */}
              <div className="mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative h-64 lg:h-80 rounded-xl overflow-hidden"
                  style={{
                    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                    boxShadow: "none",
                  }}
                >
                  {/* Google Maps Embed */}
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                    className="absolute inset-0"
                  />

                  {/* Subtle overlay for better integration */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(180deg, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 0%, transparent 50%, color-mix(in srgb, var(--color-primary-main) 20%, transparent) 100%)`,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Panel - Light Background with Contact Form */}
          <div
            className="relative p-8 lg:p-12 xl:p-16 rounded-2xl lg:rounded-3xl"
            style={{
              background: `linear-gradient(135deg, var(--color-bg-default) 0%, var(--color-bg-subtle) 100%)`,
            }}
          >
            <div className="max-w-2xl mx-auto relative z-10">
              {/* Form Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  style={{
                    color: "var(--color-text-body)",
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: "var(--font-weight-black)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Send Us a Message
                </h3>
                <p
                  className="text-base lg:text-lg leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-family-body)",
                    lineHeight: "var(--line-height-base)",
                  }}
                >
                  Fill out the form and our team will respond promptly.
                </p>
              </motion.div>

              {/* Contact Form - Light Theme */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line - Bottom Border (Before Footer) */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Main gradient line */}
        <div
          className="h-[2px] w-full"
          style={{
            background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--color-accent-main) 40%, transparent) 15%, var(--color-accent-main) 50%, color-mix(in srgb, var(--color-accent-main) 40%, transparent) 85%, transparent 100%)`,
          }}
        />
        {/* Subtle glow effect */}
        <div
          className="h-[1px] w-full mt-[-1px]"
          style={{
            background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--color-accent-main) 60%, transparent) 20%, var(--color-accent-main) 50%, color-mix(in srgb, var(--color-accent-main) 60%, transparent) 80%, transparent 100%)`,
            boxShadow: "none",
          }}
        />
      </div>
    </section>
  );
}
