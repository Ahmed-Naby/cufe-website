import { Microscope } from "lucide-react";

interface ResearchAreasProps {
  areas: string[];
}

export function ResearchAreas({ areas }: ResearchAreasProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {areas.map((area) => (
        <div
          key={area}
          className="flex items-center gap-2 px-4 py-2.5 bg-surface-alt rounded-[var(--radius-card)] border border-border-light"
        >
          <Microscope className="h-4 w-4 text-gold-500" />
          <span className="text-body-sm font-medium text-text-primary">
            {area}
          </span>
        </div>
      ))}
    </div>
  );
}
