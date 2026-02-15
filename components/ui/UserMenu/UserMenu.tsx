"use client";

import { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar } from "../Avatar";
import { Dropdown } from "../Dropdown";
import type { UserMenuProps } from "./UserMenu.types";

export function UserMenu({ userName, className }: UserMenuProps) {
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
    <div className={cn("flex items-center gap-4", className)}>
      {/* Avatar */}
      <Avatar showName userName={userName} />{" "}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center text-white hover:text-primary transition-colors"
          aria-label="Settings"
        >
          <Settings size={20} strokeWidth={2} />
        </button>

        <Dropdown isOpen={isOpen} align="right">
          <Link
            href="/profile"
            className="block px-4 py-2 text-white text-sm hover:bg-tertiary hover:text-primary transition-colors"
          >
            My Profile
          </Link>
          <Link
            href="/help"
            className="block px-4 py-2 text-white text-sm hover:bg-tertiary hover:text-primary transition-colors"
          >
            Help
          </Link>
        </Dropdown>
      </div>
    </div>
  );
}
