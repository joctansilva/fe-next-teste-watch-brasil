import type { ReactNode } from "react";

/**
 * Carousel Props
 */
export interface CarouselProps {
  /**
   * Child elements to display in the carousel.
   */
  children: ReactNode;

  /**
   * If `true`, shows navigation buttons on hover.
   * @default false
   */
  showControls?: boolean;

  /**
   * Additional CSS classes.
   */
  className?: string;

  /**
   * Accessible label for the carousel (WCAG 2.4.1).
   */
  "aria-label"?: string;
}
