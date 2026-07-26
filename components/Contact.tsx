"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <span className="block text-center text-xs font-medium uppercase tracking-widest text-ink/50">
            Get in touch
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink text-center">
            Let&rsquo;s talk
          </h2>
          <p className="mt-4 text-center text-ink/60">
            Whether you&rsquo;re a shop owner, investor, or insurance partner —
            we&rsquo;d love to hear from you.
          </p>

          {sent ? (
            <div className="mt-10 p-8 rounded-2xl border border-mint/30 bg-mint/5 text-center">
              <p className="font-display text-lg text-ink">Thanks!</p>
              <p className="mt-2 text-sm text-ink/60">
                We&rsquo;ll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-10 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-ink mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream-dim/40 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream-dim/40 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream-dim/40 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-pill bg-ink text-cream hover:bg-ink-soft w-full"
              >
                <Send className="w-4 h-4" />
                Send message
              </button>
              <p className="text-center text-xs text-ink/40">
                This is a pre-launch form. We&rsquo;ll reach out within 48
                hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
