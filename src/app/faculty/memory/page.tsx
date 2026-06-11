import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "In Memoriam",
  description:
    "Honoring the distinguished faculty members who shaped engineering education at Cairo University.",
};

export default function MemoryPage() {
  return (
    <>
      <PageHero
        title="In Memoriam"
        subtitle="Honoring the distinguished faculty members who shaped engineering education in Egypt"
        breadcrumbs={[
          { label: "Faculty", href: "/about" },
          { label: "In Memoriam", href: "/faculty/memory" },
        ]}
      />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Remembering Our Legacy"
            subtitle="Those who dedicated their lives to engineering education"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6 lg:p-8 text-center">
              <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <p className="text-body-sm text-text-secondary leading-relaxed mb-4">
                The Faculty of Engineering at Cairo University has been shaped by generations of
                remarkable scholars, researchers, and educators. Their tireless dedication to
                advancing engineering knowledge and nurturing future generations of engineers has
                left an enduring mark on the institution and on Egyptian engineering as a whole.
              </p>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                We remember with deep gratitude the professors and staff members who devoted their
                careers to this faculty. Their contributions to teaching, research, and public
                service continue to inspire the university community. This page stands as a tribute
                to their memory and a recognition of the foundation they built for the engineers
                of today and tomorrow.
              </p>
            </div>

            <div className="bg-surface rounded-[var(--radius-card)] border border-border-light p-6 lg:p-8 text-center">
              <p className="text-caption text-text-muted italic leading-relaxed">
                This page honors the memory of all past faculty members who contributed to the
                institution's legacy of engineering excellence. Their spirit lives on through the
                thousands of graduates they mentored and the knowledge they advanced.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
