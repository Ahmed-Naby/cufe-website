import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Globe,
  GraduationCap,
  Landmark,
  Library,
  Building2,
  ShieldCheck,
  Monitor,
  Users,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Important Links",
  description:
    "Useful external resources and partner institutions for the Faculty of Engineering, Cairo University.",
};

const links = [
  {
    icon: Globe,
    title: "Digital Egypt",
    desc: "Egypt's digital transformation portal for government services and e-governance initiatives.",
    href: "#",
    color: "navy" as const,
  },
  {
    icon: GraduationCap,
    title: "Cairo University",
    desc: "Main website for Cairo University, one of the oldest and most prestigious universities in the Middle East.",
    href: "https://cu.edu.eg",
    color: "gold" as const,
  },
  {
    icon: Landmark,
    title: "Egyptian Syndicate of Engineers",
    desc: "The professional engineering body overseeing engineering practice and licensing in Egypt.",
    href: "https://eea.org.eg",
    color: "navy" as const,
  },
  {
    icon: Library,
    title: "IDSC Library",
    desc: "Information and Decision Support Center digital library and research resource repository.",
    href: "#",
    color: "gold" as const,
  },
  {
    icon: Building2,
    title: "Faculty of Engineering Website",
    desc: "The main portal for the Faculty of Engineering at Cairo University, Giza campus.",
    href: "https://eng.cu.edu.eg",
    color: "navy" as const,
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance Portal",
    desc: "Quality assurance unit website supporting academic standards and accreditation processes.",
    href: "http://qa.eng.cu.edu.eg",
    color: "gold" as const,
  },
  {
    icon: Monitor,
    title: "E-Learning Platform",
    desc: "Online learning platform for lectures, assignments, and course materials across all departments.",
    href: "https://elearn.eng.cu.edu.eg",
    color: "navy" as const,
  },
  {
    icon: Users,
    title: "Student Portal",
    desc: "Semester system portal for academic records, registration, and grade inquiries.",
    href: "https://std.eng.cu.edu.eg",
    color: "gold" as const,
  },
];

export default function LinksPage() {
  return (
    <>
      <PageHero
        title="Important Links"
        subtitle="Useful external resources and partner institutions"
        breadcrumbs={[{ label: "Links", href: "/links" }]}
      />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="External Resources"
            subtitle="Quick access to essential portals, institutions, and digital platforms"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {links.map((link, i) => {
              const isExternal = link.href !== "#";
              return (
                <a
                  key={i}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex gap-4"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl flex-shrink-0 self-start transition-colors ${
                      link.color === "navy"
                        ? "bg-navy-50 text-navy-600 group-hover:bg-navy-100"
                        : "bg-gold-50 text-gold-500 group-hover:bg-gold-100"
                    }`}
                  >
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-heading font-semibold text-body text-navy-700 group-hover:text-gold-600 transition-colors">
                        {link.title}
                      </h4>
                      {isExternal && (
                        <ExternalLink className="h-3.5 w-3.5 text-text-muted flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-caption text-text-secondary leading-relaxed">
                      {link.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
