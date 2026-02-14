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
   * URL da imagem de fundo.
   */
  image: string;

  /**
   * Texto exibido no rodapé do card.
   */
  footerText: string;

  /**
   * Texto alternativo para a imagem.
   */
  alt?: string;

  /**
   * Se `true`, exibe o landmark no canto inferior direito.
   * @default false
   */
  showLandmark?: boolean;

  /**
   * Se `true`, exibe o label "Watch Again" no topo.
   * @default false
   */
  showWatchAgainLabel?: boolean;

  /**
   * O formato do card, sendo quadrado ou arredondado.
   * @default rounded
   */
  shape?: VariantProps<typeof cardVariants>["shape"];

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
