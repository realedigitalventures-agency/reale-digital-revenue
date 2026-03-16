export const metadata = {
  title: "Payment Received | Reale Digital",
};

export default function CheckoutReturnPage() {
  return (
    <main className="min-h-screen bg-[#030b1f] px-4 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <div className="mx-auto inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Payment Received
        </div>
        <h1 className="mt-6 text-4xl font-bold">You’re in. Next step: onboarding.</h1>
        <p className="mt-4 text-lg text-slate-300">
          Thanks for your order. Please complete onboarding so Reale Digital can
          start your setup, audit, or growth system.
        </p>
        <a
          href="/onboarding"
          className="mt-8 inline-flex rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Complete Onboarding
        </a>
      </div>
    </main>
  );
}
