import { GlossaryView, glossaryMetadata } from "@/views/GlossaryView";

export const metadata = glossaryMetadata("de");

export default function Page() {
  return <GlossaryView locale="de" />;
}
