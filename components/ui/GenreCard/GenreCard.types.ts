import type { HTMLAttributes } from "react";

/**
 * GenreCard Props
 */
export interface GenreCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Title displayed in the card.
   */
  title: string;

  /**
   * Subtitle displayed below the title.
   */
  subtitle: string;

  /**
   * Background image URL (alternative to gradient).
   */
  backgroundImage?: string;

  /**
   * CSS gradient background (used when backgroundImage is not provided).
   */
  gradient?: string;

  /**
   * If `true`, shows the landmark in the bottom-right corner.
   * @default false
   */
  showLandmark?: boolean;

  /**
   * Alternative text for the background image.
   */
  alt?: string;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
