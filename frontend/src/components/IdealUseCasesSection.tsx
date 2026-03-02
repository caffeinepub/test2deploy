import { ShoppingCart, CreditCard, Smartphone, Globe, Users, Layers } from "lucide-react";
import { CheckCircle } from "lucide-react";

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce Launches",
    description: "Checkout flows, cart logic, and payment integrations tested before go-live.",
  },
  {
    icon: CreditCard,
    title: "Fintech Products",
    description: "Transaction accuracy, security flows, and compliance-critical paths verified.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-device testing for iOS and Android to ensure consistent UX.",
  },
  {
    icon: Globe,
    title: "SaaS Platforms",
    description: "Multi-tenant logic, subscription flows, and API integrations validated.",
  },
  {
    icon: Users,
    title: "Marketplace Products",
    description: "Buyer/seller flows, search, and listing logic tested end-to-end.",
  },
  {
    icon: Layers,
    title: "API-First Products",
    description: "REST and GraphQL API testing with contract validation and edge cases.",
  },
];

const benefits = [
  "Avoid the cost of a full-time QA hire",
  "Get expert QA without the onboarding overhead",
  "Scale testing up or down as needed",
  "Focus your dev team on building, not fixing",
];

export default function IdealUseCasesSection() {
  return (
    <section id="use-cases" className="section-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Use Cases
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight">
            Ideal Use Cases
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We've helped teams across these scenarios ship with confidence.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="bg-white rounded-2xl p-6 border border-finland-blue-mid shadow-card card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-finland-blue-light flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-finland-blue" />
                </div>
                <h3 className="font-heading text-lg font-bold text-finland-blue mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Info panel */}
        <div className="bg-finland-blue-light border border-finland-blue-mid rounded-2xl p-8">
          <h3 className="font-heading text-xl font-bold text-finland-blue mb-2">
            Why Not Hiring QA Yet Is Okay
          </h3>
          <p className="text-gray-600 mb-6">
            Many fast-moving teams can't justify a full-time QA hire. That's exactly why
            Test2Deploy exists — to give you enterprise-grade quality without the overhead.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-finland-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
