import { portals } from "@/data/portals";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortalLinkCard } from "@/components/ui/PortalLinkCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PortalLinks() {
  return (
    <section className="py-24 bg-navy-50 relative overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          title="Academic Portals"
          subtitle="Quick access systems for students, instructors, and visitors"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portals.map((portal, i) => (
            <ScrollReveal key={portal.name} delay={i * 0.05}>
              <PortalLinkCard portal={portal} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
