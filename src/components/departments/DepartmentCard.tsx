import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Users, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Department } from "@/types";

interface DepartmentCardProps {
  department: Department;
}

export function DepartmentCard({ department }: DepartmentCardProps) {
  const IconComponent =
    (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[department.icon] ??
    LucideIcons.GraduationCap;

  return (
    <Link
      href={`/departments/${department.slug}`}
      className="group flex flex-col bg-white rounded-[var(--radius-card)] border border-border-light shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Image area */}
      <div className="aspect-[16/10] bg-navy-50 relative overflow-hidden">
        {department.image ? (
          <img
            src={department.image}
            alt={department.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center">
            <IconComponent className="h-12 w-12 text-navy-200" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant="gold">{department.shortName}</Badge>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-1">
          <Badge variant="outline" className="text-[10px]">
            {department.category}
          </Badge>
        </div>
        <h3 className="font-heading font-semibold text-body text-navy-700 mb-2 group-hover:text-gold-600 transition-colors">
          {department.name}
        </h3>
        <p className="text-body-sm text-text-secondary line-clamp-2 flex-1 mb-4">
          {department.description}
        </p>
        <div className="flex items-center gap-4 pt-3 border-t border-border-light">
          {department.studentCount > 0 && (
            <div className="flex items-center gap-1.5 text-caption text-text-muted">
              <GraduationCap className="h-3.5 w-3.5" />
              {department.studentCount.toLocaleString()} students
            </div>
          )}
          <div className="flex items-center gap-1.5 text-caption text-text-muted">
            <Users className="h-3.5 w-3.5" />
            {department.staffCount} faculty
          </div>
        </div>
      </div>
    </Link>
  );
}
