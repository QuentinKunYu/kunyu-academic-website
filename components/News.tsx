import Link from "next/link";
import { news } from "@/data/news";
import { visible } from "@/lib/content";
import { Section } from "./Section";
import { DraftBadge, Verify } from "./Verify";

export function News() {
  const items = visible(news);
  if (items.length === 0) return null;
  return (
    <Section id="news" title="News">
      <ul className="space-y-3">
        {items.map((n) => (
          <li key={n.date + n.text} className="grid gap-x-6 gap-y-0.5 sm:grid-cols-[84px_minmax(0,1fr)]">
            <span className="text-[13.5px] leading-[1.65] whitespace-nowrap text-muted tabular-nums">{n.date}</span>
            <div className="text-[15.5px] leading-[1.65] text-ink-2">
              {n.text}
              {n.link && (
                <>
                  {" "}
                  {n.link.href.startsWith("/") ? (
                    <Link href={n.link.href} className="link">
                      [{n.link.label}]
                    </Link>
                  ) : (
                    <a href={n.link.href} className="link" target="_blank" rel="noopener noreferrer">
                      [{n.link.label}]
                    </a>
                  )}
                </>
              )}
              <DraftBadge draft={n.draft} />
              <Verify items={n.verify} />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
