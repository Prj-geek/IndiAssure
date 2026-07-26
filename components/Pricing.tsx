import Link from "next/link";

export default function Pricing() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-center">
          Simple, honest pricing
        </h2>
        <p className="mt-4 text-center text-ink/60 max-w-2xl mx-auto">
          We&rsquo;re still finalizing plans with insurance partners.
          Here&rsquo;s what to expect.
        </p>

        <div className="mt-12 max-w-xl mx-auto p-8 rounded-2xl border border-ink/10 bg-cream-dim/60 text-center">
          <p className="text-2xl font-display text-ink">
            Plans typically range from{" "}
            <span className="text-mint font-semibold">₹100</span> to{" "}
            <span className="text-mint font-semibold">₹1,000</span> per month
          </p>
          <p className="mt-3 text-sm text-ink/60">
            Based on your shop size, type, and stock value
          </p>
          <p className="mt-1 text-sm text-ink/60">
            No hidden fees. No middleman markups.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-ink/50">
          We&rsquo;re currently testing with real shop owners to set fair
          prices.
        </p>
        <div className="mt-6 text-center">
          <Link
            href="/demo"
            className="btn-pill bg-ink text-cream hover:bg-ink-soft"
          >
            Request early access
          </Link>
        </div>
      </div>
    </section>
  );
}
