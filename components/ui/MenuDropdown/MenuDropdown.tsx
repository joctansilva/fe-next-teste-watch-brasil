"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dropdown } from "../Dropdown";
import type { MenuDropdownProps } from "./MenuDropdown.types";

export function MenuDropdown({
  icon,
  label,
  children,
  className,
}: MenuDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group flex items-center gap-2 text-white text-base font-medium transition-colors",
          className
        )}
      >
        <span className="group-hover:text-primary transition-colors">
          {icon}
        </span>
        <span className="group-hover:text-primary group-hover:underline transition-colors">
          {label}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            "group-hover:text-primary transition-all",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <Dropdown isOpen={isOpen}>{children}</Dropdown>
    </div>
  );
}
