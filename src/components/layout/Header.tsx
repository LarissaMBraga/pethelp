
"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "/" },
  { label: "Encontrar um pet", href: "/animals" },
  { label: "Como funciona", href: "/#how-it-works" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9ebe5] bg-[#f8f8f4]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#245c46] text-white">
            <Heart size={21} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#245c46]">
            PetHelp<span className="text-[#e9a66a]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#626b63] transition hover:text-[#245c46]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#245c46] transition hover:bg-[#e9f1e8]"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-[#245c46] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#194532]"
          >
            Criar conta
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-[#245c46] md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#e9ebe5] bg-[#f8f8f4] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#626b63]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-semibold text-[#245c46]"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[#245c46] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Criar conta
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
