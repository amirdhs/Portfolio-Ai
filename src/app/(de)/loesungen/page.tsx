import { SolutionsView, solutionsMetadata } from "@/views/SolutionsView";

export const metadata = solutionsMetadata("de");

export default function Page() {
  return <SolutionsView locale="de" />;
}
