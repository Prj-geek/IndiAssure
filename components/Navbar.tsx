"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-linen/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="IndiAssure" className="h-10" />
          </Link>

          <div className="hidden sm:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/blogs" className="text-sm font-medium hover:text-secondary transition-colors">
              Blog
            </Link>
            <Link href="/demo" className="text-sm font-medium hover:text-secondary transition-colors">
              Try Demo
            </Link>
            <a
              href="mailto:2727priyanshu@gmail.com"
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            className="sm:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-primary/10 bg-linen">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="block text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/demo"
              className="block text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Try Demo
            </Link>
            <a
              href="mailto:2727priyanshu@gmail.com"
              className="block text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
