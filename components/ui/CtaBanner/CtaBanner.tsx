"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Pagination } from "@/components/ui";
import { useCtaBanner } from "./useCtaBanner";
import type { CtaBannerProps } from "./CtaBanner.types";

export function CtaBanner({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: CtaBannerProps) {
  const { currentSlide, showPagination, goToSlide } = useCtaBanner({
    slidesCount: slides.length,
    autoPlay,
    autoPlayInterval,
  });

  return (
    <div
      className={cn(
        "relative w-full aspect-[3/2] overflow-hidden rounded-lg bg-white md:aspect-[1328/400]",
        className
      )}
    >
      <div className="relative h-full w-full p-4 pb-12 md:p-8 md:pb-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-4 bottom-12 transition-opacity duration-500 md:inset-8 md:bottom-16",
              currentSlide === index ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1920px) 100vw, 1920px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {slides.map((slide, index) => (
        <button
          key={`btn-${index}`}
          className={cn(
            "absolute bottom-14 left-1/2 -translate-x-1/2 rounded px-4 py-1 text-sm font-extrabold text-white transition-opacity duration-500 flex flex-row gap-1.5 items-center cursor-pointer",
            "md:left-auto md:right-12 md:bottom-18 md:translate-x-0 md:px-8 md:py-1.5 md:text-lg md:gap-2.5 md:mb-8 md:mr-8",
            "hover:opacity-90",
            currentSlide === index
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          )}
          style={{ backgroundColor: slide.buttonColor }}
        >
          {slide.buttonText}
          <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      ))}

      {showPagination && (
        <div className="absolute bottom-0 left-0 right-0 flex h-10 items-center justify-center bg-white md:h-[8%]">
          <Pagination
            totalSlides={slides.length}
            currentSlide={currentSlide}
            onSlideChange={goToSlide}
          />
        </div>
      )}
    </div>
  );
}
