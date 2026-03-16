import Link from "next/link";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import LeadMagnetFeatured from "@/components/LeadMagnetFeatured";
import FunnelSteps from "@/components/FunnelSteps";
import OutcomeStrip from "@/components/OutcomeStrip";
import { LEAD_MAGNETS } from "@/lib/leadMagnets";

export const metadata = {
  title: "Lead Magnet Vault | Reale Digital",
  description:
    "Free AI visibility, local SEO, automation, and conversion resources built for service businesses.",
};

export default function LeadMagnetVaultPage() {
  const featured = LEAD_MAGNETS.find((item) => item.featured) || LEAD_MAGNETS[0];
  const rest = LEAD_MAGNETS.filter((item) => item.slug !== featured.slug);

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.22),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#06122b_0%,#020617_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Reale Digital Resource Vault
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Free AI visibility, local SEO, automation, and conversion resources.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Built for local businesses that want better rankings, faster follow-up,
              stronger websites, and a real growth system behind the scenes.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#lead-magnets"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Get Free Resources
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>

          <div className="mt-14">
            <LeadMagnetFeatured item={featured} />
          </div>
        </div>
      </section>

      <section id="lead-magnets" className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        <OutcomeStrip />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Free Resources
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Choose the guide, toolkit, report, or audit that matches your next move.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((item) => (
            <LeadMagnetCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <FunnelSteps />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-6 md:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(10,30,68,0.96),rgba(3,10,31,0.98))] px-6 py-10 text-center md:px-10">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Want Help Implementing This?
          </div>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            Turn these free resources into a complete Reale Digital growth system.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Get the roadmap, then let us help you build the automation, AI
            visibility, conversion improvements, and growth engine behind it.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              View Reale Digital Services
            </Link>
            <Link
              href="/free-ai-visibility-audit"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              Start With A Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
