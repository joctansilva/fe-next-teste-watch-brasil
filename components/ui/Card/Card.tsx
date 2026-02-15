import { forwardRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui";
import { cardVariants } from "./Card.variants";
import type { CardProps } from "./Card.types";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      image,
      footerText,
      alt,
      shape,
      showLandmark,
      showWatchAgainLabel,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ shape }), className)}
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={alt || footerText}
        {...props}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

        <div className="relative flex h-full flex-col p-4 pb-12">
          {showWatchAgainLabel && (
            <div className="flex flex-col">
              <Text variant="subtitle">Watch Again</Text>
              <p className="font-axiforma text-base font-normal text-white/60">
                Festival
              </p>
            </div>
          )}

          <div className="mt-auto flex flex-row items-center justify-center">
            <Text variant="subtitle">{footerText}</Text>
          </div>
        </div>

        {showLandmark && (
          <div className="absolute bottom-2 right-2 z-10">
            <Image
              src="/watch-landmark.svg"
              alt="Watch Landmark"
              width={70}
              height={40}
              className="object-contain"
            />
          </div>
        )}
      </div>
    );
  },
);

Card.displayName = "Card";
