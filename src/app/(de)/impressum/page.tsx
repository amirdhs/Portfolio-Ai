import { ImprintView, imprintMetadata } from "@/views/LegalViews";

export const metadata = imprintMetadata("de");

export default function Page() {
  return <ImprintView locale="de" />;
}
