import { ProjectDetailView, projectMetadata, projectParams } from "@/views/ProjectDetailView";

export function generateStaticParams() {
  return projectParams("de");
}

export async function generateMetadata({ params }: PageProps<"/projekte/[slug]">) {
  return projectMetadata("de", (await params).slug);
}

export default async function Page({ params }: PageProps<"/projekte/[slug]">) {
  return <ProjectDetailView locale="de" urlSlug={(await params).slug} />;
}
