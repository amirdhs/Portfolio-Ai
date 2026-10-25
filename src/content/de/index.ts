import { createContent } from "../create-content";
import { about } from "./about";
import { blocks as costBlocks, closing as costClosing } from "./costs";
import { coreFaqs, faqGroups } from "./faq";
import { comparison, terms } from "./glossary";
import * as home from "./home";
import { pages } from "./pages";
import { processOverview, processStages } from "./process";
import { projects } from "./projects";
import { services } from "./services";
import { solutions } from "./solutions";

export const de = createContent({
  services,
  solutions,
  projects,
  coreFaqs,
  faqGroups,
  processOverview,
  processStages,
  about,
  home,
  pages,
  glossary: { terms, comparison },
  costs: { blocks: costBlocks, closing: costClosing },
});
