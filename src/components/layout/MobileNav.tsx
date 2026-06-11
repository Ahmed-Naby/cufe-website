"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-50 lg:hidden overflow-y-auto"
          >
            <div className="pt-24 pb-8 px-6">
              <nav className="space-y-1">
                {mainNav.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full py-3 text-body font-medium text-text-primary hover:text-gold-500 transition-colors cursor-pointer"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              expandedItem === item.label && "rotate-180"
                            )}
                          />
                        </button>
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300",
                            expandedItem === item.label
                              ? "max-h-150"
                              : "max-h-0"
                          )}
                        >
                          <div className="pl-4 pb-2 space-y-1">
                            {item.children.map((child) =>
                              child.external ? (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={onClose}
                                  className="block py-2 text-body-sm text-text-secondary hover:text-gold-500 transition-colors"
                                >
                                  {child.label} ↗
                                </a>
                              ) : (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-2 text-body-sm text-text-secondary hover:text-gold-500 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-3 text-body font-medium text-text-primary hover:text-gold-500 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-border">
                <Button href="https://std.eng.cu.edu.eg" className="w-full">
                  Student Portal
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
