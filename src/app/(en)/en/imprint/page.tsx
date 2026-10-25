import { ImprintView, imprintMetadata } from "@/views/LegalViews";

export const metadata = imprintMetadata("en");

export default function Page() {
  return <ImprintView locale="en" />;
}
