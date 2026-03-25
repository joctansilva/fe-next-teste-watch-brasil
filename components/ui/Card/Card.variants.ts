import { cva } from "class-variance-authority";

/**
 * Card Variants
 */
export const cardVariants = cva(
  "relative overflow-hidden select-none h-[288px] w-[208px] hover:ring-2 hover:ring-primary",
  {
    variants: {
      /**
       * The card shape — square or rounded.
       * @default rounded
       */
      shape: {
        rounded: "rounded-lg",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      shape: "rounded",
    },
  }
);

/**
 * Subtitle Variants
 */
export const subtitleVariants = cva("text-sm", {
  variants: {
    /**
     * The subtitle font.
     * @default sans
     */
    font: {
      sans: "font-axiforma",
      script: "font-script",
    },
  },
  defaultVariants: {
    font: "sans",
  },
});
