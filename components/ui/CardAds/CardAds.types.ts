import type { HTMLAttributes, ReactNode } from "react";

/**
 * Logo Props
 */
export interface LogoProps {
  /**
   * URL da imagem do logo.
   */
  src: string;

  /**
   * Texto alternativo do logo.
   */
  alt: string;

  /**
   * Largura do logo em pixels.
   */
  width: number;

  /**
   * Altura do logo em pixels.
   */
  height: number;

  /**
   * Classes CSS adicionais para o logo.
   */
  className?: string;
}

/**
 * CardAds Props
 */
export interface CardAdsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * URL da imagem de fundo.
   */
  image: string;

  /**
   * Texto alternativo para a imagem.
   */
  alt: string;

  /**
   * Texto exibido no badge.
   */
  badgeText: string;

  /**
   * Ícone exibido no badge.
   */
  badgeIcon?: ReactNode;

  /**
   * Texto exibido no botão.
   */
  buttonText: string;

  /**
   * Ícone exibido no botão.
   */
  buttonIcon?: ReactNode;

  /**
   * Classes CSS adicionais para o botão.
   */
  buttonClassName?: string;

  /**
   * Callback executado ao clicar no botão.
   */
  onButtonClick?: () => void;

  /**
   * Configurações do logo.
   */
  logo?: LogoProps;

  /**
   * Se `true`, a imagem é carregada com prioridade.
   * @default false
   */
  priority?: boolean;

  /**
   * Classes CSS adicionais.
   */
  className?: string;
}
