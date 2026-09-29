import type { NewsItem } from "./types";

/** Recent updates, newest first. Keep 3–6 items; older ones can be deleted. */
export const news: NewsItem[] = [
  {
    date: "Sep 2026",
    text: "Started an industry capstone with Research Net.AI on benchmarking agentic orchestration.",
    link: { label: "Project", href: "/research/research-net-agentic-benchmarking" },
    draft: true,
    verify: ["Confirm the start month, then remove `draft: true`."],
  },
  {
    date: "Sep 2026",
    text: "Preprint on evaluating brand retrieval and ranking in LLM recommendations is now on arXiv.",
    link: { label: "arXiv", href: "https://arxiv.org/abs/2609.16304" },
  },
  {
    date: "Sep 2026",
    text: "Submitted “The Silent Gatekeeper” to the Journal of Advertising Research.",
  },
];
