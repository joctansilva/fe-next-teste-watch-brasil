import type { HTMLAttributes } from "react";

/**
 * LiveTag Props
 */
export interface LiveTagProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Text displayed in the tag.
   * @default Live
   */
  text?: string;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
