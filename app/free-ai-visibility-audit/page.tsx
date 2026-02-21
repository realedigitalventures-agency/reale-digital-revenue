// app/free-ai-visibility-audit/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function FreeAuditPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Free Audit</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Free AI Visibility Audit</h1>
          <p className="text-muted text-lg max-w-3xl">
            Find out why competitors are getting recommended — and what to fix first.
            We’ll score your visibility across AI assistants, Maps, listings, reviews, and your website’s conversion flow.
          </p>

          <div className="rounded-3xl border border-border/60 bg-panel/40 p-6 md:p-8">
            <h2 className="text-2xl font-bold">What you’ll receive</h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li>• Visibility score + quick wins list</li>
              <li>• AI/voice/Maps presence checks (where you show up and where you don’t)</li>
              <li>• Website conversion friction scan (what blocks bookings)</li>
              <li>• Priority roadmap (what to do first for ROI)</li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {/* Replace this with your Tally/embedded form route if you have it */}
              <Button href="/audit-form" variant="primary">
                Start the Audit
              </Button>
              <Button href="/book" variant="secondary">
                Prefer to talk? Book a call
              </Button>
            </div>

            <p className="text-xs text-muted mt-4">
              Tip: if you already have a website + GBP link ready, you’ll finish faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-6">
            {[
              { t: "No pressure", d: "You get clear next steps even if you never hire us." },
              { t: "Conversion-first", d: "We focus on bookings, not vanity traffic." },
              { t: "Modern discovery", d: "AI + voice + Maps + reviews — the full picture." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-border/60 bg-panel/40 p-6">
                <h3 className="font-semibold text-lg">{x.t}</h3>
                <p className="text-muted mt-2">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
