import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 sm:py-28 bg-linen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-secondary" />
          <span className="text-sm font-medium text-primary/60 uppercase tracking-wider">
            Get in touch
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">
          Let&rsquo;s talk
        </h2>
        <p className="mt-4 text-primary/60 max-w-md mx-auto">
          Whether you&rsquo;re a shop owner, investor, or insurance partner — we&rsquo;d love to hear from you.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:2727priyanshu@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            2727priyanshu@gmail.com
          </a>
          <a
            href="mailto:amritsnanda@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-colors"
          >
            <Mail className="w-4 h-4" />
            amritsnanda@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
