import { forwardRef, cloneElement, isValidElement } from "react";

import { cn } from "@/lib/utils";
import { badgeVariants, iconSizes } from "./Badge.variants";
import type { BadgeProps, IconProps } from "./Badge.types";

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
    ref
  ) => {
    const hasOnlyIcons = !children && (iconLeft || iconRight);
    const currentSize = size || "md";

    const renderIcon = (icon: React.ReactNode) => {
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
          className
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
  }
);

Badge.displayName = "Badge";
