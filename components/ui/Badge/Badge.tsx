import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Mapeamento de tamanhos de ícones por variante
const iconSizes = {
  sm: 10,
  md: 12,
  lg: 14,
} as const;

// Interface para props de ícones (Lucide)
interface IconProps {
  size?: number;
  strokeWidth?: number;
}

const badgeVariants = cva(
  "inline-flex items-center justify-center font-sans whitespace-nowrap select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        white: "bg-white text-foreground",
      },
      size: {
        sm: "h-4 px-1.5 py-0.5 text-[10px] gap-1",
        md: "h-5 px-2 py-1 text-[10px] gap-1.5",
        lg: "h-6 px-3 py-1.5 text-base gap-2",
      },
      shape: {
        rounded: "rounded-full",
        square: "rounded",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "rounded",
    },
  },
);

export interface BadgeProps
  extends
    Omit<HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof badgeVariants> {
  children?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant,
      size = "md",
      shape,
      children,
      iconLeft,
      iconRight,
      className,
      ...props
    },
    ref,
  ) => {
    // Se não tiver children e tiver ícones, renderiza apenas ícones
    const hasOnlyIcons = !children && (iconLeft || iconRight);

    // Garantir que size nunca é null
    const currentSize = size || "md";

    // Aplica tamanho automático aos ícones
    const renderIcon = (icon: ReactNode) => {
      if (!isValidElement(icon)) return icon;

      return cloneElement(icon as React.ReactElement<IconProps>, {
        size: iconSizes[currentSize],
        strokeWidth: 2,
      });
    };

    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, shape }),
          hasOnlyIcons && "aspect-square p-0",
          className,
        )}
        {...props}
      >
        {iconLeft && (
          <span className="inline-flex items-center justify-center">
            {renderIcon(iconLeft)}
          </span>
        )}

        {children}

        {iconRight && (
          <span className="inline-flex items-center justify-center">
            {renderIcon(iconRight)}
          </span>
        )}
      </span>
    );
  },
);

Badge.displayName = "Badge";
