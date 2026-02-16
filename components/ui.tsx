import Link from "next/link";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/60 bg-panel/40 px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const cls =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-xl bg-brand-teal px-5 py-3 font-semibold text-[#001b18] shadow-glow hover:opacity-95"
      : "inline-flex items-center justify-center rounded-xl border border-border/70 bg-transparent px-5 py-3 font-semibold text-text hover:bg-panel/40";
  return (
    <Link href={href} className={cls}>
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
      className="group block rounded-2xl border border-border/60 bg-panel/30 p-6 hover:bg-panel/45"
    >
      {badge ? <div className="mb-3"><Badge>{badge}</Badge></div> : null}
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-muted">{body}</div>
      <div className="mt-4 text-sm font-semibold text-brand-blue group-hover:underline">
        Learn more →
      </div>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/50 bg-bg/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-semibold tracking-tight">
            Reale <span className="text-brand-teal">Digital</span>
          </Link>
          <nav className="flex items-center gap-3">
            <Link href="/resources" className="text-sm text-muted hover:text-text">Resources</Link>
            <Link href="/free-ai-visibility-audit" className="text-sm text-muted hover:text-text">Free Audit</Link>
            <Button href="/free-ai-visibility-audit" variant="primary">Start Audit</Button>
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
            <Link href="/free-ai-visibility-audit" className="text-brand-blue hover:underline">Free AI Visibility Audit</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
