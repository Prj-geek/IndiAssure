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
    <section className="py-20 sm:py-28 bg-primary text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          The 3-Fails Shield
        </h2>
        <p className="mt-4 text-center text-background/60 max-w-xl mx-auto">
          Three things that matter most when something goes wrong.
        </p>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {covers.map((c) => (
            <div key={c.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
                <c.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-background/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
