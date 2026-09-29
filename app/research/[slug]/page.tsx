import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DraftBadge, Verify } from "@/components/Verify";
import { selfName } from "@/data/publications";
import { site } from "@/data/site";
import { visibleProjects, visiblePublications } from "@/lib/content";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return visibleProjects().map((p) => ({ slug: p.slug }));
}

function find(slug: string) {
  return visibleProjects().find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = find(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/research/${p.slug}` },
    openGraph: {
      type: "article",
      title: `${p.title} | ${site.name}`,
      description: p.description,
      url: `/research/${p.slug}`,
    },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-x-8 gap-y-2 border-t border-rule py-7 md:grid-cols-[168px_minmax(0,1fr)]">
      <h2 className="eyebrow pt-1">{title}</h2>
      <div className="min-w-0 text-[16px] leading-[1.7] text-ink-2">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = find(slug);
  if (!p) notFound();

  const pubs = visiblePublications().filter(
    (pub) => p.publications?.includes(pub.id) || pub.relatedProjects?.includes(p.slug),
  );

  return (
    <article className="mx-auto max-w-[1080px] px-5 pt-8 pb-20 sm:px-8 md:pt-12">
      <nav aria-label="Breadcrumb" className="text-[13.5px] text-muted">
        <Link href="/#research" className="hover:text-accent">
          ← Research
        </Link>
      </nav>

      <header className="mt-6 pb-8 md:pl-[200px]">
        <h1 className="max-w-[26ch] font-serif text-[34px] leading-[1.12] font-medium tracking-[-0.015em] sm:text-[40px]">
          {p.title}
          <DraftBadge draft={p.draft} />
        </h1>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">{p.description}</p>
        <p className="mt-4 text-[14px] text-muted">
          {[p.affiliation, p.period, p.status].filter(Boolean).join(" · ")}
        </p>
        {p.links && p.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {p.links.map((l) => (
              <a key={l.href} href={l.href} className="pill" target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        )}
        <Verify items={p.verify} />
      </header>

      <div className="max-w-[980px]">
        <Block title="Research question">
          <p className="font-serif text-[19px] leading-[1.55] text-ink">{p.researchQuestion}</p>
        </Block>

        {p.figures && p.figures.length > 0 && (
          <Block title="Figures">
            <div className="space-y-8">
              {p.figures.map((f, i) => (
                <figure key={f.src}>
                  <div className="rounded-[3px] border border-rule bg-white p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.src}
                      alt={f.alt}
                      width={f.width}
                      height={f.height}
                      loading="lazy"
                      className={`mx-auto h-auto w-full ${f.height > f.width ? "max-w-[380px]" : ""}`}
                    />
                  </div>
                  {f.caption && (
                    <figcaption className="mt-2 text-[13.5px] leading-snug text-muted">
                      <span className="font-medium text-ink-2">Figure {i + 1}.</span> {f.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
              {pubs.length > 0 && (
                <p className="text-[12.5px] text-muted">Figures from {pubs.find((x) => x.status === "preprint")?.title ?? "the associated paper"}.</p>
              )}
            </div>
          </Block>
        )}

        <Block title="Methods">
          <ul className="list-disc space-y-1 pl-4 marker:text-muted/50">
            {p.methods.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Block>

        {p.contribution && (
          <Block title="My contribution">
            <ul className="list-disc space-y-1 pl-4 marker:text-muted/50">
              {p.contribution.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Block>
        )}

        {p.outcomes && (
          <Block title="Outcomes">
            <ul className="list-disc space-y-1 pl-4 marker:text-muted/50">
              {p.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </Block>
        )}

        {p.collaborators && p.collaborators.length > 0 && (
          <Block title="Collaborators">
            <p>{p.collaborators.join(", ")}</p>
          </Block>
        )}

        {pubs.length > 0 && (
          <Block title="Publications">
            <ul className="space-y-4">
              {pubs.map((pub) => (
                <li key={pub.id}>
                  <Link href={`/publications#pub-${pub.id}`} className="font-serif text-[18px] text-ink hover:text-accent">
                    {pub.title}
                  </Link>
                  <p className="text-[14px] text-muted">
                    {pub.authors.map((a, i) => (
                      <span key={a}>
                        {i > 0 && ", "}
                        {a === selfName ? <strong className="font-semibold text-ink-2">{a}</strong> : a}
                      </span>
                    ))}
                    {pub.authors.length > 0 && ". "}
                    <em>{pub.venue}</em>, {pub.year}.
                  </p>
                </li>
              ))}
            </ul>
          </Block>
        )}
      </div>
    </article>
  );
}
