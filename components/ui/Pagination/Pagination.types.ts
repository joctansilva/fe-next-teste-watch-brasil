import type { HTMLAttributes } from "react";

/**
 * Pagination Props
 */
export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Número total de slides/páginas.
   */
  totalSlides: number;

  /**
   * Índice do slide/página atual (0-based).
   */
  currentSlide: number;

  /**
   * Callback executado ao clicar em um dot.
   */
  onSlideChange: (index: number) => void;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
