"use client";

import { useState, useEffect } from "react";

export interface UseCtaBannerProps {
  /**
   * Número total de slides.
   */
  slidesCount: number;

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
}

export function useCtaBanner({
  slidesCount,
  autoPlay = true,
  autoPlayInterval = 5000,
}: UseCtaBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const showPagination = slidesCount > 1;

  useEffect(() => {
    if (!autoPlay || !showPagination) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slidesCount, showPagination]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return {
    currentSlide,
    showPagination,
    goToSlide,
  };
}
