import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Pricing | Reale Digital",
  description:
    "AI-powered growth systems, audits, automation, local SEO, and high-converting service packages for local businesses.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#030b1f] text-white">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Reale Digital Pricing
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            AI Growth Systems for Local Businesses
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Clean, productized offers built around AI visibility, local search,
            automation, and conversion-focused websites.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
