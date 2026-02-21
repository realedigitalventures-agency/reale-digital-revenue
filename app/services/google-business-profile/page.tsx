// app/services/google-business-profile/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function GBPPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Google Business Profile Overhaul</h1>
          <p className="text-muted text-lg max-w-3xl">
            Your GBP is a conversion asset — not a directory listing. We rebuild it to rank better, look more trustworthy,
            and convert more calls, bookings, and direction requests.
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
            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">What’s included</h3>
              <ul className="mt-4 space-y-3 text-muted">
                <li>• Category + service optimization</li>
                <li>• Photos, offers, posts, and Q&A strategy</li>
                <li>• Conversion-first description + highlights</li>
                <li>• Review growth system setup</li>
                <li>• Spam/competitor cleanup guidance (where applicable)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">Why it matters</h3>
              <p className="text-muted mt-3">
                AI and Maps often treat your GBP as a “source of truth.” A stronger profile helps you show up more often —
                and look like the obvious choice when you do.
              </p>
              <div className="mt-5">
                <Button href="/book" variant="secondary">
                  Book a Quick Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
