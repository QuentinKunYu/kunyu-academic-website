/**
 * Shared content types.
 *
 * Placeholder convention
 * ----------------------
 * - `verify`: a list of notes describing facts that still need to be confirmed
 *   or filled in. They are rendered as visible notes in development only
 *   (or when NEXT_PUBLIC_SHOW_PLACEHOLDERS=1) and never in production.
 * - `draft: true`: the whole entry is unverified and is hidden in production.
 * - Optional fields left `undefined` are simply not rendered.
 *
 * Run `npm run todo` to list every outstanding placeholder.
 */

export type Link = {
  label: string;
  href: string;
};

export type Figure = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Publication = {
  id: string;
  title: string;
  /** Leave empty if the author list is not yet public; nothing is rendered. */
  authors: string[];
  year: number;
  /** e.g. "arXiv preprint" or "Proceedings of …". Never label a preprint as accepted. */
  venue: string;
  /** Optional extra line, e.g. a related conference version. */
  note?: string;
  status: "preprint" | "submitted" | "in preparation" | "accepted" | "published";
  /** Show under "Selected Publications" on the homepage. */
  selected?: boolean;
  abstract?: string;
  paperUrl?: string;
  arxivUrl?: string;
  arxivId?: string;
  codeUrl?: string;
  bibtex?: string;
  /** Small teaser figure shown next to the entry. */
  thumbnail?: Figure;
  /** slugs of related projects in data/projects.ts */
  relatedProjects?: string[];
  verify?: string[];
  draft?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  /** One-sentence summary used in lists and metadata. */
  description: string;
  researchQuestion: string;
  methods: string[];
  /** Your own contribution. Leave undefined rather than guessing. */
  contribution?: string[];
  status: string;
  period?: string;
  affiliation?: string;
  collaborators?: string[];
  outcomes?: string[];
  links?: Link[];
  /** ids of related publications in data/publications.ts */
  publications?: string[];
  /** Figures shown on the project page. */
  figures?: Figure[];
  verify?: string[];
  draft?: boolean;
};

/** Earlier, smaller research shown below the main projects. */
export type EarlierResearch = {
  title: string;
  role: string;
  affiliation: string;
  advisor: string;
  period: string;
  bullets: string[];
};

export type NewsItem = {
  /** Display date, e.g. "Sep 2026" */
  date: string;
  text: string;
  link?: Link;
  verify?: string[];
  draft?: boolean;
};

export type EducationEntry = {
  institution: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  details?: string[];
  verify?: string[];
};
