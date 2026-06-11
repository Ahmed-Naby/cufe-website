import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Mail, FileText, UserCheck, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Staff Directory & Portals",
  description: "Administrative forms, email account activations, and academic resources for CUFE staff and instructors.",
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        title="Staff Directory & Portals"
        subtitle="Centralized tools, accounts, and documentation for Faculty of Engineering instructors."
        breadcrumbs={[{ label: "Staff", href: "/staff" }]}
      />

      {/* Services & Portals */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Faculty Resources"
            subtitle="Access institutional communication systems and official directories"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email System */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-6">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-h3 text-navy-700 mb-4">
                  Official Email System
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-6">
                  Log in to your official `eng.cu.edu.eg` institutional email account. Access calendar systems, corporate meetings, and official administration announcements.
                </p>
              </div>
              <Button href="http://mail.eng.cu.edu.eg" external className="w-full">
                Login to Webmail
              </Button>
            </div>

            {/* Staff Directory */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-6">
                  <UserCheck className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-h3 text-navy-700 mb-4">
                  Staff Members Directory
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-6">
                  Search the official database of Faculty of Engineering professors, teaching assistants, and administrative staff members, listing office locations and publications.
                </p>
              </div>
              <Button href="/contact" className="w-full">
                View Contact Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Forms & Downloads */}
      <section id="forms" className="py-24 bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Email & Account Request Forms"
            subtitle="Downloadable documents for activating or modifying institutional accounts"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-5 rounded-[var(--radius-card)] border border-border-light shadow-card flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-navy-50 text-navy-600 rounded-lg">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-body-sm text-navy-700 leading-none">
                    Email Account Request Form (Standard Server)
                  </h4>
                  <p className="text-caption text-text-muted mt-1">Microsoft Word format (.doc) &bull; 145 KB</p>
                </div>
              </div>
              <a href="https://cufe.edu.eg/wp-content/uploads/host/2017/mailform2.doc" className="text-caption font-bold text-gold-500 hover:underline">
                Download
              </a>
            </div>

            <div className="bg-white p-5 rounded-[var(--radius-card)] border border-border-light shadow-card flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-navy-50 text-navy-600 rounded-lg">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-body-sm text-navy-700 leading-none">
                    Email Account Request Form (Office 365 Server)
                  </h4>
                  <p className="text-caption text-text-muted mt-1">Microsoft Word format (.doc) &bull; 152 KB</p>
                </div>
              </div>
              <a href="https://cufe.edu.eg/wp-content/uploads/host/2017/mailform3.doc" className="text-caption font-bold text-gold-500 hover:underline">
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Factor */}
      <section id="impact" className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Scientific Publishing Metrics"
            subtitle="Explore JCR Journal Impact Factor records for research publishing"
          />

          <div className="max-w-xl mx-auto text-center bg-background p-8 rounded-[var(--radius-card)] border border-border-light shadow-card">
            <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-4">
              <BarChart2 className="h-8 w-8" />
            </div>
            <h4 className="font-heading font-semibold text-h4 text-navy-700 mb-2">
              JCR Journal Impact Factor Records
            </h4>
            <p className="text-body-sm text-text-secondary mb-6 leading-relaxed">
              Verify JCR impact metrics to assist in selecting suitable peer-reviewed journals for publishing faculty research papers.
            </p>
            <Button href="https://cufe.edu.eg/wp-content/uploads/2015/01/JCR-2010-Impact-Factor.xls" external variant="outline">
              Download JCR Database Sheet
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
