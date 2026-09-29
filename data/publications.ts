import type { Publication } from "./types";

/**
 * Publications, newest first.
 *
 * Only list work that is publicly verifiable. Preprints must keep
 * `status: "preprint"` until formally accepted.
 */
export const publications: Publication[] = [
  {
    id: "lee2027clarification",
    title:
      "When Is a Clarifying Question Worth Asking? Request-Dependent Clarification in LLM-Based Conversational Recommendation",
    authors: ["Kun-Yu Lee", "Edward C. Malthouse"],
    year: 2026,
    venue: "To be submitted to the European Conference on Information Retrieval (ECIR 2027), short paper track",
    status: "in preparation",
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
    note: "A conference version, \u201cEvaluating Brand Retrieval and Ranking in Open-Ended LLM Recommendations,\u201d is to be submitted to ECIR 2027.",
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
    venue: "Under review at the Journal of Advertising Research (JAR)",
    status: "submitted",
    relatedProjects: ["llm-brand-retrieval"],
  },
  {
    id: "machine-brand-image-aaa",
    title: "The Machine Brand Image: Evaluating LLM Recommendations Across Prompts and Models",
    authors: ["Jing Yang", "Kun-Yu Lee", "et al."],
    year: 2026,
    venue: "To be submitted to the American Academy of Advertising (AAA) 2027 Conference",
    status: "in preparation",
    relatedProjects: ["llm-brand-retrieval"],
  },
];

/** The name to emphasize in author lists. */
export const selfName = "Kun-Yu Lee";
