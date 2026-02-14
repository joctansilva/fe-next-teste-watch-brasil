import { forwardRef, HTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Text } from "../Text";

export interface GenreCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  gradient?: string;
  showLandmark?: boolean;
  alt?: string;
}

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
          // Com imagem: 440px | Com gradiente: 208px (w-52)
          backgroundImage ? "w-110" : "w-52",
          className,
        )}
        {...props}
      >
        {/* Background - Imagem ou Gradiente */}
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

        {/* Overlay para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Landmark (ícone de watch again) */}
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

        {/* Conteúdo - Título e Subtítulo */}
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
