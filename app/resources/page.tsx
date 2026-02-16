import { Container, Card } from "@/components/ui";

export const metadata = {
  title: "Resources",
  description: "Guides and playbooks for AI search, automation, and conversions."
};

export default function Resources() {
  return (
    <main className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold">Resources</h1>
        <p className="mt-2 text-muted">High-signal guides to help you fix what matters first.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="The AI Search Shift" body="What changed in search — and how to win when customers ask AI who to hire." href="/resources/ai-search-shift" />
          <Card title="Automation Starter Kit" body="Simple automations that recover leads, reduce no-shows, and save time." href="/resources/automation-starter-kit" />
          <Card title="Why Your Website Gets Traffic But No Customers" body="The conversion leaks killing revenue — plus what to fix first." href="/resources/traffic-no-customers" />
        </div>
      </Container>
    </main>
  );
}
