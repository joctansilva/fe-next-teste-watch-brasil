import type { BannerSlide } from "@/data/banners";

/**
 * CtaBanner Props
 */
export interface CtaBannerProps {
  /**
   * Array de slides a serem exibidos.
   */
  slides: BannerSlide[];

  /**
   * Se `true`, avança automaticamente os slides.
   * @default true
   */
  autoPlay?: boolean;

  /**
   * Intervalo em milissegundos entre os slides.
   * @default 5000
   */
  autoPlayInterval?: number;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
