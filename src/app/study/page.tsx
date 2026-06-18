import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Globe,
  Users,
  FlaskConical,
  Award,
  Building2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Study at CUFE",
  description:
    "Discover why the Faculty of Engineering at Cairo University is ranked #1 in Africa. Explore programs, admission paths, campus life, and more.",
};

const highlights = [
  {
    icon: Award,
    title: "Ranked #1 in Africa",
    description:
      "Consistently the top-ranked engineering faculty on the African continent, recognized for academic rigor and research output.",
  },
  {
    icon: GraduationCap,
    title: "16 Departments",
    description:
      "From Civil and Mechanical to Computer and Biomedical Engineering — one of the broadest engineering programs in the region.",
  },
  {
    icon: FlaskConical,
    title: "World-Class Research",
    description:
      "Hundreds of published papers annually, with research centers in nanotechnology, renewable energy, AI, and more.",
  },
  {
    icon: Users,
    title: "10,000+ Students",
    description:
      "A vibrant, diverse student body with opportunities for clubs, competitions, community service, and leadership.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description:
      "Graduates work at top companies and institutions worldwide. CUFE degrees are recognized across the Middle East, Europe, and beyond.",
  },
  {
    icon: Building2,
    title: "Historic Campus",
    description:
      "Located in the heart of Giza, Cairo University's campus blends historic architecture with modern labs and facilities.",
  },
];

const programs = [
  {
    icon: BookOpen,
    title: "General Programs (Semester System)",
    description:
      "The traditional 5-year path: a preparatory year followed by 4 years of specialization in one of 16 departments. Government-subsidized for Egyptian nationals.",
    href: "/academics",
    cta: "View Academic Programs",
  },
  {
    icon: Clock,
    title: "STEP Programs (Credit Hour System)",
    description:
      "A flexible, modern track with specialized majors in Computer & Communications, Sustainable Energy, Mechatronics, Petroleum, and Structural Engineering.",
    href: "https://gchreg.eng.cu.edu.eg",
    cta: "Visit Credit Hour Portal",
    external: true,
  },
  {
    icon: GraduationCap,
    title: "Postgraduate Studies",
    description:
      "Master's and Doctoral programs across all departments, with thesis and coursework options. Research-driven and internationally recognized.",
    href: "/postgraduate",
    cta: "Explore Postgraduate",
  },
];

const admissionSteps = [
  {
    step: "01",
    title: "Meet the Requirements",
    description:
      "Achieve the required Thanaweya Amma (or equivalent) score set by the Supreme Council of Universities for the current academic year.",
  },
  {
    step: "02",
    title: "Apply Through Tansik",
    description:
      "Submit your preferences through the national Tansik coordination system. Place Faculty of Engineering — Cairo University at the top of your list.",
  },
  {
    step: "03",
    title: "Complete Registration",
    description:
      "Once accepted, complete your registration at the faculty with the required documents and pay applicable fees.",
  },
  {
    step: "04",
    title: "Begin Your Journey",
    description:
      "Start your preparatory year, explore departments, join student activities, and take the first step toward your engineering career.",
  },
];

export default function StudyPage() {
  return (
    <>
      <PageHero
        title="Study at CUFE"
        subtitle="Join Africa's #1 engineering faculty — where two centuries of excellence meet tomorrow's innovation"
        breadcrumbs={[{ label: "Study at CUFE", href: "/study" }]}
      />

      {/* Why CUFE */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Why Choose CUFE?"
            subtitle="Founded in 1816, the Faculty of Engineering at Cairo University has shaped generations of world-class engineers"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <Card key={item.title} hover padding="lg">
                <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-5">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-h4 text-navy-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Academic Programs"
            subtitle="Multiple pathways to an engineering degree — choose the track that fits your goals"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-background rounded-[var(--radius-card)] border border-border-light p-8 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-6">
                    <program.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-bold text-h4 text-navy-700 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary leading-relaxed mb-8">
                    {program.description}
                  </p>
                </div>
                <Button
                  href={program.href}
                  external={program.external}
                  variant="secondary"
                  className="w-full"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {program.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="How to Apply"
            subtitle="Your path to joining the Faculty of Engineering at Cairo University"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {admissionSteps.map((item, i) => (
              <div key={item.step} className="relative text-center">
                {i < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gold-400/30" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-700 text-white font-heading font-bold text-h3 mb-5">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-body text-navy-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-700">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 text-center">
          <h2 className="font-heading text-h1 font-bold text-white tracking-tight mb-4">
            Ready to Begin?
          </h2>
          <p className="text-h4 text-white/70 max-w-2xl mx-auto mb-10">
            Take the next step toward your engineering future at Africa&apos;s top-ranked faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/departments" size="lg" className="hero-cta-primary bg-gold-400 hover:bg-white hover:text-navy-700!">
              Explore Departments
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-navy-700"
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
