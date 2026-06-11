"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("divide-y divide-border", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between py-4 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-body text-text-primary">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-text-muted transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96 pb-4" : "max-h-0"
              )}
            >
              <div className="text-body-sm text-text-secondary">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
