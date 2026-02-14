import type { ReactNode } from "react";

/**
 * Carousel Props
 */
export interface CarouselProps {
  /**
   * Elementos filhos a serem exibidos no carousel.
   */
  children: ReactNode;

  /**
   * Se `true`, exibe os botões de navegação no hover.
   * @default false
   */
  showControls?: boolean;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
