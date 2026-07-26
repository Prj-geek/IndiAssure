const team = [
  {
    name: "Priyanshu Raj",
    role: "Co-founder",
    motto:
      "Believes the best insurance product is the one that never asks a shopkeeper to prove himself.",
  },
  {
    name: "Amrit S Nanda",
    role: "Co-founder",
    motto:
      "Believes good systems are judged by what they do when something goes wrong.",
  },
];

export default function Team() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="block text-center text-xs font-medium uppercase tracking-widest text-ink/50">
          The team
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink text-center">
          Built by people who care
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-2xl border border-ink/10 bg-cream-dim/60"
            >
              <h3 className="font-display text-lg text-ink">{t.name}</h3>
              <p className="text-sm text-mint font-medium">{t.role}</p>
              <p className="mt-3 text-sm text-ink/60 italic">
                &ldquo;{t.motto}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
