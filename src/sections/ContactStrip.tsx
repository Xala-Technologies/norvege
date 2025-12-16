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

  // Gold accent color matching the design
  const goldAccent = "#d4a574"; // Rich gold/copper color

  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background: "var(--color-navy-900)",
      }}
    >
      {/* Separator Line - Top Border */}
      <div className="absolute top-0 left-0 right-0 z-20">
        {/* Main gradient line */}
        <div
          className="h-[2px] w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.4) 15%, rgba(249, 115, 22, 0.9) 50%, rgba(249, 115, 22, 0.4) 85%, transparent 100%)",
          }}
        />
        {/* Subtle glow effect */}
        <div
          className="h-[1px] w-full mt-[-1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.6) 20%, rgba(249, 115, 22, 1) 50%, rgba(249, 115, 22, 0.6) 80%, transparent 100%)",
            boxShadow: "0 0 8px rgba(249, 115, 22, 0.4)",
          }}
        />
      </div>

      {/* Dark speckled/night sky background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(255, 255, 255, 0.1) 1px, transparent 0),
            radial-gradient(circle at 5px 5px, rgba(255, 255, 255, 0.08) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 40px 40px, 60px 60px",
          opacity: 0.4,
        }}
      />

      {/* Subtle gradient overlay with middle accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10, 22, 40, 0.95) 0%, rgba(15, 23, 42, 0.92) 50%, rgba(10, 22, 40, 0.95) 100%)",
        }}
      />
      {/* Weak middle gradient accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212, 165, 116, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          <h2
            className="text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]"
            style={{
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontWeight: 900,
              fontStyle: "normal",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              marginBottom: "2.5rem",
            }}
          >
            <span style={{ color: "var(--color-sand-50)" }}>Ready to Explore </span>
            <span style={{ color: goldAccent }}>Opportunities?</span>
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center block"
            style={{
              color: "var(--color-sand-100)",
              lineHeight: "1.7",
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0",
            }}
          >
            Connect with our team to discuss exploration projects, investment opportunities, or
            partnership possibilities.
          </p>
        </motion.div>

        {/* Split Layout: Left (Dark) + Right (Light) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
          {/* Left Panel - Dark Background with Contact Info Cards + Map */}
          <div className="relative p-8 lg:p-12">
            <div className="relative z-10">
              {/* Contact Info Cards - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
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
                      className="group relative p-6 rounded-xl overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #1e293b 0%, #1a2332 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at center, ${goldAccent}15 0%, transparent 70%)`,
                        }}
                      />

                      {/* Icon with enhanced styling */}
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10"
                        style={{
                          background: `linear-gradient(135deg, ${goldAccent}20 0%, ${goldAccent}10 100%)`,
                          color: goldAccent,
                          border: `1px solid ${goldAccent}30`,
                          boxShadow: `0 4px 15px ${goldAccent}20`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>

                      {/* Label - Gold accent */}
                      <p
                        className="text-xs font-bold uppercase tracking-wider mb-3 relative z-10"
                        style={{ color: goldAccent }}
                      >
                        {card.label}
                      </p>

                      {/* Title - White text with better typography */}
                      <h4
                        className="text-base font-bold mb-2 leading-tight relative z-10"
                        style={{ color: "var(--color-sand-50)" }}
                      >
                        {card.title}
                      </h4>

                      {/* Subtitle - Light grey text with better spacing */}
                      {card.subtitle && (
                        <p
                          className="text-xs leading-relaxed relative z-10"
                          style={{ color: "rgba(255, 255, 255, 0.6)" }}
                        >
                          {card.subtitle}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Map Section */}
              <div className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative h-64 lg:h-80 rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
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
                      background:
                        "linear-gradient(180deg, rgba(10, 22, 40, 0.2) 0%, transparent 50%, rgba(10, 22, 40, 0.2) 100%)",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Panel - Light Background with Contact Form */}
          <div
            className="relative p-8 lg:p-12 rounded-2xl lg:rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
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
                  className="text-3xl md:text-4xl font-bold mb-3"
                  style={{ color: "var(--color-navy-900)" }}
                >
                  Send Us a Message
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-gray-600)" }}>
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
            background:
              "linear-gradient(90deg, transparent 0%, rgba(212, 165, 116, 0.4) 15%, rgba(212, 165, 116, 0.9) 50%, rgba(212, 165, 116, 0.4) 85%, transparent 100%)",
          }}
        />
        {/* Subtle glow effect */}
        <div
          className="h-[1px] w-full mt-[-1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(212, 165, 116, 0.6) 20%, rgba(212, 165, 116, 1) 50%, rgba(212, 165, 116, 0.6) 80%, transparent 100%)",
            boxShadow: "0 0 8px rgba(212, 165, 116, 0.4)",
          }}
        />
      </div>
    </section>
  );
}
