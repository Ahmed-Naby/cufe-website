import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "navy" | "outline";
  className?: string;
}

const variantStyles = {
  default: "bg-navy-50 text-navy-700",
  gold: "bg-gold-50 text-gold-700",
  navy: "bg-navy-700 text-white",
  outline: "border border-border text-text-secondary",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-caption font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
