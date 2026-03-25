import { cva } from "class-variance-authority";

/**
 * Icon size mapping by badge size
 */
export const iconSizes = {
  sm: 10,
  md: 12,
  lg: 14,
} as const;

/**
 * Badge Variants
 */
export const badgeVariants = cva(
  "inline-flex items-center justify-center font-sans whitespace-nowrap select-none",
  {
    variants: {
      /**
       * The variant to use.
       * @default primary
       */
      variant: {
        primary: "bg-primary text-white",
        white: "bg-white text-foreground",
      },

      /**
       * The component size.
       * @default md
       */
      size: {
        sm: "h-4 px-1.5 py-0.5 text-[10px] gap-1",
        md: "h-5 px-2 py-1 text-[10px] gap-1.5",
        lg: "h-6 px-3 py-1.5 text-base gap-2",
      },

      /**
       * The badge shape — square or rounded.
       * @default rounded
       */
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
  }
);
