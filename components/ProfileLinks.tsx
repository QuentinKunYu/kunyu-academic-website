import { site, profileLabels, showPlaceholders, type ProfileKey } from "@/data/site";
import { GithubIcon, LinkedinIcon, OrcidIcon, ScholarIcon } from "./Icons";

const ORDER: ProfileKey[] = ["scholar", "orcid", "github", "linkedin"];

export const profileIcons = {
  scholar: ScholarIcon,
  orcid: OrcidIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
} as const;

export type ProfileEntry = {
  key: ProfileKey;
  label: string;
  href: string | null;
};

/** Profiles to display. Missing URLs are only included in development. */
export function profileEntries(): ProfileEntry[] {
  return ORDER.map((key) => ({
    key,
    label: profileLabels[key],
    href: site.links[key],
  })).filter((e) => e.href || showPlaceholders);
}

/** Compact icon-only row (navbar). */
export function ProfileIconLinks({
  entries,
  size = 16,
  className = "",
}: {
  entries: ProfileEntry[];
  size?: number;
  className?: string;
}) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {entries.map(({ key, label, href }) => {
        const Icon = profileIcons[key];
        if (!href) {
          return (
            <li key={key}>
              <span
                title={`${label} URL not set — edit data/site.ts`}
                className="grid h-8 w-8 place-items-center rounded-[3px] border border-dashed border-note/50 text-note/70"
              >
                <Icon size={size} />
                <span className="sr-only">{label} (not configured)</span>
              </span>
            </li>
          );
        }
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              title={label}
              className="grid h-8 w-8 place-items-center rounded-[3px] text-muted transition-colors hover:bg-paper-2 hover:text-accent"
            >
              <Icon size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
