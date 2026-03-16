import CheckoutEmbed from "@/components/CheckoutEmbed";
import { getTierByLookupKey } from "@/lib/products";

export const metadata = {
  title: "Checkout | Reale Digital",
  description: "Secure checkout powered by Stripe.",
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const params = await searchParams;
  const lookupKey = params.product || "";
  const result = getTierByLookupKey(lookupKey);

  if (!lookupKey || !result) {
    return (
      <main className="min-h-screen bg-[#030b1f] px-4 py-20 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h1 className="text-3xl font-bold">Missing or invalid product</h1>
          <p className="mt-4 text-slate-300">
            Please go back to the pricing page and choose a valid offer.
          </p>
        </div>
      </main>
    );
  }

  const { product, tier } = result;

  return (
    <main className="min-h-screen bg-[#030b1f] px-4 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr,1.1fr]">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {product.category}
          </div>
          <h1 className="mt-4 text-4xl font-bold">{product.shortTitle}</h1>
          <p className="mt-4 text-slate-300">{product.description}</p>

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-300">
              Selected plan
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <div>
                <div className="text-xl font-semibold">{tier.name}</div>
                <div className="text-sm text-slate-400">
                  {tier.billingType === "subscription" ? "Monthly billing" : "One-time payment"}
                </div>
              </div>
              <div className="text-3xl font-bold text-cyan-300">
                {tier.priceLabel}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white p-2 text-slate-950">
          <CheckoutEmbed lookupKey={lookupKey} />
        </section>
      </div>
    </main>
  );
}
