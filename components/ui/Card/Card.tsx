import { forwardRef, HTMLAttributes } from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Text } from "../Text";

const cardVariants = cva(
  "relative overflow-hidden bg-cover bg-center bg-no-repeat select-none h-[288px] w-[208px] hover:ring-2 hover:ring-primary",
  {
    variants: {
      shape: {
        rounded: "rounded-lg",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      shape: "rounded",
    },
  },
);

const subtitleVariants = cva("text-sm", {
  variants: {
    font: {
      sans: "font-axiforma",
      script: "font-script",
    },
  },
  defaultVariants: {
    font: "sans",
  },
});

export interface CardProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof cardVariants> {
  image: string;
  footerText: string;
  alt?: string;
  showLandmark?: boolean; // Mostra o landmark (baseado em wasPlayed)
  showWatchAgainLabel?: boolean; // Mostra o título "Watch Again" no topo
}

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
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content container */}
        <div className="relative flex h-full flex-col p-4 pb-12">
          {/* Header - Watch Again (apenas na seção Watch Again) */}
          {showWatchAgainLabel && (
            <div className="flex flex-col">
              <Text variant="subtitle">Watch Again</Text>
              <p className="font-axiforma text-base font-normal text-white/60">
                Festival
              </p>
            </div>
          )}

          {/* Footer - Nome do artista */}
          <div className="mt-auto flex flex-row items-center justify-center">
            <Text variant="subtitle">{footerText}</Text>
          </div>
        </div>

        {/* Landmark - canto inferior direito (mostra se wasPlayed) */}
        {showLandmark && (
          <div className="absolute bottom-2 right-2 z-10">
            <Image
              src="/watch-landmark.svg"
              alt="Watch Landmark"
              width={60}
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
