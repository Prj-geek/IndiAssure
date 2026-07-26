import { BarChart3, FileX, Flame } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-center">
          The problem is real
        </h2>
        <p className="mt-4 text-center text-ink/60 max-w-2xl mx-auto">
          We watched a fire take away everything from families who had spent
          decades building their small businesses. That&rsquo;s why
          we&rsquo;re doing this.
        </p>
        <div className="mt-16 grid sm:grid-cols-3 gap-10">
          {problems.map((p) => (
            <div key={p.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-ink/15 mb-5">
                <p.icon className="w-6 h-6 text-clay" />
              </div>
              <h3 className="font-display text-lg text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
