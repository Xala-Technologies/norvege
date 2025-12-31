"use client";

interface LegalContentProps {
  content: string;
}

export default function LegalContent({ content }: LegalContentProps) {
  // Parse markdown-like content and convert to proper HTML
  const parseContent = (text: string): string => {
    let html = text;

    // Convert headers
    html = html.replace(
      /^# (.*)$/gim,
      '<h1 class="text-4xl font-bold mb-6 mt-8" style="color: var(--color-primary-main); font-family: var(--font-family-heading);">$1</h1>'
    );
    html = html.replace(
      /^## (.*)$/gim,
      '<h2 class="text-3xl font-bold mb-4 mt-10" style="color: var(--color-primary-main); font-family: var(--font-family-heading);">$1</h2>'
    );
    html = html.replace(
      /^### (.*)$/gim,
      '<h3 class="text-2xl font-bold mb-3 mt-8" style="color: var(--color-primary-main); font-family: var(--font-family-heading);">$1</h3>'
    );

    // Convert bold text
    html = html.replace(
      /\*\*(.*?)\*\*/gim,
      '<strong style="color: var(--color-text-body); font-weight: 600;">$1</strong>'
    );

    // Convert paragraphs (text between double line breaks)
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs
      .map((para) => {
        if (
          para.trim().startsWith("<h") ||
          para.trim().startsWith("<ul") ||
          para.trim().startsWith("<li")
        ) {
          return para;
        }
        if (para.trim().startsWith("- ")) {
          // Handle list items
          const items = para.split(/\n(?=- )/).map((item) => item.replace(/^- /, ""));
          return `<ul class="list-disc ml-6 mb-6 space-y-2">${items.map((item) => `<li class="text-gray-700" style="color: var(--color-text-body); font-family: var(--font-family-body);">${item.trim()}</li>`).join("")}</ul>`;
        }
        if (para.trim()) {
          return `<p class="mb-6 leading-relaxed" style="color: var(--color-text-body); font-family: var(--font-family-body); line-height: var(--line-height-loose);">${para.trim()}</p>`;
        }
        return "";
      })
      .join("");

    // Convert single line breaks to <br />
    html = html.replace(/\n(?!<)/g, "<br />");

    return html;
  };

  return (
    <div className="legal-content" dangerouslySetInnerHTML={{ __html: parseContent(content) }} />
  );
}
