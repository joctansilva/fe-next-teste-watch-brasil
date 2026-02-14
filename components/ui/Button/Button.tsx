import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants, iconVariants } from "./Button.variants";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      shape,
      icon,
      iconPosition = "left",
      children,
      className,
      type,
      ...props
    },
    ref
  ) => {
    if (!children && !props["aria-label"]) {
      console.warn(
        "Button: Icon-only buttons require aria-label for accessibility"
      );
    }

    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={cn(buttonVariants({ variant, size, shape }), className)}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className={iconVariants({ size })}>{icon}</span>
        )}

        {children}

        {icon && iconPosition === "right" && (
          <span className={iconVariants({ size })}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
