import { cva } from "class-variance-authority";

/**
 * Mapeamento de tamanhos de ícone por tamanho do badge
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
       * A variante a ser utilizada.
       * @default primary
       */
      variant: {
        primary: "bg-primary text-white",
        white: "bg-white text-foreground",
      },

      /**
       * O tamanho do componente.
       * @default md
       */
      size: {
        sm: "h-4 px-1.5 py-0.5 text-[10px] gap-1",
        md: "h-5 px-2 py-1 text-[10px] gap-1.5",
        lg: "h-6 px-3 py-1.5 text-base gap-2",
      },

      /**
       * O formato do badge, sendo quadrado ou arredondado.
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
