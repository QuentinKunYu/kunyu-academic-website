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
    title: "LLM Recommendations and the Decision Value of Missing Preferences",
    description:
      "A benchmark with an exact oracle for whether a consumer's undecided preferences can change the recommendation, used to test whether LLM recommenders ask about missing preferences when it matters.",
    researchQuestion:
      "When a consumer leaves a preference unstated, do LLM recommenders raise it because the recommendation depends on it, or only because the consumer mentioned it?",
    methods: [
      "Benchmark of 72 hotel-choice scenarios across 61 cities, built from HotelRec ratings",
      "Exact oracle for whether a consumer's undecided preferences can change the recommendation",
      "Paired requests (\u201cbook one\u201d vs. \u201cthe best three\u201d) that make the same missing preference decision-relevant in one condition but not the other",
      "2,160 queries to three frontier LLMs (GPT-5.6 Luna, Gemini 3.6 Flash, Claude Sonnet 5)",
      "Response types coded by three LLM annotators from providers outside the study, validated against blind human coding (\u03ba = 0.98, n = 100)",
      "95% scenario-cluster bootstrap intervals",
    ],
    contribution: ["First author. Designed the benchmark and oracle, ran the evaluation, and analyzed the results."],
    status: "Under review",
    affiliation: "Northwestern University",
    collaborators: ["Edward C. Malthouse (Northwestern University)"],
    outcomes: [
      "LLMs raised missing preferences mainly when consumers mentioned them, not when the recommendation depended on them.",
      "70\u201393% of responses addressed open preferences stated as undecided, but only 10\u201327% did when the same preferences went unmentioned.",
      "With complete preferences, the same models chose correctly 97\u2013100% of the time.",
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
      "Second author. Designed and ran the evaluation experiments and analyzed the results.",
      "Contributed to the research framing and co-wrote the manuscripts.",
    ],
    status: "arXiv preprint, 2026; related manuscripts under review",
    period: "Jan 2026 – Present",
    affiliation: "Northwestern University",
    collaborators: [
      "Edward C. Malthouse (Northwestern University)",
      "Jing Yang (Boston University)",
      "Sanchary Pal",
      "Xueyan Feng",
    ],
    outcomes: [
      "Category-only queries omit established brands (e.g., Craftsman, BRP@5 = 0%).",
      "Search interest is the most consistent predictor of recommendation prominence.",
      "Needs-based NDCG varies widely across brand-positioning dimensions.",
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
