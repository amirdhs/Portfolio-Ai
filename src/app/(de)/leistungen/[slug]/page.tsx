import { ServiceDetailView, serviceMetadata, serviceParams } from "@/views/ServiceDetailView";

export function generateStaticParams() {
  return serviceParams("de");
}

export async function generateMetadata({ params }: PageProps<"/leistungen/[slug]">) {
  return serviceMetadata("de", (await params).slug);
}

export default async function Page({ params }: PageProps<"/leistungen/[slug]">) {
  return <ServiceDetailView locale="de" urlSlug={(await params).slug} />;
}
