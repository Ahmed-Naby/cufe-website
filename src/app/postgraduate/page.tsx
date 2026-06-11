import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Award, BookOpen, Calendar, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Postgraduate Studies",
  description: "Explore Master of Science (M.Sc.), Doctor of Philosophy (Ph.D.), and Graduate Diploma pathways at Cairo University.",
};

const thesisSamples = [
  { title: "Deep Learning Approaches for Autonomous UAV Navigation", author: "Eng. Mona Hassan", dept: "Computer Engineering", year: 2025 },
  { title: "Enhancing Seismic Performance of Reinforced Concrete Bridges", author: "Eng. Amr Tarek", dept: "Structural Engineering", year: 2025 },
  { title: "Optimizing Solar Micro-Grid Systems for Remote Communities", author: "Eng. Yasmin Ali", dept: "Electrical Power", year: 2026 },
];

export default function PostgraduatePage() {
  return (
    <>
      <PageHero
        title="Postgraduate Studies"
        subtitle="Advanced engineering research, innovation, and post-graduate degree pathways."
        breadcrumbs={[{ label: "Postgraduate", href: "/postgraduate" }]}
      />

      {/* Program Tracks */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Degree Pathways"
            subtitle="Graduate programs designed for research and professional advancement"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Diploma */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-2">Graduate Diplomas</h3>
                <p className="text-caption text-text-secondary leading-relaxed mb-6">
                  Practical, course-based professional programs designed to upgrade skills in specific engineering industries. Typically 1-2 years.
                </p>
              </div>
              <Button href="/contact" variant="outline" size="sm" className="w-full">
                Inquire Admissions
              </Button>
            </div>

            {/* M.Sc. */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-4">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-2">Master of Science (M.Sc.)</h3>
                <p className="text-caption text-text-secondary leading-relaxed mb-6">
                  Thesis-based research programs providing advanced scientific depth and practical research methodologies. Typically 2-3 years.
                </p>
              </div>
              <Button href="https://gchreg.eng.cu.edu.eg" external size="sm" className="w-full">
                Register on Portal
              </Button>
            </div>

            {/* Ph.D. */}
            <div className="bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-2">Doctor of Philosophy (Ph.D.)</h3>
                <p className="text-caption text-text-secondary leading-relaxed mb-6">
                  High-level independent research culminating in an original dissertation that advances the boundaries of engineering science.
                </p>
              </div>
              <Button href="https://gchreg.eng.cu.edu.eg" external size="sm" className="w-full">
                Register on Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Directory */}
      <section id="thesis" className="py-24 bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="M.Sc. & Ph.D. Thesis Showcase"
            subtitle="Recent doctoral dissertations and master theses defended at the faculty"
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {thesisSamples.map((thesis, i) => (
              <div key={i} className="bg-white p-5 rounded-[var(--radius-card)] border border-border-light shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-semibold text-body-sm text-navy-700 mb-1">
                    {thesis.title}
                  </h4>
                  <p className="text-caption text-text-secondary">
                    By {thesis.author} &bull; {thesis.dept} &bull; {thesis.year}
                  </p>
                </div>
                <span className="text-caption font-bold text-gold-500 hover:underline cursor-pointer flex-shrink-0">
                  Request Abstract PDF
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seminars & Discussions */}
      <section id="seminars" className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Upcoming Seminars"
            subtitle="Master and doctoral dissertation defenses and research discussion sessions"
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background rounded-[var(--radius-card)] border border-border-light p-6 shadow-card flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gold-50 border border-gold-100 rounded-lg flex flex-col items-center justify-center text-gold-500 font-bold">
                <span className="text-body leading-none">18</span>
                <span className="text-[10px] uppercase mt-0.5">Jun</span>
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 bg-navy-50 text-navy-600 rounded-md text-[10px] font-bold mb-1.5">
                  Ph.D. Defense
                </span>
                <h4 className="font-heading font-semibold text-body-sm text-navy-700 leading-snug mb-1">
                  Design and Analysis of Smart Hydraulic Structures for Irrigation Channels
                </h4>
                <p className="text-caption text-text-muted">
                  Candidate: Eng. Sherif Salem &bull; 10:00 AM &bull; Seminar Hall A
                </p>
              </div>
            </div>

            <div className="bg-background rounded-[var(--radius-card)] border border-border-light p-6 shadow-card flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gold-50 border border-gold-100 rounded-lg flex flex-col items-center justify-center text-gold-500 font-bold">
                <span className="text-body leading-none">24</span>
                <span className="text-[10px] uppercase mt-0.5">Jun</span>
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 bg-gold-400/20 text-gold-600 rounded-md text-[10px] font-bold mb-1.5">
                  M.Sc. Seminar
                </span>
                <h4 className="font-heading font-semibold text-body-sm text-navy-700 leading-snug mb-1">
                  A Smart Grid Energy Allocation Algorithm Using Reinforcement Learning
                </h4>
                <p className="text-caption text-text-muted">
                  Candidate: Eng. Nadine Gomaa &bull; 11:30 AM &bull; Electrical Dept Hall
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
