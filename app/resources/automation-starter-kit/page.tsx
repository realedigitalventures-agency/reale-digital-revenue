import { Container } from "@/components/ui";

export const metadata = {
  title: "Automation Starter Kit",
  description: "Simple automations that capture more leads, reduce no-shows, and save hours per week."
};

export default function Page() {
  return (
    <main className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-panel/25 p-8 md:p-10">
          <h1 className="text-3xl font-semibold">Automation Starter Kit</h1>
          <p className="mt-3 text-muted">Simple automations that capture more leads, reduce no-shows, and save hours per week.</p>

          <ul className="mt-6 list-disc space-y-2 pl-6">
            <li className="text-muted">Missed-call text back + instant lead capture</li>
            <li className="text-muted">Appointment confirmations + reminders to reduce no-shows</li>
            <li className="text-muted">Lead routing and follow-up sequences</li>
            <li className="text-muted">Operational automations to remove repetitive admin</li>
          </ul>

          <div className="mt-8 rounded-2xl border border-border/60 bg-bg/30 p-5">
            <div className="font-semibold">Want this implemented for your business?</div>
            <p className="mt-2 text-sm text-muted">
              Run the free audit and we’ll send back the fastest next steps.
            </p>
            <a href="/free-ai-visibility-audit" className="mt-4 inline-flex items-center justify-center rounded-xl bg-brand-teal px-5 py-3 font-semibold text-[#001b18] shadow-glow hover:opacity-95">
              Get My Free AI Visibility Audit
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
