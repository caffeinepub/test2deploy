import { Search, FileText, Bug, CheckCircle, Mail } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery Call",
    description:
      "We learn about your product, tech stack, and launch goals in a free 15-minute call.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Test Plan",
    description:
      "We create a focused test plan covering your critical user flows and business requirements.",
  },
  {
    number: "03",
    icon: Bug,
    title: "Testing Sprint",
    description:
      "Our QA team executes the plan, documenting every bug with clear reproduction steps.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Report & Re-test",
    description:
      "You receive a detailed report. After fixes, we re-test to confirm everything is resolved.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-light-blue py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A simple, transparent process designed to get you results fast.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-finland-blue-mid z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full bg-finland-blue flex items-center justify-center shadow-finland">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-finland-blue text-finland-blue text-xs font-bold flex items-center justify-center font-heading">
                      {step.number.replace("0", "")}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-finland-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="mailto:pankaj.kumar@test2deploy.eu"
            className="inline-flex items-center gap-2 bg-finland-blue text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-finland-blue-dark transition-colors duration-200 shadow-finland"
          >
            <Mail className="w-5 h-5" />
            Start Your QA Sprint
          </a>
        </div>
      </div>
    </section>
  );
}
