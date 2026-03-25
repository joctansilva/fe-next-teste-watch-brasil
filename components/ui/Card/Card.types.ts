import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { cardVariants } from "./Card.variants";

/**
 * Card Props
 */
export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof cardVariants> {
  /**
   * The background image URL.
   */
  image: string;

  /**
   * Text displayed in the card footer.
   */
  footerText: string;

  /**
   * Alternative text for the image.
   */
  alt?: string;

  /**
   * If `true`, shows the landmark in the bottom-right corner.
   * @default false
   */
  showLandmark?: boolean;

  /**
   * If `true`, shows the "Watch Again" label at the top.
   * @default false
   */
  showWatchAgainLabel?: boolean;

  /**
   * The card shape — square or rounded.
   * @default rounded
   */
  shape?: VariantProps<typeof cardVariants>["shape"];

  /**
   * Additional CSS classes.
   */
  className?: string;
}
