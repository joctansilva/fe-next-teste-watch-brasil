import type { HTMLAttributes } from "react";

/**
 * LiveTag Props
 */
export interface LiveTagProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Texto exibido na tag.
   * @default Live
   */
  text?: string;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
