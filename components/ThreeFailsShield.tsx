import { Flame, Hand, Clock } from "lucide-react";

const covers = [
  {
    icon: Flame,
    title: "Fire & electrical",
    desc: "Fire damage and short-circuit incidents covered.",
  },
  {
    icon: Hand,
    title: "Theft & burglary",
    desc: "Protection against robbery and break-ins.",
  },
  {
    icon: Clock,
    title: "Business interruption",
    desc: "Fixed daily cash while your shop recovers — so your family still has money for rent and food.",
  },
];

export default function ThreeFailsShield() {
  return (
    <section className="py-20 sm:py-28 bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-center">
          The 3-Fails Shield
        </h2>
        <p className="mt-4 text-center text-cream/60 max-w-xl mx-auto">
          Three things that matter most when something goes wrong.
        </p>
        <div className="mt-16 grid sm:grid-cols-3 gap-10">
          {covers.map((c) => (
            <div key={c.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-cream/15 mb-5">
                <c.icon className="w-6 h-6 text-mint-soft" />
              </div>
              <h3 className="font-display text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-cream/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
