import LeadMagnetLandingTemplate from "@/components/LeadMagnetLandingTemplate";

export const metadata = {
  title: "Why Your Website Gets Traffic But No Customers | Reale Digital",
  description:
    "A conversion-focused breakdown of why local business websites lose leads even when traffic is coming in.",
};

export default function Page() {
  return (
    <LeadMagnetLandingTemplate
      slug="why-your-website-gets-traffic-but-no-customers"
      title="Why Your Website Gets Traffic But No Customers"
      tag="Guide"
      image="/lead-magnets/why-website-gets-traffic-card.png"
      description="A conversion-focused breakdown of why local business websites lose leads even when traffic is coming in."
      bullets={[
        "The most common conversion leaks",
        "Why clicks do not turn into calls",
        "How to tighten offers, pages, and CTAs",
        "The fastest ways to improve lead quality",
      ]}
      cta="Get The Guide"
    />
  );
}
