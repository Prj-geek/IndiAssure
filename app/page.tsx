import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import ThreeFailsShield from "@/components/ThreeFailsShield";
import Solution from "@/components/Solution";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import ClaimsProcess from "@/components/ClaimsProcess";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Mark from "@/components/Mark";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ThreeFailsShield />
        <Pricing />
        <Comparison />
        <FAQ />
        <ClaimsProcess />
        <Team />
        <Contact />
      </main>
      <footer className="bg-ink text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col sm:flex-row justify-between gap-12">
          <div>
            <div className="flex items-center gap-1 font-display text-2xl">
              <span>Indi</span>
              <Mark className="w-4 h-5 text-mint translate-y-[1px]" />
              <span>Assure</span>
            </div>
            <a
              href="mailto:2727priyanshu@gmail.com"
              className="mt-6 block text-sm text-cream/70 hover:text-mint-soft transition-colors"
            >
              2727priyanshu@gmail.com
            </a>
            <a
              href="mailto:amritsnanda@gmail.com"
              className="mt-2 block text-sm text-cream/70 hover:text-mint-soft transition-colors"
            >
              amritsnanda@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-3 text-sm uppercase tracking-widest text-cream/70">
            <Link href="/" className="hover:text-mint-soft transition-colors">
              Home
            </Link>
            <Link
              href="/blogs"
              className="hover:text-mint-soft transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/demo"
              className="hover:text-mint-soft transition-colors"
            >
              Try Demo
            </Link>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
            <span>
              © {new Date().getFullYear()} IndiAssure. All rights reserved.
            </span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cream/60 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-cream/60 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
