"use client";

import { cn } from "@/lib/utils";
import { useCarousel } from "../../../hooks/useCarousel";
import type { CarouselProps } from "./Carousel.types";

export function Carousel({
  children,
  className,
  showControls = false,
}: CarouselProps) {
  const {
    carouselRef,
    isDragging,
    scroll,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  } = useCarousel();

  return (
    <div className="relative group">
      {showControls && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "flex gap-4 overflow-x-auto scroll-smooth",
          "scrollbar-hide",
          "px-1 py-2 pb-4",
          "-mx-6 md:-mx-14",
          isDragging ? "cursor-grabbing" : "cursor-grab",
          "select-none",
          className,
        )}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "shrink-0",
                index === 0 && "ml-6 md:ml-14",
                index === children.length - 1 && "mr-6 md:mr-14"
              )}
            >
              {child}
            </div>
          ))
        ) : (
          <div className="shrink-0 ml-6 md:ml-14 mr-6 md:mr-14">{children}</div>
        )}
      </div>
    </div>
  );
}
