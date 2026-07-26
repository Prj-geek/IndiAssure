import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 sm:py-28 bg-cream-dim">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-ink/50">
          Get in touch
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">
          Let&rsquo;s talk
        </h2>
        <p className="mt-4 text-ink/60 max-w-md mx-auto">
          Whether you&rsquo;re a shop owner, investor, or insurance partner —
          we&rsquo;d love to hear from you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:2727priyanshu@gmail.com"
            className="btn-pill bg-ink text-cream hover:bg-ink-soft"
          >
            <Mail className="w-4 h-4 text-mint-soft" />
            2727priyanshu@gmail.com
          </a>
          <a
            href="mailto:amritsnanda@gmail.com"
            className="btn-pill border border-ink/20 text-ink hover:bg-ink/5"
          >
            <Mail className="w-4 h-4" />
            amritsnanda@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
