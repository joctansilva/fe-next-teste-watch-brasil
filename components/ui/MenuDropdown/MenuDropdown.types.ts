import type { ReactNode } from "react";

/**
 * MenuDropdown Props
 */
export interface MenuDropdownProps {
  /**
   * The icon to display.
   */
  icon?: ReactNode;

  /**
   * The item label.
   */
  label: ReactNode;

  /**
   * The dropdown content.
   */
  children: ReactNode;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
