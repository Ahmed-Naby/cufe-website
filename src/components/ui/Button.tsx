import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  external?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-white! hover:bg-gold-600 active:bg-gold-700 shadow-sm",
  secondary:
    "bg-navy-700 text-white! hover:bg-navy-600 active:bg-navy-800 shadow-sm",
  outline:
    "border-2 border-navy-400 text-navy-600 hover:bg-navy-700 hover:text-text-inverse",
  ghost:
    "text-navy-600 hover:bg-navy-50 active:bg-navy-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-body-sm gap-1.5",
  md: "h-11 px-6 text-body gap-2",
  lg: "h-13 px-8 text-h4 gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  leftIcon,
  rightIcon,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-[var(--radius-button)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...linkProps}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
