"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Mark from "./Mark";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute -right-24 -top-16"
      >
        <Mark className="w-[28rem] h-[32rem] text-cream/5 rotate-12" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-mint-soft">
          Insurance for India&rsquo;s small shops
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-cream">
          You&rsquo;re one fire away from losing it all.
        </h1>

        <p className="mt-4 font-display text-2xl sm:text-3xl text-mint italic">
          You&rsquo;re a few clicks away from making sure you don&rsquo;t.
        </p>

        <p className="mt-6 text-base text-cream/70 max-w-xl mx-auto">
          No tax papers, no bank statements — just a few photos of your shop.
          Fire, theft, and disaster cover, sorted in minutes.
        </p>

        <p className="mt-4 text-sm text-cream/40">
          <span className="text-mint font-medium">85%</span> of India&rsquo;s 70
          million small shops have no insurance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
}
