"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setError("Contact form not configured. Please email us directly.");
      return;
    }
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again or email us.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <Reveal>
            <span className="block text-center text-xs font-medium uppercase tracking-widest text-ink/50">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-ink text-center">
              Let&rsquo;s talk
            </h2>
            <p className="mt-4 text-center text-base text-ink/60">
              Whether you&rsquo;re a shop owner, investor, or insurance partner —
              we&rsquo;d love to hear from you.
            </p>
          </Reveal>

          {sent ? (
            <Reveal delay={100}>
              <div className="mt-10 p-8 rounded-2xl border border-mint/30 bg-mint/5 text-center">
                <p className="font-display text-lg text-ink">Thanks!</p>
                <p className="mt-2 text-base text-ink/60">
                  We&rsquo;ll be in touch within 48 hours.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={100}>
              <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <input
                  type="hidden"
                  name="access_key"
                  value={ACCESS_KEY}
                />
                <input
                  type="hidden"
                  name="subject"
                  value="IndiAssure — New Contact"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                />
                <div>
                  <label className="block text-sm font-medium text-ink mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream-dim/40 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream-dim/40 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint resize-none"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pill bg-ink text-cream hover:bg-ink-soft w-full disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? "Sending..." : "Send message"}
                </button>
                <p className="text-center text-xs text-ink/40">
                  This is a pre-launch form. We&rsquo;ll reach out within 48
                  hours.
                </p>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
