import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./Button.variants";

/**
 * Button Props
 */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * O conteúdo do componente.
   */
  children?: ReactNode;

  /**
   * Elemento posicionado antes ou depois do conteúdo.
   */
  icon?: ReactNode;

  /**
   * A posição do ícone.
   * @default left
   */
  iconPosition?: "left" | "right";

  /**
   * A variante a ser utilizada.
   * @default filled
   */
  variant?: VariantProps<typeof buttonVariants>["variant"];

  /**
   * O tamanho do componente.
   * @default md
   */
  size?: VariantProps<typeof buttonVariants>["size"];

  /**
   * O formato do botão, sendo quadrado ou arredondado.
   * @default rounded
   */
  shape?: VariantProps<typeof buttonVariants>["shape"];

  /**
   * Classes CSS adicionais.
   */
  className?: string;

  /**
   * Se `true`, o componente fica desabilitado.
   * @default false
   */
  disabled?: boolean;

  /**
   * O tipo do botão.
   * @default button
   */
  type?: "button" | "submit" | "reset";

  /**
   * Label de acessibilidade para botões apenas com ícone.
   */
  "aria-label"?: string;
}
