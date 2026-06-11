import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  Clock,
  FileText,
  Calendar,
  ClipboardList,
  Table2,
  ShieldCheck,
  Award,
  ExternalLink,
  ArrowRight,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Undergraduate Resources",
  description:
    "Essential tools, schedules, and academic information for undergraduate students at the Faculty of Engineering, Cairo University.",
};

const resources = [
  {
    icon: FileText,
    title: "Student Guide",
    desc: "Academic handbook for incoming freshmen covering course distributions and campus orientation.",
    href: "#",
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    desc: "Semester dates, holidays, and examination periods for the current academic year.",
    href: "#",
  },
  {
    icon: ClipboardList,
    title: "Exam Schedules & Results",
    desc: "Current and past examination schedules and result announcements.",
    href: "#",
  },
  {
    icon: Table2,
    title: "Time Tables",
    desc: "Lecture and lab session schedules organized by department and academic year.",
    href: "#",
  },
  {
    icon: ShieldCheck,
    title: "Student Regulations",
    desc: "Academic rules, grading policies, and transfer regulations.",
    href: "/academics#regulations",
  },
  {
    icon: Award,
    title: "Top Students",
    desc: "High achievers and Dean's List recognition across all departments.",
    href: "#",
  },
];

const portals = [
  {
    title: "Semester Information System",
    desc: "Access grades, registration, and academic records for the general semester system.",
    href: "https://std.eng.cu.edu.eg",
  },
  {
    title: "Credit Hour Portal",
    desc: "Course registration and academic tracking for STEP credit hour students.",
    href: "https://gchreg.eng.cu.edu.eg",
  },
  {
    title: "E-Learning Platform",
    desc: "Online lectures, assignments, and course materials for all departments.",
    href: "https://elearn.eng.cu.edu.eg",
  },
];

export default function UndergraduatesPage() {
  return (
    <>
      <PageHero
        title="Undergraduate Resources"
        subtitle="Essential tools, schedules, and academic information for undergraduate students"
        breadcrumbs={[{ label: "Undergraduates", href: "/undergraduates" }]}
      />

      {/* Academic Programs */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Academic Programs"
            subtitle="Two pathways to an engineering degree at Cairo University"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* General Programs */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-6">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-h3 text-navy-700 mb-4">
                  General Programs (Semester System)
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-6">
                  The traditional 5-year educational program based on two semesters
                  per academic year. Students complete a preparatory year then
                  specialize across 16 departments under a government-subsidized
                  framework.
                </p>
                <ul className="space-y-3 mb-8 text-body-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    5-year program (1 Preparatory + 4 Specialization years)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    16 engineering departments to choose from
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Government-subsidized tuition for Egyptian nationals
                  </li>
                </ul>
              </div>
              <Button href="/academics#general" className="w-full">
                Explore General Programs
              </Button>
            </div>

            {/* STEP Programs */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-6">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-h3 text-navy-700 mb-4">
                  STEP Programs (Credit Hour)
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-6">
                  Specialized Tracks of Engineering Profession offering flexible
                  graduation based on credit hour completion. Students choose from
                  interdisciplinary and premium specialized tracks.
                </p>
                <ul className="space-y-3 mb-8 text-body-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Flexible graduation path based on credit hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Tracks: Computer & Communications, Sustainable Energy, Mechatronics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Tracks: Petroleum, Structural Engineering
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

      {/* Student Resources */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Student Resources"
            subtitle="Academic tools and references for undergraduate students"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resources.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group bg-background rounded-[var(--radius-card)] border border-border-light p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4 group-hover:bg-navy-100 transition-colors self-start">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="font-heading font-semibold text-body text-navy-700 mb-2 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-caption text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Online Portals */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Online Portals"
            subtitle="Digital platforms for registration, grades, and e-learning"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {portals.map((portal, i) => (
              <a
                key={i}
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-4 group-hover:bg-gold-100 transition-colors">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-body text-navy-700 mb-2 group-hover:text-gold-600 transition-colors">
                    {portal.title}
                  </h4>
                  <p className="text-caption text-text-secondary leading-relaxed mb-4">
                    {portal.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-caption text-gold-500 font-semibold">
                  <span>Open Portal</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Training CTA */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-8 shadow-card max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-6">
              <ClipboardList className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-bold text-h3 text-navy-700 mb-4">
              Industrial Training
            </h3>
            <p className="text-body-sm text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto">
              Gain practical experience through the faculty&apos;s comprehensive
              industrial training program, connecting students with leading
              companies and organizations across Egypt.
            </p>
            <Button
              href="/undergraduates/training"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Explore Training Programs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
