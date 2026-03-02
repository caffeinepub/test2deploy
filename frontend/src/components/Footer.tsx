import { Mail, Phone, ExternalLink } from "lucide-react";
import { Heart } from "lucide-react";

const navLinks = [
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-different" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "test2deploy"
  );

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-finland-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            {/* White background pill to make the logo visible on dark footer */}
            <div className="inline-block bg-white rounded-lg px-3 py-2 mb-4">
              <img
                src="/assets/Company Logo.jpg"
                alt="Test2Deploy logo"
                className="h-9 w-auto object-contain"
                style={{ maxWidth: "160px" }}
              />
            </div>
            <p className="text-white/70 italic text-sm mb-5">
              Deploy with confidence – every time
            </p>
            <div className="space-y-2">
              <a
                href="mailto:pankaj.kumar@test2deploy.eu"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-finland-blue-mid" />
                pankaj.kumar@test2deploy.eu
              </a>
              <a
                href="tel:+358417280893"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-finland-blue-mid" />
                +358-417280893
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-widest">
              More
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {year} Test2Deploy. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors text-sm"
          >
            Built with <Heart className="w-3.5 h-3.5 text-finland-blue-mid fill-finland-blue-mid" /> using
            <span className="font-semibold text-white/80">caffeine.ai</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
