import type { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Generate SEO metadata for pages
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no";
  const fullUrl = config.path ? `${siteUrl}${config.path}` : siteUrl;
  const imageUrl = config.image ? `${siteUrl}${config.image}` : `${siteUrl}/og-image.jpg`;

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      siteName: "Norvege Minerals",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: "en_US",
      type: config.type || "website",
      ...(config.publishedTime && { publishedTime: config.publishedTime }),
      ...(config.modifiedTime && { modifiedTime: config.modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

/**
 * Generate structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NORVEGE MINERALS AS",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no"}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@norvegeminerals.no",
    },
    sameAs: [],
  };
}

/**
 * Generate structured data for WebSite
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Norvege Minerals",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://norvegeminerals.no",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://pureminerals.no"}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate structured data for FAQ
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
