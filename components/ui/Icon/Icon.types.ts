import type { HTMLAttributes } from "react";

/**
 * Icon Props
 */
export interface IconProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Icon name (SVG filename without extension).
   */
  name: string;

  /**
   * Icon size in pixels.
   * @default 24
   */
  size?: number;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
