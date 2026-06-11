import * as LucideIcons from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { visionMission, strategicGoals } from "@/data/faculty-info";

export function ValueCards() {
  return (
    <>
      <section id="vision" className="py-24 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Vision & Mission"
            subtitle="Guiding principles that drive our institution"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="p-6 bg-navy-700 rounded-[var(--radius-card)] text-white">
                <h3 className="font-heading font-semibold text-h4 text-gold-400 mb-3">
                  Our Vision
                </h3>
                <p className="text-body-sm text-white/80 leading-relaxed">
                  {visionMission.vision}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-6 bg-white rounded-[var(--radius-card)] border border-border-light shadow-card h-full">
                <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-3">
                  Our Mission
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed mb-3">
                  {visionMission.mission}
                </p>
                {visionMission.missionSecondary && (
                  <p className="text-body-sm text-text-muted leading-relaxed">
                    {visionMission.missionSecondary}
                  </p>
                )}
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {visionMission.values.map((value, i) => {
              const IconComponent =
                (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[value.icon] ??
                LucideIcons.Star;

              return (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div className="text-center p-6 bg-white rounded-[var(--radius-card)] border-t-[3px] border-t-gold-400 border border-border-light shadow-card">
                    <div className="inline-flex p-3 rounded-xl bg-gold-50 text-gold-500 mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-body-sm text-text-secondary">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="goals" className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeader
            title="Strategic Goals"
            subtitle="Six pillars guiding the faculty's development and growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {strategicGoals.map((goal, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex gap-4 p-6 bg-white rounded-[var(--radius-card)] border border-border-light shadow-card h-full">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-navy-700 text-white flex items-center justify-center font-heading font-bold text-body-sm">
                      {i + 1}
                    </div>
                  </div>
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    {goal}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
