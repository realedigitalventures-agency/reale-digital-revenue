import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/components/ui";

export default function ResourcesPage() {
  return (
    <main className="py-16">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Free Resources & Playbooks
          </h1>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Tactical guides designed to help service businesses dominate AI search,
            fix conversion leaks, and automate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* AI Search Shift */}
          <div className="rounded-2xl border border-border/60 bg-panel/30 overflow-hidden hover:bg-panel/40 transition">
            <Image
              src="/The_AI_Search_Shift-REALE_DIGITAL.png"
              alt="The AI Search Shift"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold">
                The AI Search Shift (2026)
              </h2>
              <p className="text-muted mt-2 text-sm">
                How customers find local businesses now — and how to structure your visibility to win.
              </p>
              <div className="mt-4">
                <Button href="/ai-search-shift" variant="primary">
                  View Guide
                </Button>
              </div>
            </div>
          </div>

          {/* Conversion Playbook */}
          <div className="rounded-2xl border border-border/60 bg-panel/30 overflow-hidden hover:bg-panel/40 transition">
            <Image
              src="/Why_Your_Website_Gets_Traffic_But_No_Customers[REALE DIGITAL].png"
              alt="Conversion Playbook"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold">
                Traffic But No Customers
              </h2>
              <p className="text-muted mt-2 text-sm">
                Fix conversion leaks and turn traffic into actual booked calls.
              </p>
              <div className="mt-4">
                <Button href="/conversion-playbook" variant="primary">
                  View Guide
                </Button>
              </div>
            </div>
          </div>

          {/* Automation Starter Kit */}
          <div className="rounded-2xl border border-border/60 bg-panel/30 overflow-hidden hover:bg-panel/40 transition">
            <Image
              src="/Automation_Starter_Kit[REALE DIGITAL].png"
              alt="Automation Starter Kit"
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold">
                Automation Starter Kit (2026)
              </h2>
              <p className="text-muted mt-2 text-sm">
                AI + SMS + scheduling systems that capture and follow up automatically.
              </p>
              <div className="mt-4">
                <Button href="/automation-starter-kit" variant="primary">
                  View Guide
                </Button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
