"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  { id: "charcoal", label: "Charcoal", swatch: "#495057" },
  { id: "stanford", label: "Stanford", swatch: "#8C1515" },
  { id: "mit", label: "MIT", swatch: "#750014" },
  { id: "classic", label: "Navy & Gold", swatch: "#0D2240" },
] as const;

type ThemeId = (typeof themes)[number]["id"];

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ThemeId>("charcoal");

  useEffect(() => {
    const stored = localStorage.getItem("cufe-theme") as ThemeId | null;
    if (stored && themes.some((t) => t.id === stored)) {
      setActive(stored);
      applyTheme(stored);
    }
  }, []);

  function applyTheme(id: ThemeId) {
    const el = document.documentElement;
    if (id === "charcoal") {
      el.removeAttribute("data-theme");
    } else {
      el.setAttribute("data-theme", id);
    }
    localStorage.setItem("cufe-theme", id);
    setActive(id);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-14 right-0 bg-white rounded-[var(--radius-card)] shadow-mega-menu border border-border-light p-3 min-w-44">
          <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2 px-1">
            Color Palette
          </p>
          <div className="grid gap-1">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  applyTheme(theme.id);
                  setOpen(false);
                }}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 rounded-lg text-body-sm font-medium transition-colors cursor-pointer w-full text-left",
                  active === theme.id
                    ? "bg-navy-50 text-navy-700"
                    : "text-text-secondary hover:bg-navy-50"
                )}
              >
                <span
                  className="w-4 h-4 rounded-full shrink-0 border-2"
                  style={{
                    backgroundColor: theme.swatch,
                    borderColor: active === theme.id ? theme.swatch : "transparent",
                    boxShadow: active === theme.id ? `0 0 0 2px white, 0 0 0 4px ${theme.swatch}` : "none",
                  }}
                />
                {theme.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="h-11 w-11 rounded-full bg-navy-700 text-white shadow-lg hover:bg-navy-600 transition-colors flex items-center justify-center cursor-pointer"
        aria-label="Switch color palette"
      >
        <Palette className="h-5 w-5" />
      </button>
    </div>
  );
}
