"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DemoForm, { type ShopData } from "@/components/DemoForm";
import DemoProcessing from "@/components/DemoProcessing";
import DemoResults from "@/components/DemoResults";
import { calculate } from "@/lib/demo-calc";

type State = "form" | "processing" | "results";

export default function DemoPage() {
  const [state, setState] = useState<State>("form");
  const [result, setResult] = useState({ coverage: 0, premium: 0 });

  const handleSubmit = (data: ShopData) => {
    setResult(calculate(data));
    setState("processing");
    setTimeout(() => setState("results"), 2800);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">
              Try the demo
            </h1>
            <p className="mt-3 text-primary/60 max-w-lg mx-auto">
              Get an instant coverage estimate based on your shop details. This
              takes 2 minutes.
            </p>
          </div>

          {state === "form" && <DemoForm onSubmit={handleSubmit} />}
          {state === "processing" && <DemoProcessing />}
          {state === "results" && (
            <DemoResults
              coverage={result.coverage}
              premium={result.premium}
              onReset={() => setState("form")}
            />
          )}

          <p className="mt-10 text-center text-xs text-ink/40 max-w-lg mx-auto">
            This is a concept demo to show how assessment would work — no real
            policy is issued and no payment is collected.
          </p>
          <p className="mt-2 text-center text-xs text-ink/40 max-w-lg mx-auto">
            This is a demo. No data is stored, transmitted, or used for any
            purpose. Your photos stay on your device.
          </p>
        </div>
      </main>
      <footer className="py-8 text-center text-sm text-primary/40 border-t border-primary/10">
        © {new Date().getFullYear()} IndiAssure. All rights reserved.
      </footer>
    </>
  );
}
