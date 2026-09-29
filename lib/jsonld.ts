import { site } from "@/data/site";
import { education } from "@/data/education";
import { isManuscript, visiblePublications } from "./content";

export function personJsonLd() {
  const sameAs = Object.values(site.links).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    url: site.url,
    image: `${site.url}${site.headshot.src}`,
    email: `mailto:${site.email}`,
    jobTitle: site.position,
    description: site.description,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: site.affiliation,
      url: site.affiliationUrl,
    },
    alumniOf: education
      .filter((e) => e.institution !== site.affiliation)
      .map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution })),
    address: { "@type": "PostalAddress", addressLocality: "Evanston", addressRegion: "IL", addressCountry: "US" },
    knowsAbout: site.keywords.filter((k) => k !== site.name && k !== site.affiliation),
    sameAs,
  };
}

export function publicationsJsonLd() {
  return visiblePublications()
    .filter((p) => !isManuscript(p))
    .map((p) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: p.title,
    name: p.title,
    datePublished: String(p.year),
    author: p.authors.map((a) =>
      a === site.name ? { "@id": `${site.url}/#person` } : { "@type": "Person", name: a },
    ),
    ...(p.arxivUrl ? { url: p.arxivUrl, sameAs: p.arxivUrl } : {}),
    ...(p.abstract ? { abstract: p.abstract } : {}),
    publisher: p.status === "preprint" ? { "@type": "Organization", name: "arXiv" } : undefined,
  }));
}

