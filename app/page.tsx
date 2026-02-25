import Image from "next/image";
import { Container, Badge, Button } from "@/components/ui";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative py-14 md:py-20">
        {/* subtle hero glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(46,211,198,0.16),transparent_55%)]" />

        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>AI Search Optimization • Automation • Conversion Systems</Badge>
              <Badge>Built for service businesses</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Become the business that AI recommends — and turn that attention into booked calls.
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-3xl">
              Reale Digital builds “search-everywhere” visibility and automated follow-up systems so you get
              more qualified leads without hiring more staff or juggling tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/free-ai-visibility-audit" variant="primary">
                Get Your Free AI Visibility Audit
              </Button>
              <Button href="/book" variant="secondary">
                See How It Works
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
              <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
                <h3 className="font-semibold text-lg">AI Search Visibility</h3>
                <p className="text-muted mt-2">
                  Improve how you show up in ChatGPT, Gemini, Perplexity, voice search, Maps, and directories.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
                <h3 className="font-semibold text-lg">Automation That Converts</h3>
                <p className="text-muted mt-2">
                  Lead capture → instant follow-up → reminders → reviews → reactivation, all handled automatically.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
                <h3 className="font-semibold text-lg">Conversion Upgrades</h3>
                <p className="text-muted mt-2">
                  Landing pages, offers, and booking flows designed to turn traffic into booked appointments.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FREE EMAIL GUIDE CONVERSION SECTION */}
      <section className="py-20 border-t border-border/50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Free Guide</Badge>
                <Badge>Quick Win</Badge>
              </div>

              <h2 className="mt-5 text-3xl md:text-4xl font-bold">
                Stop paying $6 per user for email.
              </h2>

              <p className="mt-4 text-lg text-muted">
                Learn how to create unlimited branded business emails without paying Google Workspace monthly fees.
              </p>

              <ul className="mt-6 space-y-3 text-muted">
                <li>✔ Unlimited inboxes</li>
                <li>✔ Works with Gmail</li>
                <li>✔ Setup takes ~15 minutes</li>
              </ul>

              <Button href="/free-email-guide" variant="primary" className="mt-8">
                Download Free Email Guide
              </Button>

              <p className="text-xs text-muted mt-3">
                No spam. Just the guide + optional help if you want us to do it for you.
              </p>
            </div>

            <div className="group relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(46,211,198,0.18),transparent_60%)] blur-2xl opacity-70 group-hover:opacity-100 transition" />
              <Image
                src="/resources/email-guide-mockup.webp"
                width={600}
                height={750}
                alt="Free Business Email Guide"
                className="rounded-3xl border border-border/60 bg-panel/30 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition duration-500 group-hover:scale-[1.02] rd-tilt"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEM / SHIFT */}
      <section className="py-14 border-t border-border/50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Search isn’t just Google anymore.</h2>
              <p className="text-muted mt-4 text-lg">
                Your customers now discover businesses through AI assistants, voice search, maps, reviews, and social.
                If your brand isn’t structured for those channels, you’ll get skipped — even if you’re the best option.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button href="/services/ai-search-optimization" variant="secondary">
                  What is AI Search Optimization?
                </Button>
                <Button href="/free-ai-visibility-audit" variant="primary">
                  Get My Free Audit
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-panel/40 p-6">
              <h3 className="font-semibold text-lg">What you get when we work together</h3>
              <ul className="mt-4 space-y-3 text-muted">
                <li>• Clear visibility score + prioritized fixes (what to do first)</li>
                <li>• Fast wins (GBP, citations, pages, schema, review signals)</li>
                <li>• A conversion-first booking funnel</li>
                <li>• Automated follow-up, missed-call text-back, review requests</li>
                <li>• A system that compounds over time</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* PRIMARY CTA */}
      <section className="py-16 border-t border-border/50">
        <Container>
          <div className="rounded-3xl border border-border/60 bg-panel/40 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Want to know exactly why competitors are getting picked over you?
            </h2>
            <p className="text-muted mt-3 text-lg max-w-3xl">
              Get the Free AI Visibility Audit. We’ll score your presence across AI + Maps + reviews + on-site conversion,
              then give you a prioritized action plan.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="/free-ai-visibility-audit" variant="primary">
                Start Free Audit
              </Button>
              <Button href="/pricing" variant="secondary">
                View Packages
              </Button>
            </div>

            <p className="text-xs text-muted mt-4">
              No fluff. No pressure. You’ll get clear next steps whether you hire us or not.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
