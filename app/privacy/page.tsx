import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-display text-ink">Privacy Policy</h1>
          <p className="mt-3 text-sm text-ink/50">Last updated: July 2026</p>

          <div className="mt-8 space-y-6 text-base text-ink/70 leading-relaxed">
            <section>
              <h2 className="font-display text-xl text-ink mb-2">1. Information We Collect</h2>
              <p>
                When you use the IndiAssure demo or contact form, we may collect your name, email
                address, and any information you provide in messages. The demo assessment does not
                store or transmit any data — it runs entirely in your browser.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-2">2. How We Use Your Information</h2>
              <p>
                We use your information solely to respond to your enquiries. We do not sell, rent,
                or share your personal data with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-2">3. Data Storage</h2>
              <p>
                Contact form submissions are processed via Web3Forms and delivered to our team email.
                We do not maintain a separate database of user information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-2">4. Cookies</h2>
              <p>
                This website does not use tracking cookies. Session preferences (such as theme) may
                be stored in your browser locally.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-2">5. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Changes will be posted on this page
                with an updated date.
              </p>
            </section>
          </div>

          <div className="mt-10">
            <Link href="/" className="text-sm text-mint hover:underline">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
