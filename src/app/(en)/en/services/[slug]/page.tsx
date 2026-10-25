import { ServiceDetailView, serviceMetadata, serviceParams } from "@/views/ServiceDetailView";

export function generateStaticParams() {
  return serviceParams("en");
}

export async function generateMetadata({ params }: PageProps<"/en/services/[slug]">) {
  return serviceMetadata("en", (await params).slug);
}

export default async function Page({ params }: PageProps<"/en/services/[slug]">) {
  return <ServiceDetailView locale="en" urlSlug={(await params).slug} />;
}
