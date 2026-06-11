import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookOpen, Monitor, Users, Copy, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty Library",
  description:
    "The Faculty of Engineering library at Cairo University — over 40,000 volumes serving the engineering community since 1935.",
};

const facilities = [
  {
    icon: Users,
    title: "Dedicated Reading Areas",
    description:
      "Separate, well-equipped reading areas for undergraduate students, postgraduate researchers, and faculty members, ensuring a focused study environment for all.",
  },
  {
    icon: Monitor,
    title: "Audio-Visual Equipment",
    description:
      "Modern audio-visual equipment and contemporary furnishings introduced in the 1990s to support multimedia learning and presentations.",
  },
  {
    icon: Copy,
    title: "Reproduction Services",
    description:
      "Photocopying, microfilm, and microfiche services available on-site for convenient reproduction of research materials and reference documents.",
  },
];

export default function LibraryPage() {
  return (
    <>
      <PageHero
        title="Faculty Library"
        subtitle="Established in 1935, serving the engineering community with over 40,000 volumes"
        breadcrumbs={[
          { label: "Faculty", href: "/about" },
          { label: "Library", href: "/faculty/library" },
        ]}
      />

      {/* About the Library */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="About the Library"
            subtitle="A cornerstone of academic resources for Egypt's engineering community"
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6 lg:p-8">
              <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-6">
                <BookOpen className="h-6 w-6" />
              </div>
              <p className="text-body-sm text-text-secondary leading-relaxed mb-4">
                The Faculty of Engineering Library was established in 1935 alongside the faculty's
                integration into Cairo University. Over the decades it has grown into one of the
                most comprehensive engineering libraries in the region, housing more than 40,000
                books covering all branches of engineering as well as related subjects including
                mathematics, physics, and applied sciences.
              </p>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                The library maintains subscriptions to a wide range of international periodicals and
                provides access to monthly and annual engineering indexes, enabling researchers and
                students to stay current with the latest developments in their fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Facilities"
            subtitle="Modern amenities supporting study and research"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card"
                >
                  <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-body text-navy-700 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-caption text-text-secondary leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Access */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Digital Access"
            subtitle="Online resources and research network connectivity"
          />

          <div className="max-w-xl mx-auto text-center bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6 lg:p-8">
            <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-4">
              <Globe className="h-8 w-8" />
            </div>
            <h4 className="font-heading font-semibold text-h4 text-navy-700 mb-2">
              EARN Research Network
            </h4>
            <p className="text-body-sm text-text-secondary leading-relaxed">
              The library is connected to the Egyptian Academic Research Network (EARN),
              providing faculty and students with access to digital journals, international
              databases, and electronic library resources for advanced research purposes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
