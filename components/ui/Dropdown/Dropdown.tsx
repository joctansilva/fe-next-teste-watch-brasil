import { cn } from "@/lib/utils";
import type { DropdownProps } from "./Dropdown.types";

export function Dropdown({
  children,
  isOpen,
  align = "left",
  className,
}: DropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute top-full mt-2 min-w-50 bg-secondary rounded-lg shadow-lg py-2 z-50",
        align === "left" ? "left-0" : "right-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
