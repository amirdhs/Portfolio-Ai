import { ProjectDetailView, projectMetadata, projectParams } from "@/views/ProjectDetailView";

export function generateStaticParams() {
  return projectParams("en");
}

export async function generateMetadata({ params }: PageProps<"/en/projects/[slug]">) {
  return projectMetadata("en", (await params).slug);
}

export default async function Page({ params }: PageProps<"/en/projects/[slug]">) {
  return <ProjectDetailView locale="en" urlSlug={(await params).slug} />;
}
