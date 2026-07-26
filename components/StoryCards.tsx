import Image from "next/image";
import Reveal from "./Reveal";

const stories = [
  {
    name: "Kuldeep Kumar",
    shop: "Chikankari kurta shop, Dilli Haat, Delhi",
    story:
      "A fire gutted over 30 shops at Dilli Haat in Delhi\u2019s INA market area. Kumar told reporters he\u2019d been saving for his sister\u2019s wedding the following year \u2014 the fire took everything in his shop. The Delhi government later promised affected vendors compensation and reallocated stalls.",
    source: "India TV News",
    image: "/stories/kuldeep.jpeg",
  },
  {
    name: "Jaspal Singh",
    shop: "Colours N Tones garment store, Model Town, Ludhiana",
    story:
      "Thieves broke onto the roof of an under-construction building next door, entered his store from above, and took the CCTV recorder\u2019s hard drive with them, leaving no footage. He lost close to \u20B97 lakh in cash and stock, from a store he\u2019d opened just six months earlier.",
    source: "The Tribune",
    image: "/stories/jaspal.jpeg",
  },
  {
    name: "Ashok Kumar Bansal",
    shop: "Sanwaria Electricals, Bhuna market, Haryana",
    story:
      "He said that in the 2022 flood he lost \u20B916 lakh, and the government compensation that eventually came through was \u20B915,000. This time, water entered the market again, and he said \u201Cwe cannot accept such injustice again.\u201D",
    source: "The Times of India",
    image: "/stories/ashok.jpeg",
  },
];

export default function StoryCards() {
  return (
    <section className="py-20 sm:py-28 bg-cream-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink text-center">
            This happens more than you&rsquo;d think
          </h2>
          <p className="mt-4 text-center text-ink/50 text-sm max-w-xl mx-auto italic">
            Real incidents, real people &mdash; the risks are not hypothetical.
          </p>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 120}>
              <div className="rounded-2xl border border-ink/10 bg-cream overflow-hidden h-full transition-shadow hover:shadow-lg">
                <div className="relative h-48 bg-ink/[0.06]">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-ink">{s.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-mint font-medium">
                    {s.shop}
                  </p>
                  <p className="mt-3 text-base text-ink/60">{s.story}</p>
                  <p className="mt-3 text-xs text-ink/40 italic">
                    Reported by {s.source}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
