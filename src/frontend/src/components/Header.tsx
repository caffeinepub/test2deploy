import { Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ContactMethodModal from "./ContactMethodModal";

const navLinks = [
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-different" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Contact", href: "#contact" },
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
          ? "bg-white shadow-finland border-b border-finland-blue-mid"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/Company Logo.jpg"
              alt="Test2Deploy logo"
              className="h-10 lg:h-12 w-auto object-contain"
              style={{ maxWidth: "180px" }}
            />
            <span
              aria-hidden="true"
              className="hidden xl:block text-sm text-finland-blue font-medium italic border-l border-finland-blue-mid pl-3"
            >
              Deploy with confidence – every time
            </span>
          </div>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-6"
          >
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                data-ocid={`header.nav.link.${index + 1}`}
                className="text-sm font-medium text-gray-700 hover:text-finland-blue transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-finland-blue group-hover:w-full transition-all duration-200"
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
              className="flex items-center gap-2 bg-finland-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-finland-blue-dark transition-colors duration-200 shadow-finland"
            >
              <Mail aria-hidden="true" className="w-4 h-4" />
              Book a Free Call
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-finland-blue hover:bg-finland-blue-light transition-colors"
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
          className="lg:hidden bg-white border-t border-finland-blue-mid shadow-finland-lg"
        >
          <nav aria-label="Mobile navigation">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  data-ocid={`header.nav.link.${index + 1}`}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-finland-blue hover:bg-finland-blue-light rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-finland-blue-mid">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setModalOpen(true);
                  }}
                  aria-label="Book a free call — choose contact method"
                  className="flex items-center justify-center gap-2 bg-finland-blue text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-finland-blue-dark transition-colors w-full"
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
