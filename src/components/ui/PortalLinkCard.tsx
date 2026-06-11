"use client";

import { ArrowUpRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import type { PortalLink } from "@/types";

interface PortalLinkCardProps {
  portal: PortalLink;
  className?: string;
}

export function PortalLinkCard({ portal, className }: PortalLinkCardProps) {
  const IconComponent =
    (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[portal.icon] ??
    LucideIcons.ExternalLink;

  return (
    <a
      href={portal.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-start gap-4 rounded-[var(--radius-card)] p-6 portal-card-custom",
        className
      )}
    >
      <div className="flex-shrink-0 rounded-xl bg-navy-100 p-3 transition-colors duration-300 group-hover:bg-white/10">
        <IconComponent className="h-6 w-6 text-navy-600 transition-colors duration-300 group-hover:text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-heading font-semibold text-body text-navy-700 transition-colors duration-300 group-hover:text-white">
            {portal.name}
          </span>
          <ArrowUpRight className="h-4 w-4 text-navy-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="mt-2 text-body-sm text-text-secondary transition-colors duration-300 group-hover:text-white/85 line-clamp-2 leading-relaxed">
          {portal.description}
        </p>
      </div>
    </a>
  );
}
