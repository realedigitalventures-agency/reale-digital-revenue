// app/services/reputation/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function ReputationPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Reputation + Review Growth</h1>
          <p className="text-muted text-lg max-w-3xl">
            Reviews are a ranking factor and a conversion factor. We set up a simple system that generates reviews reliably
            and helps you respond fast to protect trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/free-ai-visibility-audit" variant="primary">
              Start Free Audit
            </Button>
            <Button href="/book" variant="secondary">
              Talk to Us
            </Button>
          </div>

          <div className="rounded-2xl border border-border/60 bg-panel/40 p-6 mt-6">
            <h3 className="font-semibold text-lg">What we implement</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li>• Review request automation (post-visit / post-service)</li>
              <li>• Staff-friendly “ask” scripts + QR flows</li>
              <li>• Response templates that build trust</li>
              <li>• Monitoring + escalation rules</li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
