import type { Metadata } from "next";
import Script from "next/script";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { companyInfo } from "@/content/company";
import { contactFAQs } from "@/content/legal";
import Accordion from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/seo";
import ContactForm from "@/components/contact/ContactForm";

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
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              Contact Us
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-copper-600)" }}
                  >
                    Company Details
                  </h3>
                  <p className="text-gray-600">{companyInfo.legalName}</p>
                  <p className="text-gray-600">Org. nr: {companyInfo.orgNumber}</p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-copper-600)" }}
                  >
                    Address
                  </h3>
                  <p className="text-gray-600">{companyInfo.address.street}</p>
                  <p className="text-gray-600">
                    {companyInfo.address.postalCode} {companyInfo.address.city}
                  </p>
                  <p className="text-gray-600">{companyInfo.address.country}</p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--color-copper-600)" }}
                  >
                    Email
                  </h3>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-gray-600 hover:text-[var(--color-copper-600)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-copper-600)] focus:ring-offset-2 rounded"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>

                {companyInfo.contact.phone && (
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "var(--color-copper-600)" }}
                    >
                      Phone
                    </h3>
                    <a
                      href={`tel:${companyInfo.contact.phone}`}
                      className="text-gray-600 hover:text-[var(--color-copper-600)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-copper-600)] focus:ring-offset-2 rounded"
                    >
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--color-navy-900)" }}>
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: "var(--color-sand-50)" }}>
        <div className="container max-w-4xl">
          <h2
            className="text-4xl font-bold mb-8 text-center"
            style={{ color: "var(--color-navy-900)" }}
          >
            Frequently Asked Questions
          </h2>
          <Accordion items={contactFAQs} />
        </div>
      </section>
    </div>
  );
}
