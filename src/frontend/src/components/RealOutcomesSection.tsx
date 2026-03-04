import { CheckCircle } from "lucide-react";

const outcomes = [
  "Fewer post-launch bugs reaching your users",
  "Faster release cycles with confidence",
  "Reduced developer time spent on bug fixes",
  "Improved user satisfaction and retention",
  "A documented QA process you can scale",
];

export default function RealOutcomesSection() {
  return (
    <section
      id="outcomes"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Heading */}
          <div>
            <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Real Outcomes
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight mb-6">
              What You Get After Working With Us
            </h2>
            <p className="text-finland-blue/70 text-lg leading-relaxed">
              Our clients don't just get a bug report — they get a quality
              foundation that supports faster, safer shipping for the long term.
            </p>
          </div>

          {/* Right: Checklist card */}
          <div className="bg-finland-blue rounded-2xl p-8 shadow-finland-lg">
            <h3 className="font-heading text-xl font-bold text-white mb-6">
              Post-Engagement Outcomes
            </h3>
            <ul className="space-y-4 list-none">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle
                    aria-hidden="true"
                    className="w-5 h-5 text-finland-blue-mid flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white/90 text-base leading-relaxed">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
