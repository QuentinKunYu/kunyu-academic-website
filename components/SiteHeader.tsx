"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, FileIcon, MenuIcon } from "./Icons";
import { ProfileIconLinks, type ProfileEntry } from "./ProfileLinks";

const NAV = [
  { id: "about", label: "About", href: "/#about" },
  { id: "news", label: "News", href: "/#news" },
  { id: "publications", label: "Publications", href: "/publications" },
  { id: "research", label: "Research", href: "/#research" },
] as const;

export function SiteHeader({
  name,
  cvPath,
  profiles,
}: {
  name: string;
  cvPath: string;
  profiles: ProfileEntry[];
}) {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState<string | null>(null);
  const pathname = usePathname();
  const active = pathname.startsWith("/publications")
    ? "publications"
    : pathname.startsWith("/research/")
      ? "research"
      : scrollActive;

  // Compact header + highlight the section currently under the header
  useEffect(() => {
    const ids = [...NAV.map((n) => n.id), "contact"];
    let frame = 0;
    const update = () => {
      frame = 0;
      setCompact(window.scrollY > 24);
      const threshold = Math.min(window.innerHeight * 0.4, 320);
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setScrollActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      data-site-header
      className={`sticky top-0 z-40 bg-paper transition-[border-color] duration-200 ${
        compact || open ? "border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-[3px] focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>
      <div
        className={`mx-auto flex max-w-[1080px] items-center justify-between gap-6 px-5 transition-[height] duration-200 sm:px-8 ${
          compact ? "h-14" : "h-[72px]"
        }`}
      >
        <Link
          href="/"
          className="font-serif text-[20px] font-medium tracking-[-0.01em] text-ink hover:text-accent"
          onClick={() => setOpen(false)}
        >
          {name}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[14px]">
            {NAV.map((n) => (
              <li key={n.id}>
                <Link
                  href={n.href}
                  aria-current={active === n.id ? "true" : undefined}
                  className={`rounded-[3px] px-2.5 py-1.5 transition-colors hover:text-accent ${
                    active === n.id ? "text-accent" : "text-ink-2"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="ml-1">
              <a
                href={cvPath}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-[3px] border border-accent/40 px-2.5 py-1 text-accent transition-colors hover:border-accent hover:bg-accent-soft"
              >
                <FileIcon size={14} />
                CV
                <span className="sr-only">(PDF, opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ProfileIconLinks entries={profiles} />
        </div>

        {/* Mobile / tablet */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={cvPath}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-[3px] border border-accent/40 px-2.5 py-1 text-[13.5px] text-accent"
          >
            CV<span className="sr-only"> (PDF)</span>
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-[3px] text-ink-2 hover:bg-paper-2"
          >
            {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className="border-t border-rule lg:hidden">
        <nav aria-label="Mobile" className="mx-auto max-w-[1080px] px-5 py-3 sm:px-8">
          <ul className="grid gap-px text-[15px]">
            {NAV.map((n) => (
              <li key={n.id}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[3px] px-2 py-2.5 text-ink-2 hover:bg-paper-2 hover:text-accent"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <ProfileIconLinks entries={profiles} className="mt-2 border-t border-rule pt-3" />
        </nav>
      </div>
    </header>
  );
}
