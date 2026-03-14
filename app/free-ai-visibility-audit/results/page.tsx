import Link from "next/link";

type SearchParams = Promise<{
  score?: string;
  band?: string;
  name?: string;
  company?: string;
  problem?: string;
}>;

export default async function AuditResultsPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const score = Number(params.score || 0);
  const band = params.band || "Warm";
  const name = params.name || "there";
  const company = params.company || "your business";
  const problem = params.problem || "improving visibility and conversion";

  const isHot = band === "Hot";
  const isCold = band === "Cold";

  return (
    <main className="relative overflow-hidden bg-[#030b22] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(64,224,208,0.14),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(98,92,255,0.16),_transparent_28%),linear-gradient(to_bottom,_#07112e,_#030b22_45%,_#020817)]" />

      <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-[32px] border border-white/10 bg-[#07122f]/80 p-8 shadow-[0_12px_50px_rgba(0,0,0,0.35)] lg:p-10">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200">
            YOUR AUDIT RESULT
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {isHot
              ? "You’re a strong fit for a strategy call"
              : isCold
              ? "You may need the foundation first"
              : "You have clear growth opportunities"}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {name}, based on your answers, <span className="text-white">{company}</span>{" "}
            likely has visibility gaps, website conversion weak points, and
            follow-up leaks that are reducing booked calls.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <MetricCard label="Score" value={String(score)} />
            <MetricCard label="Score Band" value={band} />
            <MetricCard label="Priority Focus" value="Visibility + Conversion" />
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-white">What this likely means</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>• Your business may not be clearly positioned for modern search and AI discovery.</li>
              <li>• Your website may not be guiding traffic into calls, forms, or bookings strongly enough.</li>
              <li>• Your follow-up process may be allowing interested leads to disappear.</li>
              <li>• Your biggest stated issue was: <span className="text-white">{problem}</span></li>
            </ul>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.05] p-6">
            <h2 className="text-xl font-bold text-white">Best next step</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {isHot
                ? "Book your free AI Visibility Strategy Call. You’re likely far enough along for actionable fixes that could move the needle quickly."
                : isCold
                ? "Start with one of your free resources first, then book the strategy call once the basics are in place."
                : "You’re in a good middle zone. A strategy call can help prioritize the fastest fixes and show where your biggest opportunities are."}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#38d6cf] px-6 py-3 text-base font-bold text-[#04111f] shadow-[0_0_40px_rgba(56,214,207,0.22)] transition hover:bg-[#4ae2db]"
              >
                Book My Free Strategy Call
              </Link>

              <Link
                href="/resources"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/8"
              >
                Explore Free Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MetricCard({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
