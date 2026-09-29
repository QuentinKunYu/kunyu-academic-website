import { showPlaceholders } from "@/data/site";

/**
 * Development-only note listing facts that still need confirmation.
 * Never rendered in production builds (unless NEXT_PUBLIC_SHOW_PLACEHOLDERS=1).
 */
export function Verify({ items, className = "" }: { items?: string[]; className?: string }) {
  if (!showPlaceholders || !items?.length) return null;
  return (
    <div
      role="note"
      className={`no-print mt-3 rounded-[3px] border border-dashed border-note/40 bg-note-bg px-3 py-2 text-[12.5px] leading-relaxed text-note ${className}`}
    >
      <span className="font-semibold">To verify</span>
      <span className="opacity-70"> · visible in development only</span>
      <ul className="mt-1 list-disc pl-4">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

/** Marks a whole entry as draft (hidden in production). */
export function DraftBadge({ draft }: { draft?: boolean }) {
  if (!showPlaceholders || !draft) return null;
  return (
    <span className="no-print ml-2 inline-block rounded-[3px] border border-dashed border-note/50 bg-note-bg px-1.5 py-px align-middle text-[10.5px] font-semibold uppercase tracking-wider text-note">
      Draft · hidden in production
    </span>
  );
}
