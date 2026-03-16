"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import type { ProductCardItem } from "@/lib/products";

export default function ProductCard({
  product,
}: {
  product: ProductCardItem;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onEnter = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: -8,
      scale: 1.02,
      boxShadow: "0 0 40px rgba(0,229,255,0.22)",
      duration: 0.32,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.32,
      ease: "power2.out",
    });
  };

  return (
    <article
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(14,28,64,0.96),rgba(6,14,34,0.96))] p-5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.16),transparent_55%)]" />
      </div>

      <div className="relative mb-4 overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#07142f]">
        <Image
          src={product.image}
          alt={product.title}
          width={1200}
          height={1200}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="relative">
        <div className="mb-2 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {product.category}
        </div>

        <h3 className="text-2xl font-bold text-white">{product.shortTitle}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {product.description}
        </p>

        <div className="mt-5 space-y-3">
          {product.tiers.map((tier) => (
            <div
              key={tier.lookupKey}
              className={`rounded-2xl border px-4 py-4 ${
                tier.popular
                  ? "border-cyan-300/60 bg-cyan-300/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {tier.name}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {tier.billingType === "subscription" ? "Monthly" : "One-Time"}
                  </div>
                </div>
                <div className="text-lg font-bold text-cyan-300">
                  {tier.priceLabel}
                </div>
              </div>

              <Link
                href={`/checkout?product=${tier.lookupKey}`}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                {tier.billingType === "subscription" ? "Start Now" : "Get Started"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
