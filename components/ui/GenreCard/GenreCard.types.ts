import type { HTMLAttributes } from "react";

/**
 * GenreCard Props
 */
export interface GenreCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Título exibido no card.
   */
  title: string;

  /**
   * Subtítulo exibido abaixo do título.
   */
  subtitle: string;

  /**
   * URL da imagem de fundo (alternativa ao gradiente).
   */
  backgroundImage?: string;

  /**
   * Gradiente CSS de fundo (usado quando não há backgroundImage).
   */
  gradient?: string;

  /**
   * Se `true`, exibe o landmark no canto inferior direito.
   * @default false
   */
  showLandmark?: boolean;

  /**
   * Texto alternativo para a imagem de fundo.
   */
  alt?: string;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
