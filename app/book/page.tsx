import Link from "next/link";

const callItems = [
  "Quick review of your website and search visibility",
  "Clear explanation of what is costing you leads",
  "Priority list of the fastest fixes to improve conversion",
  "No-pressure walkthrough of what to do next"
];

export const metadata = {
  title: "Book Your Free Strategy Call | Reale Digital",
  description:
    "Book your free AI Visibility Strategy Call with Reale Digital and see where your website, search visibility, and follow-up process may be losing customers."
};

export default function BookPage() {
  return (
    <main className="relative overflow-hidden bg-[#030b22] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(64,224,208,0.14),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(98,92,255,0.16),_transparent_28%),linear-gradient(to_bottom,_#07112e,_#030b22_45%,_#020817)]" />

      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            BOOK YOUR FREE CALL
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Book Your Free AI Visibility Strategy Call
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            In 15 minutes, we’ll review your visibility, website conversion
            flow, and follow-up gaps so you know exactly what to fix first.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white p-3 shadow-[0_12px_60px_rgba(0,0,0,0.38)]">
            <div className="overflow-hidden rounded-[22px]">
              <iframe
                src="https://calendly.com/reale-digital/ai-strategy-call?hide_event_type_details=1&hide_gdpr_banner=1"
                title="Book your free AI strategy audit"
                className="h-[780px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#07122f]/80 p-7 shadow-[0_8px_40px_rgba(0,0,0,0.22)]">
            <h2 className="text-2xl font-bold text-white">
              What happens on the call
            </h2>

            <ul className="mt-6 space-y-4">
              {callItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-200">
                  <span className="mt-1 text-cyan-300">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                Best fit for
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Contractors, local service businesses, med spas, salons,
                chiropractors, and businesses that want more calls, form fills,
                and appointments.
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                What makes this useful
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                This is focused on visibility, conversion, and automation — not
                generic marketing fluff. The goal is to show you where money is
                being lost and what to fix first.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/ai-visibility-audit"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/35 hover:bg-white/8"
              >
                Take the audit first
              </Link>

              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/35 hover:bg-white/8"
              >
                Explore free resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
