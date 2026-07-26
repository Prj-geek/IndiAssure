import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Mark from "./Mark";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <Mark className="pointer-events-none absolute -right-24 -top-16 w-[28rem] h-[32rem] text-cream/5 rotate-12" />

      {/* duotone shop photo — right side, desktop only */}
      <div className="hidden lg:block absolute inset-0">
        <img
          src="/hero-shop.jpg"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1/2 object-cover"
          style={{
            filter: "grayscale(100%) contrast(1.2)",
            opacity: 0.12,
            mixBlendMode: "luminosity",
          }}
        />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-transparent to-ink" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-mint-soft">
            Insurance for India&rsquo;s small shops
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-cream">
            You&rsquo;re one fire away from losing it all.
            <br />
            <span className="text-mint">
              You&rsquo;re a few clicks away from making sure you don&rsquo;t.
            </span>
          </h1>

          <p className="mt-6 text-lg text-cream/70 max-w-xl">
            No tax papers, no bank statements — just a few photos of your shop.
            Fire, theft, and disaster cover, sorted in minutes.
          </p>

          <p className="mt-4 text-sm text-cream/40">
            <span className="text-mint font-medium">85%</span> of India&rsquo;s 70
            million small shops have no insurance.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/demo"
              className="btn-pill bg-cream text-ink hover:bg-cream-dim"
            >
              Get covered — 2 minutes
              <ChevronRight className="w-4 h-4 text-mint" />
            </Link>
            <a
              href="mailto:2727priyanshu@gmail.com"
              className="btn-pill border border-cream/25 text-cream hover:bg-cream/10"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
