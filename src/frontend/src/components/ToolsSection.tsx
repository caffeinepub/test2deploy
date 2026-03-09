import { Code2, GitBranch, Network, Zap } from "lucide-react";

const toolCategories = [
  {
    icon: Code2,
    title: "Automation",
    tools: ["Selenium", "Playwright", "Cypress"],
    ocid: "tools.automation.card",
  },
  {
    icon: Network,
    title: "API Testing",
    tools: ["Postman", "RestAssured"],
    ocid: "tools.api.card",
  },
  {
    icon: Zap,
    title: "Performance",
    tools: ["JMeter", "k6"],
    ocid: "tools.performance.card",
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    tools: ["GitHub Actions", "Jenkins"],
    ocid: "tools.cicd.card",
  },
];

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f0f5ff" }}
      aria-labelledby="tools-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Technical Expertise
          </span>
          <h2
            id="tools-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight"
          >
            Tools &amp; Technologies We Use
          </h2>
          <p className="mt-4 text-finland-blue/70 max-w-2xl mx-auto text-lg">
            Industry-standard tools for every testing need — chosen for
            reliability, scalability, and developer-friendliness.
          </p>
        </div>

        {/* Cards grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none"
          data-ocid="tools.list"
        >
          {toolCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <li
                key={category.title}
                data-ocid={`tools.item.${index + 1}`}
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

                {/* Category title */}
                <h3 className="font-heading text-lg font-bold text-finland-blue mb-4">
                  {category.title}
                </h3>

                {/* Tools list */}
                <ul className="space-y-2 list-none">
                  {category.tools.map((tool) => (
                    <li
                      key={tool}
                      className="inline-flex items-center gap-1.5 mr-2 mb-2 px-3 py-1 rounded-full text-xs font-semibold border"
                      style={{
                        backgroundColor: "#f0f5ff",
                        color: "#003580",
                        borderColor: "#c5d8f5",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#003580" }}
                      />
                      {tool}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
