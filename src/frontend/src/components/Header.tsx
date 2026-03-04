import { Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ContactMethodModal from "./ContactMethodModal";

// Desktop nav: 5 key items to prevent overflow and maintain clear hierarchy
const desktopNavLinks = [
  { label: "Services", href: "#services", ocid: "header.nav.link.1" },
  { label: "Who We Help", href: "#who-we-help", ocid: "header.nav.link.2" },
  { label: "How It Works", href: "#how-it-works", ocid: "header.nav.link.3" },
  { label: "FAQ", href: "#faq", ocid: "header.faq.link" },
  { label: "Contact", href: "#contact", ocid: "header.nav.link.5" },
];

// Mobile nav: full list for discoverability and SEO accessibility
const mobileNavLinks = [
  { label: "Who We Help", href: "#who-we-help", ocid: "header.nav.link.2" },
  { label: "Services", href: "#services", ocid: "header.nav.link.1" },
  { label: "Why Us", href: "#why-different", ocid: "header.nav.link.6" },
  { label: "Outcomes", href: "#outcomes", ocid: "header.nav.link.7" },
  { label: "How It Works", href: "#how-it-works", ocid: "header.nav.link.3" },
  { label: "Use Cases", href: "#use-cases", ocid: "header.nav.link.8" },
  { label: "Contact", href: "#contact", ocid: "header.nav.link.5" },
  { label: "FAQ", href: "#faq", ocid: "header.faq.link" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#001d4a] shadow-lg border-b border-[#003580]"
          : "bg-[#001d4a]/98 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — dark logo blends naturally with the navy header */}
          <div className="flex items-center gap-3">
            <div>
              <img
                src="/assets/generated/test2deploy-logo-transparent.dim_400x200.png"
                alt="Test2Deploy logo"
                className="h-12 lg:h-14 w-auto object-contain"
                style={{ maxWidth: "200px" }}
              />
            </div>
            <span
              aria-hidden="true"
              className="hidden xl:block text-sm text-white/80 font-medium italic border-l border-white/20 pl-3"
            >
              Deploy with confidence – every time
            </span>
          </div>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {desktopNavLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                data-ocid={link.ocid}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"
                />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label="Book a free call — choose contact method"
              data-ocid="header.book_call.button"
              className="flex items-center gap-2 bg-white text-[#003580] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors duration-200 shadow-lg"
            >
              <Mail aria-hidden="true" className="w-4 h-4" />
              Book a Free Call
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            data-ocid="header.mobile_menu.toggle"
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="w-6 h-6" />
            ) : (
              <Menu aria-hidden="true" className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#001d4a] border-t border-white/10 shadow-lg"
        >
          <nav aria-label="Mobile navigation">
            <div className="px-4 py-4 space-y-1">
              {mobileNavLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  data-ocid={link.ocid}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setModalOpen(true);
                  }}
                  aria-label="Book a free call — choose contact method"
                  className="flex items-center justify-center gap-2 bg-white text-[#003580] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors w-full"
                >
                  <Mail aria-hidden="true" className="w-4 h-4" />
                  Book a Free Call
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}

      <ContactMethodModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </header>
  );
}
