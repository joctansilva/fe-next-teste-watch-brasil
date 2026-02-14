import { forwardRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import type { IconProps } from "./Icon.types";

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ name, size = 24, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center justify-center shrink-0", className)}
        {...props}
      >
        <Image
          src={`/icons/${name}.svg`}
          alt={name}
          width={size}
          height={size}
          className="object-contain"
        />
      </div>
    );
  }
);

Icon.displayName = "Icon";
