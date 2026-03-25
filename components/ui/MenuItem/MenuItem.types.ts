import type { ReactNode } from "react";

/**
 * MenuItem Props
 */
export interface MenuItemProps {
  /**
   * The icon to display.
   */
  icon?: ReactNode;

  /**
   * The item label.
   */
  children: ReactNode;

  /**
   * The destination URL.
   */
  href: string;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
