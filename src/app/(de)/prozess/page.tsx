import { ProcessView, processMetadata } from "@/views/ProcessView";

export const metadata = processMetadata("de");

export default function Page() {
  return <ProcessView locale="de" />;
}
