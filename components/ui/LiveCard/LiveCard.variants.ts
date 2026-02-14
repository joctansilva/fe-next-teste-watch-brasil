import { cva } from "class-variance-authority";

/**
 * LiveCard Variants
 */
export const liveCardVariants = cva(
  "relative overflow-hidden select-none md:hover:ring-2 md:hover:ring-primary transition-all cursor-pointer isolate",
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
        default: "h-[154px] w-[220px] md:h-[288px] md:w-[440px]",
        small: "h-[154px] w-[220px] md:h-[216px] md:w-[330px]",
      },
    },

    defaultVariants: {
      shape: "rounded",
      size: "default",
    },
  }
);
