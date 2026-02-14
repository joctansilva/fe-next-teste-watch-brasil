import { cva } from "class-variance-authority";

/**
 * Button Variants
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 select-none whitespace-nowrap",
  {
    variants: {
      /**
       * A variante a ser utilizada.
       * @default filled
       */
      variant: {
        filled: "bg-primary text-white hover:bg-primary-hover",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
        text: "text-primary bg-transparent hover:bg-primary/10",
      },

      /**
       * O tamanho do componente.
       * @default md
       */
      size: {
        sm: "text-sm h-7 px-4 py-1.5 gap-1.5",
        md: "text-base font-medium h-8 px-6 py-2 gap-2",
        lg: "text-lg h-12 px-8 py-3 gap-2.5",
      },

      /**
       * O formato do botão, sendo quadrado ou arredondado.
       * @default rounded
       */
      shape: {
        rounded: "",
        square: "rounded-none",
      },
    },

    compoundVariants: [
      { shape: "rounded", size: "sm", className: "rounded-xl" },
      { shape: "rounded", size: "md", className: "rounded-2xl" },
      { shape: "rounded", size: "lg", className: "rounded-3xl" },
    ],

    defaultVariants: {
      variant: "filled",
      size: "md",
      shape: "rounded",
    },
  }
);

/**
 * Icon Variants
 */
export const iconVariants = cva("inline-flex items-center justify-center", {
  variants: {
    /**
     * O tamanho do ícone.
     * @default md
     */
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
