import "./globals.css";
import { site } from "@/lib/site";
import { Header, Footer } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Reale Digital | AI Search & Automation Systems",
    template: "%s | Reale Digital"
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Reale Digital | AI Search & Automation Systems",
    description: site.description
  },
  twitter: {
    card: "summary_large_image",
    title: "Reale Digital | AI Search & Automation Systems",
    description: site.description
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
