"use client";

import { useRef, ReactNode, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode;
  className?: string;
  showControls?: boolean;
}

export function Carousel({
  children,
  className,
  showControls = false,
}: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        carouselRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Drag handlers
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador para velocidade do drag
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative group">
      {/* Botões de navegação - aparecem no hover */}
      {showControls && (
        <>
          {/* Botão Esquerda */}
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

          {/* Botão Direita */}
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

      {/* Container do Carousel */}
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "flex gap-4 overflow-x-auto scroll-smooth",
          // Esconder scrollbar mas manter funcionalidade
          "scrollbar-hide",
          // Padding para não cortar o ring/outline dos cards
          "px-1 py-2 pb-4",
          // Margin negativo nos dois lados para tocar as bordas ao arrastar (56px)
          "-mx-14",
          // Cursor
          isDragging ? "cursor-grabbing" : "cursor-grab",
          // Desabilitar seleção de texto durante drag
          "select-none",
          className,
        )}
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        {/* Wrapping children para garantir que não encolham */}
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "shrink-0",
                // Primeiro card tem margin-left para alinhamento inicial (56px)
                index === 0 && "ml-14"
              )}
            >
              {child}
            </div>
          ))
        ) : (
          <div className="shrink-0 ml-14">{children}</div>
        )}
      </div>
    </div>
  );
}
