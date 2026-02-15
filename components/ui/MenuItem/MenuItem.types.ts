import type { ReactNode } from "react";

/**
 * MenuItem Props
 */
export interface MenuItemProps {
  /**
   * O ícone a ser exibido.
   */
  icon?: ReactNode;

  /**
   * O texto do item.
   */
  children: ReactNode;

  /**
   * A URL de destino.
   */
  href: string;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
