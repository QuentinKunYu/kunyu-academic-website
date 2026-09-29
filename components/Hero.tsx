import Image from "next/image";
import { site } from "@/data/site";
import { EducationBrief } from "./Education";
import { FileIcon, MailIcon } from "./Icons";
import { profileEntries, profileIcons } from "./ProfileLinks";

export function Hero() {
  const profiles = profileEntries();

  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-[1080px] items-start gap-x-14 gap-y-8 px-5 pt-10 pb-14 sm:px-8 md:grid-cols-[minmax(0,1fr)_250px] lg:grid-cols-[minmax(0,1fr)_290px] md:pt-16 md:pb-16">
        <div className="fade-in order-2 min-w-0 md:order-1">
          <h1
            id="about-heading"
            className="font-serif text-[40px] leading-[1.05] font-medium tracking-[-0.02em] sm:text-[48px]"
          >
            {site.name}
          </h1>
          <p className="mt-3 text-[16px] leading-snug text-ink-2">
            {site.position},{" "}
            <a href={site.affiliationUrl} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              {site.affiliation}
            </a>
          </p>

          <div className="mt-6 max-w-[64ch] space-y-4 text-[16.5px] leading-[1.7] text-ink-2">
            {site.intro.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <p className="font-medium text-ink">{site.applying}</p>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-2" aria-label="Links">
            <li>
              <a
                href={site.cvPath}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-[3px] border border-accent bg-accent px-3 py-1.5 text-[13.5px] font-medium text-white transition-colors hover:bg-[#3d2069]"
              >
                <FileIcon size={14} />
                CV<span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 rounded-[3px] border border-rule bg-white px-3 py-1.5 text-[13.5px] text-ink-2 transition-colors hover:border-accent hover:text-accent"
              >
                <MailIcon size={14} />
                Email
              </a>
            </li>
            {profiles.map(({ key, label, href }) => {
              const Icon = profileIcons[key];
              return (
                <li key={key}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-[3px] border border-rule bg-white px-3 py-1.5 text-[13.5px] text-ink-2 transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ) : (
                    <span
                      title="URL not set — edit data/site.ts"
                      className="inline-flex items-center gap-1.5 rounded-[3px] border border-dashed border-note/50 bg-note-bg px-3 py-1.5 text-[13.5px] text-note"
                    >
                      <Icon size={14} />
                      {label} · add URL
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          <EducationBrief />
        </div>

        <div className="fade-in-delay order-1 md:order-2">
          <Image
            src={site.headshot.src}
            alt={site.headshot.alt}
            width={site.headshot.width}
            height={site.headshot.height}
            priority
            sizes="(min-width: 1024px) 290px, (min-width: 768px) 250px, 200px"
            className="aspect-[4/5] w-[200px] rounded-[2px] border border-rule object-cover md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
