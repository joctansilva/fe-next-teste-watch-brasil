import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui";
import { AudioLines, Home, RadioTower, Sparkles } from "lucide-react";

export function Header() {
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
      <div className="relative mx-auto flex h-full max-w-480 items-center justify-between px-14">
        {/* Left Side - Logo + Navigation */}
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10 ml-10">
            <Link
              href="/"
              className="flex items-center gap-2 text-white text-base font-medium hover:text-primary transition-colors hover:underline"
            >
              <Home size={16} strokeWidth={2} />
              Home
            </Link>
            <Link
              href="/live"
              className="flex items-center gap-2 text-white text-base font-medium hover:text-primary transition-colors hover:underline"
            >
              <RadioTower size={16} strokeWidth={2} />
              Live
            </Link>
            <Link
              href="/styles"
              className="flex items-center gap-2 text-white text-base font-medium hover:text-primary transition-colors hover:underline"
            >
              <AudioLines size={16} strokeWidth={2} />
              Musical Styles
            </Link>
            <Link
              href="/exclusive"
              className="flex items-center gap-2 text-white text-base font-medium hover:text-primary transition-colors hover:underline"
            >
              <Sparkles size={16} strokeWidth={2} />
              Exclusive Content
            </Link>
          </nav>
        </div>

        {/* Right Side - User Profile Placeholder */}
        <div className="text-white text-base font-medium">Petter</div>
      </div>
    </header>
  );
}
