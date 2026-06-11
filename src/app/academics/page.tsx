import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BookOpen, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Undergraduate Academics",
  description: "Explore undergraduate programs at the Faculty of Engineering, Cairo University, featuring Semester and Credit Hour systems.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Undergraduate Academics"
        subtitle="Rigorous engineering education through traditional semester courses and specialized credit hour tracks."
        breadcrumbs={[{ label: "Academics", href: "/academics" }]}
      />

      {/* Systems Overview */}
      <section id="general" className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Educational Systems"
            subtitle="Two pathways to an engineering degree at Cairo University"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Semester System */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-6">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-h3 text-navy-700 mb-4">
                  General Programs (Semester System)
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-6">
                  The traditional educational system based on two main semesters per academic year. Students start with a preparatory year and then choose a specialization department based on their grade ranking. Includes 16 departments.
                </p>
                <ul className="space-y-3 mb-8 text-body-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    5-year program (1 Preparatory year + 4 Specialization years)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Government-subsidized system for Egyptian national students
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Highly rigorous core curriculum aligned with state engineering syndicate
                  </li>
                </ul>
              </div>
              <Button href="/departments" className="w-full">
                Explore Core Departments
              </Button>
            </div>

            {/* Credit Hour System (STEP) */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-6">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-h3 text-navy-700 mb-4">
                  STEP Programs (Credit Hour System)
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-6">
                  Specialized Tracks of Engineering Profession (STEP). A modern, flexible educational system allowing students to register for credit hours each semester, selecting from interdisciplinary and premium specialized majors.
                </p>
                <ul className="space-y-3 mb-8 text-body-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Flexible graduation path based on credit hour completion
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Self-funded tuition with specialized labs and computer resources
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Tracks: Computer & Communications, Sustainable Energy, Mechatronics, Petroleum, Structural
                  </li>
                </ul>
              </div>
              <Button href="https://gchreg.eng.cu.edu.eg" external className="w-full">
                Visit Credit Hour Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations & Guide */}
      <section id="regulations" className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Student Guidelines & Regulations"
            subtitle="Essential handbooks and regulations documents for undergraduate students"
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-[var(--radius-card)] p-6 border border-border-light text-center">
              <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-semibold text-body text-navy-700 mb-2">Student Code of Conduct</h4>
              <p className="text-caption text-text-muted mb-4">Official regulations outlining academic ethics and campus conduct rules.</p>
              <a href="#" className="text-body-sm font-semibold text-gold-500 hover:underline">Download Handbook</a>
            </div>

            <div className="bg-background rounded-[var(--radius-card)] p-6 border border-border-light text-center">
              <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-semibold text-body text-navy-700 mb-2">Preparatory Year Guide</h4>
              <p className="text-caption text-text-muted mb-4">Essential guidebook for incoming freshmen detailing course distributions.</p>
              <a href="#" className="text-body-sm font-semibold text-gold-500 hover:underline">Download Guide</a>
            </div>

            <div className="bg-background rounded-[var(--radius-card)] p-6 border border-border-light text-center">
              <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-semibold text-body text-navy-700 mb-2">FAQ Directory</h4>
              <p className="text-caption text-text-muted mb-4">Frequently asked questions regarding registration, grading, and transfer rules.</p>
              <a href="/contact#faq" className="text-body-sm font-semibold text-gold-500 hover:underline">View FAQ Portal</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
