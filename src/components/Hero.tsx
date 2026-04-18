import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid-animated opacity-60" />

      {/* Drifting gradient orbs */}
      <div className="absolute top-1/4 right-[15%] w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl animate-orb-1" />
      <div className="absolute bottom-[10%] left-[20%] w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-orb-2" />

      {/* Animated SVG corner accent */}
      <svg className="absolute top-24 right-6 sm:right-12 w-40 h-40 sm:w-64 sm:h-64 opacity-30 hidden sm:block" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="hsl(var(--accent))" strokeWidth="0.5" className="animate-draw" />
        <circle cx="100" cy="100" r="60" stroke="hsl(var(--accent))" strokeWidth="0.5" className="animate-draw" style={{ animationDelay: "0.4s" }} />
        <circle cx="100" cy="100" r="40" stroke="hsl(var(--accent))" strokeWidth="0.5" className="animate-draw" style={{ animationDelay: "0.8s" }} />
        <line x1="100" y1="20" x2="100" y2="180" stroke="hsl(var(--accent))" strokeWidth="0.3" className="animate-draw" style={{ animationDelay: "1.2s" }} />
        <line x1="20" y1="100" x2="180" y2="100" stroke="hsl(var(--accent))" strokeWidth="0.3" className="animate-draw" style={{ animationDelay: "1.4s" }} />
      </svg>

      {/* Scan line accent */}
      <div className="absolute inset-y-0 left-1/2 w-px overflow-hidden opacity-40 pointer-events-none hidden md:block">
        <div className="w-full h-32 bg-gradient-to-b from-transparent via-accent to-transparent animate-scan" />
      </div>

      <div className="container relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-border/50 text-muted-foreground mb-8">
              Executive Search · Financial Services
            </span>
          </div>

          <h1 className="text-[2rem] xs:text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-up delay-100">
            Connecting Top
            <br />
            Financial Talent
            <br />
            <span className="text-gradient">with Leading Institutions</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up delay-300">
            Boutique executive search delivering exceptional leadership placements across asset management, wealth management, private markets, and consulting.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:scale-105 transition-transform glow-sm hover:glow-md"
            >
              Hire Talent
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all hover:scale-105"
            >
              Find Opportunities
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
