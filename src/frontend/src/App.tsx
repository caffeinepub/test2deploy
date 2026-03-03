import ContactFormSection from "./components/ContactFormSection";
import CoreServicesSection from "./components/CoreServicesSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import IdealUseCasesSection from "./components/IdealUseCasesSection";
import RealOutcomesSection from "./components/RealOutcomesSection";
import TrustStrip from "./components/TrustStrip";
import WhoWeHelpSection from "./components/WhoWeHelpSection";
import WhyDifferentSection from "./components/WhyDifferentSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-white focus:text-finland-blue focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <WhoWeHelpSection />
        <CoreServicesSection />
        <WhyDifferentSection />
        <RealOutcomesSection />
        <HowItWorksSection />
        <IdealUseCasesSection />
        <ContactFormSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
