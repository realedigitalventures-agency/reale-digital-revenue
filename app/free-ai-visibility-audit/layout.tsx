import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Visibility Audit",
  description: "Get a free AI search + conversion audit delivered to your inbox."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
