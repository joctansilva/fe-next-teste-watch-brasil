import type { ElementType, ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";
import type { textVariants } from "./Text.variants";

/**
 * Text Props
 */
export type TextProps<T extends ElementType = "p"> = {
  /**
   * The HTML element to render.
   * If not provided, uses the variant's default element.
   */
  as?: T;

  /**
   * The typography variant to use.
   * @default paragraph
   */
  variant?: VariantProps<typeof textVariants>["variant"];

  /**
   * The component content.
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes.
   */
  className?: string;
} & ComponentPropsWithoutRef<T>;
