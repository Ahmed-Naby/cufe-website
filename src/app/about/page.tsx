import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { DeanMessage } from "@/components/about/DeanMessage";
import { Timeline } from "@/components/about/Timeline";
import { ValueCards } from "@/components/about/ValueCards";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Faculty of Engineering at Cairo University — our history, vision, mission, and leadership since 1816.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About the Faculty"
        subtitle="Over two centuries of engineering excellence, shaping Egypt's future since 1816"
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />
      <DeanMessage />
      <Timeline />
      <ValueCards />
    </>
  );
}
