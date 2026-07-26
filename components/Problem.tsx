import { FileWarning, FileX, HeartCrack } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "No insurance at all",
    desc: "Millions of small shops in India have zero coverage. One fire, one flood, one robbery — and it's over.",
  },
  {
    icon: FileX,
    title: "Paperwork barrier",
    desc: "Insurance companies ask for years of tax records and bank statements. Most small shop owners don't have them.",
  },
  {
    icon: HeartCrack,
    title: "Families lose everything",
    desc: "For a small shop owner, the shop is the family's entire savings. When it burns down uninsured, they lose a lifetime.",
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
