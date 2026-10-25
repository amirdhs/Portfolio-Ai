import { CookiesView, cookiesMetadata } from "@/views/LegalViews";

export const metadata = cookiesMetadata("de");

export default function Page() {
  return <CookiesView locale="de" />;
}
