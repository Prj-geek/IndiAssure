import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Mark from "./Mark";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* signature element: oversized watermark shield, echoing the wordmark */}
      <Mark className="pointer-events-none absolute -right-24 -top-16 w-[28rem] h-[32rem] text-cream/5 rotate-12" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-mint-soft">
            Insurance, simplified
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-cream">
            Insurance for India&rsquo;s small shops
            <span className="text-mint">&nbsp;— no paperwork needed.</span>
          </h1>

          <p className="mt-6 text-lg text-cream/70 max-w-xl">
            Simple fire, theft, and disaster protection. We assess your shop
            from photos — not tax records.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/demo"
              className="btn-pill bg-cream text-ink hover:bg-cream-dim"
            >
              Try the demo
              <ChevronRight className="w-4 h-4 text-mint" />
            </Link>
            <a
              href="mailto:2727priyanshu@gmail.com"
              className="btn-pill border border-cream/25 text-cream hover:bg-cream/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
