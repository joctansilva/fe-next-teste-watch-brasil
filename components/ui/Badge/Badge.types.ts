import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { badgeVariants } from "./Badge.variants";

/**
 * Lucide icon props interface
 */
export interface IconProps {
  /**
   * The icon size.
   */
  size?: number;

  /**
   * The icon stroke width.
   */
  strokeWidth?: number;
}

/**
 * Badge Props
 */
export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof badgeVariants> {
  /**
   * The component content.
   */
  children?: ReactNode;

  /**
   * Element positioned before the content.
   */
  iconLeft?: ReactNode;

  /**
   * Element positioned after the content.
   */
  iconRight?: ReactNode;

  /**
   * The variant to use.
   * @default primary
   */
  variant?: VariantProps<typeof badgeVariants>["variant"];

  /**
   * The component size.
   * @default md
   */
  size?: VariantProps<typeof badgeVariants>["size"];

  /**
   * The badge shape — square or rounded.
   * @default rounded
   */
  shape?: VariantProps<typeof badgeVariants>["shape"];

  /**
   * Additional CSS classes.
   */
  className?: string;
}
