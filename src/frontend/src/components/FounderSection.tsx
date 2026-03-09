import { ExternalLink, MapPin } from "lucide-react";

const trustBadges = [
  "MBA Graduate",
  "20+ Years in QA/Testing",
  "10+ Years in Project Management",
  "Global Experience",
  "Finland-Based",
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#ffffff" }}
      aria-labelledby="founder-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-finland-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Meet the Founder
          </span>
          <h2
            id="founder-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-finland-blue leading-tight"
          >
            The Person Behind Test2Deploy
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Initials avatar + badges */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            {/* Initials avatar */}
            <div className="relative">
              <div
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full flex items-center justify-center shadow-finland-lg border-4"
                style={{ borderColor: "#003580", backgroundColor: "#003580" }}
              >
                <span
                  className="text-white font-bold"
                  style={{ fontSize: "4rem", lineHeight: 1 }}
                  aria-label="Pankaj Kumar initials"
                >
                  PK
                </span>
              </div>
              {/* Finland flag accent dot */}
              <div
                className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-card border-2 border-white"
                style={{ backgroundColor: "#e8f0fa" }}
                aria-hidden="true"
              >
                <MapPin
                  className="w-5 h-5 text-finland-blue"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Trust badges */}
            <ul className="flex flex-wrap gap-2 justify-center lg:justify-start list-none">
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border"
                  style={{
                    backgroundColor: "#e8f0fa",
                    color: "#003580",
                    borderColor: "#c5d8f5",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#003580" }}
                  />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Bio content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-finland-blue mb-1">
                Pankaj Kumar
              </h3>
              <p className="text-finland-blue/70 font-medium text-base mb-4">
                QA Consultant &amp; Founder, Test2Deploy
              </p>
              <div className="flex items-center gap-2 text-sm text-finland-blue/60 mb-6">
                <MapPin
                  className="w-4 h-4 text-finland-blue"
                  aria-hidden="true"
                />
                Helsinki, Finland
              </div>
            </div>

            <div className="space-y-4 text-finland-blue/75 leading-relaxed">
              <p>
                With an{" "}
                <strong className="text-finland-blue font-semibold">
                  MBA background
                </strong>
                , over{" "}
                <strong className="text-finland-blue font-semibold">
                  20 years of QA &amp; Testing experience
                </strong>
                , and{" "}
                <strong className="text-finland-blue font-semibold">
                  10 years in Project Management
                </strong>
                , Pankaj has worked with engineering teams across{" "}
                <strong className="text-finland-blue font-semibold">
                  Europe, Asia, and the Americas
                </strong>{" "}
                — helping products go live with confidence.
              </p>
              <p>
                His deep expertise spans manual testing, automation frameworks
                (Playwright, Selenium, Cypress), API testing, performance
                testing, and end-to-end project delivery — with a particular
                focus on helping{" "}
                <strong className="text-finland-blue font-semibold">
                  startups and fast-moving product teams
                </strong>{" "}
                establish QA practices that scale with their growth.
              </p>
            </div>

            {/* Mission quote */}
            <blockquote
              className="border-l-4 pl-5 py-1 italic text-finland-blue/80 leading-relaxed"
              style={{ borderColor: "#003580" }}
            >
              "Test2Deploy was founded to help startups ship reliable software
              without building large in-house QA teams. I believe every product
              — no matter the size of the team — deserves quality assurance that
              is fast, affordable, and actionable."
            </blockquote>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/pankaj-kumar-6604226/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Pankaj Kumar on LinkedIn (opens in new tab)"
              data-ocid="founder.linkedin.link"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-card hover:shadow-finland"
              style={{
                backgroundColor: "#003580",
                color: "#ffffff",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
