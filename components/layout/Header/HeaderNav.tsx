import { Home, RadioTower, AudioLines, Sparkles } from "lucide-react";
import Link from "next/link";
import { MenuItem, MenuDropdown } from "@/components/ui";
import { genres } from "@/data/genres";
import { exclusive } from "@/data/exclusive-content";

export function HeaderNav() {
  return (
    <nav className="hidden md:flex items-center gap-10 ml-10">
      <MenuItem href="/" icon={<Home size={16} strokeWidth={2} />}>
        Home
      </MenuItem>
      <MenuItem href="/live" icon={<RadioTower size={16} strokeWidth={2} />}>
        Live
      </MenuItem>
      <MenuDropdown
        icon={<AudioLines size={16} strokeWidth={2} />}
        label="Musical Styles"
      >
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={genre.url}
            className="block px-4 py-2 text-white text-sm hover:bg-tertiary hover:text-primary transition-colors"
          >
            {genre.name}
          </Link>
        ))}
      </MenuDropdown>
      <MenuDropdown
        icon={<Sparkles size={16} strokeWidth={2} />}
        label="Exclusive Content"
      >
        {exclusive.map((exc) => (
          <Link
            key={exc.id}
            href={exc.url}
            className="block px-4 py-2 text-white text-sm hover:bg-tertiary hover:text-primary transition-colors"
          >
            {exc.name}
          </Link>
        ))}
      </MenuDropdown>
    </nav>
  );
}
