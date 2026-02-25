"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/60 bg-panel/40 px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition duration-200";

  const cls =
    variant === "primary"
      ? `${base} bg-brand-teal text-[#001b18] shadow-glow hover:opacity-95 hover:-translate-y-[1px]`
      : `${base} border border-border/70 bg-transparent text-foreground hover:bg-panel/40`;

  return (
    <Link href={href} className={`${cls} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({
  title,
  body,
  href,
  badge
}: {
  title: string;
  body: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-border/60 bg-panel/30 p-6 hover:bg-panel/45 transition"
    >
      {badge ? (
        <div className="mb-3">
          <Badge>{badge}</Badge>
        </div>
      ) : null}
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-muted">{body}</div>
      <div className="mt-4 text-sm font-semibold text-brand-teal group-hover:underline">
        Learn more →
      </div>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/50 bg-panel/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* TEXT LOGO (Premium Gradient + Neon Glow) */}
          <Link href="/" className="flex items-center gap-3">
            <span className="relative font-extrabold tracking-tight text-lg sm:text-xl">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Reale
              </span>{" "}
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-violet bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(46,211,198,0.45)]">
                Digital
              </span>

              {/* glow bloom */}
              <span className="pointer-events-none absolute -inset-3 -z-10 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(46,211,198,0.35),rgba(59,130,246,0.25),transparent_70%)] blur-xl" />
            </span>

            <span className="hidden sm:inline-flex items-center rounded-full border border-border/60 bg-panel/40 px-2 py-1 text-[10px] text-muted">
              AI Growth Systems
            </span>
          </Link>

          <nav className="flex items-center gap-3">
            <Link href="/resources" className="text-sm text-muted hover:text-foreground">
              Resources
            </Link>

            <Button href="/free-ai-visibility-audit" variant="primary">
              Start Audit
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-muted">
          <div>© {new Date().getFullYear()} Reale Digital</div>
          <div>
            <Link
              href="/free-ai-visibility-audit"
              className="text-brand-teal hover:underline"
            >
              Free AI Visibility Audit
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
