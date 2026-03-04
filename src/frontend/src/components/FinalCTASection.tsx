import { Clock, Mail, Shield, Star, Users } from "lucide-react";
import { useState } from "react";
import ContactMethodModal from "./ContactMethodModal";

const trustPills = [
  { icon: Shield, label: "No contracts required" },
  { icon: Clock, label: "Results in days" },
  { icon: Star, label: "Startup-friendly pricing" },
  { icon: Users, label: "Trusted by 50+ teams" },
];

export default function FinalCTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#003580" }}
    >
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
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 text-white"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.30)",
          }}
        >
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

        <p
          className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-white"
          style={{ opacity: 0.85 }}
        >
          Book a free 15-minute launch readiness call. We'll review your
          product, identify the biggest quality risks, and recommend the right
          QA approach — no strings attached.
        </p>

        {/* CTA Button — opens contact method chooser */}
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          aria-label="Book your free 15-minute launch readiness call — choose contact method"
          data-ocid="final_cta.book_call.button"
          className="inline-flex items-center gap-3 bg-white text-finland-blue px-10 py-5 rounded-xl text-lg font-bold hover:bg-finland-blue-light transition-all duration-200 shadow-finland-lg mb-4"
        >
          <Mail aria-hidden="true" className="w-6 h-6" />
          Book Your Free 15-Minute Launch Readiness Call
        </button>

        <p className="text-sm mb-10 text-white" style={{ opacity: 0.7 }}>
          Or email us directly at{" "}
          <a
            href="mailto:pankaj.kumar@test2deploy.eu"
            aria-label="Email pankaj.kumar@test2deploy.eu"
            className="underline text-white hover:opacity-100 transition-opacity"
            style={{ opacity: 0.85 }}
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
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <Icon aria-hidden="true" className="w-4 h-4 text-white" />
                {pill.label}
              </li>
            );
          })}
        </ul>
      </div>

      <ContactMethodModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
