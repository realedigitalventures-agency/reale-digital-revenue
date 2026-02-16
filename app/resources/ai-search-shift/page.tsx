import { Container } from "@/components/ui";

export const metadata = {
  title: "The AI Search Shift",
  description: "How customers now discover businesses through AI assistants — and how to become the recommended option."
};

export default function Page() {
  return (
    <main className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-panel/25 p-8 md:p-10">
          <h1 className="text-3xl font-semibold">The AI Search Shift</h1>
          <p className="mt-3 text-muted">How customers now discover businesses through AI assistants — and how to become the recommended option.</p>

          <ul className="mt-6 list-disc space-y-2 pl-6">
            <li className="text-muted">What AI assistants look for when recommending local businesses</li>
            <li className="text-muted">How to align your site + listings for AI visibility</li>
            <li className="text-muted">Why reviews, citations, and topical authority matter more than ever</li>
            <li className="text-muted">A quick checklist you can apply today</li>
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
