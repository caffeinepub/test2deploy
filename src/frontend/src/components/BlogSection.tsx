import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    tag: "Strategy",
    title: "Why Startups Need QA From Day One",
    excerpt:
      "The cost of fixing a bug multiplies tenfold after launch. Startups that integrate QA early reduce hotfix cycles, protect user trust, and build a foundation for reliable scaling.",
    readTime: "5 min",
    emailSubject: "Blog: Why Startups Need QA From Day One",
  },
  {
    tag: "Testing",
    title: "Manual vs Automation Testing: When to Use Which",
    excerpt:
      "Automation is powerful but not always the right tool. Understanding when manual exploratory testing outperforms scripts is key to a balanced, effective QA strategy.",
    readTime: "7 min",
    emailSubject: "Blog: Manual vs Automation Testing",
  },
  {
    tag: "Best Practices",
    title: "5 Common Software Testing Mistakes Startups Make",
    excerpt:
      "From skipping regression testing to testing too late in the cycle — these five QA pitfalls are the most common reasons startups face embarrassing post-launch bugs.",
    readTime: "4 min",
    emailSubject: "Blog: 5 Common Software Testing Mistakes Startups Make",
  },
  {
    tag: "DevOps",
    title: "CI/CD Testing Strategies for Growing Teams",
    excerpt:
      "Integrating QA into your CI/CD pipeline doesn't have to be complex. Learn how to set up automated gates that catch issues before they ever reach production.",
    readTime: "6 min",
    emailSubject: "Blog: CI/CD Testing Strategies for Growing Teams",
  },
];

const tagColors: Record<string, { bg: string; text: string; border: string }> =
  {
    Strategy: { bg: "#e8f0fa", text: "#003580", border: "#c5d8f5" },
    Testing: { bg: "#e8f0fa", text: "#003580", border: "#c5d8f5" },
    "Best Practices": { bg: "#e8f0fa", text: "#003580", border: "#c5d8f5" },
    DevOps: { bg: "#e8f0fa", text: "#003580", border: "#c5d8f5" },
  };

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#ffffff" }}
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Insights &amp; Resources
          </span>
          <h2
            id="blog-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight"
          >
            QA Insights &amp; Resources
          </h2>
          <p className="mt-4 text-finland-blue/70 max-w-2xl mx-auto text-lg">
            Practical advice to help your team ship better software.
          </p>
        </div>

        {/* Article cards grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none mb-10"
          data-ocid="blog.list"
        >
          {articles.map((article, index) => {
            const colors = tagColors[article.tag] ?? tagColors.Strategy;
            return (
              <li
                key={article.title}
                data-ocid={`blog.item.${index + 1}`}
                className="bg-white rounded-2xl border border-finland-blue-mid shadow-card card-hover overflow-hidden flex flex-col"
              >
                <div className="p-6 flex flex-col gap-3 flex-1">
                  {/* Tag + Read time */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold border"
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text,
                        borderColor: colors.border,
                      }}
                    >
                      {article.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-finland-blue/50">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {article.readTime} read
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-finland-blue leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-finland-blue/65 text-sm leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  <a
                    href={`mailto:pankaj.kumar@test2deploy.eu?subject=${encodeURIComponent(article.emailSubject)}`}
                    aria-label={`Read article: ${article.title} — email for full content`}
                    data-ocid={`blog.read_more.button.${index + 1}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-finland-blue hover:text-finland-blue-dark transition-colors mt-2"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Coming soon notice */}
        <div className="text-center">
          <p className="text-finland-blue/55 text-sm italic">
            More articles coming soon — subscribe for updates via{" "}
            <a
              href="mailto:pankaj.kumar@test2deploy.eu?subject=Subscribe to Test2Deploy Blog"
              className="text-finland-blue font-semibold hover:underline"
              aria-label="Subscribe for blog updates via email"
            >
              email
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
