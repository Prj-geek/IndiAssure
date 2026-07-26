import { Check, ArrowLeft, Mail } from "lucide-react";

interface Props {
  coverage: number;
  premium: number;
  onReset: () => void;
}

export default function DemoResults({ coverage, premium, onReset }: Props) {
  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-primary/10 bg-linen/50">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-primary">
          Your coverage estimate
        </h2>
        <p className="mt-2 text-sm text-primary/60">
          Based on the details you shared. This is a demo estimate.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="p-5 rounded-xl bg-primary text-background text-center">
          <p className="text-sm opacity-70">Estimated Coverage</p>
          <p className="text-3xl font-bold mt-1">
            ₹{coverage.toLocaleString("en-IN")}
          </p>
          <p className="text-xs opacity-60 mt-1">per year</p>
        </div>
        <div className="p-5 rounded-xl border border-primary/20 text-center">
          <p className="text-sm text-primary/60">Monthly Premium</p>
          <p className="text-3xl font-bold text-primary mt-1">
            ₹{premium.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-primary/50 mt-1">approx.</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-3">
          What&rsquo;s covered
        </h3>
        <div className="space-y-2">
          {["Fire & electrical short-circuit", "Theft & burglary", "Business interruption (daily cash while you recover)"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary">{item}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="mailto:2727priyanshu@gmail.com?subject=IndiAssure%20—%20I%20want%20to%20activate%20my%20coverage"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Get in touch to activate
        </a>
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Try another shop
        </button>
      </div>
    </div>
  );
}
