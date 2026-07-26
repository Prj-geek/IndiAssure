import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Calendar } from "lucide-react";

const posts: Record<
  string,
  { title: string; date: string; content: string[] }
> = {
  "why-small-businesses-shouldnt-need-a-cfo": {
    title: "Why Small Businesses Shouldn\u2019t Need a CFO to Understand Their Insurance",
    date: "July 2026",
    content: [
      "A shop owner we spoke with told us something that\u2019s stuck with us since: she\u2019d tried to buy insurance for her store once, years ago. An agent handed her a policy document. She read the first page twice, didn\u2019t understand it, and put it in a drawer. She never went back.",
      "She\u2019s not unusual. She\u2019s the norm.",
      "Insurance was written for people who already understand insurance. Walk into almost any commercial insurance conversation and you\u2019ll hit the same wall: sum insured, first-loss basis, business interruption clauses, exclusions written in dense legal English. None of this is wrong, exactly \u2014 it\u2019s precise, and precision matters when money is on the line. But precision and clarity aren\u2019t the same thing, and the industry has spent decades optimizing for the first at the expense of the second.",
      "That\u2019s fine if you\u2019re a large company with a finance team to translate it. It\u2019s a real problem if you\u2019re a shop owner who\u2019s never had a reason to learn what \u201Csum insured\u201D means, and who has exactly one shot at getting this decision right before something goes wrong.",
      "The paperwork isn\u2019t just annoying \u2014 it quietly decides who gets protected. We\u2019ve talked to small business owners who didn\u2019t just find the process confusing. They found it disqualifying. Multi-year audited financials, tax filings, income disclosures \u2014 all standard asks from a traditional insurer, and all things a huge number of small, cash-run businesses simply don\u2019t have in the form insurers want them.",
      "So they don\u2019t get insured. Not because they don\u2019t want protection. Because the process assumes a level of financial infrastructure most small businesses don\u2019t have, and never bothers to ask what would actually work for the business standing in front of it. That\u2019s not a paperwork problem. That\u2019s a design problem.",
      "We don\u2019t think simple means dumbing anything down. We think it means designing the product around the person buying it, not around the institution selling it. A small business owner doesn\u2019t need to understand actuarial pricing. They need to understand one thing clearly: if something goes wrong, what happens, and when. A policy that pays a fixed amount per day if a shop is forced to close is something anyone can understand in one sentence \u2014 no calculator, no CFO, no phone call to a broker to ask what a clause means.",
      "That\u2019s the bar we think this entire category should be held to. Not \u201Ccan a financially sophisticated buyer eventually figure this out.\u201D Can the person actually buying it understand it the first time they read it.",
      "Every small business owner who avoids insurance because the process felt built for someone else is one fire, one flood, or one break-in away from losing everything they\u2019ve built \u2014 with no safety net underneath them. That\u2019s not an edge case. Across India alone, the overwhelming majority of small and micro businesses carry no property insurance at all.",
      "We don\u2019t think that\u2019s because people don\u2019t want protection. We think it\u2019s because the industry has, for a very long time, quietly required a translator between the product and the person who needs it most. We\u2019re building on the belief that it shouldn\u2019t.",
    ],
  },
  "what-ai-still-gets-wrong-about-commercial-insurance": {
    title: "What AI Still Gets Wrong About Commercial Insurance in India",
    date: "June 2026",
    content: [
      "AI in Indian insurance stopped being a talking point this year and became a regulatory priority. In June 2026, IRDAI formed a seven-member working group tasked with building the country\u2019s first formal AI governance framework, with a mandate that explicitly names claims processing and fraud detection as the areas of greatest concern \u2014 including the open question of who is liable when an automated decision gets it wrong. That question doesn\u2019t have an answer yet. Regulation is catching up to deployment, not the other way around.",
      "That\u2019s the right context for asking what AI actually still struggles with here \u2014 not in the abstract, but in the specific texture of India\u2019s insurance market.",
      "Most AI underwriting progress, in India and globally, works by getting better at reading data that already exists \u2014 transaction history, digital footprints, structured financial records. That\u2019s a real capability. It\u2019s also not the same problem as underwriting a business that produces almost no usable data at all.",
      "This is India\u2019s actual bottleneck. Riskcovry \u2014 one of the country\u2019s more established insurtech infrastructure players \u2014 has said as much in its own research: small and micro businesses are a market insurers generally struggle to distribute to and gather data on, precisely because they\u2019re informal and undocumented. That\u2019s not a competitor being modest. It\u2019s an honest description of why the vast majority of India\u2019s small businesses still carry no property or disaster insurance at all, despite standardized products like IRDAI\u2019s own Bharat Sookshma Udyam Suraksha having existed for years. The product isn\u2019t the missing piece. The data pipeline underneath it is.",
      "There\u2019s a second, quieter tension specific to India right now. IRDAI\u2019s 2025 Regulatory Sandbox Regulations explicitly list AI and machine learning in underwriting as an innovation area the regulator wants to see tested \u2014 but its own legal commentary flags the obvious friction with India\u2019s Digital Personal Data Protection Act: the more predictive an underwriting model tries to be, the more granular the personal data it tends to want, whether that\u2019s lifestyle signals, biometric indicators, or visual data.",
      "That\u2019s not a hypothetical concern for anyone building alternative underwriting methods in India \u2014 it\u2019s a live design constraint. Any approach that substitutes physical or visual signals for financial paperwork has to be built with real consent and real data discipline from day one, not bolted on after the fact once a regulator asks.",
      "AI is only as good as the data feeding it, and Indian insurance data has had a rough couple of years on that front. In August 2024, Star Health \u2014 one of India\u2019s largest health insurers \u2014 suffered a breach affecting over 31 million customers and roughly 7.24 terabytes of sensitive data. Whatever the cause, the underlying point holds broadly across the industry: AI needs clean, structured, well-governed data to be trustworthy, and insurance data in India is often exactly the opposite \u2014 fragmented across legacy systems, inconsistently labelled, unevenly secured.",
      "An AI model can be well-designed and still produce bad outcomes if the data infrastructure underneath it isn\u2019t. That\u2019s as true for a large listed insurer as it is for any startup proposing a new underwriting method.",
      "None of this is a case against AI in Indian insurance \u2014 IRDAI standing up a dedicated working group is a sign the sector is maturing, not stalling. But most of the visible progress so far has been about processing existing data faster and more accurately. It hasn\u2019t touched the harder, more specific problem: how do you responsibly extend coverage to a business that has never generated the kind of data traditional underwriting \u2014 AI-assisted or not \u2014 was built to read?",
      "That\u2019s not a bigger-model problem. It\u2019s a question of what should count as evidence of risk in the first place, built with the same seriousness IRDAI is now asking of AI governance generally: transparent, consent-driven, and honest about what it doesn\u2019t yet know.",
    ],
  },
  "the-5-biggest-financial-risks-most-small-businesses-ignore": {
    title: "The 5 Biggest Financial Risks Most Small Businesses Ignore",
    date: "May 2026",
    content: [
      "Ask a small business owner what could hurt their business, and most will say the obvious thing: fire, flood, theft, a bad month of sales. Those are real. But they\u2019re not usually the risks that actually sink a business. The ones that do are quieter, and most owners have never sat down and thought through them, because there\u2019s never been a reason to until it\u2019s too late.",
      "Here are five that come up again and again.",
      "1. Being shut down is a different risk from being damaged. Owners plan for damage. Almost nobody plans for the weeks after it. If a shop is forced to close for a month after a fire or a flood, the damage itself is only half the problem. Rent doesn\u2019t pause. Staff still need to be paid, or let go. Suppliers still expect payment for stock that\u2019s now gone. A business can survive the disaster and still not survive the month that follows it, simply because there was no income and no cushion during the gap. Most financial planning for small businesses stops at \u201Cwhat if something breaks.\u201D It rarely gets to \u201Cwhat if I can\u2019t open the doors for thirty days.\u201D",
      "2. The business runs on one person, with no backup. Walk through almost any market in India and you\u2019ll find businesses where everything \u2014 sourcing, sales, staff, decisions \u2014 runs through a single owner. That\u2019s not a criticism; it\u2019s just how most small businesses here are actually built. It\u2019s also a quiet, serious risk. If that one person is hospitalized, injured, or simply unavailable for a few weeks, a lot of small businesses don\u2019t have a real answer for what happens next. There\u2019s no deputy, no documented process, no plan \u2014 because building one has never felt urgent, right up until it suddenly is.",
      "3. The debt trap that follows an uninsured loss. This is the risk that compounds all the others, and it\u2019s specific to what happens after a loss with no insurance behind it. When a shop owner needs cash quickly to rebuild \u2014 and has no payout coming from anywhere \u2014 the fastest source is often an informal lender, not a bank. India\u2019s informal credit market is large and well-documented, and the rates in it are not small: commonly somewhere in the range of 24% to 60% a year, and considerably higher for short-term or weekly lenders. A business that could have recovered with a fair insurance payout instead ends up rebuilding on debt that costs several times what a bank would ever charge \u2014 assuming a bank would have lent at all. The original disaster does the damage. The debt that follows it is often what actually breaks the business.",
      "4. Thinking you\u2019re covered when you\u2019re not. Some business owners do have insurance \u2014 and are still underinsured without realizing it. A policy bought years ago, when the shop was smaller and held less stock, often never gets revisited as the business grows. The premium keeps getting paid every year, which feels like protection. The sum insured, meanwhile, quietly falls further and further behind what the shop is actually worth. Nobody finds this out until a claim, at the worst possible moment, when the payout turns out to cover a fraction of the actual loss.",
      "5. Digital payments have opened a new kind of exposure. UPI has made running a small shop genuinely easier \u2014 instant payments, no cash handling, no bad cheques. It\u2019s also created a fraud surface that didn\u2019t exist a few years ago, and it\u2019s growing quickly: reported UPI fraud cases in India roughly doubled between FY2024\u201325 and the first eight months of FY2025\u201326. One pattern hits small retailers directly: fraudsters swap or paste a fake QR code over a shop\u2019s real one, so customers unknowingly pay a stranger instead of the store. By the time it\u2019s noticed, documented cases show merchants losing anywhere from roughly \u20B950,000 to \u20B95 lakh before catching it. It\u2019s a small, physical, easy-to-miss switch \u2014 and an entirely modern risk that has nothing to do with fire or theft at all.",
      "The common thread: none of these five require a large company or a finance team to think about. They require sitting down, once, and asking an honest question: not \u201Cwhat could damage my shop,\u201D but \u201Cwhat would actually happen to my business, my family, and my finances in the weeks after it did.\u201D Most small business owners have never been asked that question in a way that didn\u2019t immediately try to sell them something. That\u2019s usually where the real risk was hiding all along.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex-1 py-20 bg-background text-center">
          <h1 className="text-2xl font-bold text-primary">Post not found</h1>
          <Link href="/blogs" className="mt-4 inline-block text-secondary">
            &larr; Back to blogs
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-20 bg-background">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>

          <div className="flex items-center gap-2 text-sm text-primary/40 mb-3">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            {post.title}
          </h1>

          <div className="mt-8 space-y-5">
            {post.content.map((p, i) => (
              <p key={i} className="text-primary/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-primary/10">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <footer className="py-8 text-center text-sm text-primary/40 border-t border-primary/10">
        &copy; {new Date().getFullYear()} IndiAssure. All rights reserved.
      </footer>
    </>
  );
}
