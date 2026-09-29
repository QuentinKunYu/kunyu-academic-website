"use client";

import { useId, useState } from "react";

export function BibtexButton({ bibtex }: { bibtex: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const panelId = useId();

  async function copy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the text is still selectable */
    }
  }

  return (
    <>
      <button
        type="button"
        className="pill"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        BibTeX
      </button>
      <div id={panelId} hidden={!open} className="basis-full">
        <div className="relative mt-2 rounded-[3px] border border-rule bg-paper-2">
          <pre className="overflow-x-auto p-3 pr-16 font-mono text-[12px] leading-relaxed text-ink-2">
            <code>{bibtex}</code>
          </pre>
          <button
            type="button"
            onClick={copy}
            className="absolute top-2 right-2 rounded-[3px] border border-rule bg-white px-2 py-1 text-[11.5px] text-muted hover:text-accent"
          >
            {copied ? "Copied" : "Copy"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "BibTeX copied to clipboard" : ""}
          </span>
        </div>
      </div>
    </>
  );
}
