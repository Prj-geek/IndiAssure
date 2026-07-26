import Link from "next/link";
import { Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-primary/60 uppercase tracking-wider">
              Insurance, simplified
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Insurance for India&rsquo;s small shops
            <span className="text-secondary"> — no paperwork needed.</span>
          </h1>
          <p className="mt-6 text-lg text-primary/70 max-w-xl">
            Simple fire, theft, and disaster protection. We assess your shop from photos — not tax records.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
            >
              Try the Demo
            </Link>
            <a
              href="mailto:2727priyanshu@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent pointer-events-none" />
    </section>
  );
}
