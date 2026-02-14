import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { Text } from "@/components/ui";
import type { LiveTagProps } from "./LiveTag.types";

export const LiveTag = forwardRef<HTMLDivElement, LiveTagProps>(
  ({ text = "Live", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1.5", className)}
        {...props}
      >
        <div className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-hover opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-hover" />
        </div>
        <Text variant="small" className="font-semibold text-primary-hover">
          {text}
        </Text>
      </div>
    );
  }
);

LiveTag.displayName = "LiveTag";
