import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Users, GraduationCap, Calendar } from "lucide-react";
import { departments, getDepartmentBySlug } from "@/data/departments";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ProgramTabs } from "@/components/departments/ProgramTabs";
import { ResearchAreas } from "@/components/departments/ResearchAreas";
import { FacultyHighlights } from "@/components/departments/FacultyHighlights";

export function generateStaticParams() {
  return departments.map((dept) => ({ slug: dept.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) return { title: "Department Not Found" };
  return {
    title: dept.name,
    description: dept.description,
  };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-700 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-navy-500)_0%,_transparent_60%)] opacity-50" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Departments", href: "/departments" },
              { label: dept.name, href: `/departments/${dept.slug}` },
            ]}
            light
          />
          <div className="mt-4 flex items-center gap-3">
            <Badge className="bg-gold-500 text-white text-body-sm px-3 py-1">
              {dept.shortName}
            </Badge>
            <Badge variant="outline" className="text-white/70 border-white/30">
              {dept.category}
            </Badge>
          </div>
          <h1 className="mt-4 font-heading text-h1 lg:text-display font-bold text-white tracking-tight">
            {dept.name}
          </h1>
          <p className="mt-3 text-h4 text-white/70 max-w-2xl">
            {dept.description}
          </p>

          {/* Quick stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="h-4 w-4 text-gold-400" />
              <span className="text-body-sm">Est. {dept.established}</span>
            </div>
            {dept.studentCount > 0 && (
              <div className="flex items-center gap-2 text-white/80">
                <GraduationCap className="h-4 w-4 text-gold-400" />
                <span className="text-body-sm">{dept.studentCount.toLocaleString()} Students</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-white/80">
              <Users className="h-4 w-4 text-gold-400" />
              <span className="text-body-sm">{dept.staffCount} Faculty Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Sidebar */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* About */}
              <div>
                <SectionHeader title="About the Department" align="left" />
                <div className="prose-cufe">
                  <p className="text-body text-text-secondary leading-relaxed">
                    The {dept.name} department at Cairo University&apos;s Faculty of Engineering
                    has been a cornerstone of engineering education since {dept.established}.
                    With {dept.staffCount} dedicated faculty members and{" "}
                    {dept.studentCount > 0 ? `over ${dept.studentCount.toLocaleString()} students` : "students across all programs"},{" "}
                    the department offers comprehensive programs at the undergraduate and graduate levels.
                  </p>
                  <p className="text-body text-text-secondary leading-relaxed mt-4">
                    Our research spans cutting-edge areas including {dept.researchAreas.slice(0, 3).join(", ")},{" "}
                    and more. We are committed to producing graduates who are equipped to tackle
                    the engineering challenges of the 21st century.
                  </p>
                </div>
              </div>

              {/* Programs */}
              <div>
                <SectionHeader title="Programs" align="left" />
                <ProgramTabs programs={dept.programs} />
              </div>

              {/* Research */}
              <div>
                <SectionHeader title="Research Areas" align="left" />
                <ResearchAreas areas={dept.researchAreas} />
              </div>

              {/* Faculty */}
              <div>
                <SectionHeader title="Faculty" align="left" />
                <FacultyHighlights
                  headOfDepartment={dept.headOfDepartment}
                  departmentName={dept.name}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28 space-y-6">
                {/* Contact card */}
                <div className="bg-white rounded-[var(--radius-card)] border border-border-light shadow-card p-6">
                  <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-4">
                    Department Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                      <Users className="h-4 w-4 text-gold-500 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-text-primary">Head of Department</div>
                        {dept.headOfDepartment}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                      <Mail className="h-4 w-4 text-gold-500 flex-shrink-0" />
                      <a href={`mailto:${dept.contactEmail}`} className="hover:text-gold-500 transition-colors">
                        {dept.contactEmail}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                      <Phone className="h-4 w-4 text-gold-500 flex-shrink-0" />
                      {dept.contactPhone}
                    </div>
                    <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                      <MapPin className="h-4 w-4 text-gold-500 flex-shrink-0" />
                      {dept.location}
                    </div>
                    <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                      <Clock className="h-4 w-4 text-gold-500 flex-shrink-0" />
                      Sun–Thu: 9 AM – 3 PM
                    </div>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Button href="/contact" className="w-full" size="sm">
                      Contact Department
                    </Button>
                    <Button
                      href={dept.externalUrl}
                      variant="outline"
                      className="w-full"
                      size="sm"
                    >
                      Visit Legacy Site
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
