import type { HTMLAttributes } from "react";

/**
 * Pagination Props
 */
export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Total number of slides/pages.
   */
  totalSlides: number;

  /**
   * Index of the current slide/page (0-based).
   */
  currentSlide: number;

  /**
   * Callback fired when a dot is clicked.
   */
  onSlideChange: (index: number) => void;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
