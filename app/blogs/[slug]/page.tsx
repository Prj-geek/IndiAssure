import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Calendar } from "lucide-react";

const posts: Record<
  string,
  { title: string; date: string; content: string[] }
> = {
  "the-fire-that-started-everything": {
    title: "The Fire That Started Everything",
    date: "July 2026",
    content: [
      "A commercial shop complex near our village caught fire. Every shop inside was destroyed. None of them had insurance.",
      "We watched families who had spent years, sometimes decades, building their small businesses lose everything in one night, with nothing to fall back on.",
      "For a small shop owner, the shop usually isn't just a business. It's the family's entire savings, sitting on shelves. When it burns down uninsured, the family doesn't just lose income for a while — they can lose everything they've built over a lifetime, overnight.",
      "That's not a market statistic to us. It's the reason we're doing this. We're not just chasing an interesting business opportunity — we saw exactly what this gap costs real people, and we want to close it.",
    ],
  },
  "why-small-shops-cant-get-insured": {
    title: "Why Small Shops Can't Get Insured in India",
    date: "July 2026",
    content: [
      "Millions of small shops in India have no insurance at all. Most insurance companies ask for years of tax records and bank statements before they'll sell a shop a policy.",
      "Most small shop owners don't have those records, or don't want to show them, because they run their business mostly in cash.",
      "So when something bad happens — a fire, a flood, a robbery — they lose everything, and there's no one to help them recover.",
      "Policybazaar connects people to an old-fashioned, phone-call-based selling process — not built for cash-only small shops. Riskcovry and Zopper help businesses plug insurance into their apps, but even they say small, undocumented businesses are hard to serve because there's no good data on them.",
      "That's the exact gap we're trying to fill. It's not empty, untouched ground — but it's ground nobody has clearly won yet.",
    ],
  },
  "no-tax-papers-no-problem": {
    title: "No Tax Papers, No Problem",
    date: "July 2026",
    content: [
      "The normal way to buy shop insurance: fill out long forms, show two or three years of tax returns, then wait days or weeks for a price. Most small shop owners give up before finishing this process — or never start.",
      "Our way, for small cash-run shops: we don't ask for tax papers at all.",
      "Instead, we look at the shop itself — what kind of shop it is, how big it is, where it's located, and a short video or a few photos of what's inside. We use this to work out roughly how much the shop's stock and fittings are worth.",
      "We agree with the insurance company ahead of time that if something happens, we won't ask for sales bills either. Someone will physically inspect the damage, and the payout is based on that.",
      "For medium-sized businesses that already file taxes: we use those directly instead of inventing something new — it's faster for both sides.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex-1 py-20 bg-background text-center">
          <h1 className="text-2xl font-bold text-primary">Post not found</h1>
          <Link href="/blogs" className="mt-4 inline-block text-secondary">
            ← Back to blogs
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-20 bg-background">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>

          <div className="flex items-center gap-2 text-sm text-primary/40 mb-3">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            {post.title}
          </h1>

          <div className="mt-8 space-y-5">
            {post.content.map((p, i) => (
              <p key={i} className="text-primary/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-primary/10">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <footer className="py-8 text-center text-sm text-primary/40 border-t border-primary/10">
        © {new Date().getFullYear()} IndiAssure. All rights reserved.
      </footer>
    </>
  );
}
