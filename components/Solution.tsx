import { CheckCircle } from "lucide-react";

const items = [
  "No tax papers or bank statements required",
  "Photos and video of your shop tell us what we need",
  "Coverage based on what we can actually see",
  "Physical damage inspection at claim time — no sales bills",
];

export default function Solution() {
  return (
    <section className="py-20 sm:py-28 bg-cream-dim">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-center">
          Our approach
        </h2>
        <p className="mt-4 text-center text-ink/60 max-w-2xl mx-auto">
          We don&rsquo;t ask for tax papers. We look at the shop itself —
          what you sell, how big it is, and what&rsquo;s inside.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-mint mt-0.5 flex-shrink-0" />
              <span className="text-sm text-ink/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
