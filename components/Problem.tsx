import { BarChart3, FileX, Flame } from "lucide-react";
import Reveal from "./Reveal";
import UninsuredStat from "./UninsuredStat";

const problems = [
  {
    icon: BarChart3,
    title: "85% uninsured",
    desc: "India has 70 million small shops. Nearly 85% have zero insurance coverage.",
  },
  {
    icon: FileX,
    title: "The paperwork wall",
    desc: "Insurance companies require years of tax returns and bank statements. Most cash-run shops can't produce them.",
  },
  {
    icon: Flame,
    title: "One incident ends it all",
    desc: "India records 1.6 lakh fire incidents every year. A single fire in a market can destroy hundreds of uninsured shops overnight.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink text-center">
            The problem is real
          </h2>
          <p className="mt-4 text-center text-base text-ink/60 max-w-2xl mx-auto">
            We watched a fire take away everything from families who had spent
            decades building their small businesses. That&rsquo;s why
            we&rsquo;re doing this.
          </p>
          <UninsuredStat />
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-3 gap-10">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="text-center transition-shadow hover:shadow-lg rounded-2xl p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-clay/10 border border-clay/20 mb-5">
                  <p.icon className="w-7 h-7 text-clay" />
                </div>
                <h3 className="font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-base text-ink/60">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
