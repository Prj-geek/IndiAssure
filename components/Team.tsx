const team = [
  {
    name: "Priyanshu Raj",
    role: "Co-founder",
    motto:
      "Believes the best insurance product is the one that never asks a shopkeeper to prove himself.",
    linkedin: "https://www.linkedin.com/in/priyanshuraj27",
  },
  {
    name: "Amrit S Nanda",
    role: "Co-founder",
    motto:
      "Believes good systems are judged by what they do when something goes wrong.",
    linkedin: "https://www.linkedin.com/in/amrit-nanda-118564332",
  },
];

import Reveal from "./Reveal";

export default function Team() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="block text-center text-xs font-medium uppercase tracking-widest text-ink/50">
            The team
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-ink text-center">
            Meet the team
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="rounded-2xl border border-ink/10 bg-cream-dim/60 p-6">
                <h3 className="font-display text-lg text-ink">{t.name}</h3>
                <p className="text-sm text-mint font-medium">{t.role}</p>
                <p className="mt-3 text-base text-ink/60 italic">
                  &ldquo;{t.motto}&rdquo;
                </p>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-mint hover:underline"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
