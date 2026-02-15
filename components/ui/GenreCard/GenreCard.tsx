import { forwardRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui";
import type { GenreCardProps } from "./GenreCard.types";

export const GenreCard = forwardRef<HTMLDivElement, GenreCardProps>(
  (
    {
      title,
      subtitle,
      backgroundImage,
      gradient,
      showLandmark = false,
      alt,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-52 overflow-hidden rounded-lg cursor-pointer",
          "hover:ring-2 hover:ring-primary transition-all",
          backgroundImage ? "w-80 md:w-110" : "w-52",
          className,
        )}
        {...props}
      >
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={alt || title}
            fill
            className="object-cover"
            sizes="440px"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          />
        )}

        <div className="absolute inset-0 bg-black/20" />

        {showLandmark && (
          <div className="absolute -right-1 -bottom-1 z-10">
            <Image
              src="/watch-landmark.svg"
              alt="Watch landmark"
              width={120}
              height={72}
            />
          </div>
        )}

        <div className="relative z-10 flex h-full flex-col justify-end pl-4 pb-8">
          <Text variant="hero" className="text-white " as="h3">
            {title}
          </Text>
          <p className="font-axiforma text-2xl text-white/60">{subtitle}</p>
        </div>
      </div>
    );
  },
);

GenreCard.displayName = "GenreCard";
