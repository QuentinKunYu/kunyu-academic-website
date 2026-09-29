import { site } from "@/data/site";
import { MailIcon } from "./Icons";
import { profileEntries, profileIcons } from "./ProfileLinks";
import { Section } from "./Section";

export function Contact() {
  const profiles = profileEntries();
  return (
    <Section id="contact" title="Contact">
      <p className="text-[16px] leading-relaxed text-ink-2">
        I&rsquo;m always happy to discuss research, collaboration, or PhD opportunities.
      </p>
      <ul className="mt-6 grid gap-2.5 text-[15px]">
        <li className="flex items-center gap-3">
          <MailIcon size={16} className="text-muted" />
          <a href={`mailto:${site.email}`} className="link break-all">
            {site.email}
          </a>
        </li>
        {profiles.map(({ key, label, href }) => {
          const Icon = profileIcons[key];
          return (
            <li key={key} className="flex items-center gap-3">
              <Icon size={16} className="text-muted" />
              {href ? (
                <a href={href} className="link" target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ) : (
                <span className="text-note">{label} — URL not set (dev only)</span>
              )}
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-[13.5px] text-muted">{site.affiliation} · {site.location}</p>
    </Section>
  );
}
