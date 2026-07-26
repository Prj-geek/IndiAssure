import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    slug: "the-fire-that-started-everything",
    title: "The Fire That Started Everything",
    date: "July 2026",
    excerpt:
      "A commercial shop complex near our village caught fire. Every shop destroyed. None insured. We watched families lose everything overnight.",
  },
  {
    slug: "why-small-shops-cant-get-insured",
    title: "Why Small Shops Can't Get Insured in India",
    date: "July 2026",
    excerpt:
      "Millions of small shops have no insurance. The reason isn't demand — it's a paperwork barrier that locks out the people who need it most.",
  },
  {
    slug: "no-tax-papers-no-problem",
    title: "No Tax Papers, No Problem",
    date: "July 2026",
    excerpt:
      "Most insurance companies ask for years of tax returns before they'll sell a policy. We're building a way around that — using what we can see, not what's on paper.",
  },
];

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-display text-ink">
            Blog
          </h1>
          <p className="mt-3 text-ink/60 max-w-lg">
            Writeups about the problem we&rsquo;re solving and why it matters.
          </p>

          <div className="mt-10 space-y-6">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="block p-6 rounded-xl border border-ink/10 bg-cream-dim/50 hover:border-mint/40 transition-colors group"
              >
                <div className="flex items-center gap-2 text-sm text-ink/40">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
                <h2 className="mt-2 font-display text-xl text-ink group-hover:text-mint transition-colors">
                  {blog.title}
                </h2>
                <p className="mt-2 text-sm text-ink/60">{blog.excerpt}</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-mint opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className="py-8 text-center text-sm text-ink/40 border-t border-ink/10">
        © {new Date().getFullYear()} IndiAssure. All rights reserved.
      </footer>
    </>
  );
}
