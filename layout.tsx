import type { Metadata } from "next";
import { Header, Footer } from "@/components/ui"; // <-- adjust if your ui.tsx path differs
import "./globals.css";

export const metadata: Metadata = {
  title: "Reale Digital | AI Search & Automation Systems",
  description:
    "AI Search Optimization and Automation Systems that turn traffic into revenue.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-bg text-text antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
