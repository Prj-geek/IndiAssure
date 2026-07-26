import { Users } from "lucide-react";

const team = [
  {
    name: "Priyanshu Raj",
    role: "Co-founder",
    motto: "Believes the best insurance product is the one that never asks a shopkeeper to prove himself.",
  },
  {
    name: "Amrit S Nanda",
    role: "Co-founder",
    motto: "Believes good systems are judged by what they do when something goes wrong.",
  },
];

export default function Team() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="w-5 h-5 text-secondary" />
          <span className="text-sm font-medium text-primary/60 uppercase tracking-wider">
            The team
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center">
          Built by people who care
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-xl border border-primary/10 bg-linen/50"
            >
              <h3 className="text-lg font-semibold text-primary">{t.name}</h3>
              <p className="text-sm text-secondary font-medium">{t.role}</p>
              <p className="mt-3 text-sm text-primary/60 italic">&ldquo;{t.motto}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
