"use client";

import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/data/stats";

export function StatsBar() {
  return (
    <section className="bg-navy-800 py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
