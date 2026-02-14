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
        "relative w-full aspect-[1328/400] overflow-hidden rounded-lg bg-white",
        className
      )}
    >
      <div className="relative h-full w-full p-8 pb-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-8 bottom-16 transition-opacity duration-500",
              currentSlide === index ? "opacity-100" : "opacity-0"
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

      {slides.map((slide, index) => (
        <button
          key={`btn-${index}`}
          className={cn(
            "absolute right-12 bottom-18 rounded px-8 py-1.5 font-extrabold text-lg text-white transition-opacity duration-500 flex flex-row gap-2.5 items-center mb-8 mr-8 cursor-pointer",
            "hover:opacity-90",
            currentSlide === index
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          )}
          style={{ backgroundColor: slide.buttonColor }}
        >
          {slide.buttonText}
          <ArrowRight />
        </button>
      ))}

      {showPagination && (
        <div className="absolute bottom-0 left-0 right-0 flex h-[8%] items-center justify-center bg-white">
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
