import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Fixed, transparent pricing — no hidden fees. The Bug Buster Sprint starts from €349 for rapid testing within 3–5 days. The MVP Quality Sprint is a fixed €1,500 for a full 2-week pre-launch engagement. Ongoing QA Support plans start from 10 hours/month and scale to 20 or 40 hours as your team grows.",
  },
  {
    question: "How fast can you start?",
    answer:
      "Usually within 1–3 business days. After a quick consultation to understand your product, timeline, and priorities, we put together a clear scope and kick off testing — no lengthy onboarding or paperwork required.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "No. Test2Deploy works on a sprint or monthly basis. Use QA when you need it, pause when you don't. There are no minimum commitments or cancellation penalties — you stay in full control.",
  },
  {
    question: "What do I get at the end of a sprint?",
    answer:
      "A prioritised bug report with reproducible steps and screenshots, a risk assessment of the most critical issues, and clear Go/No-Go release guidance. You'll know exactly what's safe to ship, what needs fixing first, and where hidden risks exist — so you can deploy with confidence.",
  },
  {
    question: "Do you work with companies outside Finland?",
    answer:
      "Yes. Test2Deploy works with startups and product teams globally. Engagements are fully remote, and we're experienced working across time zones with international teams.",
  },
  {
    question: "My team already does some testing — do I still need this?",
    answer:
      "Independent QA consistently catches issues that developers miss — it's not a reflection on your team, it's simply how testing works. A fresh pair of eyes before a release adds a critical layer of validation, especially for edge cases, real-world user flows, and cross-device scenarios.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      data-ocid="faq.section"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#f0f5ff" }}
      aria-labelledby="faq-heading"
    >
      {/* Subtle background cross pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003580' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-finland-blue-light text-finland-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            Common Questions
          </div>
          <h2
            id="faq-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know before getting started. Can't find your
            answer?{" "}
            <button
              type="button"
              className="text-finland-blue font-semibold underline underline-offset-2 hover:text-finland-blue-dark transition-colors"
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Just ask us.
            </button>
          </p>
        </div>

        {/* Accordion */}
        <div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <AccordionItem
                  value={`item-${index + 1}`}
                  data-ocid={`faq.item.${index + 1}`}
                  className="bg-white border border-finland-blue-mid rounded-xl overflow-hidden shadow-card hover:shadow-finland transition-shadow duration-200 data-[state=open]:shadow-finland data-[state=open]:border-finland-blue"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-heading font-semibold text-gray-900 text-base sm:text-lg hover:text-finland-blue hover:no-underline group transition-colors duration-200 [&>svg]:text-finland-blue [&>svg]:shrink-0">
                    <span className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-finland-blue-light text-finland-blue text-xs font-bold shrink-0 mt-0.5 group-hover:bg-finland-blue group-hover:text-white transition-colors duration-200"
                      >
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0">
                    <div className="pl-10 text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        {/* Bottom nudge */}
        <div className="mt-10 text-center relative z-10">
          <div
            className="inline-block rounded-2xl px-8 py-5 shadow-card"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #c5d8f5",
            }}
          >
            <p className="text-base font-semibold" style={{ color: "#003580" }}>
              Still unsure?{" "}
              <a
                href="mailto:pankaj.kumar@test2deploy.eu"
                className="font-bold underline underline-offset-2 transition-colors"
                style={{ color: "#003580" }}
                aria-label="Email us at pankaj.kumar@test2deploy.eu"
                data-ocid="faq.email.link"
              >
                Drop us an email
              </a>{" "}
              or{" "}
              <a
                href="tel:+358417280893"
                className="font-bold underline underline-offset-2 transition-colors"
                style={{ color: "#003580" }}
                aria-label="Call us at +358 41 728 0893"
                data-ocid="faq.phone.link"
              >
                give us a call
              </a>{" "}
              <span style={{ color: "#003580" }}>
                — we&apos;re happy to chat.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
