import { Rocket, Building2, Users, Clock } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Startup Founders",
    description:
      "Launching your MVP and need confidence it works? We test fast so you can ship faster.",
  },
  {
    icon: Building2,
    title: "Dev Agencies",
    description:
      "Deliver higher-quality projects to clients without expanding your internal team.",
  },
  {
    icon: Users,
    title: "Product Teams",
    description:
      "Augment your existing QA capacity during sprints, releases, or high-demand periods.",
  },
  {
    icon: Clock,
    title: "Deadline Teams",
    description:
      "Facing a hard launch date? We integrate quickly and help you hit it without cutting corners.",
  },
];

export default function WhoWeHelpSection() {
  return (
    <section id="who-we-help" className="section-light-blue py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Help
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight">
            Built for Teams That Move Fast
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you're a solo founder or a growing product team, Test2Deploy
            fits into your workflow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.title}
                className="bg-white rounded-2xl p-6 border border-finland-blue-mid shadow-card card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-finland-blue-light flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-finland-blue" />
                </div>
                <h3 className="font-heading text-lg font-bold text-finland-blue mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
