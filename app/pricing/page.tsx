// app/pricing/page.tsx
import { Container, Badge, Button } from "@/components/ui";

const tiers = [
  {
    name: "Starter",
    price: "From $499/mo",
    bestFor: "Businesses that need the essentials fixed fast.",
    bullets: [
      "AI visibility + local presence baseline",
      "GBP optimization essentials",
      "Priority fixes list + execution",
      "Monthly reporting + next steps",
    ],
    cta: { label: "Start with the Audit", href: "/free-ai-visibility-audit" },
  },
  {
    name: "Growth Engine",
    price: "From $1,500/mo",
    bestFor: "Businesses ready to win their market and automate follow-up.",
    bullets: [
      "AI search optimization + citations",
      "Conversion landing pages",
      "SMS/email follow-up automation",
      "Reputation + review growth system",
    ],
    cta: { label: "Book a Call", href: "/book" },
    featured: true,
  },
  {
    name: "Dominance",
    price: "Custom",
    bestFor: "Multi-location or aggressive expansion.",
    bullets: [
      "Multi-location strategy + pages",
      "Advanced automation + pipelines",
      "Content + authority expansion",
      "Custom dashboards + integrations",
    ],
    cta: { label: "Talk to Us", href: "/book" },
  },
];

export default function PricingPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Simple packages. Real outcomes.</h1>
          <p className="text-muted text-lg max-w-3xl">
            Start with the Free AI Visibility Audit so we can recommend the fastest path to more booked calls.
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-8">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={[
                  "rounded-2xl border bg-panel/40 p-6",
                  t.featured ? "border-brand-teal/60 shadow-glow" : "border-border/60",
                ].join(" ")}
              >
                <h3 className="font-semibold text-xl">{t.name}</h3>
                <p className="text-2xl font-bold mt-2">{t.price}</p>
                <p className="text-muted mt-2">{t.bestFor}</p>
                <ul className="mt-4 space-y-2 text-muted">
                  {t.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href={t.cta.href} variant={t.featured ? "primary" : "secondary"}>
                    {t.cta.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <div className="rounded-3xl border border-border/60 bg-panel/40 p-8">
              <h2 className="text-2xl md:text-3xl font-bold">Not sure what tier fits?</h2>
              <p className="text-muted mt-2">
                The audit tells us exactly what to fix first and what will produce ROI fastest.
              </p>
              <div className="mt-5">
                <Button href="/free-ai-visibility-audit" variant="primary">
                  Start Free Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
