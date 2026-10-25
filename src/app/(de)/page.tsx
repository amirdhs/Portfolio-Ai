import { HomeView, homeMetadata } from "@/views/HomeView";

export const metadata = homeMetadata("de");

export default function Page() {
  return <HomeView locale="de" />;
}
