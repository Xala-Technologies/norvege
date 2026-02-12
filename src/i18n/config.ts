export const locales = ["en", "no"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];
