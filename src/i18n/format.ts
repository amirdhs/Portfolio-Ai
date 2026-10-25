export interface PluralForms {
  one: string;
  other: string;
}

/** Picks the singular/plural template and fills in `{n}`. Serializable, so usable across the client boundary. */
export function plural(n: number, forms: PluralForms): string {
  return (n === 1 ? forms.one : forms.other).replace("{n}", String(n));
}
