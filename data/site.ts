/**
 * Identity, profile links, and global site settings.
 *
 * Any link set to `null` is treated as a placeholder: it is hidden in
 * production and shown as a "to add" note in development.
 */

export const site = {
  name: "Kun-Yu Lee",
  url: "https://quentinkunyu.com",
  title: "Kun-Yu Lee | LLM Evaluation, NLP & Machine Learning",
  description:
    "Kun-Yu Lee is a Master's student in Machine Learning and Data Science at Northwestern University researching how LLM-based recommender systems make decisions under uncertainty: when they should ask, what they surface, and whether their behavior can be audited.",

  position: "Master's Student in Machine Learning & Data Science",
  affiliation: "Northwestern University",
  affiliationUrl: "https://www.northwestern.edu",
  location: "Evanston, IL",

  email: "kun-yulee2027@u.northwestern.edu",

  /** Place the PDF at public/cv/Kun-Yu_Lee_CV.pdf */
  cvPath: "/cv/Kun-Yu_Lee_CV.pdf",

  headshot: {
    src: "/images/kun-yu-lee-casual-v4.jpg",
    alt: "Portrait of Kun-Yu Lee",
    width: 960,
    height: 1200,
  },

  /** Hero paragraphs. Keep factual and consistent with the CV. */
  intro: [
    "I work with Edward C. Malthouse (Northwestern University) and Jing Yang (Boston University) on evaluating LLM-based recommender systems.",
    "My research asks how LLM-based recommenders decide under uncertainty: when a missing preference is worth a clarifying question, which options they retrieve and rank, and whether this behavior can be reproducibly audited.",
  ],

  applying: "I am applying to PhD programs for Fall 2027.",

  /** Used for schema.org `knowsAbout` and meta keywords. */
  keywords: [
    "Kun-Yu Lee",
    "Northwestern University",
    "Large Language Models",
    "LLM evaluation",
    "LLM auditing",
    "Natural Language Processing",
    "Information Retrieval",
    "Recommender systems",
    "Conversational recommendation",
    "Clarifying questions",
    "Machine Learning",
  ],

  links: {
    // TODO(verify): paste your Google Scholar profile URL, e.g. https://scholar.google.com/citations?user=XXXX
    scholar: null as string | null,
    // TODO(verify): paste your ORCID iD URL, e.g. https://orcid.org/0000-0000-0000-0000
    orcid: null as string | null,
    github: "https://github.com/QuentinKunYu",
    linkedin: "https://www.linkedin.com/in/kun-yu-lee-713a07279",
  },
} as const;

/**
 * arXiv author listing. arXiv author IDs are assigned per account, so until you
 * claim yours this falls back to a plain author search.
 * TODO(verify): replace with your arXiv author page (https://arxiv.org/a/<id>) once claimed.
 */
export const arxivAuthorUrl =
  "https://arxiv.org/search/?searchtype=author&query=Lee%2C+Kun-Yu";

export const showPlaceholders =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "1";

export type ProfileKey = "scholar" | "orcid" | "github" | "linkedin";

export const profileLabels: Record<ProfileKey, string> = {
  scholar: "Google Scholar",
  orcid: "ORCID",
  github: "GitHub",
  linkedin: "LinkedIn",
};

export function profileUrl(key: ProfileKey): string | null {
  return site.links[key];
}
