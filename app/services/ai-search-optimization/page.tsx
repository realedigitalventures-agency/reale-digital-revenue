// app/services/ai-search-optimization/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function AISEOPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">AI Search Optimization</h1>
          <p className="text-muted text-lg max-w-3xl">
            When people ask ChatGPT, Gemini, or Perplexity for recommendations, those systems pull signals from your website,
            listings, reviews, authority sources, and structured data. We optimize your presence so you’re the answer.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/free-ai-visibility-audit" variant="primary">
              Get Your Free AI Visibility Audit
            </Button>
            <Button href="/book" variant="secondary">
              Talk to Us
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-8">
            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">What we optimize</h3>
              <ul className="mt-4 space-y-3 text-muted">
                <li>• “Search-everywhere” entity signals (brand + service + location)</li>
                <li>• Local pages that AI can understand and cite</li>
                <li>• Schema / structured data to clarify meaning</li>
                <li>• Listings consistency that feeds Maps + AI</li>
                <li>• Review velocity + trust signals</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">What you’ll notice</h3>
              <ul className="mt-4 space-y-3 text-muted">
                <li>• More discovery across non-Google channels</li>
                <li>• Better “fit” traffic (people who actually want your service)</li>
                <li>• Higher conversion rates because messaging becomes clearer</li>
                <li>• Compounding improvements over time</li>
              </ul>
            </div>
          </div>

          <div className="pt-10">
            <div className="rounded-3xl border border-border/60 bg-panel/40 p-8">
              <h2 className="text-2xl md:text-3xl font-bold">Start with the audit.</h2>
              <p className="text-muted mt-2 max-w-3xl">
                We’ll score your visibility across AI, Maps, listings, reviews, and on-site conversion, then give you a
                prioritized plan.
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
