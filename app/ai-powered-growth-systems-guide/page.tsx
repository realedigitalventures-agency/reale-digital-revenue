import LeadMagnetLandingTemplate from "@/components/LeadMagnetLandingTemplate";

export const metadata = {
  title: "AI-Powered Growth Systems Guide | Reale Digital",
  description:
    "See how automation, AI visibility, and better sales systems work together to grow your business faster.",
};

export default function Page() {
  return (
    <LeadMagnetLandingTemplate
      slug="ai-powered-growth-systems-guide"
      title="AI-Powered Growth Systems Guide"
      tag="Guide"
      image="/lead-magnets/ai-powered-growth-systems-guide-card.png"
      description="See how automation, AI visibility, and better sales systems work together to grow your business faster."
      bullets={[
        "How the pieces of a growth system fit together",
        "What to automate first",
        "How better follow-up compounds results",
        "A cleaner path to scalable lead flow",
      ]}
      cta="Get The Guide"
    />
  );
}
