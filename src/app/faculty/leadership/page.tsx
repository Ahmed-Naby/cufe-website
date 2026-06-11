import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { currentLeadership, historicalDeans } from "@/data/faculty-info";
import { Crown, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty Leadership",
  description:
    "Meet the leadership of the Faculty of Engineering at Cairo University — governance and academic administration since 1935.",
};

export default function LeadershipPage() {
  const allLeaders = [
    { ...currentLeadership.dean, icon: Crown },
    ...currentLeadership.viceDeans.map((vd) => ({ ...vd, icon: Users })),
    ...currentLeadership.coordinators.map((c) => ({ ...c, icon: BookOpen })),
  ];

  return (
    <>
      <PageHero
        title="Faculty Leadership"
        subtitle="Governance and academic administration of the Faculty of Engineering since 1935"
        breadcrumbs={[
          { label: "Faculty", href: "/about" },
          { label: "Leadership", href: "/faculty/leadership" },
        ]}
      />

      {/* Current Leadership */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Current Leadership"
            subtitle="The dean, vice deans, and coordinators guiding the faculty today"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {allLeaders.map((leader, i) => {
              const Icon = leader.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-[var(--radius-card)] border border-border-light p-6 shadow-card text-center"
                >
                  <div className="inline-flex p-3 rounded-xl bg-navy-50 text-navy-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-body text-navy-700 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-caption text-text-secondary">
                    {leader.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historical Deans */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Historical Deans"
            subtitle="A legacy of distinguished leaders who shaped the Faculty of Engineering"
          />

          <div className="max-w-3xl mx-auto bg-white rounded-[var(--radius-card)] border border-border-light shadow-card overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy-700 text-white">
                  <th className="font-heading font-semibold text-body-sm px-6 py-4">
                    Name
                  </th>
                  <th className="font-heading font-semibold text-body-sm px-6 py-4">
                    Period
                  </th>
                </tr>
              </thead>
              <tbody>
                {historicalDeans.map((dean, i) => (
                  <tr
                    key={i}
                    className={
                      i % 2 === 0 ? "bg-white" : "bg-surface"
                    }
                  >
                    <td className="px-6 py-3 text-body-sm text-navy-700 font-medium">
                      {dean.name}
                    </td>
                    <td className="px-6 py-3 text-body-sm text-text-secondary">
                      {dean.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
