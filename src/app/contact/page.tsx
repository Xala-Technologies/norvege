import type { Metadata } from "next";
import Script from "next/script";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { companyInfo } from "@/content/company";
import { contactFAQs } from "@/content/legal";
import Accordion from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/seo";
import ContactForm from "@/components/contact/ContactForm";
import ContactHeroImage from "@/components/ui/ContactHeroImage";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us - NORVEGE MINERALS AS",
  description:
    "Get in touch with NORVEGE MINERALS AS. Contact our team for inquiries, partnerships, or investment opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  const faqSchema = generateFAQSchema(contactFAQs);

  return (
    <div className="min-h-screen">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <ContactHeroImage />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none z-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="container relative z-20 pt-32 pb-20 lg:pt-36 lg:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight"
              style={{
                color: "var(--color-text-on-dark)",
                fontFamily: "var(--font-family-heading)",
                fontWeight: "var(--font-weight-black)",
                letterSpacing: "-0.03em",
              }}
            >
              Contact{" "}
              <span
                style={{
                  color: "var(--color-accent-main)",
                }}
              >
                Us
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{
                color: "color-mix(in srgb, var(--color-text-on-dark) 90%, transparent)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Get in touch with our team for inquiries, partnerships, or investment opportunities
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-12">
              <div className="text-center">
                <div
                  className="text-lg md:text-xl font-semibold mb-2"
                  style={{ color: "var(--color-accent-main)" }}
                >
                  Email
                </div>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-base md:text-lg hover:opacity-80 transition-opacity"
                  style={{
                    color: "color-mix(in srgb, var(--color-text-on-dark) 85%, transparent)",
                  }}
                >
                  {companyInfo.contact.email}
                </a>
              </div>
              {companyInfo.address.city && (
                <div className="text-center">
                  <div
                    className="text-lg md:text-xl font-semibold mb-2"
                    style={{ color: "var(--color-accent-main)" }}
                  >
                    Location
                  </div>
                  <div
                    className="text-base md:text-lg"
                    style={{
                      color: "color-mix(in srgb, var(--color-text-on-dark) 85%, transparent)",
                    }}
                  >
                    {companyInfo.address.city}, {companyInfo.address.country}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--color-accent-main) 50%, transparent 100%)",
          }}
        />
      </section>

      {/* Contact Form & Info */}
      <section
        className="section relative overflow-hidden"
        style={{ background: "var(--color-bg-default)" }}
      >
        {/* Refined background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03]"
            style={{ background: "var(--color-primary-main)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03]"
            style={{ background: "var(--color-accent-main)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2
              className="text-display mb-6"
              style={{
                color: "var(--color-primary-main)",
                fontFamily: "var(--font-family-heading)",
              }}
            >
              Get in <span style={{ color: "var(--color-accent-main)" }}>Touch</span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-family-body)",
                lineHeight: "var(--line-height-loose)",
              }}
            >
              Reach out to our team for inquiries, partnerships, or investment opportunities.
              We&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-8"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Company Details Card */}
                <div
                  className="group p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                    boxShadow: "none",
                  }}
                >
                  {/* Enhanced border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: `2px solid var(--color-primary-main)`,
                    }}
                  />
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                        color: "var(--color-accent-main)",
                        boxShadow: "none",
                      }}
                    >
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: "var(--color-primary-main)" }}
                      >
                        Company Details
                      </h3>
                      <p
                        className="text-base mb-2 font-medium"
                        style={{ color: "var(--color-text-body)" }}
                      >
                        {companyInfo.legalName}
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        Org. nr: {companyInfo.orgNumber}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div
                  className="group p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                    border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                    boxShadow: "none",
                  }}
                >
                  {/* Enhanced border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: `2px solid var(--color-primary-main)`,
                    }}
                  />
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                        color: "var(--color-accent-main)",
                        boxShadow: "none",
                      }}
                    >
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
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
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: "var(--color-primary-main)" }}
                      >
                        Address
                      </h3>
                      <p
                        className="text-base mb-1 font-medium"
                        style={{ color: "var(--color-text-body)" }}
                      >
                        {companyInfo.address.street}
                      </p>
                      <p className="text-base mb-1" style={{ color: "var(--color-text-body)" }}>
                        {companyInfo.address.postalCode} {companyInfo.address.city}
                      </p>
                      <p className="text-base" style={{ color: "var(--color-text-body)" }}>
                        {companyInfo.address.country}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                {companyInfo.contact.phone && (
                  <div
                    className="group p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-default) 100%)`,
                      border: `1px solid color-mix(in srgb, var(--color-primary-main) 30%, transparent)`,
                      boxShadow: "none",
                    }}
                  >
                    {/* Enhanced border glow on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        border: `2px solid var(--color-primary-main)`,
                      }}
                    />
                    <div className="flex items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, color-mix(in srgb, var(--color-accent-main) 20%, transparent) 0%, color-mix(in srgb, var(--color-accent-main) 10%, transparent) 100%)`,
                          color: "var(--color-accent-main)",
                          boxShadow: "none",
                        }}
                      >
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-xl font-bold mb-3"
                          style={{ color: "var(--color-primary-main)" }}
                        >
                          Phone
                        </h3>
                        <a
                          href={`tel:${companyInfo.contact.phone}`}
                          className="text-base font-medium hover:opacity-80 transition-opacity inline-flex items-center gap-2 group/link"
                          style={{ color: "var(--color-accent-main)" }}
                        >
                          {companyInfo.contact.phone}
                          <svg
                            className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
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
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-8"
                style={{
                  color: "var(--color-primary-main)",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Send us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container max-w-4xl">
          <h2
            className="text-display mb-8 text-center"
            style={{ color: "var(--color-primary-main)" }}
          >
            Frequently Asked Questions
          </h2>
          <Accordion items={contactFAQs} />
        </div>
      </section>
    </div>
  );
}
