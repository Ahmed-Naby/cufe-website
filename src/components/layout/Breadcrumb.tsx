import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-body-sm flex-wrap">
        <li>
          <Link
            href="/"
            className={cn(
              "flex items-center gap-1 transition-colors",
              light
                ? "text-white/60 hover:text-white"
                : "text-text-muted hover:text-text-primary"
            )}
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight
                className={cn(
                  "h-3.5 w-3.5",
                  light ? "text-white/40" : "text-text-muted/50"
                )}
              />
              {isLast ? (
                <span
                  className={cn(
                    "font-medium",
                    light ? "text-white" : "text-text-primary"
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    light
                      ? "text-white/60 hover:text-white"
                      : "text-text-muted hover:text-text-primary"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
