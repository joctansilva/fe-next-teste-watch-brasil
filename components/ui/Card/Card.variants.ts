import { cva } from "class-variance-authority";

/**
 * Card Variants
 */
export const cardVariants = cva(
  "relative overflow-hidden bg-cover bg-center bg-no-repeat select-none h-[288px] w-[208px] hover:ring-2 hover:ring-primary",
  {
    variants: {
      /**
       * O formato do card, sendo quadrado ou arredondado.
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
     * A fonte do subtítulo.
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
