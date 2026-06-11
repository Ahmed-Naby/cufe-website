"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  children: (activeTab: string) => React.ReactNode;
}

export function Tabs({
  tabs,
  defaultTab,
  onTabChange,
  className,
  children,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id ?? "");

  function handleTabClick(tabId: string) {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  }

  return (
    <div className={className}>
      <div className="flex gap-1 border-b border-border" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "px-5 py-3 text-body-sm font-medium transition-colors relative cursor-pointer",
              activeTab === tab.id
                ? "text-gold-500"
                : "text-text-muted hover:text-text-primary"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500" />
            )}
          </button>
        ))}
      </div>
      <div className="mt-6" role="tabpanel">
        {children(activeTab)}
      </div>
    </div>
  );
}
