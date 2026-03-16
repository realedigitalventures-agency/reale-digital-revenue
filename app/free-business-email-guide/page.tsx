import LeadMagnetLandingTemplate from "@/components/LeadMagnetLandingTemplate";

export const metadata = {
  title: "Free Business Email Guide | Reale Digital",
  description:
    "Set up a more professional brand presence with domain email systems that build trust and improve deliverability.",
};

export default function Page() {
  return (
    <LeadMagnetLandingTemplate
      slug="free-business-email-guide"
      title="Free Business Email Guide"
      tag="Guide"
      image="/lead-magnets/free-business-email-guide-card.png"
      description="Set up a more professional brand presence with domain email systems that build trust and improve deliverability."
      bullets={[
        "Why branded email matters for trust",
        "How to avoid common setup mistakes",
        "Better deliverability fundamentals",
        "How to look more legitimate fast",
      ]}
      cta="Get Email Guide"
    />
  );
}
