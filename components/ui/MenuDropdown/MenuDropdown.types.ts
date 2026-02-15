import type { ReactNode } from "react";

/**
 * MenuDropdown Props
 */
export interface MenuDropdownProps {
  /**
   * O ícone a ser exibido.
   */
  icon?: ReactNode;

  /**
   * O texto do item.
   */
  label: ReactNode;

  /**
   * O conteúdo do dropdown.
   */
  children: ReactNode;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
