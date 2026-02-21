// app/resources/page.tsx
import { Container, Badge, Button } from "@/components/ui";

const resources = [
  { title: "AI Search Visibility Guide", href: "/resources/ai-search-visibility" },
  { title: "Google Business Profile Checklist", href: "/resources/gbp-checklist" },
  { title: "Conversion Boost Playbook", href: "/resources/conversion-boost" },
  { title: "Follow-Up Automation Templates", href: "/resources/follow-up-templates" },
  { title: "Review Growth System", href: "/resources/review-growth" },
];

export default function ResourcesPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Resources</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Free playbooks you can use today.</h1>
          <p className="text-muted text-lg max-w-3xl">
            Want quick wins? Start here. If you want us to implement it all for you, grab the Free AI Visibility Audit.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/free-ai-visibility-audit" variant="primary">
              Get Your Free Audit
            </Button>
            <Button href="/book" variant="secondary">
              Talk to Us
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-8">
            {resources.map((r) => (
              <div key={r.href} className="rounded-2xl border border-border/60 bg-panel/40 p-6">
                <h3 className="font-semibold text-lg">{r.title}</h3>
                <p className="text-muted mt-2">
                  Clear steps, zero fluff — designed for service businesses that want more booked calls.
                </p>
                <div className="mt-4">
                  <Button href={r.href} variant="secondary">
                    Open
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
