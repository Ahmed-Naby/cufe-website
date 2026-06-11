import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  FileText,
  Users,
  Briefcase,
  Layers,
  FlaskConical,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Training",
  description:
    "Practical training programs connecting undergraduate students with industry at the Faculty of Engineering, Cairo University.",
};

const steps = [
  {
    icon: FileText,
    title: "Training Regulations",
    desc: "Formal guidelines document outlining requirements, evaluation criteria, and mandatory training hours for undergraduate students.",
    color: "navy" as const,
  },
  {
    icon: Users,
    title: "Training Coordinators",
    desc: "Departmental coordinators who manage student placements, liaise with companies, and oversee training quality assurance.",
    color: "gold" as const,
  },
  {
    icon: Briefcase,
    title: "Training Opportunities",
    desc: "Available positions in partner companies and organizations across construction, manufacturing, energy, and technology sectors.",
    color: "navy" as const,
  },
  {
    icon: Layers,
    title: "Programs & Fields",
    desc: "Specialized training tracks across engineering disciplines, including civil, mechanical, electrical, computer, and chemical engineering.",
    color: "gold" as const,
  },
  {
    icon: FlaskConical,
    title: "Research Projects",
    desc: "Applied research opportunities within the training framework, allowing students to work on real-world engineering challenges.",
    color: "navy" as const,
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        title="Industrial Training"
        subtitle="Practical training programs connecting students with industry"
        breadcrumbs={[
          { label: "Undergraduates", href: "/undergraduates" },
          { label: "Industrial Training", href: "/undergraduates/training" },
        ]}
      />

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-h1 font-bold tracking-tight text-navy-700 mb-4">
              About the Program
            </h2>
            <div className="mt-3 h-[3px] w-10 rounded-full bg-gold-400 mx-auto" />
            <p className="mt-6 text-body-sm text-text-secondary leading-relaxed">
              The Faculty of Engineering at Cairo University operates a
              comprehensive industrial training program designed to bridge the gap
              between academic knowledge and practical industry experience.
              Undergraduate students across all departments are required to
              complete supervised training periods at approved companies and
              organizations, gaining hands-on exposure to real engineering
              workflows, professional standards, and workplace environments. The
              program is coordinated through the Industrial Training Office in
              collaboration with departmental training coordinators.
            </p>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Training Process"
            subtitle="From regulations to research, every step of the training journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-background rounded-[var(--radius-card)] border border-border-light p-6 shadow-card flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`inline-flex p-3 rounded-xl ${
                      step.color === "navy"
                        ? "bg-navy-50 text-navy-600"
                        : "bg-gold-50 text-gold-500"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-caption font-bold text-text-muted">
                    Step {i + 1}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-body text-navy-700 mb-2">
                  {step.title}
                </h4>
                <p className="text-caption text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Contact Information"
            subtitle="Reach the Industrial Training Office for inquiries and coordination"
          />

          <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-body text-navy-700 mb-1">
                    Location
                  </h4>
                  <p className="text-body-sm text-text-secondary">
                    Student Activities Building, adjacent to the faculty swimming
                    pool, Faculty of Engineering, Cairo University
                  </p>
                </div>
              </div>

              <div className="border-t border-border-light" />

              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-body text-navy-700 mb-1">
                    Phone
                  </h4>
                  <p className="text-body-sm text-text-secondary">35678904</p>
                </div>
              </div>

              <div className="border-t border-border-light" />

              <div className="flex items-start gap-4">
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 flex-shrink-0">
                  <Printer className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-body text-navy-700 mb-1">
                    Fax
                  </h4>
                  <p className="text-body-sm text-text-secondary">
                    37768518 / 35723486
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
