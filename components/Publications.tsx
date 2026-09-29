import { Fragment } from "react";
import { selfName } from "@/data/publications";
import type { Publication } from "@/data/types";
import { arxivAuthorUrl, site } from "@/data/site";
import { groupPublications, isManuscript, visiblePublications } from "@/lib/content";
import { BibtexButton } from "./BibtexButton";
import { Section } from "./Section";
import { DraftBadge, Verify } from "./Verify";

const STATUS_LABEL: Record<Publication["status"], string> = {
  preprint: "Preprint",
  submitted: "Under review",
  "in preparation": "In preparation",
  accepted: "Accepted",
  published: "Published",
};

function Authors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((a, i) => (
        <Fragment key={a}>
          {i > 0 &&
            (i === authors.length - 1 && a !== "et al." ? (authors.length > 2 ? ", and " : " and ") : ", ")}
          {a === selfName ? (
            <strong className="font-semibold text-ink">{a}</strong>
          ) : (
            <span className="whitespace-nowrap">{a}</span>
          )}
        </Fragment>
      ))}
    </>
  );
}

function PublicationItem({ pub }: { pub: Publication }) {
  const links = [
    pub.paperUrl && { label: "Paper", href: pub.paperUrl },
    pub.arxivUrl && { label: "arXiv", href: pub.arxivUrl },
    pub.codeUrl && { label: "Code", href: pub.codeUrl },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <li id={`pub-${pub.id}`} className="scroll-mt-24 py-6 first:pt-0">
      <article
        className={pub.thumbnail ? "grid gap-x-6 gap-y-4 sm:grid-cols-[200px_minmax(0,1fr)]" : undefined}
      >
        {pub.thumbnail && (
          <a
            href={pub.arxivUrl ?? pub.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="block self-start rounded-[3px] border border-rule bg-white p-1.5 transition-colors hover:border-accent/50 max-sm:max-w-[320px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pub.thumbnail.src}
              alt={pub.thumbnail.alt}
              width={pub.thumbnail.width}
              height={pub.thumbnail.height}
              loading="lazy"
              className="h-auto w-full"
            />
          </a>
        )}
        <div className="min-w-0">
        <h4 className="font-serif text-[19px] leading-snug font-medium text-ink">
          {pub.paperUrl || pub.arxivUrl ? (
            <a href={pub.arxivUrl ?? pub.paperUrl} className="hover:text-accent" target="_blank" rel="noopener noreferrer">
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
          <DraftBadge draft={pub.draft} />
        </h4>
        {pub.authors.length > 0 && (
          <p className="mt-1.5 text-[14.5px] leading-relaxed break-words text-ink-2">
            <Authors authors={pub.authors} />
          </p>
        )}
        <p className="mt-1 text-[14px] text-muted">
          <em>{pub.venue}</em>
          {pub.arxivId && <> arXiv:{pub.arxivId}</>}
          {!isManuscript(pub) && <>, {pub.year}</>}
          <span className="ml-2 inline-block rounded-[3px] border border-rule px-1.5 py-px align-[1px] text-[11px] font-medium tracking-wide text-muted not-italic">
            {STATUS_LABEL[pub.status]}
          </span>
        </p>
        {pub.note && <p className="mt-1 text-[13.5px] text-muted">{pub.note}</p>}
        {pub.abstract && (
          <p className="mt-2.5 max-w-[70ch] text-[14px] leading-relaxed text-muted">{pub.abstract}</p>
        )}
        {(links.length > 0 || pub.bibtex) && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="pill" target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
          {pub.bibtex && <BibtexButton bibtex={pub.bibtex} />}
        </div>
        )}
        <Verify items={pub.verify} />
        </div>
      </article>
    </li>
  );
}

export function PublicationGroups({ pubs }: { pubs: Publication[] }) {
  const groups = groupPublications(pubs);
  if (groups.length === 0) return <p className="text-ink-2">Publications will be listed here.</p>;
  return (
    <div className="space-y-10">
      {groups.map((g) => (
        <div key={g.label}>
          <h3 className="mb-4 flex items-center gap-3 font-serif text-[15px] text-muted">
            {g.label}
            <span className="h-px flex-1 bg-rule" aria-hidden="true" />
          </h3>
          <ol className="divide-y divide-rule">
            {g.items.map((p) => (
              <PublicationItem key={p.id} pub={p} />
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export function SeeAlso() {
  return (
    <p className="text-[13.5px] text-muted">
      See also{" "}
      {site.links.scholar ? (
        <>
          <a href={site.links.scholar} className="link" target="_blank" rel="noopener noreferrer">
            Google Scholar
          </a>{" "}
          and{" "}
        </>
      ) : null}
      <a href={arxivAuthorUrl} className="link" target="_blank" rel="noopener noreferrer">
        arXiv
      </a>
      .
    </p>
  );
}

/** Homepage section: only entries marked `selected`. */
export function SelectedPublications() {
  const selected = visiblePublications().filter((p) => p.selected);
  return (
    <Section id="publications" title="Selected Publications">
      <ol className="divide-y divide-rule">
        {selected.map((p) => (
          <PublicationItem key={p.id} pub={p} />
        ))}
      </ol>
    </Section>
  );
}
