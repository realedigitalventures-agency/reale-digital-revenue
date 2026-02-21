// app/resources/conversion-boost/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function ResourceConversionBoost() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <Badge>Resource</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Conversion Boost Playbook</h1>
        <p className="text-muted text-lg max-w-3xl mt-3">
          If your traffic isn’t turning into calls, the issue is usually: unclear offer, weak proof, confusing flow, or slow follow-up.
          Fix these first.
        </p>

        <div className="grid md:grid-cols-2 gap-4 pt-8">
          <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
            <h2 className="font-semibold text-lg">High-leverage changes</h2>
            <ul className="mt-4 space-y-2 text-muted">
              <li>• One primary CTA on each page (audit or booking)</li>
              <li>• Add proof above the fold (reviews, stats, outcomes)</li>
              <li>• Add “What happens next” section</li>
              <li>• Remove friction: shorter forms, faster booking</li>
              <li>• Add FAQ for objections</li>
              <li>• Add instant SMS response for form submits</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
            <h2 className="font-semibold text-lg">Want us to implement this?</h2>
            <p className="text-muted mt-3">
              Start with the Free AI Visibility Audit and we’ll prioritize fixes for the fastest ROI.
            </p>
            <div className="mt-5">
              <Button href="/free-ai-visibility-audit" variant="primary">
                Start Free Audit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
