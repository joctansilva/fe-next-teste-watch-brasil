import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "./HeaderNav";
import { Avatar } from "@/components/ui";

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
          <HeaderNav />
        </div>

        {/* Right Side - User Profile */}
        <Avatar showName userName="Petter Parker" />
      </div>
    </header>
  );
}
