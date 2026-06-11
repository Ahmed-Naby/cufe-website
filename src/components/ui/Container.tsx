import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1280px] px-6 lg:px-8",
        narrow && "max-w-[720px]",
        className
      )}
    >
      {children}
    </div>
  );
}
