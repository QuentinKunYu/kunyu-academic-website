import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { News } from "@/components/News";
import { Projects } from "@/components/Projects";
import { SelectedPublications } from "@/components/Publications";
import { personJsonLd, publicationsJsonLd } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[personJsonLd(), ...publicationsJsonLd()]} />
      <Hero />
      <News />
      <SelectedPublications />
      <Projects />
      <Contact />
    </>
  );
}
