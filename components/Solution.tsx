import { CheckCircle } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center">
          Our approach
        </h2>
        <p className="mt-4 text-center text-primary/60 max-w-2xl mx-auto">
          We don&rsquo;t ask for tax papers. We look at the shop itself — what
          you sell, how big it is, and what&rsquo;s inside.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            "No tax papers or bank statements required",
            "Photos and video of your shop tell us what we need",
            "Coverage based on what we can actually see",
            "Physical damage inspection at claim time — no sales bills",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
