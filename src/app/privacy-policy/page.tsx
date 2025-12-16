import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - NORVEGE MINERALS AS",
  description: "Privacy policy and data protection information for NORVEGE MINERALS AS.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section relative" style={{ background: "var(--color-navy-900)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--color-sand-50)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-xl" style={{ color: "var(--color-sand-100)" }}>
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container max-w-4xl prose prose-lg">
          <h2 style={{ color: "var(--color-primary-main)" }}>Introduction</h2>
          <p className="text-gray-600">
            NORVEGE MINERALS AS (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website.
          </p>

          <h2 style={{ color: "var(--color-primary-main)" }}>Information We Collect</h2>
          <p className="text-gray-600">
            We may collect information about you in a variety of ways. The information we may
            collect on the website includes:
          </p>
          <ul className="text-gray-600">
            <li>
              Personal Data: Name, email address, company name, and other contact information you
              provide through our contact form
            </li>
            <li>
              Usage Data: Information about how you use our website, including IP address, browser
              type, and pages visited
            </li>
          </ul>

          <h2 style={{ color: "var(--color-primary-main)" }}>Use of Your Information</h2>
          <p className="text-gray-600">We use the information we collect to:</p>
          <ul className="text-gray-600">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you information about our projects and activities (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 style={{ color: "var(--color-primary-main)" }}>Disclosure of Your Information</h2>
          <p className="text-gray-600">
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except as required by law or as necessary to provide our services.
          </p>

          <h2 style={{ color: "var(--color-primary-main)" }}>Data Security</h2>
          <p className="text-gray-600">
            We use administrative, technical, and physical security measures to protect your
            personal information. However, no method of transmission over the Internet or electronic
            storage is 100% secure.
          </p>

          <h2 style={{ color: "var(--color-primary-main)" }}>Your Rights (GDPR)</h2>
          <p className="text-gray-600">
            If you are a resident of the European Economic Area (EEA), you have certain data
            protection rights, including:
          </p>
          <ul className="text-gray-600">
            <li>The right to access, update, or delete your personal information</li>
            <li>The right to rectification</li>
            <li>The right to object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2 style={{ color: "var(--color-primary-main)" }}>Cookies</h2>
          <p className="text-gray-600">
            We may use cookies and similar tracking technologies to track activity on our website.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is
            being sent.
          </p>

          <h2 style={{ color: "var(--color-primary-main)" }}>Contact Us</h2>
          <p className="text-gray-600">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600">
            Email:{" "}
            <a
              href="mailto:privacy@norvegeminerals.no"
              style={{ color: "var(--color-accent-main)" }}
            >
              privacy@norvegeminerals.no
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
