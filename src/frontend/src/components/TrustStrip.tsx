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
    <section
      className="py-5"
      style={{
        backgroundColor: "#003580",
        borderTop: "1px solid #002060",
        borderBottom: "1px solid #002060",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 flex-wrap">
          <span className="text-white/80 text-sm font-medium whitespace-nowrap">
            Trusted across industries:
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 list-none">
            {industries.map((industry) => (
              <li key={industry} className="flex items-center gap-2">
                <CheckCircle
                  aria-hidden="true"
                  className="w-4 h-4 text-finland-blue-mid flex-shrink-0"
                />
                <span className="text-white text-sm font-semibold">
                  {industry}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
