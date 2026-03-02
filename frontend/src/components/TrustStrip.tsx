import { CheckCircle } from "lucide-react";

const industries = [
  "Fintech",
  "SaaS",
  "Marketplaces",
  "Mobile apps",
  "B2B platforms",
];

export default function TrustStrip() {
  return (
    <section className="bg-finland-blue py-5 border-y border-finland-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap">
          <span className="text-white/80 text-sm font-medium whitespace-nowrap">
            Trusted across industries:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-finland-blue-mid flex-shrink-0" />
                <span className="text-white text-sm font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
