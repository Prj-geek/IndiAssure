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
    <section className="py-20 sm:py-28 bg-linen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center">
          How it works
        </h2>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/20 mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-accent text-primary text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-primary/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
