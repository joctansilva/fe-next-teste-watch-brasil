import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MenuItemProps } from "./MenuItem.types";

export function MenuItem({ icon, children, href, className }: MenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-2 text-white text-base font-medium transition-colors",
        className
      )}
    >
      <span className="group-hover:text-primary transition-colors">
        {icon}
      </span>
      <span className="group-hover:text-primary group-hover:underline transition-colors">
        {children}
      </span>
    </Link>
  );
}
