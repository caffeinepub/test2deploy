import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';
import WhoWeHelpSection from './components/WhoWeHelpSection';
import CoreServicesSection from './components/CoreServicesSection';
import WhyDifferentSection from './components/WhyDifferentSection';
import RealOutcomesSection from './components/RealOutcomesSection';
import HowItWorksSection from './components/HowItWorksSection';
import IdealUseCasesSection from './components/IdealUseCasesSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
                <HeroSection />
                <TrustStrip />
                <WhoWeHelpSection />
                <CoreServicesSection />
                <WhyDifferentSection />
                <RealOutcomesSection />
                <HowItWorksSection />
                <IdealUseCasesSection />
                <FinalCTASection />
            </main>
            <Footer />
        </div>
    );
}
