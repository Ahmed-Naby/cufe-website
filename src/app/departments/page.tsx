"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { DepartmentCard } from "@/components/departments/DepartmentCard";
import { DepartmentFilter } from "@/components/departments/DepartmentFilter";
import { departments } from "@/data/departments";

export default function DepartmentsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? departments
      : departments.filter((d) => d.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our Departments"
        subtitle="Sixteen departments spanning every major engineering discipline"
        breadcrumbs={[{ label: "Departments", href: "/departments" }]}
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <DepartmentFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((dept) => (
                <motion.div
                  key={dept.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <DepartmentCard department={dept} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-text-muted">
              No departments found in this category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
