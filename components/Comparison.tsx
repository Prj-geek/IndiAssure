import Reveal from "./Reveal";

const rows = [
  { label: "Documents needed", traditional: "Tax returns, bank statements", indiassure: "Shop photos only" },
  { label: "Time to get covered", traditional: "Days to weeks", indiassure: "Minutes" },
  { label: "Cash-run shops", traditional: "Usually rejected", indiassure: "Built for you" },
  { label: "Claim process", traditional: "Submit bills, wait for weeks", indiassure: "Physical inspection, fast payout" },
  { label: "Price transparency", traditional: "Hidden until you apply", indiassure: "Clear upfront" },
];

export default function Comparison() {
  return (
    <section className="py-20 sm:py-28 bg-cream-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink text-center">
            Why IndiAssure
          </h2>
          <p className="mt-4 text-center text-base text-ink/60 max-w-2xl mx-auto">
            Traditional insurance wasn&rsquo;t built for small shops. We are.
          </p>
        </Reveal>

        <Reveal delay={100}>
          {/* desktop table */}
          <div className="mt-12 hidden sm:block max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-4 pb-3 border-b border-ink/10 text-xs font-medium uppercase tracking-widest text-ink/40">
              <div></div>
              <div className="text-center">Traditional</div>
              <div className="text-center text-mint">IndiAssure</div>
            </div>
            {rows.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-3 gap-4 py-4 border-b border-ink/10"
              >
                <div className="text-base font-medium text-ink">{r.label}</div>
                <div className="text-base text-ink/40 text-center">{r.traditional}</div>
                <div className="text-base text-ink text-center font-medium">{r.indiassure}</div>
              </div>
            ))}
          </div>

          {/* mobile cards */}
          <div className="mt-12 sm:hidden space-y-4 max-w-lg mx-auto">
            {rows.map((r) => (
              <div key={r.label} className="p-4 rounded-xl border border-ink/10 bg-cream/50">
                <div className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-2">
                  {r.label}
                </div>
                <div className="flex justify-between gap-4">
                  <div className="text-base text-ink/40 flex-1">{r.traditional}</div>
                  <div className="text-base text-ink font-medium flex-1 text-right">{r.indiassure}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
