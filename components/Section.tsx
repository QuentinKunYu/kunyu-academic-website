import type { ReactNode } from "react";

/**
 * Editorial section: heading in a narrow left column on desktop,
 * content in a comfortable reading column on the right.
 */
export function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-rule">
      <div className="mx-auto grid max-w-[1080px] gap-x-12 gap-y-6 px-5 py-14 sm:px-8 md:grid-cols-[168px_minmax(0,1fr)] md:py-20">
        <div>
          <h2
            id={headingId}
            className="font-serif text-[26px] leading-tight font-medium tracking-[-0.01em] md:sticky md:top-24 md:text-[24px]"
          >
            {title}
          </h2>
          {kicker ? <p className="mt-2 text-[13px] leading-snug text-muted">{kicker}</p> : null}
        </div>
        <div className="max-w-[780px] min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="eyebrow mb-5">{children}</h3>;
}
