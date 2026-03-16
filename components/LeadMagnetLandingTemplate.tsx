import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

type Props = {
  slug: string;
  title: string;
  tag: string;
  image: string;
  description: string;
  bullets: string[];
  cta: string;
};

export default function LeadMagnetLandingTemplate({
  slug,
  title,
  tag,
  image,
  description,
  bullets,
  cta,
}: Props) {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.2),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#06122b_0%,#020617_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Free {tag}
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {description}
              </p>

              <ul className="mt-8 grid gap-3">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#capture"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  {cta}
                </a>
                <Link
                  href="/lead-magnet-vault"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07142f]">
              <Image
                src={image}
                alt={title}
                width={1600}
                height={2000}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Why This Matters
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Better visibility, stronger conversion, and a cleaner growth path.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Reale Digital builds resources like this to help service businesses
              see exactly where growth opportunities are being lost — and what to
              do next. This resource is designed to help you move faster with less
              guesswork.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#07142f]/70 p-5">
                <h3 className="text-lg font-bold text-white">What you’ll get</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  A focused resource built to clarify the next step, reduce wasted effort,
                  and improve the way your business gets found and converts.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#07142f]/70 p-5">
                <h3 className="text-lg font-bold text-white">Best next step</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Use this guide, then move into a free audit or strategy call if you want
                  help turning insights into a complete growth system.
                </p>
              </div>
            </div>
          </div>

          <div id="capture">
            <LeadCaptureForm
              magnetTitle={title}
              magnetSlug={slug}
              buttonLabel={cta}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(10,30,68,0.96),rgba(3,10,31,0.98))] px-6 py-10 text-center md:px-10">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Want Help Implementing This?
          </div>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            Turn this free resource into a Reale Digital growth system.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Once you’ve got the guide, toolkit, report, or audit, the next move is
            building the system behind it: visibility, conversion, automation, and
            better follow-up.
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
