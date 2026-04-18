import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 animate-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className={`container relative z-10 text-center max-w-2xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Start Your Search Today</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Whether you're seeking exceptional talent or your next career move, we're ready to help. Let's start a confidential conversation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@rehwald-associates.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform glow-sm hover:glow-md"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-border text-foreground font-medium hover:bg-secondary transition-all hover:scale-105"
          >
            Submit Your CV
          </a>
        </div>
      </div>
    </section>
  );
}
