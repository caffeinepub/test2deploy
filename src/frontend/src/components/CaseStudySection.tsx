import { CheckCircle, Tag } from "lucide-react";

const caseStudies = [
  {
    label: "Case Study #1",
    title: "SaaS Startup Pre-Launch",
    tag: "Automation Testing",
    challenge:
      "Frequent critical bugs were discovered post-release, damaging user trust and requiring costly hotfixes.",
    solution:
      "Introduced systematic automated regression testing and a structured QA process integrated into the CI/CD pipeline.",
    results: [
      "60% reduction in production bugs",
      "3x faster release cycles",
      "Zero critical issues at next launch",
    ],
  },
  {
    label: "Case Study #2",
    title: "FinTech Platform Compliance Testing",
    tag: "Manual + API Testing",
    challenge:
      "Preparing for a regulated product launch with strict compliance requirements and zero tolerance for errors.",
    solution:
      "Comprehensive functional, security basics, and API testing across all critical financial flows and edge cases.",
    results: [
      "47 critical issues found before launch",
      "100% compliance test coverage",
      "Successful launch, zero post-launch incidents",
    ],
  },
];

export default function CaseStudySection() {
  return (
    <section
      id="case-studies"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f0f5ff" }}
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Proven Results
          </span>
          <h2
            id="case-studies-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight"
          >
            Real Results
          </h2>
          <p className="mt-4 text-finland-blue/70 max-w-2xl mx-auto text-lg">
            See how we've helped teams ship with confidence.
          </p>
        </div>

        {/* Case study cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none"
          data-ocid="case-studies.list"
        >
          {caseStudies.map((cs, index) => (
            <li
              key={cs.title}
              data-ocid={`case-studies.item.${index + 1}`}
              className="bg-white rounded-2xl border border-finland-blue-mid shadow-card overflow-hidden card-hover"
            >
              {/* Card header */}
              <div className="px-7 pt-7 pb-5 border-b border-finland-blue-mid">
                <span className="text-xs font-semibold text-finland-blue/60 uppercase tracking-widest mb-2 block">
                  {cs.label}
                </span>
                <h3 className="font-heading text-xl font-bold text-finland-blue mb-3">
                  {cs.title}
                </h3>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: "#e8f0fa",
                    color: "#003580",
                    borderColor: "#c5d8f5",
                  }}
                >
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  {cs.tag}
                </span>
              </div>

              {/* Card body */}
              <div className="px-7 py-6 space-y-5">
                {/* Challenge */}
                <div>
                  <h4 className="text-xs font-bold text-finland-blue/60 uppercase tracking-widest mb-1.5">
                    Challenge
                  </h4>
                  <p className="text-finland-blue/75 text-sm leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xs font-bold text-finland-blue/60 uppercase tracking-widest mb-1.5">
                    Solution
                  </h4>
                  <p className="text-finland-blue/75 text-sm leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-xs font-bold text-finland-blue/60 uppercase tracking-widest mb-2">
                    Results
                  </h4>
                  <ul className="space-y-2 list-none">
                    {cs.results.map((result) => (
                      <li key={result} className="flex items-start gap-2">
                        <CheckCircle
                          className="w-4 h-4 text-finland-blue mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium text-finland-blue">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
