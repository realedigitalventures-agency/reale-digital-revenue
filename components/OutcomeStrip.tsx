const outcomes = [
  "AI visibility",
  "Local SEO wins",
  "More qualified leads",
  "Faster follow-up systems",
  "Stronger conversion rates",
  "Competitor intelligence",
];

export default function OutcomeStrip() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,17,43,0.95),rgba(3,10,31,0.98))] p-6 md:p-8">
      <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        What These Resources Help With
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
