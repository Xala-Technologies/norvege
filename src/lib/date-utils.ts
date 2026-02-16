/**
 * Date formatting utilities for consistent SSR rendering
 * Avoids hydration mismatches by using consistent date formats
 */

/**
 * Format a date string to YYYY-MM-DD format (consistent across server and client)
 */
export function formatDateISO(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Format a date string to a readable format (e.g., "January 12, 2026")
 * Uses consistent formatting that works in both server and client
 */
export function formatDateReadable(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const year = d.getFullYear();
  const month = d.toLocaleString("en-US", { month: "long" });
  const day = d.getDate();
  return `${month} ${day}, ${year}`;
}

/**
 * Format a date for display in UI (consistent format)
 * Returns format like "Jan 12, 2026"
 */
export function formatDateDisplay(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
