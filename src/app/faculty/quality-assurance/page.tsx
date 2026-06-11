import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ClipboardCheck, ShieldCheck, MonitorPlay, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance Unit",
  description:
    "The Quality Assurance Unit at Cairo University Faculty of Engineering — ensuring academic excellence and continuous improvement.",
};

const services = [
  {
    icon: ClipboardCheck,
    title: "Exam Operations Guide",
    description:
      "Standardized testing procedures and examination protocols ensuring consistency, fairness, and academic integrity across all departments and programs.",
  },
  {
    icon: ShieldCheck,
    title: "QAAP",
    description:
      "The Quality Assurance and Academic Performance initiative drives departmental accreditation, curriculum reviews, and continuous academic improvement.",
    link: "https://qa.eng.cu.edu.eg",
    linkLabel: "Visit QAAP Portal",
  },
  {
    icon: MonitorPlay,
    title: "E-Learning Support",
    description:
      "Managing the faculty's digital education platforms including elearn.eng.cu.edu.eg and Google Classroom integration for blended learning support.",
    link: "https://elearn.eng.cu.edu.eg",
    linkLabel: "Visit E-Learning Portal",
  },
];

export default function QualityAssurancePage() {
  return (
    <>
      <PageHero
        title="Quality Assurance Unit"
        subtitle="Ensuring academic excellence and continuous improvement"
        breadcrumbs={[
          { label: "Faculty", href: "/about" },
          { label: "Quality Assurance", href: "/faculty/quality-assurance" },
        ]}
      />

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Overview"
            subtitle="Commitment to academic quality and institutional development"
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6 lg:p-8">
              <p className="text-body-sm text-text-secondary leading-relaxed mb-4">
                The Quality Assurance Unit at the Faculty of Engineering, Cairo University, plays a
                central role in maintaining and elevating academic standards across all programs and
                departments. Established in alignment with national accreditation requirements, the
                unit oversees curriculum development, assessment methodology, and institutional
                performance reviews.
              </p>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                Working closely with the National Authority for Quality Assurance and Accreditation
                of Education (NAQAAE), the unit ensures that all academic programs meet or exceed
                national and international benchmarks for engineering education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Services & Initiatives"
            subtitle="Key programs managed by the Quality Assurance Unit"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-body text-navy-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-caption text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {service.link && (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 pt-3 border-t border-border-light flex items-center gap-1.5 text-caption font-semibold text-gold-500 hover:underline"
                    >
                      {service.linkLabel}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* External Link */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 text-center">
          <p className="text-body-sm text-text-secondary mb-6">
            For detailed reports, accreditation documents, and unit publications, visit the
            official Quality Assurance portal.
          </p>
          <Button
            href="https://qa.eng.cu.edu.eg"
            external
            rightIcon={<ExternalLink className="h-4 w-4" />}
          >
            Visit QA Portal
          </Button>
        </div>
      </section>
    </>
  );
}
