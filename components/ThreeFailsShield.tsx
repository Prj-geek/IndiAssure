import { Flame, Hand, Clock } from "lucide-react";
import Reveal from "./Reveal";

const covers = [
  {
    icon: Flame,
    title: "Fire & electrical",
    desc: "Fire damage and short-circuit incidents covered.",
    bgClass: "bg-clay",
  },
  {
    icon: Hand,
    title: "Theft & burglary",
    desc: "Protection against robbery and break-ins.",
    bgClass: "bg-mint-soft",
  },
  {
    icon: Clock,
    title: "Business interruption",
    desc: "Fixed daily cash while your shop recovers — so your family still has money for rent and food.",
    bgClass: "bg-mint",
  },
];

export default function ThreeFailsShield() {
  return (
    <section className="py-20 sm:py-28 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-center">
            The 3+ Layer Shield
          </h2>
          <p className="mt-4 text-center text-base text-cream/60 max-w-xl mx-auto">
            More than three layers of protection that matter when something goes
            wrong.
          </p>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-3 gap-10">
          {covers.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-20 mb-5 text-ink ${c.bgClass}`}
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 20%, 100% 55%, 50% 100%, 0% 55%, 0% 20%)",
                  }}
                >
                  <c.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg">{c.title}</h3>
                <p className="mt-2 text-base text-cream/60">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
