"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  menuItems: Array<{
    label: string;
    href?: string;
    icon: React.ReactNode;
    dropdown?: Array<{ id: string; name: string; url: string }>;
  }>;
}

export function MobileMenu({ menuItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* Botão Menu Hamburguer */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-center text-white hover:text-primary transition-colors"
        aria-label="Abrir menu"
      >
        <Menu size={24} strokeWidth={2} />
      </button>

      {/* Fundo Escuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-secondary z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Cabeçalho do Drawer */}
        <div className="flex items-center justify-between p-6 border-b border-tertiary">
          <span className="text-white text-lg font-medium">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center text-white hover:text-primary transition-colors"
            aria-label="Fechar menu"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Itens do Menu */}
        <nav className="flex flex-col p-4 overflow-y-auto h-[calc(100%-80px)]">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-white text-base font-medium hover:text-primary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-8 py-2 flex flex-col gap-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.url}
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-white text-sm hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || "/"}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-white text-base font-medium hover:text-primary transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          ))}

          {/* Divisor */}
          <div className="my-4 border-t border-tertiary" />

          {/* Links de Configurações */}
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 text-white text-base font-medium hover:text-primary transition-colors"
          >
            My Profile
          </Link>
          <Link
            href="/help"
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 text-white text-base font-medium hover:text-primary transition-colors"
          >
            Help
          </Link>
        </nav>
      </div>
    </>
  );
}
