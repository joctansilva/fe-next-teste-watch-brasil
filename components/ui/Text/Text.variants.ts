import { cva } from "class-variance-authority";
import type { ElementType } from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Text Variants
 */
export const textVariants = cva("font-sans", {
  variants: {
    /**
     * A variante de tipografia a ser utilizada.
     * @default paragraph
     */
    variant: {
      hero: "text-[32px] leading-[120%] font-bold",
      title: "text-2xl leading-[120%] font-bold",
      subtitle: "text-lg leading-[120%] font-bold",
      paragraph: "text-base leading-[140%] font-normal",
      small: "text-xs leading-[130%] font-normal",
      nano: "text-sm leading-[100%] font-normal",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});

/**
 * Mapeamento de variantes para elementos HTML padrão
 */
export const defaultElements: Record<
  NonNullable<VariantProps<typeof textVariants>["variant"]>,
  ElementType
> = {
  hero: "h3",
  title: "h4",
  subtitle: "h5",
  paragraph: "p",
  small: "span",
  nano: "p",
};
