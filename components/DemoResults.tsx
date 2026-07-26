import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  coverage: number;
  premium: number;
  onReset: () => void;
}

export default function DemoResults({ coverage, premium, onReset }: Props) {
  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-ink/10 bg-cream-dim/40">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint/20 mb-4">
          <Check className="w-8 h-8 text-ink" />
        </div>
        <h2 className="text-2xl font-display text-ink">
          Your estimated coverage
        </h2>
        <p className="mt-2 text-sm text-ink/60">
          Based on the details you shared. This is a demo estimate.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="p-5 rounded-xl bg-ink text-cream text-center">
          <p className="text-sm opacity-70">Estimated Coverage</p>
          <p className="text-3xl font-bold mt-1">
            ₹{coverage.toLocaleString("en-IN")}
          </p>
          <p className="text-xs opacity-60 mt-1">per year</p>
        </div>
        <div className="p-5 rounded-xl border border-ink/20 text-center">
          <p className="text-sm text-ink/60">Monthly Premium</p>
          <p className="text-3xl font-bold text-ink mt-1">
            ₹{premium.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-ink/50 mt-1">approx.</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-medium text-ink/60 uppercase tracking-wider mb-3">
          What&rsquo;s covered
        </h3>
        <div className="space-y-2">
          {["Fire & electrical short-circuit", "Theft & burglary", "Business interruption (daily cash while you recover)"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-mint" />
                <span className="text-sm text-ink">{item}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-cream font-medium hover:bg-ink-soft transition-colors"
        >
          Join the waitlist — we&rsquo;ll notify you when we launch
        </Link>
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink/20 text-ink font-medium hover:bg-ink/5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Try another shop
        </button>
      </div>
    </div>
  );
}
