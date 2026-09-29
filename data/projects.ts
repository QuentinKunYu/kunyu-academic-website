import type { EarlierResearch, Project } from "./types";

/**
 * Selected research projects, in display order.
 *
 * Keep this list short and research-focused. Leave `contribution` or
 * `outcomes` undefined (with a `verify` note) rather than guessing.
 */
export const projects: Project[] = [
  {
    slug: "clarifying-questions-llm-recommenders",
    title: "When Should an LLM Recommender Ask?",
    description:
      "An exact-oracle benchmark for deciding when a clarifying question in LLM-based conversational recommendation could actually change the optimal recommendation.",
    researchQuestion:
      "When is a clarifying question worth asking? For a given request, can a clarifying question change the optimal recommendation, and do LLM recommenders ask only when it can?",
    methods: [
      "Exact-oracle benchmark that determines, for each request, whether a clarifying question could change the optimal recommendation",
      "Evaluation of three frontier LLMs in decision-determined and request-dependent cases",
      "Direct probing of whether models recognize that a question is unnecessary",
      "Prompt intervention: stating the decision criterion explicitly",
      "Ongoing: extending the oracle to request-dependent clarification on a real-world hotel catalog",
    ],
    contribution: [
      "First author. Designed the exact-oracle benchmark and ran the evaluation across three frontier LLMs.",
    ],
    status: "To be submitted to ECIR 2027 (short paper track)",
    affiliation: "Northwestern University",
    collaborators: ["Edward C. Malthouse (Northwestern University)"],
    outcomes: [
      "Across three frontier LLMs, 77–93% of the clarifying questions asked in decision-determined cases could not change the optimal recommendation.",
      "The models recognized that these questions were unnecessary when asked directly.",
      "Stating the decision criterion in the prompt largely eliminated these questions.",
    ],
    publications: ["lee2027clarification"],
  },
  {
    slug: "llm-brand-retrieval",
    title: "Auditing Brand Recommendations in LLMs",
    description:
      "A framework that audits open-ended LLM brand recommendations as a stochastic retrieval-and-ranking process.",
    researchQuestion:
      "When an LLM recommends brands without an explicit candidate set, which brands does it retrieve, how prominently are they ranked, and what does its implicit \u201cbrand image\u201d look like?",
    methods: [
      "Six commercial LLMs across five product and service categories",
      "Repeated stateless sampling of category-only and needs-based queries",
      "BRP@k and MRR@k for recommendation prevalence and prominence; NDCG for need-matching",
      "Coding of 17,821 LLM justifications into eight brand-association types",
    ],
    contribution: [
      "Second author. Contributed to research framing and experimental design.",
      "Ran the evaluation experiments, organized and analyzed results, and co-wrote parts of the manuscripts.",
    ],
    status: "arXiv preprint, 2026; manuscripts under review and in preparation",
    period: "Jan 2026 – Present",
    affiliation: "Northwestern University",
    collaborators: [
      "Edward C. Malthouse (Northwestern University)",
      "Jing Yang (Boston University)",
      "Sanchary Pal",
      "Xueyan Feng",
    ],
    outcomes: [
      "Category-only queries omit many established brands.",
      "Recommendation prominence tracks search interest and online brand conversation more than conventional brand popularity.",
      "Needs-based queries change which brands are retrieved, and NDCG need-matching varies widely across positioning dimensions.",
      "In the \u201cmachine brand image,\u201d price tier is the strongest marketplace correlate, while advertising spending shows no association.",
    ],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2609.16304" },
      { label: "PDF", href: "https://arxiv.org/pdf/2609.16304" },
    ],
    publications: ["malthouse2026brand", "silent-gatekeeper-jar", "machine-brand-image-aaa"],
    figures: [
      {
        src: "/figures/brand-retrieval-framework.svg",
        alt: "Five-step framework: define competitive set; measure prevalence and prominence with category-only prompts; explore marketplace correlates; match brands with consumer needs using needs-based prompts; diagnose LLM brand understanding with positioning probes",
        width: 288,
        height: 389,
        caption: "A five-step framework for auditing LLM brand recommendations.",
      },
      {
        src: "/figures/brand-retrieval-mrr.svg",
        alt: "Scatter plots of MRR@5 against log advertising spend, faceted by product category",
        width: 504,
        height: 360,
        caption: "LLM recommendation prominence (MRR@5) vs. advertising expenditure, by product category.",
      },
    ],
    verify: ["Add the code/data repository link."],
  },
  {
    slug: "research-net-agentic-benchmarking",
    title: "Benchmarking and Advancing Agentic Orchestration",
    description:
      "Capstone practicum with Research Net.AI: systematically benchmarking deployed LLM agents that turn research into production-grade software.",
    researchQuestion:
      "How can the performance of deployed multi-agent systems for automated software engineering be measured systematically, and where do their natural language understanding (NLU) pipelines break down?",
    methods: [
      "Standardized benchmark suites to quantify agent performance",
      "Stress-testing of existing agentic architectures",
      "Analysis of NLU bottlenecks in artifact generation",
      "Multi-agent orchestration in a production environment",
    ],
    contribution: undefined,
    status: "In progress",
    affiliation: "Northwestern University × Research Net.AI (industry capstone)",
    links: [{ label: "Research Net.AI", href: "https://researchnet.ai/" }],
    verify: [
      "Add dates (e.g., 'Sep 2026 – Present') and your team / advisor.",
      "Describe your own contribution once work is underway.",
      "The project is under NDA — confirm this public description is OK to post.",
      "Add the arXiv paper / GitHub repo when released (planned deliverables).",
    ],
  },
];

/** Undergraduate research, shown under "Earlier Research". Source: CV. */
export const earlierResearch: EarlierResearch[] = [
  {
    title: "Viral Genomics Web Tool",
    role: "Undergraduate Research Assistant",
    affiliation: "University of Nebraska–Lincoln",
    advisor: "Qiuming Yao",
    period: "May 2024 – May 2025",
    bullets: [
      "Built a scalable backend with reproducible, schema-validated pipelines to collect, clean, and integrate heterogeneous, large-scale genomic metadata, including deduplication, missing-value handling, and field normalization.",
      "Implemented automated validation and indexing/caching for real-time responsiveness to user-uploaded datasets.",
      "Developed an interactive web tool integrating IGV (Integrative Genomics Viewer) and geographic mapping for querying mutation patterns, regional impacts, and temporal trends across virus lineages.",
    ],
  },
  {
    title: "EV Adoption Study",
    role: "Undergraduate Research Assistant",
    affiliation: "University of Nebraska–Lincoln",
    advisor: "Jason Fraser Hawkins",
    period: "Nov 2023 – May 2024",
    bullets: [
      "Constructed analysis-ready features linking consumer adoption behavior to infrastructure, geography, and time, harmonized from multiple heterogeneous data sources.",
      "Evaluated regression and tree-based models with an emphasis on interpretable, decision-relevant patterns.",
      "Communicated findings through visual analysis to guide iterative model refinement.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
