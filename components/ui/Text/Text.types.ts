import type { ElementType, ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";
import type { textVariants } from "./Text.variants";

/**
 * Text Props
 */
export type TextProps<T extends ElementType = "p"> = {
  /**
   * O elemento HTML a ser renderizado.
   * Se não fornecido, usa o elemento padrão da variante.
   */
  as?: T;

  /**
   * A variante de tipografia a ser utilizada.
   * @default paragraph
   */
  variant?: VariantProps<typeof textVariants>["variant"];

  /**
   * O conteúdo do componente.
   */
  children?: React.ReactNode;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
} & ComponentPropsWithoutRef<T>;
