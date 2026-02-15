import type { ReactNode } from "react";

/**
 * Dropdown Props
 */
export interface DropdownProps {
  /**
   * O conteúdo do dropdown.
   */
  children: ReactNode;

  /**
   * Se o dropdown está aberto.
   */
  isOpen: boolean;

  /**
   * Alinhamento do dropdown
   * @default "left"
   */
  align?: "left" | "right";

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
