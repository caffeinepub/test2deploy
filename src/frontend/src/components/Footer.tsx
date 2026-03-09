import { ExternalLink, Heart, Mail, MapPin, Phone } from "lucide-react";

const services = [
  { label: "Automation Testing", href: "#services" },
  { label: "Manual Testing", href: "#services" },
  { label: "Performance Testing", href: "#services" },
  { label: "API Testing", href: "#services" },
  { label: "Ongoing QA Support", href: "#services" },
];

const company = [
  { label: "About / Founder", href: "#founder" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "test2deploy",
  );

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#003580", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div>
            <div className="mb-4">
              <div
                className="inline-block rounded-lg p-1.5"
                style={{ backgroundColor: "#ffffff" }}
              >
                <img
                  src="/assets/uploads/Company-Logo-2-1.jpg"
                  alt="Test2Deploy logo"
                  className="h-10 w-auto object-contain rounded"
                  style={{ maxWidth: "150px" }}
                />
              </div>
            </div>
            <p className="text-white/70 italic text-sm mb-2">
              Deploy with confidence – every time
            </p>
            <div className="flex items-center gap-1.5 text-white/60 text-sm mb-5">
              <MapPin
                className="w-3.5 h-3.5 text-finland-blue-mid flex-shrink-0"
                aria-hidden="true"
              />
              Helsinki, Finland
            </div>
            <div className="space-y-2">
              <a
                href="mailto:pankaj.kumar@test2deploy.eu"
                aria-label="Email us at pankaj.kumar@test2deploy.eu"
                data-ocid="footer.email.link"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail
                  className="w-4 h-4 text-finland-blue-mid"
                  aria-hidden="true"
                />
                pankaj.kumar@test2deploy.eu
              </a>
              <a
                href="tel:+358417280893"
                aria-label="Call us at +358 417 280 893"
                data-ocid="footer.phone.link"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone
                  className="w-4 h-4 text-finland-blue-mid"
                  aria-hidden="true"
                />
                +358-417280893
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Services
            </h4>
            <nav aria-label="Footer services navigation">
              <ul className="space-y-2 list-none">
                {services.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/70 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Company
            </h4>
            <nav aria-label="Footer company navigation">
              <ul className="space-y-2 list-none">
                {company.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/70 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 4 — Connect */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Connect
            </h4>
            <ul className="space-y-3 list-none">
              <li>
                <a
                  href="https://www.linkedin.com/in/pankaj-kumar-6604226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn (opens in new tab)"
                  data-ocid="footer.linkedin.link"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-finland-blue-mid flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                  <ExternalLink
                    className="w-3 h-3 opacity-60"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:pankaj.kumar@test2deploy.eu"
                  aria-label="Send email to pankaj.kumar@test2deploy.eu"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Mail
                    className="w-4 h-4 text-finland-blue-mid"
                    aria-hidden="true"
                  />
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="tel:+358417280893"
                  aria-label="Call +358 417 280 893"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Phone
                    className="w-4 h-4 text-finland-blue-mid"
                    aria-hidden="true"
                  />
                  Call Us
                </a>
              </li>
              <li className="pt-2 border-t border-white/15">
                <button
                  type="button"
                  className="text-white/60 hover:text-white/80 transition-colors text-xs"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white/60 hover:text-white/80 transition-colors text-xs"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & bottom bar */}
        <div className="border-t border-white/15 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {year} Test2Deploy. All rights reserved. · Helsinki, Finland
          </p>
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Built with love using caffeine.ai (opens in new tab)"
            className="flex items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors text-sm"
          >
            Built with{" "}
            <Heart
              aria-hidden="true"
              className="w-3.5 h-3.5 text-finland-blue-mid fill-finland-blue-mid"
            />{" "}
            using
            <span className="font-semibold text-white/80">caffeine.ai</span>
            <ExternalLink aria-hidden="true" className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
