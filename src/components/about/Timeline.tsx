"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { timeline } from "@/data/faculty-info";

export function Timeline() {
  return (
    <section id="history" className="py-24 bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          title="Our History"
          subtitle="Over two centuries of engineering excellence"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timeline.map((entry, i) => (
              <ScrollReveal
                key={entry.year}
                delay={i * 0.08}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start gap-6 lg:gap-12 ${
                    i % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse lg:text-right"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500 border-4 border-surface z-10 mt-1.5" />

                  {/* Content */}
                  <div className="flex-1 pl-14 lg:pl-0">
                    <span className="inline-block px-3 py-1 bg-gold-50 text-gold-600 rounded-full text-body-sm font-bold font-heading mb-2">
                      {entry.year}
                    </span>
                    <h3 className="font-heading font-semibold text-h4 text-navy-700 mb-1">
                      {entry.title}
                    </h3>
                    <p className="text-body-sm text-text-secondary">
                      {entry.description}
                    </p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
