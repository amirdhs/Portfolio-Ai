import { FaqView, faqMetadata } from "@/views/FaqView";

export const metadata = faqMetadata("de");

export default function Page() {
  return <FaqView locale="de" />;
}
