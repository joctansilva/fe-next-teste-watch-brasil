import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16">
      {/* Gradient Background - Custom stops */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #2B2B2E 0%, rgba(43, 43, 46, 0.6) 55%, rgba(43, 43, 46, 0) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-6">
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

        {/* Navigation - Opcional */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Início
          </Link>
          <Link
            href="/shows"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Shows
          </Link>
          <Link
            href="/profile"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Perfil
          </Link>
        </nav>

        {/* Mobile Menu Button - Opcional */}
        <button className="md:hidden text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
