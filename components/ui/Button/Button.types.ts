import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./Button.variants";

/**
 * Button Props
 */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * The component content.
   */
  children?: ReactNode;

  /**
   * Element positioned before or after the content.
   */
  icon?: ReactNode;

  /**
   * The icon position.
   * @default left
   */
  iconPosition?: "left" | "right";

  /**
   * The variant to use.
   * @default filled
   */
  variant?: VariantProps<typeof buttonVariants>["variant"];

  /**
   * The component size.
   * @default md
   */
  size?: VariantProps<typeof buttonVariants>["size"];

  /**
   * The button shape — square or rounded.
   * @default rounded
   */
  shape?: VariantProps<typeof buttonVariants>["shape"];

  /**
   * Additional CSS classes.
   */
  className?: string;

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The button type.
   * @default button
   */
  type?: "button" | "submit" | "reset";

  /**
   * Accessibility label for icon-only buttons.
   */
  "aria-label"?: string;
}
