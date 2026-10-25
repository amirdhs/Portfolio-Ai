import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter, type FilterableItem } from "@/components/projects/ProjectFilter";
import { ProjectTypeBadge } from "@/components/projects/ProjectTypeBadge";
import { getContent } from "@/content";

let search = new URLSearchParams();
vi.mock("next/navigation", () => ({
  usePathname: () => "/projekte",
  useSearchParams: () => search,
}));

const { projects } = getContent("de");
const items: FilterableItem[] = projects.map((p) => ({
  id: p.slug,
  categories: p.categories,
  node: <span>{p.title}</span>,
}));
const labels = {
  filter: "Filter",
  all: "Alle",
  empty: "Leer",
  count: { one: "{n} Eintrag", other: "{n} Einträge" },
};
const categories = [
  { value: "web" as const, label: "Webentwicklung" },
  { value: "integrations" as const, label: "Integrationen" },
];

beforeEach(() => {
  search = new URLSearchParams();
});

describe("ProjectFilter", () => {
  it("shows everything without a filter and builds filter links", () => {
    render(
      <ProjectFilter items={items} categories={categories} param="kategorie" labels={labels} />,
    );
    expect(screen.getByText(`${projects.length} Einträge`)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Alle" })).toHaveAttribute("aria-current", "true");
    expect(screen.getByRole("link", { name: "Integrationen" })).toHaveAttribute(
      "href",
      "/projekte?kategorie=integrations",
    );
  });

  it("filters by the category in the URL and ignores unknown values", () => {
    search = new URLSearchParams("kategorie=integrations");
    const { unmount } = render(
      <ProjectFilter items={items} categories={categories} param="kategorie" labels={labels} />,
    );
    expect(screen.getByText("1 Eintrag")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Integrationen" })).toHaveAttribute(
      "aria-current",
      "true",
    );
    unmount();

    search = new URLSearchParams("kategorie=unknown");
    render(
      <ProjectFilter items={items} categories={categories} param="kategorie" labels={labels} />,
    );
    expect(screen.getByText(`${projects.length} Einträge`)).toBeInTheDocument();
  });

  it("shows an empty state", () => {
    search = new URLSearchParams("kategorie=web");
    render(<ProjectFilter items={[]} categories={categories} param="kategorie" labels={labels} />);
    expect(screen.getByText("Leer")).toBeInTheDocument();
  });
});

describe("ProjectCard and badge", () => {
  it("labels concept work clearly and links to the localized detail page", () => {
    render(<ProjectCard project={projects[1]} locale="en" />);
    expect(screen.getByRole("link", { name: projects[1].title })).toHaveAttribute(
      "href",
      "/en/projects/ai-faq-assistant",
    );
    expect(screen.getByText("Example concept")).toBeInTheDocument();
  });

  it("renders client and demo labels", () => {
    render(
      <>
        <ProjectTypeBadge type="client" locale="de" />
        <ProjectTypeBadge type="demo" locale="de" />
      </>,
    );
    expect(screen.getByText("Kundenprojekt")).toBeInTheDocument();
    expect(screen.getByText("Demonstrationsprojekt")).toBeInTheDocument();
  });
});
