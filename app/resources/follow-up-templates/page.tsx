// app/resources/follow-up-templates/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function ResourceFollowUpTemplates() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <Badge>Resource</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Follow-Up Automation Templates</h1>
        <p className="text-muted text-lg max-w-3xl mt-3">
          Here are simple scripts that dramatically increase response rates when used with automation.
        </p>

        <div className="rounded-2xl border border-border/60 bg-panel/40 p-6 mt-8">
          <h2 className="font-semibold text-lg">SMS templates</h2>
          <div className="mt-4 space-y-4 text-muted">
            <div>
              <p className="font-semibold text-foreground">1) Instant reply</p>
              <p>“Hey {{name}} — got your request. What’s the main goal: (A) book ASAP, (B) pricing info, or (C) questions first?”</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">2) 2-hour follow-up</p>
              <p>“Quick check-in — want me to send availability or answer a couple questions first?”</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">3) Next-day</p>
              <p>“Still want help with {{service}}? If yes, I can get you booked in under 2 minutes.”</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button href="/services/automation" variant="secondary">
              Automation Setup
            </Button>
            <Button href="/book" variant="primary">
              Book a Call
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
