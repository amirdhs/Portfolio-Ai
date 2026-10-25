import { CostsView, costsMetadata } from "@/views/CostsView";

export const metadata = costsMetadata("en");

export default function Page() {
  return <CostsView locale="en" />;
}
