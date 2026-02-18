"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Reale Digital"
              width={170}
              height={44}
              priority
              className="h-auto w-auto drop-shadow-[0_0_10px_rgba(46,211,198,0.20)] transition-opacity duration-200 hover:opacity-90"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/resources"
              className="text-muted hover:text-foreground transition-colors"
            >
              Resources
            </Link>

            <Link
              href="/ai-revenue-system"
              className="text-muted hover:text-foreground transition-colors"
            >
              AI Revenue System
            </Link>

            <Link
              href="/free-ai-visibility-audit"
              className="rounded-xl bg-brand-teal px-4 py-2 font-semibold text-[#001b18] shadow-glow hover:opacity-95 transition"
            >
              Free Audit
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
