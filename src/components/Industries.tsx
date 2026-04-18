import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Wallet, Building, FileText } from "lucide-react";

const industries = [
  { icon: TrendingUp, title: "Asset Management", desc: "Hedge funds, mutual funds, ETFs, and alternative investment managers." },
  { icon: Wallet, title: "Wealth Management", desc: "Private banking, family offices, and independent wealth advisors." },
  { icon: Building, title: "Private Markets", desc: "Private equity, venture capital, real estate, and infrastructure." },
  { icon: FileText, title: "Consulting & Audit", desc: "Strategy consulting, financial advisory, and professional services." },
];

export default function Industries() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="industries" className="py-24 sm:py-32 bg-card/30" ref={ref}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-accent">Industries</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Deep expertise across financial services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className={`group relative p-8 rounded-lg border border-border/40 bg-background hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <ind.icon className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-lg font-semibold mb-2">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
