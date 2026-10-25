import { ProcessView, processMetadata } from "@/views/ProcessView";

export const metadata = processMetadata("en");

export default function Page() {
  return <ProcessView locale="en" />;
}
