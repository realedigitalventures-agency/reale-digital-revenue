import LeadMagnetLandingTemplate from "@/components/LeadMagnetLandingTemplate";

export const metadata = {
  title: "Automation Starter Kit | Reale Digital",
  description:
    "A practical starter kit for building faster follow-ups, automated lead handling, and more booked calls.",
};

export default function Page() {
  return (
    <LeadMagnetLandingTemplate
      slug="automation-starter-kit"
      title="Automation Starter Kit"
      tag="Toolkit"
      image="/lead-magnets/automation-starter-kit-card.png"
      description="A practical starter kit for building faster follow-ups, automated lead handling, and more booked calls."
      bullets={[
        "Simple automation ideas that actually save time",
        "Lead follow-up flows that reduce drop-off",
        "Core systems every service business should have",
        "A cleaner path from lead to booked appointment",
      ]}
      cta="Get Starter Kit"
    />
  );
}
