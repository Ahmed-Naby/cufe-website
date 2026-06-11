import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center"
      )}
    >
      <h2
        className={cn(
          "font-heading text-h1 font-bold tracking-tight",
          light ? "text-text-inverse" : "text-navy-700"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-[3px] w-10 rounded-full bg-gold-400",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-h4 max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
