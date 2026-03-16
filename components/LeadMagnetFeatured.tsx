import Image from "next/image";
import Link from "next/link";
import { LeadMagnet } from "@/lib/leadMagnets";

export default function LeadMagnetFeatured({
  item,
}: {
  item: LeadMagnet;
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(9,25,61,0.95),rgba(3,10,31,0.98))] p-6 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.18),transparent_32%)]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Featured Free Resource
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            {item.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            {item.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={item.href}
              className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              {item.ctaLabel}
            </Link>
            <Link
              href="/free-ai-visibility-audit"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              Request Free Audit
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#07142f]">
          <Image
            src={item.image}
            alt={item.title}
            width={1200}
            height={1200}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
