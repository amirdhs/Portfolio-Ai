import { Badge } from "@/components/ui/Badge";
import type { ProjectType } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export function ProjectTypeBadge({ type, locale }: { type: ProjectType; locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <Badge tone={type === "client" ? "bronze" : "outline"}>
      {type === "client" ? null : (
        <span aria-hidden="true" className="size-1.5 rounded-full border border-current" />
      )}
      {t.projects.types[type].label}
    </Badge>
  );
}
