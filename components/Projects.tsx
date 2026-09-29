import Link from "next/link";
import { earlierResearch } from "@/data/projects";
import type { Project } from "@/data/types";
import { visibleProjects } from "@/lib/content";
import { ArrowIcon } from "./Icons";
import { Section } from "./Section";
import { DraftBadge, Verify } from "./Verify";

function ProjectItem({ project: p }: { project: Project }) {
  const meta = [p.affiliation, p.period, p.status].filter(Boolean).join(" · ");
  return (
    <li className="py-7 first:pt-0">
      <article aria-labelledby={`proj-${p.slug}`}>
        <h3 id={`proj-${p.slug}`} className="font-serif text-[20px] leading-snug font-medium">
          <Link href={`/research/${p.slug}`} className="hover:text-accent">
            {p.title}
          </Link>
          <DraftBadge draft={p.draft} />
        </h3>
        {meta && <p className="mt-1 text-[13.5px] text-muted">{meta}</p>}
        <p className="mt-2.5 text-[15.5px] leading-[1.7] text-ink-2">{p.researchQuestion}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {p.links?.map((l) => (
            <a key={l.href} href={l.href} className="pill" target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
          <Link
            href={`/research/${p.slug}`}
            className="inline-flex items-center gap-1 text-[13.5px] font-medium text-accent hover:underline"
          >
            Details<span className="sr-only">: {p.title}</span>
            <ArrowIcon size={13} />
          </Link>
        </div>
        <Verify items={p.verify} />
      </article>
    </li>
  );
}

export function Projects() {
  return (
    <Section id="research" title="Research">
      <ol className="divide-y divide-rule">
        {visibleProjects().map((p) => (
          <ProjectItem key={p.slug} project={p} />
        ))}
      </ol>

      {earlierResearch.length > 0 && (
        <div className="mt-12 border-t border-rule pt-8">
          <h3 className="eyebrow mb-6">Earlier Research</h3>
          <ol className="space-y-7">
            {earlierResearch.map((r) => (
              <li key={r.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <h4 className="text-[16px] font-semibold text-ink">{r.title}</h4>
                  <span className="text-[13px] whitespace-nowrap text-muted tabular-nums">{r.period}</span>
                </div>
                <p className="mt-0.5 text-[13.5px] text-muted">
                  {r.role}, {r.affiliation} · with {r.advisor}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[14.5px] leading-[1.65] text-ink-2 marker:text-muted/50">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      )}
    </Section>
  );
}
