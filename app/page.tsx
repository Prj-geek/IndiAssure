import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import ThreeFailsShield from "@/components/ThreeFailsShield";
import Solution from "@/components/Solution";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

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
        <Team />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-primary/40 border-t border-primary/10">
        © {new Date().getFullYear()} IndiAssure. All rights reserved.
      </footer>
    </>
  );
}
