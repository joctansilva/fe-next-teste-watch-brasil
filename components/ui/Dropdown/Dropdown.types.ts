import type { ReactNode } from "react";

/**
 * Dropdown Props
 */
export interface DropdownProps {
  /**
   * The dropdown content.
   */
  children: ReactNode;

  /**
   * Whether the dropdown is open.
   */
  isOpen: boolean;

  /**
   * Dropdown alignment.
   * @default "left"
   */
  align?: "left" | "right";

  /**
   * Additional CSS classes.
   */
  className?: string;
}
