import { Camera, BarChart3, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Share your shop",
    desc: "Tell us what kind of shop you run, how big it is, and show us a few photos.",
  },
  {
    icon: BarChart3,
    title: "We assess it",
    desc: "We estimate your shop's stock and fixtures value — no tax papers, no bank statements.",
  },
  {
    icon: ShieldCheck,
    title: "Get protected",
    desc: "Choose a plan. If something goes wrong, someone inspects the damage and you get paid.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-center">
          How it works
        </h2>
        <div className="mt-16 grid sm:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-ink/15 mb-5 relative">
                <s.icon className="w-6 h-6 text-ink" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-mint text-cream text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
