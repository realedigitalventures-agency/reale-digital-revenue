import Image from "next/image";
import Link from "next/link";
import { LeadMagnet } from "@/lib/leadMagnets";

export default function LeadMagnetCard({
  item,
}: {
  item: LeadMagnet;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_40px_rgba(0,229,255,0.12)]">
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.16),transparent_55%)]" />
      </div>

      <div className="relative overflow-hidden border-b border-white/10 bg-[#07142f]">
        <Image
          src={item.image}
          alt={item.title}
          width={1200}
          height={1200}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="relative p-6">
        <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {item.tag}
        </div>

        <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href={item.href}
            className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            {item.ctaLabel}
          </Link>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            View Services
          </Link>
        </div>
      </div>
    </article>
  );
}
