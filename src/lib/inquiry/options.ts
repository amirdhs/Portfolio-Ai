import { SERVICE_SLUGS } from "@/content/types";

export const REQUEST_TYPES = ["projekt", "erstgespraech"] as const;
export const SERVICE_OPTIONS = [...SERVICE_SLUGS, "unklar"] as const;
export const BUDGET_OPTIONS = [
  "unter-5000",
  "5000-15000",
  "15000-40000",
  "ueber-40000",
  "offen",
] as const;
export const TIMELINE_OPTIONS = ["asap", "1-3-monate", "3-6-monate", "flexibel"] as const;

export type RequestType = (typeof REQUEST_TYPES)[number];
export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
