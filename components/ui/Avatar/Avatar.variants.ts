import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  "flex items-center justify-center rounded-full bg-primary",
  {
    variants: {
      size: {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const iconSizes = {
  sm: 14,
  md: 18,
  lg: 24,
} as const;
