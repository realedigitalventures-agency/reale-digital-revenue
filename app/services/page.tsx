// app/services/page.tsx
import { Container, Badge, Button } from "@/components/ui";

const services = [
  {
    title: "AI Search Optimization",
    desc: "Improve how you appear in AI assistants, voice search, and modern discovery channels.",
    href: "/services/ai-search-optimization",
  },
  {
    title: "Google Business Profile Overhaul",
    desc: "Categories, services, photos, posting cadence, Q&A, reviews, and conversion improvements.",
    href: "/services/google-business-profile",
  },
  {
    title: "Directory + Citation Optimization",
    desc: "Consistency and authority across the listings AI models and Maps rely on.",
    href: "/services/citations",
  },
  {
    title: "Conversion Funnels + Landing Pages",
    desc: "Offer + copy + layout + booking flow designed to turn traffic into booked appointments.",
    href: "/services/conversion-funnels",
  },
  {
    title: "Automation + Follow-Up Systems",
    desc: "Missed-call text-back, lead capture, SMS/email sequences, reminders, review requests, reactivation.",
    href: "/services/automation",
  },
  {
    title: "Reputation + Review Growth",
    desc: "Systems that reliably generate reviews and protect your brand online.",
    href: "/services/reputation",
  },
];

export default function ServicesPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Everything we do is built to produce booked calls.</h1>
          <p className="text-muted text-lg max-w-3xl">
            We don’t sell “marketing.” We build a system: visibility → trust → conversion → automated follow-up.
            Pick a single service or bundle them into a complete growth engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/free-ai-visibility-audit" variant="primary">
              Get Your Free AI Visibility Audit
            </Button>
            <Button href="/pricing" variant="secondary">
              View Packages
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-8">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border/60 bg-panel/40 p-6">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-muted mt-2">{s.desc}</p>
                <div className="mt-4">
                  <Button href={s.href} variant="secondary">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <div className="rounded-3xl border border-border/60 bg-panel/40 p-8">
              <h2 className="text-2xl md:text-3xl font-bold">Not sure what you need?</h2>
              <p className="text-muted mt-2 max-w-3xl">
                Start with the audit. We’ll tell you what’s broken, what matters most, and what will move results fastest.
              </p>
              <div className="mt-5">
                <Button href="/free-ai-visibility-audit" variant="primary">
                  Start the Free Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
