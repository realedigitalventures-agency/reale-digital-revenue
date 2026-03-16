const steps = [
  {
    title: "Download A Free Guide",
    body: "Start with a resource that matches your biggest growth bottleneck.",
  },
  {
    title: "Get A Visibility Audit",
    body: "See where your traffic, local SEO, AI visibility, and conversion flow are leaking opportunities.",
  },
  {
    title: "Book A Strategy Call",
    body: "Review the findings and identify the highest-leverage next step for your business.",
  },
  {
    title: "Build Your Growth System",
    body: "Implement the right mix of SEO, automation, CRO, and paid acquisition with Reale Digital.",
  },
];

export default function FunnelSteps() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
      <div className="max-w-3xl">
        <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          How The Funnel Works
        </div>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Turn a free download into a complete AI-powered growth system.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-3xl border border-white/10 bg-[#07142f]/70 p-5"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 font-bold text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
