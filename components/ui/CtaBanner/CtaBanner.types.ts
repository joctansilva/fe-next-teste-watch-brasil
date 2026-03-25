import type { BannerSlide } from "@/data/banners";

/**
 * CtaBanner Props
 */
export interface CtaBannerProps {
  /**
   * Array of slides to display.
   */
  slides: BannerSlide[];

  /**
   * If `true`, slides advance automatically.
   * @default true
   */
  autoPlay?: boolean;

  /**
   * Interval in milliseconds between slides.
   * @default 5000
   */
  autoPlayInterval?: number;

  /**
   * Additional CSS classes.
   */
  className?: string;
}
