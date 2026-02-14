import { forwardRef, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { Play, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Text } from "../Text";
import { Button } from "../Button";

const liveCardVariants = cva(
  "relative overflow-hidden select-none hover:ring-2 hover:ring-primary transition-all cursor-pointer isolate",
  {
    variants: {
      shape: {
        rounded: "rounded-lg",
        square: "rounded-none",
      },
      size: {
        default: "h-[288px] w-[440px]",
        small: "h-[216px] w-[330px]",
      },
    },
    defaultVariants: {
      shape: "rounded",
      size: "default",
    },
  },
);

export interface LiveCardProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof liveCardVariants> {
  image: string;
  artistName: string;
  stageName: string;
  dateTime: string;
  isLive?: boolean;
  alt?: string;
}

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
        {/* Imagem - 208px de altura */}
        <div className="group/card relative h-[208px] w-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={alt || artistName}
          />

          {/* Gradiente + Controles - Visível apenas no hover */}
          <div className="absolute inset-x-0 bottom-0 h-32 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
            {/* Gradiente de fundo */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(61, 61, 63, 0) 0%, rgba(61, 61, 63, 0.8) 50%, #3D3D3F 100%)",
              }}
            />

            {/* Controles */}
            <div className="relative z-10 flex h-full items-end  gap-3 p-4">
              <div className="flex flex-row items-center gap-3">
                {/* Age Rate */}
                <Image
                  src="/age-rate.png"
                  alt="Classificação etária"
                  width={24}
                  height={24}
                  className="shrink-0"
                />

                {/* Botão Assistir */}
                <Button
                  variant="filled"
                  size="sm"
                  shape="rounded"
                  icon={<Play size={16} />}
                >
                  Assistir
                </Button>

                {/* Botão Adicionar */}
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

        {/* Rodapé cinza - 80px de altura */}
        <div className="flex h-[80px] items-start justify-between bg-tertiary p-4">
          {/* Coluna Esquerda: Artista + Palco */}
          <div className="flex flex-col gap-1">
            <Text variant="subtitle" className="text-primary">
              {artistName}
            </Text>
            <Text variant="body1" className="text-white/80">
              {stageName}
            </Text>
          </div>

          {/* Coluna Direita: Live + Hora */}
          <div className="flex flex-col items-end gap-1">
            {/* Live Badge */}
            {isLive && (
              <div className="flex items-center gap-1.5">
                {/* Bolinha piscante */}
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </div>
                <Text variant="small" className="font-semibold text-white">
                  Live
                </Text>
              </div>
            )}

            {/* Data e Hora */}
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
