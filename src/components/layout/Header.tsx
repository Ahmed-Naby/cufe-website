"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, utilityNav } from "@/data/navigation";
import { MobileNav } from "./MobileNav";
import { MegaMenu } from "./MegaMenu";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-border-light shadow-sm transition-all duration-300"
      >
        {/* Utility bar */}
        <div className="bg-navy-700 text-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8 flex items-center justify-between h-8 text-caption">
            <span className="hidden sm:inline text-white/70">
              Cairo University — Faculty of Engineering
            </span>
            <div className="flex items-center gap-4 ml-auto">
              {utilityNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.external && <ExternalLink className="h-3 w-3" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 mr-8">
            <Image
              src="/images/logo/logo.png"
              alt="Faculty of Engineering — Cairo University"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-contain"
              priority
            />
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-navy-700 text-body leading-tight">
                Faculty of Engineering
              </div>
              <div className="text-caption text-text-muted leading-tight">
                Cairo University
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveMega(item.label)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-2.5 py-2 text-caption font-medium rounded-[var(--radius-button)] transition-colors whitespace-nowrap",
                    activeMega === item.label
                      ? "text-gold-500 bg-gold-50"
                      : "text-text-primary hover:text-gold-500 hover:bg-gold-50/50"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        activeMega === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>
                {item.children && activeMega === item.label && (
                  <MegaMenu items={item.children} />
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 ml-8">
            <Button
              href="https://std.eng.cu.edu.eg"
              size="sm"
              className="hidden lg:inline-flex whitespace-nowrap nav-cta-primary"
            >
              Student Portal
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-2 text-text-primary hover:text-gold-500 transition-colors cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-24" />

      {/* Mobile nav drawer */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
