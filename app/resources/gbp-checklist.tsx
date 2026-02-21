// app/resources/gbp-checklist/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function ResourceGBPChecklist() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <Badge>Resource</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Google Business Profile Checklist</h1>
        <p className="text-muted text-lg max-w-3xl mt-3">
          A high-performing GBP increases calls, directions, and bookings — and feeds trust signals into AI + Maps.
        </p>

        <div className="rounded-2xl border border-border/60 bg-panel/40 p-6 mt-8">
          <h2 className="font-semibold text-lg">Checklist</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>• Correct primary + secondary categories</li>
            <li>• Services fully filled out (with smart descriptions)</li>
            <li>• Business description optimized for conversion</li>
            <li>• Products/offer items (if applicable)</li>
            <li>• Weekly posting cadence (offers, FAQs, proof)</li>
            <li>• High-quality photos (updated monthly)</li>
            <li>• Q&A seeded with real customer questions</li>
            <li>• Review request system + response templates</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button href="/free-ai-visibility-audit" variant="primary">
              Get Free Audit
            </Button>
            <Button href="/services/google-business-profile" variant="secondary">
              GBP Overhaul Service
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
