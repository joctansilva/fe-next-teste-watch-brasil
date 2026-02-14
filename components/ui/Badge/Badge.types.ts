import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { badgeVariants } from "./Badge.variants";

/**
 * Interface de Props para ícones Lucide
 */
export interface IconProps {
  /**
   * O tamanho do ícone.
   */
  size?: number;

  /**
   * A espessura do traço do ícone.
   */
  strokeWidth?: number;
}

/**
 * Badge Props
 */
export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof badgeVariants> {
  /**
   * O conteúdo do componente.
   */
  children?: ReactNode;

  /**
   * Elemento posicionado antes do conteúdo.
   */
  iconLeft?: ReactNode;

  /**
   * Elemento posicionado depois do conteúdo.
   */
  iconRight?: ReactNode;

  /**
   * A variante a ser utilizada.
   * @default primary
   */
  variant?: VariantProps<typeof badgeVariants>["variant"];

  /**
   * O tamanho do componente.
   * @default md
   */
  size?: VariantProps<typeof badgeVariants>["size"];

  /**
   * O formato do badge, sendo quadrado ou arredondado.
   * @default rounded
   */
  shape?: VariantProps<typeof badgeVariants>["shape"];

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
