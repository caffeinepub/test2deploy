import { CheckCircle, Mail, Star } from "lucide-react";

const services = [
  {
    title: "Bug Buster Sprint",
    price: "€349",
    period: "one-time",
    description:
      "Catch critical bugs before your users do. A rapid 3–5 day testing sprint to identify and prioritize issues that could break your product at launch.",
    features: [
      "Up to 20 hours of manual testing",
      "Detailed bug report with severity ratings",
      "Regression testing checklist",
      "1 round of re-testing after fixes",
    ],
    featured: false,
    cta: "Get Started",
    ctaLabel:
      "Get started with Bug Buster Sprint — email pankaj.kumar@test2deploy.eu",
  },
  {
    title: "MVP Quality Sprint",
    price: "€1,500",
    period: "one-time",
    description:
      "Launch your MVP with complete confidence. A 2-week deep-dive QA engagement that validates every critical user journey and delivers a clear Go/No-Go release decision.",
    features: [
      "Up to 60 hours of comprehensive testing",
      "Functional, UI/UX & performance testing",
      "Test plan & test case documentation",
      "2 rounds of re-testing after fixes",
      "Launch readiness report",
    ],
    featured: true,
    cta: "Most Popular – Book Now",
    ctaLabel: "Book the MVP Quality Sprint — email pankaj.kumar@test2deploy.eu",
  },
  {
    title: "Ongoing QA Support",
    price: "Custom",
    period: "monthly",
    description:
      "Never worry about release quality again. Flexible monthly QA partnership that scales with your team — from sprint support to full regression cycles.",
    features: [
      "Dedicated QA resource (part or full-time)",
      "Sprint-based testing cycles",
      "Regression & smoke testing",
      "Weekly quality reports",
    ],
    featured: false,
    cta: "Let's Talk",
    ctaLabel:
      "Enquire about Ongoing QA Support — email pankaj.kumar@test2deploy.eu",
  },
  {
    title: "Advanced QA Services",
    price: "Custom",
    period: "project",
    description:
      "Level up your testing maturity. From test automation frameworks to performance testing — specialized QA for products that need to scale reliably.",
    features: [
      "API & integration testing",
      "Performance & load testing",
      "Security testing basics",
      "Test automation setup",
    ],
    featured: false,
    cta: "Get a Quote",
    ctaLabel:
      "Get a quote for Advanced QA Services — email pankaj.kumar@test2deploy.eu",
  },
];

export default function CoreServicesSection() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Core Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight">
            Productized QA Packages
          </h2>
          <p className="mt-4 text-finland-blue/70 max-w-2xl mx-auto text-lg">
            Clear pricing, defined scope, and fast delivery — no surprises.
          </p>
        </div>

        {/* Cards */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none"
          data-ocid="services.list"
        >
          {services.map((service, index) => (
            <li
              key={service.title}
              data-ocid={`services.item.${index + 1}`}
              className={`relative rounded-2xl p-6 flex flex-col border card-hover ${
                service.featured
                  ? "bg-finland-blue text-white border-finland-blue shadow-finland-lg"
                  : "bg-white text-gray-800 border-finland-blue-mid shadow-card"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-white text-finland-blue text-xs font-bold px-3 py-1 rounded-full shadow-finland">
                    <Star
                      aria-hidden="true"
                      className="w-3 h-3 fill-finland-blue"
                    />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3
                  className={`font-heading text-xl font-bold mb-1 ${
                    service.featured ? "text-white" : "text-finland-blue"
                  }`}
                >
                  {service.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-3xl font-bold font-heading ${
                      service.featured ? "text-white" : "text-finland-blue"
                    }`}
                  >
                    {service.price}
                  </span>
                  <span
                    className={`text-sm ${
                      service.featured ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    /{service.period}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    service.featured ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2 mb-6 flex-1 list-none">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle
                      aria-hidden="true"
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        service.featured
                          ? "text-finland-blue-mid"
                          : "text-finland-blue"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        service.featured ? "text-white/85" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:pankaj.kumar@test2deploy.eu"
                aria-label={service.ctaLabel}
                data-ocid={`services.cta.button.${index + 1}`}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  service.featured
                    ? "bg-white text-finland-blue hover:bg-finland-blue-light shadow-finland"
                    : "bg-finland-blue text-white hover:bg-finland-blue-dark shadow-finland"
                }`}
              >
                <Mail aria-hidden="true" className="w-4 h-4" />
                {service.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
