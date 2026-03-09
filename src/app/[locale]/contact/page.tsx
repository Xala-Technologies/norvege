import Script from "next/script";
import { companyInfo } from "@/content/company";
import Accordion from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/seo";
import ContactForm from "@/components/contact/ContactForm";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common.labels");
  const tFAQ = await getTranslations("contact.faq.items");

  const faqKeys = ["investment", "location", "minerals", "sustainability", "visits", "updates"];
  const translatedFAQs = faqKeys.map((key) => ({
    question: tFAQ(`${key}.question`),
    answer: tFAQ(`${key}.answer`),
  }));

  const faqSchema = generateFAQSchema(translatedFAQs);

  return (
    <div className="min-h-screen">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden"
        style={{ background: "#1B2A4A" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 80%, rgba(227, 161, 66, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
          }}
        />

        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
          <svg viewBox="0 0 400 600" fill="none" className="w-full h-full">
            <circle cx="300" cy="200" r="200" stroke="white" strokeWidth="0.5" />
            <circle cx="300" cy="200" r="150" stroke="white" strokeWidth="0.5" />
            <circle cx="300" cy="200" r="100" stroke="white" strokeWidth="0.5" />
            <line x1="100" y1="400" x2="400" y2="100" stroke="white" strokeWidth="0.5" />
            <line x1="200" y1="500" x2="400" y2="200" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em]"
              style={{
                background: "rgba(227, 161, 66, 0.12)",
                color: "#e3a142",
                border: "1px solid rgba(227, 161, 66, 0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#e3a142" }} />
              {t("getInTouch")}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{
                color: "white",
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              {t("title")}
            </h1>

            <div className="w-16 h-[2px] mb-6" style={{ background: "#e3a142" }} />

            <p
              className="text-lg sm:text-xl leading-relaxed max-w-2xl"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div className="lg:col-span-4">
              <h2
                className="text-2xl lg:text-3xl mb-3"
                style={{
                  fontFamily: "var(--font-family-heading)",
                  fontWeight: 700,
                  color: "#1B2A4A",
                }}
              >
                {t("contactInfo")}
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "rgba(27, 42, 74, 0.6)" }}
              >
                {t("getInTouchDescription")}
              </p>

              <div className="space-y-6">
                {/* Company Details Card */}
                <div
                  className="p-5 rounded-md transition-all duration-200 group"
                  style={{
                    background: "rgba(27, 42, 74, 0.02)",
                    border: "1px solid rgba(27, 42, 74, 0.06)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: "rgba(27, 42, 74, 0.06)" }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{ color: "#1B2A4A" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-xs font-bold uppercase tracking-[0.15em] mb-1.5"
                        style={{ color: "rgba(27, 42, 74, 0.4)" }}
                      >
                        {tCommon("companyDetails")}
                      </h3>
                      <p className="text-base font-semibold" style={{ color: "#1B2A4A" }}>
                        {companyInfo.legalName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div
                  className="p-5 rounded-md transition-all duration-200 group"
                  style={{
                    background: "rgba(27, 42, 74, 0.02)",
                    border: "1px solid rgba(27, 42, 74, 0.06)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: "rgba(227, 161, 66, 0.1)" }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{ color: "#e3a142" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-xs font-bold uppercase tracking-[0.15em] mb-1.5"
                        style={{ color: "rgba(27, 42, 74, 0.4)" }}
                      >
                        {tCommon("email")}
                      </h3>
                      <a
                        href={`mailto:${companyInfo.contact.email}`}
                        className="text-base font-semibold transition-colors duration-200 hover:text-gold-mustard"
                        style={{ color: "#1B2A4A" }}
                      >
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div
                  className="p-5 rounded-md transition-all duration-200 group"
                  style={{
                    background: "rgba(27, 42, 74, 0.02)",
                    border: "1px solid rgba(27, 42, 74, 0.06)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: "rgba(27, 42, 74, 0.06)" }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{ color: "#1B2A4A" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-xs font-bold uppercase tracking-[0.15em] mb-1.5"
                        style={{ color: "rgba(27, 42, 74, 0.4)" }}
                      >
                        {tCommon("address")}
                      </h3>
                      <p className="text-base font-semibold" style={{ color: "#1B2A4A" }}>
                        {companyInfo.address.city}, {companyInfo.address.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time indicator */}
              <div
                className="mt-8 p-4 rounded-md flex items-center gap-3"
                style={{
                  background: "rgba(227, 161, 66, 0.06)",
                  border: "1px solid rgba(227, 161, 66, 0.12)",
                }}
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  style={{ color: "#e3a142" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm" style={{ color: "rgba(27, 42, 74, 0.7)" }}>
                  {t("responseTime")}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px]" style={{ background: "#e3a142" }} />
                <h2
                  className="text-2xl lg:text-3xl"
                  style={{
                    fontFamily: "var(--font-family-heading)",
                    fontWeight: 700,
                    color: "#1B2A4A",
                  }}
                >
                  {t("sendMessage")}
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28" style={{ background: "var(--color-bg-default)" }}>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em]"
              style={{
                background: "rgba(27, 42, 74, 0.05)",
                color: "rgba(27, 42, 74, 0.5)",
              }}
            >
              {t("faq.eyebrow")}
            </div>
            <h2
              className="text-3xl lg:text-4xl mb-4"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontWeight: 700,
                color: "#1B2A4A",
              }}
            >
              {t("faq.title")}
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(27, 42, 74, 0.6)" }}>
              {t("faq.subtitle")}
            </p>
          </div>
          <Accordion items={translatedFAQs} />
        </div>
      </section>
    </div>
  );
}
