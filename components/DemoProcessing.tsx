import { Loader2, Camera, BarChart3, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Camera, text: "Analysing shop photos..." },
  { icon: BarChart3, text: "Estimating stock & fixtures..." },
  { icon: ShieldCheck, text: "Calculating coverage..." },
];

export default function DemoProcessing() {
  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-primary/10 bg-linen/50 text-center">
      <Loader2 className="w-10 h-10 text-secondary mx-auto animate-spin" />
      <h2 className="mt-4 text-2xl font-bold text-primary">
        Analysing your shop
      </h2>
      <p className="mt-2 text-primary/60 text-sm">
        This is a demo — we&rsquo;re simulating what our backend would do.
      </p>
      <div className="mt-8 space-y-4">
        {steps.map((s, i) => (
          <div
            key={s.text}
            className="flex items-center gap-3 text-left animate-pulse"
            style={{ animationDelay: `${i * 400}ms` }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-primary/70">{s.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
