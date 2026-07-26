import { PhoneCall, UserCheck, IndianRupee, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: PhoneCall,
    title: "Reach out to us",
    desc: "Call or message — we respond fast.",
    circleClass: "bg-mint-soft/40 text-ink",
  },
  {
    icon: UserCheck,
    title: "We send an inspector",
    desc: "A trained person visits your shop.",
    circleClass: "bg-mint-soft text-ink",
  },
  {
    icon: IndianRupee,
    title: "Claim is paid",
    desc: "Damage assessed, payout initiated.",
    circleClass: "bg-mint text-cream",
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
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="flex items-center gap-4">
                <div className="text-center w-48">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${s.circleClass}`}
                  >
                    <s.icon className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-ink">{s.title}</h3>
                  <p className="mt-2 text-base text-ink/60">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-mint shrink-0 hidden sm:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
