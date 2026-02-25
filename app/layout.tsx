import "./globals.css";
import type { ReactNode } from "react";
import { Header, Footer } from "@/components/ui";

export const metadata = {
  title: "Reale Digital | AI Search & Automation Systems",
  description: "AI Search Optimization and Automation Systems that turn traffic into revenue."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
