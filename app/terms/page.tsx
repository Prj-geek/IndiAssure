import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-display text-ink">Terms of Use</h1>
          <p className="mt-3 text-sm text-ink/50">Last updated: July 2026</p>

          <div className="mt-8 space-y-6 text-base text-ink/70 leading-relaxed">
            <section>
              <h2 className="font-display text-xl text-ink mb-2">1. Acceptance</h2>
              <p>
                By accessing or using the IndiAssure website, you agree to these terms. If you do
                not agree, please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-2">2. Not Insurance</h2>
              <p>
                The demo on this website is for illustrative purposes only. No insurance policy is
                issued, no coverage is provided, and no payment is collected through this site. Any
                coverage estimates are approximate and for demonstration only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-2">3. Intellectual Property</h2>
              <p>
                All content on this website — including text, logos, and design — is the property
                of IndiAssure and may not be reproduced without written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-2">4. Limitation of Liability</h2>
              <p>
                This website is provided &ldquo;as is&rdquo; without warranties of any kind. We are
                not liable for any damages arising from the use of this site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-2">5. Contact</h2>
              <p>
                Questions about these terms? Email us at{" "}
                <a href="mailto:hello@indiassure.com" className="text-mint hover:underline">
                  hello@indiassure.com
                </a>.
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
