import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Users, BarChart3, Compass } from "lucide-react";

const services = [
  { icon: Search, title: "Executive Search", desc: "Identifying and securing C-suite and senior leadership talent through rigorous, confidential search methodologies." },
  { icon: Users, title: "Recruitment Solutions", desc: "Scalable hiring solutions tailored to financial institutions, from individual mandates to team builds." },
  { icon: BarChart3, title: "Market Intelligence", desc: "Deep market mapping and compensation benchmarking to inform strategic talent decisions." },
  { icon: Compass, title: "Leadership Advisory", desc: "Board evaluation, succession planning, and organisational design for financial services firms." },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 sm:py-32" ref={ref}>
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-accent">Our Services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Tailored solutions for financial talent acquisition</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">We deliver bespoke executive search and advisory services, exclusively within financial services.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`shimmer-on-hover group relative p-8 rounded-lg border border-border/40 bg-card/50 hover:bg-card hover:border-accent/30 hover:glow-sm transition-all duration-500 hover:-translate-y-1 cursor-default ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                <s.icon className="w-5 h-5 text-accent group-hover:rotate-6 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
