import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        filled: "bg-primary text-white hover:bg-primary-hover",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
        text: "text-primary bg-transparent hover:bg-primary/10",
      },
      size: {
        sm: "text-sm h-7 px-4 py-1.5 gap-1.5",
        md: "text-base font-medium h-8 px-6 py-2 gap-2",
        lg: "text-lg h-12 px-8 py-3 gap-2.5",
      },
      shape: {
        rounded: "",
        square: "rounded-none",
      },
    },
    compoundVariants: [
      // Rounded shapes
      { shape: "rounded", size: "sm", className: "rounded-xl" },
      { shape: "rounded", size: "md", className: "rounded-2xl" },
      { shape: "rounded", size: "lg", className: "rounded-3xl" },
    ],
    defaultVariants: {
      variant: "filled",
      size: "md",
      shape: "rounded",
    },
  },
);

const iconVariants = cva("inline-flex items-center justify-center", {
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children?: ReactNode;
}

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
      ...props
    },
    ref,
  ) => {
    if (!children && !props["aria-label"]) {
      console.warn("Icon-only buttons require aria-label for accessibility");
    }

    return (
      <button
        ref={ref}
        type={props.type ?? "button"}
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
  },
);

Button.displayName = "Button";
