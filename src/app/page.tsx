import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { DepartmentGrid } from "@/components/home/DepartmentGrid";
import { NewsSection } from "@/components/home/NewsSection";
import { EventsSection } from "@/components/home/EventsSection";
import { PortalLinks } from "@/components/home/PortalLinks";
import { PartnersBar } from "@/components/home/PartnersBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <DepartmentGrid />
      <NewsSection />
      <EventsSection />
      <PortalLinks />
      <PartnersBar />
    </>
  );
}
