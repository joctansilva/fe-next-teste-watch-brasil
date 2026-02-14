import { forwardRef, HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "../Badge";
import { Button } from "../Button";

export interface CardAdsProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  alt: string;
  badgeText: string;
  badgeIcon?: ReactNode;
  buttonText: string;
  buttonIcon?: ReactNode;
  buttonClassName?: string;
  onButtonClick?: () => void;
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  priority?: boolean;
}

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
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-full w-110 overflow-hidden rounded-lg hover:ring-2 hover:ring-primary",
          className,
        )}
        {...props}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="440px"
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between">
            {/* Logo */}
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

            {/* Badge no canto superior direito */}
            <Badge
              variant="primary"
              size="md"
              iconRight={badgeIcon}
              className="ml-auto mr-3 mt-2"
            >
              {badgeText}
            </Badge>
          </div>

          {/* Main Content - dividido em 2 colunas */}
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
  },
);

CardAds.displayName = "CardAds";
