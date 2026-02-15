import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AvatarProps } from "./Avatar.types";
import { avatarVariants, iconSizes } from "./Avatar.variants";

export function Avatar({
  size = "md",
  showName = false,
  userName,
  className,
}: AvatarProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={avatarVariants({ size })}>
        <User size={iconSizes[size]} className="text-white" strokeWidth={2} />
      </div>
      {showName && userName && (
        <span className="text-white text-base font-medium">{userName}</span>
      )}
    </div>
  );
}
