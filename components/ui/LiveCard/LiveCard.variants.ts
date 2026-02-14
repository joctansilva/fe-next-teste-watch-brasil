import { cva } from "class-variance-authority";

/**
 * LiveCard Variants
 */
export const liveCardVariants = cva(
  "relative overflow-hidden select-none hover:ring-2 hover:ring-primary transition-all cursor-pointer isolate",
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

      /**
       * O tamanho do card.
       * @default default
       */
      size: {
        default: "h-[288px] w-[440px]",
        small: "h-[216px] w-[330px]",
      },
    },

    defaultVariants: {
      shape: "rounded",
      size: "default",
    },
  }
);
