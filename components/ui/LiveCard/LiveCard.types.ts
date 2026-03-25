import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { liveCardVariants } from "./LiveCard.variants";

/**
 * LiveCard Props
 */
export interface LiveCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof liveCardVariants> {
  /**
   * The background image URL.
   */
  image: string;

  /**
   * The artist name.
   */
  artistName: string;

  /**
   * The stage name.
   */
  stageName: string;

  /**
   * Formatted date and time.
   */
  dateTime: string;

  /**
   * If `true`, shows the live broadcast indicator.
   * @default true
   */
  isLive?: boolean;

  /**
   * Alternative text for the image.
   */
  alt?: string;

  /**
   * The card shape — square or rounded.
   * @default rounded
   */
  shape?: VariantProps<typeof liveCardVariants>["shape"];

  /**
   * The card size.
   * @default default
   */
  size?: VariantProps<typeof liveCardVariants>["size"];

  /**
   * Additional CSS classes.
   */
  className?: string;
}
