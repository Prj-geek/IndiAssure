import { Camera, Eye, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: Camera,
    label: "Snap photos of your shop",
  },
  {
    icon: Eye,
    label: "We assess what we see",
  },
  {
    icon: ShieldCheck,
    label: "Get covered — no papers needed",
  },
];

export default function Solution() {
  return (
    <section className="py-20 sm:py-28 bg-cream-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink text-center">
            Our approach
          </h2>
          <p className="mt-4 text-center text-base text-ink/60 max-w-2xl mx-auto">
            We don&rsquo;t ask for tax papers. We look at the shop itself —
            what you sell, how big it is, and what&rsquo;s inside.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-ink/15">
                    <s.icon className="w-7 h-7 text-ink" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-mint text-cream text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <p className="mt-4 text-base font-medium text-ink">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
