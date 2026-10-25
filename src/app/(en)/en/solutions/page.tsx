import { SolutionsView, solutionsMetadata } from "@/views/SolutionsView";

export const metadata = solutionsMetadata("en");

export default function Page() {
  return <SolutionsView locale="en" />;
}
