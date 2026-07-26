import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import StoryCards from "@/components/StoryCards";
import ThreeFailsShield from "@/components/ThreeFailsShield";
import Solution from "@/components/Solution";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import ClaimsProcess from "@/components/ClaimsProcess";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <StoryCards />
        <Solution />
        <ThreeFailsShield />
        <Pricing />
        <Comparison />
        <FAQ />
        <ClaimsProcess />
        <Team />
        <Contact />
      </main>
      <footer className="bg-ink text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col sm:flex-row justify-between gap-12">
          <div>
            <div className="flex items-center gap-2 font-display text-2xl">
              <Image
                src="/logo/logo-dark-icon.png"
                alt=""
                width={36}
                height={30}
                className="h-8 w-auto"
              />
              <Image
                src="/logo/logo-dark-wordmark-only.png"
                alt="IndiAssure"
                width={160}
                height={28}
                className="h-6 w-auto"
              />
            </div>
            <a
              href="mailto:hello@indiassure.com"
              className="mt-6 block text-sm text-cream/70 hover:text-mint-soft transition-colors"
            >
              hello@indiassure.com
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
            <span>
              © {new Date().getFullYear()} IndiAssure. All rights reserved.
            </span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-cream/60 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-cream/60 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
