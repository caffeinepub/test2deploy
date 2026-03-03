import { Clock, Mail, Shield, Star, Users } from "lucide-react";

const trustPills = [
  { icon: Shield, label: "No contracts required" },
  { icon: Clock, label: "Results in days" },
  { icon: Star, label: "Startup-friendly pricing" },
  { icon: Users, label: "Trusted by 50+ teams" },
];

export default function FinalCTASection() {
  return (
    <section className="section-finland-blue py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle cross pattern inspired by Finnish flag — decorative */}
      <div aria-hidden="true" className="absolute inset-0 opacity-5">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white" />
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white" />
      </div>

      {/* Glow effect — decorative */}
      <div
        aria-hidden="true"
        className="absolute inset-0 glow-finland opacity-30 pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span
            aria-hidden="true"
            role="presentation"
            className="w-2 h-2 rounded-full bg-white animate-pulse"
          />
          Free 15-Minute Call — No Commitment
        </div>

        {/* Headline */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Ready to Ship With Confidence?
        </h2>

        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a free 15-minute launch readiness call. We'll review your
          product, identify the biggest quality risks, and recommend the right
          QA approach — no strings attached.
        </p>

        {/* CTA Button — opens mailto to pankaj.kumar@test2deploy.eu */}
        <a
          href="mailto:pankaj.kumar@test2deploy.eu"
          aria-label="Book your free 15-minute launch readiness call — email pankaj.kumar@test2deploy.eu"
          data-ocid="final_cta.book_call.button"
          className="inline-flex items-center gap-3 bg-white text-finland-blue px-10 py-5 rounded-xl text-lg font-bold hover:bg-finland-blue-light transition-all duration-200 shadow-finland-lg hover:shadow-finland-glow mb-4"
        >
          <Mail aria-hidden="true" className="w-6 h-6" />
          Book Your Free 15-Minute Launch Readiness Call
        </a>

        <p className="text-white/60 text-sm mb-10">
          Or email us directly at{" "}
          <a
            href="mailto:pankaj.kumar@test2deploy.eu"
            aria-label="Email pankaj.kumar@test2deploy.eu"
            className="text-white/80 underline hover:text-white transition-colors"
          >
            pankaj.kumar@test2deploy.eu
          </a>
        </p>

        {/* Trust pills */}
        <ul className="flex flex-wrap items-center justify-center gap-3 list-none">
          {trustPills.map((pill) => {
            const Icon = pill.icon;
            return (
              <li
                key={pill.label}
                className="flex items-center gap-2 bg-white/15 border border-white/25 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                <Icon
                  aria-hidden="true"
                  className="w-4 h-4 text-finland-blue-mid"
                />
                {pill.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
