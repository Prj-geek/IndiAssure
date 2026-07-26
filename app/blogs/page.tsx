import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    slug: "why-small-businesses-shouldnt-need-a-cfo",
    title: "Why Small Businesses Shouldn\u2019t Need a CFO to Understand Their Insurance",
    date: "July 2026",
    excerpt:
      "An agent handed her a policy document. She read the first page twice, didn\u2019t understand it, and put it in a drawer. She never went back. She\u2019s not unusual \u2014 she\u2019s the norm.",
  },
  {
    slug: "what-ai-still-gets-wrong-about-commercial-insurance",
    title: "What AI Still Gets Wrong About Commercial Insurance in India",
    date: "June 2026",
    excerpt:
      "IRDAI formed a seven-member working group tasked with building the country\u2019s first formal AI governance framework. Most visible progress has been about processing existing data faster \u2014 it hasn\u2019t touched the harder problem.",
  },
  {
    slug: "the-5-biggest-financial-risks-most-small-businesses-ignore",
    title: "The 5 Biggest Financial Risks Most Small Businesses Ignore",
    date: "May 2026",
    excerpt:
      "Ask a small business owner what could hurt their business, and most will say fire, flood, theft. But the ones that actually sink a business are quieter, and most owners have never thought through them.",
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
        &copy; {new Date().getFullYear()} IndiAssure. All rights reserved.
      </footer>
    </>
  );
}
