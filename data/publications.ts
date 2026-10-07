import type { Publication } from "./types";

/**
 * Publications, newest first.
 *
 * Only list work that is publicly verifiable. Preprints must keep
 * `status: "preprint"` until formally accepted.
 *
 * Papers under double-anonymous review are listed as "Manuscript" without
 * naming the venue (common practice; see each entry's `submittedTo` comment).
 * Add the venue once a paper is accepted.
 */
export const publications: Publication[] = [
  {
    id: "lee2027clarification",
    title:
      "Evaluating Whether LLM Recommendations Respond to the Decision Value of Missing Preferences",
    authors: ["Kun-Yu Lee", "Edward C. Malthouse"],
    year: 2026,
    // submittedTo: ECIR 2027 short paper track (Oct 2026); notification 7 Dec 2026
    venue: "Manuscript",
    status: "submitted",
    selected: true,
    relatedProjects: ["clarifying-questions-llm-recommenders"],
  },
  {
    id: "malthouse2026brand",
    title:
      "Evaluating Brand Retrieval and Ranking in Large Language Model Recommendations",
    authors: [
      "Edward C. Malthouse",
      "Kun-Yu Lee",
      "Jing Yang",
      "Sanchary Pal",
      "Xueyan Feng",
    ],
    year: 2026,
    venue: "arXiv preprint",
    // submittedTo: shorter version under review at ECIR 2027 (full papers); notification 7 Dec 2026
    note: "A shorter version is under review.",
    status: "preprint",
    selected: true,
    arxivId: "2609.16304",
    arxivUrl: "https://arxiv.org/abs/2609.16304",
    paperUrl: "https://arxiv.org/pdf/2609.16304",
    // TODO(verify): the paper states open-source software and data are provided — add the repository URL.
    codeUrl: undefined,
    abstract:
      "Proposes a framework for evaluating open-ended LLM brand recommendations that defines the competitive set independently of model outputs and estimates recommendation prevalence and prominence through repeated sampling (BRP@k, MRR@k), applied to six LLMs across five product categories.",
    relatedProjects: ["llm-brand-retrieval"],
    thumbnail: {
      src: "/figures/brand-retrieval-mrr.svg",
      alt: "Scatter plots of LLM recommendation prominence (MRR) against log advertising spend for five product categories",
      width: 504,
      height: 360,
    },
    bibtex: `@misc{malthouse2026evaluating,
  title         = {Evaluating Brand Retrieval and Ranking in Large Language Model Recommendations},
  author        = {Malthouse, Edward and Lee, Kun-Yu and Yang, Jing and Pal, Sanchary and Feng, Xueyan},
  year          = {2026},
  eprint        = {2609.16304},
  archivePrefix = {arXiv},
  primaryClass  = {cs.IR},
  url           = {https://arxiv.org/abs/2609.16304}
}`,
    verify: ["Add the code/data repository URL referenced in the paper."],
  },
  {
    id: "silent-gatekeeper-jar",
    title:
      "The Silent Gatekeeper: A Framework for Measuring, Explaining, and Diagnosing Brand Visibility in LLM Recommendations",
    authors: ["Edward C. Malthouse", "Kun-Yu Lee", "Jing Yang", "Sanchary Pal", "Xueyan Feng"],
    year: 2026,
    // submittedTo: Journal of Advertising Research
    venue: "Manuscript",
    status: "submitted",
    relatedProjects: ["llm-brand-retrieval"],
  },
  {
    id: "machine-brand-image-aaa",
    title: "The Machine Brand Image: Evaluating LLM Recommendations Across Prompts and Models",
    authors: ["Jing Yang", "Kun-Yu Lee", "Sanchary Pal", "Xueyan Feng", "Edward C. Malthouse"],
    year: 2026,
    // submittedTo: American Academy of Advertising (AAA) 2027 Conference
    venue: "Manuscript",
    status: "submitted",
    relatedProjects: ["llm-brand-retrieval"],
  },
];

/** The name to emphasize in author lists. */
export const selfName = "Kun-Yu Lee";
