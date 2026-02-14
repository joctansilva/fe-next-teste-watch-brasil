import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import type { PaginationProps } from "./Pagination.types";

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ totalSlides, currentSlide, onSlideChange, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center gap-2", className)}
        {...props}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={cn(
              "rounded-full transition-all",
              currentSlide === index
                ? "bg-primary opacity-100 w-3 h-3"
                : "bg-primary opacity-40 hover:opacity-60 w-2 h-2",
            )}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : "false"}
          />
        ))}
      </div>
    );
  },
);

Pagination.displayName = "Pagination";
