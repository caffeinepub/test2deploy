import { CheckCircle, ArrowDown, Mail } from "lucide-react";

const checkpoints = [
  "No full-time QA hire needed",
  "Fast turnaround – results in days",
  "Trusted by startups & scale-ups",
];

export default function HeroSection() {
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg-finland.dim_1920x1080.png')",
        }}
      />

      {/* Finnish blue overlay */}
      <div className="absolute inset-0 gradient-hero-finland" />

      {/* Subtle cross pattern inspired by Finnish flag */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-white" />
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Professional QA Services for Modern Teams
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in">
          Ship Software
          <br />
          <span className="text-finland-blue-mid">Without the Fear</span>
          <br />
          of Breaking Things
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in">
          Test2Deploy delivers fast, reliable QA testing so your team can launch
          with confidence — no full-time hire required.
        </p>

        {/* Checkpoints */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 animate-fade-in">
          {checkpoints.map((point) => (
            <div key={point} className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-finland-blue-mid flex-shrink-0" />
              <span className="text-sm font-medium">{point}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <a
            href="mailto:pankaj.kumar@test2deploy.eu"
            className="flex items-center gap-2 bg-white text-finland-blue px-8 py-4 rounded-xl text-base font-bold hover:bg-finland-blue-light transition-all duration-200 shadow-finland-lg hover:shadow-finland-glow"
          >
            <Mail className="w-5 h-5" />
            Book a Free Call
          </a>
          <button
            onClick={scrollToServices}
            className="flex items-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/10 hover:border-white transition-all duration-200"
          >
            <ArrowDown className="w-5 h-5" />
            View Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
