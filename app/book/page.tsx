// app/book/page.tsx
import { Container, Badge } from "@/components/ui";

export default function BookPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <Badge>Book</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Book a strategy call</h1>
        <p className="text-muted text-lg max-w-3xl mt-3">
          Add your Calendly embed here (or your scheduling tool). Keep it simple: a short promise + the scheduler.
        </p>

        <div className="rounded-2xl border border-border/60 bg-panel/40 p-6 mt-8">
          <p className="text-muted">
            {/* Replace this with your embed */}
            Embed scheduling widget here.
          </p>
        </div>
      </Container>
    </main>
  );
}
