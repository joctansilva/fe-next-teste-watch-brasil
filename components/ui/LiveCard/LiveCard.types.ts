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
   * URL da imagem de fundo.
   */
  image: string;

  /**
   * Nome do artista.
   */
  artistName: string;

  /**
   * Nome do palco.
   */
  stageName: string;

  /**
   * Data e hora formatadas.
   */
  dateTime: string;

  /**
   * Se `true`, exibe o indicador de transmissão ao vivo.
   * @default true
   */
  isLive?: boolean;

  /**
   * Texto alternativo para a imagem.
   */
  alt?: string;

  /**
   * O formato do card, sendo quadrado ou arredondado.
   * @default rounded
   */
  shape?: VariantProps<typeof liveCardVariants>["shape"];

  /**
   * O tamanho do card.
   * @default default
   */
  size?: VariantProps<typeof liveCardVariants>["size"];

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
