"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Will you check my income or tax records?",
    a: "No. We never ask for tax returns or bank statements. We assess your shop based on what we can see — photos, size, location, and stock.",
  },
  {
    q: "Who actually pays if something happens?",
    a: "The insurance company handles claims and payouts. We're a broker — we match you with the right policy and help you through the process.",
  },
  {
    q: "What's NOT covered?",
    a: "Standard exclusions apply: pre-existing damage, intentional loss, normal wear and tear. We'll be transparent about every exclusion before you sign anything.",
  },
  {
    q: "How is a claim assessed?",
    a: "When something goes wrong, a trained inspector visits your shop to assess the damage in person. No sales bills or receipts required.",
  },
  {
    q: "Is my shop photo/data safe?",
    a: "Yes. Your photos are used only for assessment. We don't sell or share your data. This is a demo — no data is currently stored or transmitted.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-ink text-center">
          Frequently asked questions
        </h2>

        <div className="mt-12">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-ink/10">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm font-medium text-ink pr-4">{f.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-ink/40 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm text-ink/60 leading-relaxed">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
