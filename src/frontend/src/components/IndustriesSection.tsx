import {
  BarChart3,
  Building2,
  Globe,
  Laptop,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

const industries = [
  {
    icon: Laptop,
    title: "SaaS Startups",
    description:
      "Rapid iteration demands continuous quality. We help you ship new features without introducing regressions.",
  },
  {
    icon: BarChart3,
    title: "FinTech Platforms",
    description:
      "Compliance and reliability are non-negotiable. We provide thorough validation of financial flows and edge cases.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Products",
    description:
      "Every bug costs revenue and customer trust. We test checkout flows, integrations, and performance under load.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Cross-platform testing for every device. We validate functionality across browsers, screen sizes, and OS versions.",
  },
  {
    icon: Building2,
    title: "Enterprise SaaS",
    description:
      "Complex integrations require thorough validation. We work across multi-tenant systems and API-heavy architectures.",
  },
  {
    icon: Globe,
    title: "B2B Platforms",
    description:
      "Your clients depend on your platform's reliability. We help you meet enterprise-grade quality expectations.",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#ffffff" }}
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Industry Focus
          </span>
          <h2
            id="industries-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight"
          >
            Industries We Support
          </h2>
          <p className="mt-4 text-finland-blue/70 max-w-2xl mx-auto text-lg">
            We understand the unique quality challenges in your domain — from
            compliance to conversion.
          </p>
        </div>

        {/* Cards grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none"
          data-ocid="industries.list"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <li
                key={industry.title}
                data-ocid={`industries.item.${index + 1}`}
                className="bg-white rounded-2xl p-6 border border-finland-blue-mid shadow-card card-hover"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#e8f0fa" }}
                  aria-hidden="true"
                >
                  <Icon
                    className="w-6 h-6 text-finland-blue"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-heading text-lg font-bold text-finland-blue mb-2">
                  {industry.title}
                </h3>
                <p className="text-finland-blue/65 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
