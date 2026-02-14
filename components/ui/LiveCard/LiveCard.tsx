import { forwardRef } from "react";
import Image from "next/image";
import { Play, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Text, Button, LiveTag } from "@/components/ui";
import { liveCardVariants } from "./LiveCard.variants";
import type { LiveCardProps } from "./LiveCard.types";

export const LiveCard = forwardRef<HTMLDivElement, LiveCardProps>(
  (
    {
      image,
      artistName,
      stageName,
      dateTime,
      isLive = true,
      alt,
      shape,
      size,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          liveCardVariants({ shape, size }),
          "flex flex-col",
          className,
        )}
        {...props}
      >
        <div className="group/card relative h-28 w-full md:h-52">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={alt || artistName}
          />

          {/* Age-rate sempre visível em mobile */}
          <div className="absolute bottom-2 left-2 md:hidden">
            <Image
              src="/age-rate.png"
              alt="Classificação etária"
              width={16}
              height={16}
              className="shrink-0"
            />
          </div>

          {/* Overlay de hover apenas em desktop */}
          <div className="absolute inset-x-0 bottom-0 h-32 opacity-0 transition-opacity duration-300 md:group-hover/card:opacity-100">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(61, 61, 63, 0) 0%, rgba(61, 61, 63, 0.8) 50%, #3D3D3F 100%)",
              }}
            />

            <div className="relative z-10 flex h-full items-end  gap-3 p-4">
              <div className="flex flex-row items-center gap-3">
                <Image
                  src="/age-rate.png"
                  alt="Classificação etária"
                  width={24}
                  height={24}
                  className="shrink-0"
                />

                <Button
                  variant="filled"
                  size="sm"
                  shape="rounded"
                  icon={<Play size={16} />}
                >
                  Assistir
                </Button>

                <button
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-600 text-white transition-colors hover:bg-gray-500"
                  aria-label="Adicionar à lista"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-10.5 items-start justify-between bg-tertiary px-2 py-1 md:px-4 md:py-3 md:h-20">
          <div className="flex flex-col gap-1 md:gap-6">
            <Text variant="nano" className="text-primary">
              {artistName}
            </Text>
            <Text variant="small" className="text-white/60 md:hidden">
              {dateTime}
            </Text>
            <Text variant="nano" className="text-white/80 hidden md:flex">
              {stageName}
            </Text>
          </div>
          <div className="flex flex-col items-end gap-1 md:gap-6">
            {isLive && <LiveTag />}

            <Text variant="small" className="text-white/60 hidden md:flex">
              {dateTime}
            </Text>
          </div>
        </div>
      </div>
    );
  },
);

LiveCard.displayName = "LiveCard";
