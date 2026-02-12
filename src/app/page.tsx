import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

// This page only renders when the user is on `/`
export default function RootPage() {
  // Redirect to the default locale
  redirect(`/${routing.defaultLocale}`);
}
