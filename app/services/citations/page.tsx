// app/services/citations/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function CitationsPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Directory + Citation Optimization</h1>
          <p className="text-muted text-lg max-w-3xl">
            Inconsistent listings confuse search engines and AI models. We clean up and strengthen your citations so your
            business data is consistent, trusted, and easier to recommend.
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
            <h3 className="font-semibold text-lg">Typical outcomes</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li>• Improved local consistency (NAP: name, address, phone)</li>
              <li>• Stronger trust signals that support Maps + AI</li>
              <li>• Better “discovery” from non-Google sources</li>
              <li>• Cleaner customer experience (less confusion)</li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
