import { PhoneCall, UserCheck, IndianRupee } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: PhoneCall,
    title: "Reach out to us",
    desc: "Call or message — we respond fast.",
  },
  {
    icon: UserCheck,
    title: "We send an inspector",
    desc: "A trained person visits your shop.",
  },
  {
    icon: IndianRupee,
    title: "Claim is paid",
    desc: "Damage assessed, payout initiated.",
  },
];

export default function ClaimsProcess() {
  return (
    <section className="py-20 sm:py-28 bg-cream-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink text-center">
            If something happens, here&rsquo;s what you do
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-ink/15">
                    <s.icon className="w-7 h-7 text-ink" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-mint text-cream text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-base text-ink/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
