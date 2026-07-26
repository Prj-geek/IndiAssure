"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Mark from "./Mark";

const links = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blog" },
  { href: "/demo", label: "Try Demo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-1 font-display text-xl text-ink"
          >
            <span>Indi</span>
            <Mark className="w-3.5 h-4 text-mint translate-y-[1px]" />
            <span>Assure</span>
          </Link>

          <div className="hidden sm:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-medium uppercase tracking-widest text-ink/60 hover:text-mint transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:2727priyanshu@gmail.com"
              className="btn-pill bg-ink text-cream hover:bg-ink-soft text-xs uppercase tracking-widest py-2.5 px-5"
            >
              Contact
            </a>
          </div>

          <button
            className="sm:hidden p-2 text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-ink/10 bg-cream">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm font-medium uppercase tracking-wide text-ink/70"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:2727priyanshu@gmail.com"
              className="block text-sm font-medium uppercase tracking-wide text-ink/70"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
