import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import processImage from "@/assets/process.jpg";

const steps = [
  { num: "01", title: "Briefing", desc: "Deep-dive into your organisation, culture, and requirements to define the ideal candidate profile." },
  { num: "02", title: "Market Mapping", desc: "Comprehensive research across our global network to identify and assess top-tier candidates." },
  { num: "03", title: "Placement", desc: "Rigorous shortlisting, structured interviews, and seamless offer management." },
  { num: "04", title: "Follow-up", desc: "Post-placement integration support ensuring long-term success for both client and candidate." },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0">
        <img src={processImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/70 to-background/90" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-accent">Our Process</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">A proven methodology for exceptional results</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-12 mb-12 sm:mb-16 last:mb-0 pl-10 sm:pl-12 md:pl-0 ${i % 2 === 1 ? "md:flex-row-reverse" : ""} ${isVisible ? (i % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right") : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <span className="text-4xl sm:text-5xl font-bold text-white">{step.num}</span>
                <h3 className="text-lg sm:text-xl font-semibold mt-2">{step.title}</h3>
                <p className={`text-sm text-muted-foreground mt-2 leading-relaxed max-w-sm ${i % 2 === 1 ? "md:ml-auto" : ""}`}>
                  {step.desc}
                </p>
              </div>

              {/* Dot on timeline */}
              <div className="hidden sm:flex items-center justify-center w-4 h-4 rounded-full bg-accent border-4 border-background absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4" />

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
