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
        <div className="group/card relative h-[208px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={alt || artistName}
          />

          <div className="absolute inset-x-0 bottom-0 h-32 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
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

        <div className="flex h-20 items-start justify-between bg-tertiary px-4 py-3">
          <div className="flex flex-col gap-6">
            <Text variant="nano" className="text-primary ">
              {artistName}
            </Text>
            <Text variant="nano" className="text-white/80">
              {stageName}
            </Text>
          </div>

          <div className="flex flex-col items-end gap-6">
            {isLive && <LiveTag />}

            <Text variant="small" className="text-white/60">
              {dateTime}
            </Text>
          </div>
        </div>
      </div>
    );
  },
);

LiveCard.displayName = "LiveCard";
