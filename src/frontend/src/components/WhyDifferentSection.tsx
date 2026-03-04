import { Clock, Shield, Target, TrendingUp, Zap } from "lucide-react";

const differentiators = [
  {
    number: "01",
    icon: Zap,
    title: "Speed Without Compromise",
    description:
      "We deliver thorough QA results in days, not weeks. Our streamlined process means you get quality fast.",
  },
  {
    number: "02",
    icon: Target,
    title: "Startup-Focused Mindset",
    description:
      "We understand the pressure of shipping. Our QA adapts to your pace, not the other way around.",
  },
  {
    number: "03",
    icon: Shield,
    title: "No Long-Term Commitment",
    description:
      "Engage us for a single sprint or ongoing support. No contracts, no lock-in — just results.",
  },
  {
    number: "04",
    icon: Clock,
    title: "Async-First Communication",
    description:
      "We work across time zones with clear documentation and async updates so nothing blocks your team.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Business-Aware Testing",
    description:
      "We test what matters most to your users and business, prioritizing critical paths and revenue flows.",
  },
];

export default function WhyDifferentSection() {
  return (
    <section
      id="why-different"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f0f5ff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight">
            Why Test2Deploy is Different
          </h2>
          <p className="mt-4 text-finland-blue/70 max-w-2xl mx-auto text-lg">
            We're not just testers — we're quality partners who care about your
            launch success.
          </p>
        </div>

        {/* Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.number}
                className="relative bg-white rounded-2xl p-6 border border-finland-blue-mid shadow-card card-hover overflow-hidden"
              >
                {/* Background number — decorative */}
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-4 text-6xl font-bold font-heading text-finland-blue/8 select-none leading-none"
                >
                  {item.number}
                </span>

                <div
                  aria-hidden="true"
                  className="w-12 h-12 rounded-xl bg-finland-blue-light flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-finland-blue" />
                </div>

                <h3 className="font-heading text-lg font-bold text-finland-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-finland-blue/65 text-sm leading-relaxed">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
