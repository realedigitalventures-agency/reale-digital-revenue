// app/resources/review-growth/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function ResourceReviewGrowth() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <Badge>Resource</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Review Growth System</h1>
        <p className="text-muted text-lg max-w-3xl mt-3">
          Reviews increase rankings and conversions. The key is consistency: ask at the right time, make it easy, and follow up once.
        </p>

        <div className="grid md:grid-cols-2 gap-4 pt-8">
          <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
            <h2 className="font-semibold text-lg">Simple 3-step system</h2>
            <ul className="mt-4 space-y-2 text-muted">
              <li>• Step 1: Ask right after a successful outcome</li>
              <li>• Step 2: Send link + 1 sentence instruction</li>
              <li>• Step 3: One reminder 24–48 hours later</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
            <h2 className="font-semibold text-lg">Want us to set it up?</h2>
            <p className="text-muted mt-3">
              We implement the automation, templates, and tracking so it runs without your team chasing people.
            </p>
            <div className="mt-5">
              <Button href="/services/reputation" variant="secondary">
                Reputation Service
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
