import { Container, Button, Card, Badge } from "@/components/ui";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-brand-blue/10 blur-3xl" />
        </div>

        <Container>
          <div className="py-16 md:py-24">
            <div className="mb-4">
              <Badge>Built for how customers search in 2026+</Badge>
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              AI Search & Automation Systems That Turn Traffic Into Revenue
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted md:text-xl">
              We help service-based businesses get found in AI assistants, automate follow-up, and convert more visitors into paying customers — without hiring more staff.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/free-ai-visibility-audit" variant="primary">Get My Free AI Visibility Audit</Button>
              <Button href="/resources" variant="secondary">See Resources</Button>
            </div>

            <div className="mt-6 text-sm text-muted">
              Takes 60 seconds. Confirmation + next steps delivered instantly.
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Card badge="Outcome #1" title="Get Found in AI Search" body="Improve visibility across AI assistants, voice search, maps, and reviews so you’re the business recommended first." href="/free-ai-visibility-audit" />
            <Card badge="Outcome #2" title="Automate Follow-Up" body="Capture leads and follow up via SMS/email + scheduling so inquiries don’t fall through the cracks." href="/free-ai-visibility-audit" />
            <Card badge="Outcome #3" title="Increase Conversions" body="Fix the conversion leaks on your site and booking flow so your traffic produces revenue." href="/resources/traffic-no-customers" />
          </div>
        </Container>
      </section>

      <section className="border-y border-border/50 bg-panel/10 py-14">
        <Container>
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-panel/25 p-6">
              <div className="text-sm text-muted">Step 1</div>
              <div className="mt-1 font-semibold">Run your free audit</div>
              <div className="mt-2 text-sm text-muted">Submit your website + email. No phone call needed.</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-panel/25 p-6">
              <div className="text-sm text-muted">Step 2</div>
              <div className="mt-1 font-semibold">Get instant next steps</div>
              <div className="mt-2 text-sm text-muted">We email a clear breakdown of visibility + conversion gaps.</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-panel/25 p-6">
              <div className="text-sm text-muted">Step 3</div>
              <div className="mt-1 font-semibold">Deploy systems</div>
              <div className="mt-2 text-sm text-muted">If you want help, we implement AI search + automation + CRO.</div>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/free-ai-visibility-audit" variant="primary">Start My Free Audit</Button>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Resources</h2>
              <p className="mt-2 text-muted">Use these to understand what’s broken — and what to fix first.</p>
            </div>
            <a href="/resources" className="text-sm font-semibold text-brand-blue hover:underline">View all →</a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card title="The AI Search Shift" body="What changed in search — and how to win when customers ask AI who to hire." href="/resources/ai-search-shift" />
            <Card title="Automation Starter Kit" body="Simple automations that recover leads, reduce no-shows, and save time." href="/resources/automation-starter-kit" />
            <Card title="Traffic But No Customers" body="The most common conversion leaks that kill revenue (and how to fix them)." href="/resources/traffic-no-customers" />
          </div>
        </Container>
      </section>

      <section className="border-t border-border/50 py-14">
        <Container>
          <div className="rounded-3xl border border-border/60 bg-panel/25 p-8 md:p-12">
            <h2 className="text-3xl font-semibold">Ready to fix your visibility & conversion systems?</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Get your free AI Visibility Audit and we’ll send back the clearest next steps to increase leads and revenue.
            </p>
            <div className="mt-6">
              <Button href="/free-ai-visibility-audit" variant="primary">Get My Free AI Visibility Audit</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
