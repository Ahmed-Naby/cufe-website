import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Building2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Building Maps",
  description:
    "Navigate the Faculty of Engineering campus at Cairo University in Giza — building locations and campus maps.",
};

const buildings = [
  { number: "1", name: "Administration Building", department: "Faculty Administration & Dean's Office" },
  { number: "5", name: "Building No. 5", department: "Mechanical Engineering" },
  { number: "7", name: "Building No. 7", department: "Chemical & Metallurgical Engineering" },
  { number: "8", name: "Building No. 8", department: "Electrical Engineering" },
  { number: "9", name: "Building No. 9", department: "Computer Engineering" },
  { number: "10", name: "Building No. 10", department: "Civil Engineering" },
];

export default function BuildingMapsPage() {
  return (
    <>
      <PageHero
        title="Building Maps"
        subtitle="Navigate the Faculty of Engineering campus in Giza"
        breadcrumbs={[
          { label: "Faculty", href: "/about" },
          { label: "Building Maps", href: "/faculty/building-maps" },
        ]}
      />

      {/* Campus Map */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Campus Location"
            subtitle="Faculty of Engineering, Cairo University, Giza"
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6 lg:p-8 mb-6">
              <div className="flex items-start gap-3 mb-6">
                <div className="p-2 bg-navy-50 text-navy-600 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  Detailed campus maps and floor plans are available at the Faculty Administration
                  Office in Building No. 1. For assistance navigating the campus, please contact the
                  administration during office hours (Sunday through Thursday, 9:00 AM to 3:00 PM).
                </p>
              </div>

              <div className="rounded-[var(--radius-card)] overflow-hidden border border-border-light h-[400px]">
                <iframe
                  title="Faculty of Engineering, Cairo University - Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1!2d31.2089!3d30.0131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584587ac8f291b%3A0x810c2f3fa2a52424!2sFaculty%20of%20Engineering%2C%20Cairo%20University!5e0!3m2!1sen!2seg!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Directory */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Building Directory"
            subtitle="Key buildings across the Giza campus"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buildings.map((building) => (
              <div
                key={building.number}
                className="bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card"
              >
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold text-body text-navy-700 mb-1">
                  Building No. {building.number}
                </h3>
                <p className="text-caption text-text-secondary">
                  {building.department}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
