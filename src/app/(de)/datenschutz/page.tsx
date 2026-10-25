import { PrivacyView, privacyMetadata } from "@/views/LegalViews";

export const metadata = privacyMetadata("de");

export default function Page() {
  return <PrivacyView locale="de" />;
}
