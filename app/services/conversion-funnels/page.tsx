// app/services/conversion-funnels/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function FunnelsPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Conversion Funnels + Landing Pages</h1>
          <p className="text-muted text-lg max-w-3xl">
            More traffic won’t fix a weak offer or a confusing booking experience. We build pages that answer objections fast,
            increase trust, and guide visitors to a clear next step.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/book" variant="primary">
              Book a Call
            </Button>
            <Button href="/pricing" variant="secondary">
              View Packages
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-8">
            {[
              { t: "Offer + Positioning", d: "Clear promise, clear proof, clear next step." },
              { t: "Conversion UX", d: "Less friction: fewer clicks, smarter layouts, faster decisions." },
              { t: "Booking Flow", d: "Forms, scheduling, follow-up, and no-lead-left-behind automation." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-border/60 bg-panel/40 p-6">
                <h3 className="font-semibold text-lg">{x.t}</h3>
                <p className="text-muted mt-2">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <div className="rounded-3xl border border-border/60 bg-panel/40 p-8">
              <h2 className="text-2xl md:text-3xl font-bold">Want to know what to fix first?</h2>
              <p className="text-muted mt-2">
                The Free AI Visibility Audit includes conversion scoring + prioritized funnel improvements.
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
