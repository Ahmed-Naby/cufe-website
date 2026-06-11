import { Breadcrumb } from "./Breadcrumb";
import type { BreadcrumbItem } from "@/types";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-navy-700 py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-navy-500)_0%,_transparent_60%)] opacity-50" />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} light />
        <h1 className="mt-4 font-heading text-display font-bold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-h4 text-white/70 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
