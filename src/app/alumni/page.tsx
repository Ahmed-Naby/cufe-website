import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Award, GraduationCap, ClipboardList, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Alumni Association",
  description: "Stay connected with the Faculty of Engineering, Cairo University. Access alumni data systems and graduation applications.",
};

export default function AlumniPage() {
  return (
    <>
      <PageHero
        title="Alumni Association"
        subtitle="Celebrating over two centuries of alumni achievements, building infrastructures globally."
        breadcrumbs={[{ label: "Alumni", href: "/alumni" }]}
      />

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Graduates & Alumni"
            subtitle="Connect with a network of over 100,000 engineering leaders"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Alumni Application */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-6">
                  <ClipboardList className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-h3 text-navy-700 mb-4">
                  Alumni Registration Form
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-6">
                  Submit your graduate information to register in the official Faculty of Engineering Alumni database. Receive updates on alumni events, reunions, and professional training.
                </p>
              </div>
              <Button href="https://gradform.eng.cu.edu.eg" external className="w-full">
                Fill Alumni Application
              </Button>
            </div>

            {/* Graduation Certificates */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-6">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-h3 text-navy-700 mb-4">
                  Graduation Certificates & Verification
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-6">
                  Request graduation certificate replacements, transcript authentications, or official academic evaluation documents.
                </p>
              </div>
              <Button href="/contact" className="w-full">
                Contact Graduate Affairs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Alumni Achievements"
            subtitle="Cairo University engineers shaping national and global engineering frontiers"
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-[var(--radius-card)] p-6 border border-border-light text-center">
              <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-semibold text-body text-navy-700 mb-2">Industry Leaders</h4>
              <p className="text-caption text-text-secondary">CUFE alumni direct leading multinational construction, tech, and engineering conglomerates.</p>
            </div>

            <div className="bg-background rounded-[var(--radius-card)] p-6 border border-border-light text-center">
              <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-semibold text-body text-navy-700 mb-2">Academic Impact</h4>
              <p className="text-caption text-text-secondary">Alumni hold distinguished research fellowships and professorships at top Ivy League universities.</p>
            </div>

            <div className="bg-background rounded-[var(--radius-card)] p-6 border border-border-light text-center">
              <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-semibold text-body text-navy-700 mb-2">Public Service</h4>
              <p className="text-caption text-text-secondary">Providing expertise for governmental projects, ministers, state infrastructure planners, and regional syndicates.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
