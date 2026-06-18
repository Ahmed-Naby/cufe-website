"use client";

import { useCounter } from "@/hooks/useCounter";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export function StatCounter({ value, label, suffix, prefix }: StatCounterProps) {
  const { count, ref } = useCounter(value);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-display font-bold text-(--color-stat-number,var(--color-gold-400))">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-body-sm text-white/70">{label}</div>
    </div>
  );
}
