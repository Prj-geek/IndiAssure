import Reveal from "./Reveal";
import { Store } from "lucide-react";

const stories = [
  {
    name: "Ramesh",
    shop: "Garment shop, Surat",
    story:
      "A short-circuit fire gutted his stock overnight. Twenty years of savings were in that shop — none of it insured. He's still repaying suppliers.",
  },
  {
    name: "Fatima",
    shop: "Electronics shop, Lucknow",
    story:
      "A break-in cleared out her display counters in one night. The police report took weeks; the loss was immediate and total.",
  },
  {
    name: "Suresh",
    shop: "Grocery store, Nagpur",
    story:
      "Monsoon flooding ruined his stock for the second year running. Each time, he rebuilt from scratch — because there was nothing else to do.",
  },
];

export default function StoryCards() {
  return (
    <section className="py-20 sm:py-28 bg-cream-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink text-center">
            This happens more than you&rsquo;d think
          </h2>
          <p className="mt-4 text-center text-ink/50 text-sm max-w-xl mx-auto italic">
            Illustrative composite scenarios based on common, real risks —
            not documented individuals.
          </p>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 120}>
              <div className="rounded-2xl border border-ink/10 bg-cream overflow-hidden h-full">
                <div className="h-36 bg-ink/[0.06] flex items-center justify-center">
                  <Store className="w-10 h-10 text-clay/60" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-ink">{s.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-mint font-medium">
                    {s.shop}
                  </p>
                  <p className="mt-3 text-base text-ink/60">{s.story}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
