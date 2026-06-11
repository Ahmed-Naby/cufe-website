"use client";

import { cn } from "@/lib/utils";
import type { NewsCategory } from "@/types";

const categories: Array<"All" | NewsCategory> = [
  "All",
  "Faculty",
  "Student",
  "Research",
  "Events",
  "Announcements",
];

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-1 border-b border-border overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            "px-4 py-3 text-body-sm font-medium whitespace-nowrap transition-colors relative cursor-pointer",
            activeCategory === cat
              ? "text-gold-500"
              : "text-text-muted hover:text-text-primary"
          )}
        >
          {cat}
          {activeCategory === cat && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500" />
          )}
        </button>
      ))}
    </div>
  );
}
