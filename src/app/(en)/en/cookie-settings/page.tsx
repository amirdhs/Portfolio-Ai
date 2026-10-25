import { CookiesView, cookiesMetadata } from "@/views/LegalViews";

export const metadata = cookiesMetadata("en");

export default function Page() {
  return <CookiesView locale="en" />;
}
