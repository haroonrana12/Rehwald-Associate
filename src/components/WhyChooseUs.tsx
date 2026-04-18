import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Shield, Heart, Database } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Deep Financial Expertise", desc: "Our consultants bring decades of combined experience within financial services recruitment." },
  { icon: Globe, title: "Global Network", desc: "Offices across Frankfurt, London, Zurich, and Luxembourg — connecting talent across borders." },
  { icon: Heart, title: "Personalised Approach", desc: "Every mandate is treated as unique, with bespoke strategies tailored to your specific needs." },
  { icon: Database, title: "Data-Driven Hiring", desc: "Leveraging market intelligence and analytics to ensure precision in every placement." },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-32 bg-card/30" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-accent">Why Rehwald Associates</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">The trusted partner for leadership hiring</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">We combine deep sector knowledge with a rigorous, relationship-driven search methodology to deliver exceptional outcomes.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`p-6 rounded-lg border border-border/30 hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <r.icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
