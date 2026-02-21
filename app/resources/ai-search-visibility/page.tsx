// app/resources/ai-search-visibility/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function ResourceAISearchVisibility() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <Badge>Resource</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">AI Search Visibility Guide</h1>
        <p className="text-muted text-lg max-w-3xl mt-3">
          If you want AI assistants to recommend your business, you need consistent entity signals, trusted listings,
          strong reviews, and pages that clearly describe what you do and where you serve.
        </p>

        <div className="grid md:grid-cols-2 gap-4 pt-8">
          <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
            <h2 className="font-semibold text-lg">Top 7 quick wins</h2>
            <ul className="mt-4 space-y-2 text-muted">
              <li>• Tighten your homepage: who you help, what you do, where you serve, and the next step</li>
              <li>• Add service + location pages with clear intent</li>
              <li>• Add structured data (LocalBusiness + services)</li>
              <li>• Fix GBP categories/services and keep it active</li>
              <li>• Clean up citations so NAP matches everywhere</li>
              <li>• Improve review velocity with a simple system</li>
              <li>• Add FAQs that answer real buyer questions</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
            <h2 className="font-semibold text-lg">Want the fastest path?</h2>
            <p className="text-muted mt-3">
              The Free AI Visibility Audit scores your current presence and gives you a prioritized plan.
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
