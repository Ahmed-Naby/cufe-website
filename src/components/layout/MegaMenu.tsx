"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { NavItem } from "@/types";

interface MegaMenuProps {
  items: NavItem[];
}

export function MegaMenu({ items }: MegaMenuProps) {
  const groups = new Map<string, NavItem[]>();
  const ungrouped: NavItem[] = [];

  for (const item of items) {
    if (item.group) {
      const list = groups.get(item.group) ?? [];
      list.push(item);
      groups.set(item.group, list);
    } else {
      ungrouped.push(item);
    }
  }

  const hasGroups = groups.size > 0;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
      <div className="bg-white rounded-[var(--radius-card)] shadow-mega-menu border border-border-light p-4 min-w-[320px]">
        {hasGroups ? (
          <div className="flex gap-6">
            {Array.from(groups.entries()).map(([groupName, groupItems]) => (
              <div key={groupName} className="min-w-60">
                <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted px-3 mb-2">
                  {groupName}
                </div>
                <div className="grid gap-0.5">
                  {groupItems.map((item) => (
                    <MenuLink key={item.label} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-1">
            {ungrouped.map((item) => (
              <MenuLink key={item.label} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MenuLink({ item }: { item: NavItem }) {
  const IconComponent = item.icon
    ? (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[item.icon]
    : null;

  const content = (
    <>
      {IconComponent && (
        <div className="shrink-0 mt-0.5 p-1.5 rounded-md bg-gold-50 text-gold-500 group-hover:bg-gold-100 transition-colors">
          <IconComponent className="h-4 w-4" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="font-medium text-body-sm text-text-primary group-hover:text-gold-600 transition-colors flex items-center gap-1.5">
          {item.label}
          {item.external && <ExternalLink className="h-3 w-3 text-text-muted" />}
        </div>
        {item.description && (
          <div className="text-caption text-text-muted mt-0.5 truncate">
            {item.description}
          </div>
        )}
      </div>
    </>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-alt transition-colors group"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-alt transition-colors group"
    >
      {content}
    </Link>
  );
}
