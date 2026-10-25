import { ProjectsView, projectsMetadata } from "@/views/ProjectsView";

export const metadata = projectsMetadata("de");

export default function Page() {
  return <ProjectsView locale="de" />;
}
