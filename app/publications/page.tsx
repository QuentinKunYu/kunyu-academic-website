import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PublicationGroups, SeeAlso } from "@/components/Publications";
import { site } from "@/data/site";
import { visiblePublications } from "@/lib/content";
import { publicationsJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Publications",
  description: `Publications and manuscripts by ${site.name} on evaluating large language models in recommendation settings.`,
  alternates: { canonical: "/publications" },
  openGraph: {
    title: `Publications | ${site.name}`,
    url: "/publications",
  },
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-[1080px] px-5 pt-8 pb-20 sm:px-8 md:pt-12">
      <JsonLd data={publicationsJsonLd()} />
      <nav aria-label="Breadcrumb" className="text-[13.5px] text-muted">
        <Link href="/" className="hover:text-accent">
          ← {site.name}
        </Link>
      </nav>
      <div className="mt-6 grid gap-x-12 gap-y-8 md:grid-cols-[168px_minmax(0,1fr)]">
        <div>
          <h1 className="font-serif text-[34px] leading-tight font-medium tracking-[-0.015em] md:sticky md:top-24 md:text-[30px]">
            Publications
          </h1>
        </div>
        <div className="max-w-[780px] min-w-0">
          <PublicationGroups pubs={visiblePublications()} />
          <div className="mt-10 border-t border-rule pt-5">
            <SeeAlso />
          </div>
        </div>
      </div>
    </div>
  );
}
