import type { HTMLAttributes } from "react";

/**
 * Icon Props
 */
export interface IconProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Nome do ícone (nome do arquivo SVG sem extensão).
   */
  name: string;

  /**
   * Tamanho do ícone em pixels.
   * @default 24
   */
  size?: number;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
