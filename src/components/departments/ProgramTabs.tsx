"use client";

import { Tabs } from "@/components/ui/Tabs";
import { Clock, BookOpen } from "lucide-react";
import type { Program } from "@/types";

interface ProgramTabsProps {
  programs: Program[];
}

export function ProgramTabs({ programs }: ProgramTabsProps) {
  const degrees = [...new Set(programs.map((p) => p.degree))];
  const tabs = degrees.map((d) => ({ id: d, label: d }));

  return (
    <Tabs tabs={tabs}>
      {(activeTab) => {
        const filtered = programs.filter((p) => p.degree === activeTab);
        return (
          <div className="space-y-4">
            {filtered.map((program) => (
              <div
                key={program.name}
                className="p-5 bg-surface-alt rounded-[var(--radius-card)] border border-border-light"
              >
                <h4 className="font-heading font-semibold text-h4 text-navy-700 mb-2">
                  {program.name}
                </h4>
                <div className="flex items-center gap-4 mb-3 text-body-sm text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    {program.degree}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </span>
                </div>
                <p className="text-body-sm text-text-secondary">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        );
      }}
    </Tabs>
  );
}
