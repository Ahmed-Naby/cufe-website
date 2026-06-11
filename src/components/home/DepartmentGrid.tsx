import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { departments } from "@/data/departments";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function DepartmentGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          title="Our Departments"
          subtitle="Sixteen departments spanning every major engineering discipline"
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {departments.map((dept, i) => {
            const IconComponent =
              (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[dept.icon] ??
              LucideIcons.GraduationCap;

            return (
              <ScrollReveal key={dept.slug} delay={i * 0.03}>
                <Link
                  href={`/departments/${dept.slug}`}
                  className="group flex flex-col p-5 bg-surface rounded-[var(--radius-card)] border border-border-light shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gold-50 text-gold-500 group-hover:bg-gold-100 transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-caption font-semibold text-gold-500 tracking-wide">
                      {dept.shortName}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-body-sm text-navy-700 leading-snug mb-2 group-hover:text-gold-600 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-caption text-text-muted line-clamp-2 flex-1">
                    {dept.description}
                  </p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-body font-medium text-gold-500 hover:text-gold-600 transition-colors group"
          >
            View All Departments
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
