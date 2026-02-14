"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BannerSlide } from "@/data/banners";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface CtaBannerProps {
  slides: BannerSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function CtaBanner({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: CtaBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const showPagination = slides.length > 1;

  // Auto-play
  useEffect(() => {
    if (!autoPlay || !showPagination) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length, showPagination]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={cn(
        "relative w-full aspect-[1328/400] overflow-hidden rounded-lg bg-white",
        className,
      )}
    >
      {/* Área da Imagem com Padding */}
      <div className="relative h-full w-full p-8 pb-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-8 bottom-16 transition-opacity duration-500",
              currentSlide === index ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1920px) 100vw, 1920px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Botão CTA - inferior direito */}
      {slides.map((slide, index) => (
        <button
          key={`btn-${index}`}
          className={cn(
            "absolute right-12 bottom-18 rounded px-8 py-1.5 font-extrabold text-lg text-white transition-opacity duration-500 flex flex-row gap-2.5 items-center mb-8 mr-8 cursor-pointer",
            "hover:opacity-90",
            currentSlide === index
              ? "opacity-100"
              : "opacity-0 pointer-events-none",
          )}
          style={{ backgroundColor: slide.buttonColor }}
        >
          {slide.buttonText}
          <ArrowRight />
        </button>
      ))}

      {/* Rodapé Branco com Paginação */}
      {showPagination && (
        <div className="absolute bottom-0 left-0 right-0 flex h-[8%] items-center justify-center gap-2 bg-white">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                currentSlide === index
                  ? "bg-primary opacity-100 w-3 h-3"
                  : "bg-primary opacity-40 hover:opacity-60 w-2 h-2",
              )}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
