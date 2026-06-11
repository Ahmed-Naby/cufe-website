"use client";

import { cn } from "@/lib/utils";
import { departmentCategories } from "@/data/departments";

interface DepartmentFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function DepartmentFilter({
  activeCategory,
  onCategoryChange,
}: DepartmentFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {departmentCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            "px-4 py-2 rounded-full text-body-sm font-medium transition-colors cursor-pointer",
            activeCategory === cat
              ? "bg-gold-500 text-white shadow-sm"
              : "bg-white text-text-secondary border border-border hover:border-gold-300 hover:text-gold-600"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
