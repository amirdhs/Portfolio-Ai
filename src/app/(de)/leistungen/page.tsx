import { ServicesView, servicesMetadata } from "@/views/ServicesView";

export const metadata = servicesMetadata("de");

export default function Page() {
  return <ServicesView locale="de" />;
}
