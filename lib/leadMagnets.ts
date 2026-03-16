export type LeadMagnet = {
  slug: string;
  title: string;
  tag: "Guide" | "Toolkit" | "Report" | "Audit";
  description: string;
  image: string;
  ctaLabel: string;
  href: string;
  featured?: boolean;
};

export const LEAD_MAGNETS: LeadMagnet[] = [
  {
    slug: "ai-search-shift-guide",
    title: "AI Search Shift Guide",
    tag: "Guide",
    description:
      "Learn how local businesses can stay visible as AI search changes the way people discover services online.",
    image: "/lead-magnets/ai-search-shift-guide-card.png",
    ctaLabel: "Download Guide",
    href: "/free-ai-search-shift-guide",
    featured: true,
  },
  {
    slug: "why-website-gets-traffic",
    title: "Why Your Website Gets Traffic But No Customers",
    tag: "Guide",
    description:
      "A breakdown of the biggest conversion issues that cause local business websites to lose leads.",
    image: "/lead-magnets/why-website-gets-traffic-card.png",
    ctaLabel: "Get The Guide",
    href: "/why-your-website-gets-traffic-but-no-customers",
  },
  {
    slug: "automation-starter-kit",
    title: "Automation Starter Kit",
    tag: "Toolkit",
    description:
      "A practical resource for building faster follow-ups, automated lead handling, and more booked calls.",
    image: "/lead-magnets/automation-starter-kit-card.png",
    ctaLabel: "Get Starter Kit",
    href: "/automation-starter-kit",
  },
  {
    slug: "free-business-email-guide",
    title: "Free Business Email Guide",
    tag: "Guide",
    description:
      "Set up a more professional brand presence with domain email systems that build trust and improve deliverability.",
    image: "/lead-magnets/free-business-email-guide-card.png",
    ctaLabel: "Get Email Guide",
    href: "/free-business-email-guide",
  },
  {
    slug: "ai-visibility-traffic-audit",
    title: "AI Visibility & Traffic Audit",
    tag: "Audit",
    description:
      "See how your business shows up across AI search, Google, and local visibility channels with actionable next steps.",
    image: "/lead-magnets/ai-visibility-traffic-audit-card.png",
    ctaLabel: "Request Audit",
    href: "/free-ai-visibility-audit",
  },
  {
    slug: "local-seo-2-toolkit",
    title: "Local SEO 2.0 Toolkit",
    tag: "Toolkit",
    description:
      "Modern local SEO playbooks built for AI-era search, map pack visibility, and higher local authority.",
    image: "/lead-magnets/local-seo-2-toolkit-card.png",
    ctaLabel: "Get Toolkit",
    href: "/local-seo-2-toolkit",
  },
  {
    slug: "ai-powered-growth-systems-guide",
    title: "AI-Powered Growth Systems Guide",
    tag: "Guide",
    description:
      "See how automation, AI visibility, and better sales systems work together to grow your business faster.",
    image: "/lead-magnets/ai-powered-growth-systems-guide-card.png",
    ctaLabel: "Get The Guide",
    href: "/ai-powered-growth-systems-guide",
  },
  {
    slug: "competitor-intelligence-report",
    title: "Competitor Intelligence Report",
    tag: "Report",
    description:
      "Understand how competitors are winning visibility, leads, and conversions — and what to do about it.",
    image: "/lead-magnets/competitor-intelligence-report-card.png",
    ctaLabel: "See The Report",
    href: "/competitor-intelligence-report",
  },
  {
    slug: "localconvert-conversion-guide",
    title: "LocalConvert Conversion Guide",
    tag: "Guide",
    description:
      "A conversion-focused guide showing how better page structure, copy, and offers turn traffic into customers.",
    image: "/lead-magnets/localconvert-conversion-guide-card.png",
    ctaLabel: "Get Conversion Guide",
    href: "/localconvert-conversion-guide",
  },
];
