// app/services/automation/page.tsx
import { Container, Badge, Button } from "@/components/ui";

export default function AutomationPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Automation + Follow-Up Systems</h1>
          <p className="text-muted text-lg max-w-3xl">
            Most businesses lose leads because they respond too slowly or forget to follow up.
            We build automation that replies instantly, nurtures leads, and drives bookings.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/book" variant="primary">
              Book a Call
            </Button>
            <Button href="/free-ai-visibility-audit" variant="secondary">
              Start Free Audit
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-8">
            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">Automations we build</h3>
              <ul className="mt-4 space-y-3 text-muted">
                <li>• Missed-call text-back + instant lead capture</li>
                <li>• SMS/email follow-up sequences</li>
                <li>• Appointment reminders + no-show reduction</li>
                <li>• Review request workflows</li>
                <li>• Reactivation campaigns for old leads</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">Result</h3>
              <p className="text-muted mt-3">
                More leads contacted. More appointments booked. Less time spent chasing.
              </p>
              <div className="mt-5">
                <Button href="/pricing" variant="secondary">
                  See Packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
