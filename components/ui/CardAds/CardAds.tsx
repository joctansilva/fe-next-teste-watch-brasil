import { forwardRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Badge, Button } from "@/components/ui";
import type { CardAdsProps } from "./CardAds.types";

export const CardAds = forwardRef<HTMLDivElement, CardAdsProps>(
  (
    {
      image,
      alt,
      badgeText,
      badgeIcon,
      buttonText,
      buttonIcon,
      buttonClassName,
      onButtonClick,
      logo,
      priority = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-full w-110 overflow-hidden rounded-lg hover:ring-2 hover:ring-primary",
          className
        )}
        {...props}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="440px"
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between">
            {logo && (
              <div className="shrink-0 ml-6 mt-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={logo.className}
                />
              </div>
            )}

            <Badge
              variant="primary"
              size="md"
              iconRight={badgeIcon}
              className="ml-auto mr-3 mt-2"
            >
              {badgeText}
            </Badge>
          </div>

          <div className="mt-auto grid grid-cols-2">
            <div />
            <div className="flex flex-col items-center justify-center mb-5">
              <Button
                variant="filled"
                shape="square"
                size="md"
                iconPosition="right"
                icon={buttonIcon}
                onClick={onButtonClick}
                className={buttonClassName}
              >
                <p className="underline underline-offset-auto">{buttonText}</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CardAds.displayName = "CardAds";
