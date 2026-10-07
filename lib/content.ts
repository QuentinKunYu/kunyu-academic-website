import { showPlaceholders } from "@/data/site";
import { publications } from "@/data/publications";
import { projects } from "@/data/projects";
import type { Publication } from "@/data/types";

/** Drop `draft` entries in production. */
export function visible<T extends { draft?: boolean }>(items: T[]): T[] {
  return showPlaceholders ? items : items.filter((i) => !i.draft);
}

export const visiblePublications = () => visible(publications);
export const visibleProjects = () => visible(projects);

/** Manuscripts that are submitted or in preparation (not yet public). */
export const isManuscript = (p: Publication) =>
  p.status === "submitted" || p.status === "in preparation";

/**
 * Group public work as: most recent year, the year before, then "Earlier";
 * submitted / in-preparation manuscripts go in a final group.
 * Only non-empty groups are returned.
 */
export function groupPublications(pubs: Publication[]) {
  const released = pubs.filter((p) => !isManuscript(p)).sort((a, b) => b.year - a.year);
  const manuscripts = pubs.filter(isManuscript);
  const buckets = new Map<string, Publication[]>();
  const latest = released[0]?.year ?? 0;
  for (const p of released) {
    const key = p.year >= latest - 1 ? String(p.year) : "Earlier";
    buckets.set(key, [...(buckets.get(key) ?? []), p]);
  }
  const groups = [...buckets.entries()].map(([label, items]) => ({ label, items }));
  if (manuscripts.length > 0) {
    groups.push({ label: "Under review", items: manuscripts });
  }
  return groups;
}
