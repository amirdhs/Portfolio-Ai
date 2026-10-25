import { GlossaryView, glossaryMetadata } from "@/views/GlossaryView";

export const metadata = glossaryMetadata("en");

export default function Page() {
  return <GlossaryView locale="en" />;
}
