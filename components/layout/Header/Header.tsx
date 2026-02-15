"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, RadioTower, AudioLines, Sparkles } from "lucide-react";
import { HeaderNav } from "./HeaderNav";
import { MobileMenu } from "./MobileMenu";
import { UserMenu } from "@/components/ui";
import { genres } from "@/data/genres";
import { exclusive } from "@/data/exclusive-content";

export function Header() {
  const mobileMenuItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home size={20} strokeWidth={2} />,
    },
    {
      label: "Live",
      href: "/live",
      icon: <RadioTower size={20} strokeWidth={2} />,
    },
    {
      label: "Musical Styles",
      icon: <AudioLines size={20} strokeWidth={2} />,
      dropdown: genres,
    },
    {
      label: "Exclusive Content",
      icon: <Sparkles size={20} strokeWidth={2} />,
      dropdown: exclusive,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #2B2B2E 0%, rgba(43, 43, 46, 0.6) 55%, rgba(43, 43, 46, 0) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto flex h-full max-w-480 items-center justify-between px-6 md:px-14">
        {/* Left Side - Logo + Navigation (Desktop) */}
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Watch Brasil"
              width={120}
              height={40}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <HeaderNav />
        </div>

        {/* Right Side - Desktop User Menu */}
        <div className="hidden md:block">
          <UserMenu userName="Petter Parker" />
        </div>

        {/* Mobile Menu */}
        <MobileMenu menuItems={mobileMenuItems} />
      </div>
    </header>
  );
}
