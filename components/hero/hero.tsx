"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side Copy */}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              AI Growth Systems that turn visibility into revenue.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted">
              Reale Digital builds AI search visibility, conversion-focused pages,
              and automated follow-up systems so service businesses get more
              booked calls — without hiring more staff.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/free-ai-visibility-audit"
                className="rounded-xl bg-brand-teal px-6 py-3 font-semibold text-brand-ink shadow-glow"
              >
                Get Free AI Audit
              </Link>

              <Link
                href="/how-it-works"
                className="rounded-xl border border-border px-6 py-3"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right Side Video */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-panel shadow-glow">
            <video
              className="h-[480px] w-full object-cover opacity-70"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
            >
              <source src="/videos/hero-loop.webm" type="video/webm" />
              <source src="/videos/hero-loop.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
          </div>

        </div>
      </div>
    </section>
  );
}
