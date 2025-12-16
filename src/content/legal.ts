import type { ILegalPage, IFAQItem } from "./types";

export const legalPages: ILegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    content: `
# Privacy Policy

Last Updated: ${new Date().toLocaleDateString()}

## Introduction

NORVEGE MINERALS AS ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.

## Information We Collect

We may collect information about you in a variety of ways:

- **Personal Data**: Name, email address, company name, and other information you voluntarily provide
- **Usage Data**: Information about how you access and use our website
- **Cookies**: Data files placed on your device to enhance your browsing experience

## How We Use Your Information

We use the information we collect to:

- Respond to your inquiries and provide customer service
- Send you updates about our company and projects
- Improve our website and user experience
- Comply with legal obligations

## Data Security

We implement appropriate technical and organizational measures to protect your personal information.

## Your Rights

You have the right to:

- Access your personal data
- Request correction of inaccurate data
- Request deletion of your data
- Object to processing of your data

## Contact Us

If you have questions about this Privacy Policy, please contact us at contact@norvegeminerals.no
    `.trim(),
    lastUpdated: new Date().toISOString(),
  },
  {
    slug: "terms",
    title: "Terms of Service",
    content: `
# Terms of Service

Last Updated: ${new Date().toLocaleDateString()}

## Acceptance of Terms

By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.

## Use License

Permission is granted to temporarily access the materials on our website for personal, non-commercial transitory viewing only.

## Disclaimer

The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied.

## Limitations

In no event shall NORVEGE MINERALS AS or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.

## Revisions

We may revise these terms of service at any time without notice.

## Contact Information

For questions about these Terms of Service, contact us at contact@norvegeminerals.no
    `.trim(),
    lastUpdated: new Date().toISOString(),
  },
];

export const contactFAQs: IFAQItem[] = [
  {
    question: "How can I invest in NORVEGE MINERALS AS?",
    answer:
      "Please contact us through the contact form or email us directly at contact@norvegeminerals.no. Our investor relations team will provide you with detailed information about investment opportunities.",
  },
  {
    question: "Where are your exploration projects located?",
    answer:
      "Our projects are located across Norway, including regions in Sogn og Fjordane, Telemark, Trøndelag, and Finnmark. Visit our Projects page for detailed information about each project.",
  },
  {
    question: "What minerals are you exploring for?",
    answer:
      "We focus on critical minerals essential for the energy transition, including copper, zinc, nickel, cobalt, rare earth elements, and gold.",
  },
  {
    question: "How do you ensure sustainable and responsible mining?",
    answer:
      "Sustainability is at the core of our operations. We follow strict environmental standards, engage with local communities, and implement best practices in ESG. Visit our ESG page for more details.",
  },
  {
    question: "Can I visit your exploration sites?",
    answer:
      "For safety and operational reasons, exploration sites are generally not open to public visits. However, we regularly engage with local communities and stakeholders. Please contact us if you have specific inquiries.",
  },
  {
    question: "How can I stay updated on your progress?",
    answer:
      "You can subscribe to our newsletter through the contact form, follow us on social media, or check our website regularly for updates and reports.",
  },
];

export function getLegalPageBySlug(slug: string): ILegalPage | undefined {
  return legalPages.find((page) => page.slug === slug);
}
