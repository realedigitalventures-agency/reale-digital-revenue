import Image from "next/image";
import Link from "next/link";
import { Container, Button, Badge } from "@/components/ui";

type Resource = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  imageSrc: string;
  tag: string;
  meta: { label: string; value: string }[];
  featured?: boolean;
};

const resources: Resource[] = [
  {
    title: "The AI Search Shift",
    subtitle: "How Customers Find Local Businesses Now (2026)",
    description:
      "A practical guide to showing up in AI assistants, voice search, Maps, and directories — with a clear action plan for local service businesses.",
    href: "/resources/ai-search-shift",
    // ✅ URL-encoded version of: /The_AI_Search_Shift-REALE_DIGITAL.png
    imageSrc: "/The_AI_Search_Shift-REALE_DIGITAL.png",
    tag: "Featured",
    meta: [
      { label: "Format", value: "PDF" },
      { label: "Read time", value: "8–12 min" },
      { label: "Best for", value: "Local services" }
    ],
    featured: true
  },
  {
    title: "Traffic But No Customers",
    subtitle: "2026 Conversion Playbook",
    description:
      "Fix conversion leaks, tighten your offer, and turn existing traffic into booked calls — with simple page + funnel upgrades.",
    href: "/resources/traffic-no-customers",
    // ✅ URL-encoded version of:
    // /Why_Your_Website_Gets_Traffic_But_No_Customers[REALE DIGITAL].png
    imageSrc:
      "/Why_Your_Website_Gets_Traffic_But_No_Customers%5BREALE%20DIGITAL%5D.png",
    tag: "Conversion",
    meta: [
      { label: "Format", value: "PDF" },
      { label: "Read time", value: "10–15 min" },
      { label: "Best for", value: "Websites" }
    ]
  },
  {
    title: "Automation Starter Kit",
    subtitle: "AI + SMS + Scheduling That Converts (2026)",
    description:
      "A starter blueprint for capture → instant follow-up → reminders → reviews. Cut manual work and increase show-ups.",
    href: "/resources/automation-starter-kit",
    // ✅ URL-encoded version of:
    // /Automation_Starter_Kit[REALE DIGITAL].png
    imageSrc: "/Automation_Starter_Kit%5BREALE%20DIGITAL%5D.png",
    tag: "Automation",
    meta: [
      { label: "Format", value: "PDF" },
      { label: "Read time", value: "8–12 min" },
      { label: "Best for", value: "Busy teams" }
    ]
  }
];

function ResourceCard({ r, size = "normal" }: { r: Resource; size?: "featured" | "normal" }) {
  const isFeatured = size === "featured";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border border-border/60 bg-panel/30",
        "transition duration-300 hover:bg-panel/45",
        "hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(46,211,198,0.25),0_18px_60px_rgba(0,0,0,0.55)]"
      ].join(" ")}
    >
      {/* Ribbon */}
      <div className="absolute left-5 top-5 z-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-panel/60 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-teal shadow-[0_0_14px_rgba(46,211,198,0.6)]" />
          FREE • {r.tag}
        </span>
      </div>

      {/* Image */}
      <div className={isFeatured ? "relative h-[340px] sm:h-[380px]" : "relative h-[240px] sm:h-[260px]"}>
        <Image
          src={r.imageSrc}
          alt={r.title}
          fill
          priority={isFeatured}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />

        {/* Premium overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(46,211,198,0.18),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-panel/90 to-transparent" />
      </div>

      {/* Content */}
      <div className={isFeatured ? "p-7 sm:p-8" : "p-6"}>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{r.tag}</Badge>
          <Badge>Free Download</Badge>
        </div>

        <h2 className={isFeatured ? "mt-4 text-2xl sm:text-3xl font-bold" : "mt-4 text-xl font-bold"}>
          {r.title}
        </h2>

        <p className="mt-2 text-sm text-foreground/80">{r.subtitle}</p>

        <p className="mt-4 text-sm text-muted leading-relaxed">
          {r.description}
        </p>

        {/* Meta row */}
        <div className="mt-5 flex flex-wrap gap-3">
          {r.meta.map((m) => (
            <div
              key={m.label}
              className="rounded-full border border-border/60 bg-panel/40 px-3 py-1 text-[11px] text-muted"
            >
              <span className="text-foreground/80">{m.label}:</span> {m.value}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href={r.href} variant="primary">
            Open Resource
          </Button>

          <Link
            href="/free-ai-visibility-audit"
            className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-transparent px-5 py-3 text-sm font-semibold text-foreground hover:bg-panel/40"
          >
            Get Free Audit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const featured = resources.find((r) => r.featured) ?? resources[0];
  const rest = resources.filter((r) => r !== featured);

  return (
    <main className="py-16">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-panel/40 px-4 py-2 text-xs text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-teal shadow-[0_0_14px_rgba(46,211,198,0.6)]" />
            Playbooks • Checklists • Guides
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold">
            Resources that turn visibility into revenue
          </h1>

          <p className="mt-4 text-muted text-lg">
            These are the same frameworks we use to help chiropractors, med spas, salons,
            and service businesses get picked by AI and convert attention into booked calls.
          </p>
        </div>

        {/* Layout: 1 featured + 2 stacked */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ResourceCard r={featured} size="featured" />
          </div>

          <div className="flex flex-col gap-8">
            {rest.map((r) => (
              <ResourceCard key={r.title} r={r} />
            ))}
          </div>
        </div>

        {/* Bottom CTA band */}
        <div className="mt-14 rounded-3xl border border-border/60 bg-panel/30 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Want the exact action plan for your business?
              </h2>
              <p className="mt-2 text-muted">
                Get the Free AI Visibility Audit — we’ll score your presence and give you prioritized next steps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/free-ai-visibility-audit" variant="primary">
                Start Free Audit
              </Button>
              <Button href="/pricing" variant="secondary">
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
