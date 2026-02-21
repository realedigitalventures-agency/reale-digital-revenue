// app/about/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function AboutPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>About</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">We build growth systems that don’t fall apart.</h1>
          <p className="text-muted text-lg max-w-3xl">
            Reale Digital helps service businesses win modern discovery (AI + voice + Maps + reviews) and convert that
            attention with automated follow-up systems. The goal is simple: more booked calls, less chaos.
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-8">
            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">Our approach</h3>
              <p className="text-muted mt-2">
                We fix the foundations first (visibility + trust), then build conversion and automation on top.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">What we don’t do</h3>
              <p className="text-muted mt-2">
                Vanity metrics, vague “branding,” or random posting without a system that creates revenue.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">What we do</h3>
              <p className="text-muted mt-2">
                Build the assets and automations that make lead flow predictable and scalable.
              </p>
            </div>
          </div>

          <div className="pt-10">
            <div className="rounded-3xl border border-border/60 bg-panel/40 p-8">
              <h2 className="text-2xl md:text-3xl font-bold">Start with clarity.</h2>
              <p className="text-muted mt-2">
                Get the Free AI Visibility Audit and we’ll show you exactly where you’re losing leads — and how to fix it.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Button href="/free-ai-visibility-audit" variant="primary">
                  Start Free Audit
                </Button>
                <Button href="/book" variant="secondary">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
