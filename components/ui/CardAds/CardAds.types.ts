import type { HTMLAttributes, ReactNode } from "react";

/**
 * Logo Props
 */
export interface LogoProps {
  /**
   * The logo image URL.
   */
  src: string;

  /**
   * Alternative text for the logo.
   */
  alt: string;

  /**
   * Logo width in pixels.
   */
  width: number;

  /**
   * Logo height in pixels.
   */
  height: number;

  /**
   * Additional CSS classes for the logo.
   */
  className?: string;
}

/**
 * CardAds Props
 */
export interface CardAdsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The background image URL.
   */
  image: string;

  /**
   * Alternative text for the image.
   */
  alt: string;

  /**
   * Text displayed in the badge.
   */
  badgeText: string;

  /**
   * Icon displayed in the badge.
   */
  badgeIcon?: ReactNode;

  /**
   * Text displayed in the button.
   */
  buttonText: string;

  /**
   * Icon displayed in the button.
   */
  buttonIcon?: ReactNode;

  /**
   * Additional CSS classes for the button.
   */
  buttonClassName?: string;

  /**
   * Callback fired when the button is clicked.
   */
  onButtonClick?: () => void;

  /**
   * Logo configuration.
   */
  logo?: LogoProps;

  /**
   * If `true`, the image is loaded with priority.
   * @default false
   */
  priority?: boolean;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
