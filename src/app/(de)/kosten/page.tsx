import { CostsView, costsMetadata } from "@/views/CostsView";

export const metadata = costsMetadata("de");

export default function Page() {
  return <CostsView locale="de" />;
}
