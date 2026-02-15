import { cn } from "@/lib/utils";
import type { DropdownProps } from "./Dropdown.types";

export function Dropdown({ children, isOpen, className }: DropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute top-full left-0 mt-2 min-w-50 bg-secondary rounded-lg shadow-lg py-2 z-50",
        className,
      )}
    >
      {children}
    </div>
  );
}
