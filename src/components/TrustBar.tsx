import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Placements Made" },
  { value: 4, suffix: "", label: "European Offices" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 2000, active);
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-foreground">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground tracking-wide">{label}</div>
    </div>
  );
}

export default function TrustBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 border-y border-border/30">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-12">
          Trusted by leading financial institutions across Europe
        </p>

        {/* Marquee logo strip */}
        <div className="relative mb-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 animate-marquee w-max">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-16 shrink-0">
                {["Goldman Sachs", "BlackRock", "UBS", "Deutsche Bank", "Barclays", "JP Morgan", "Morgan Stanley", "Credit Suisse"].map((name) => (
                  <span key={`${dup}-${name}`} className="text-sm font-semibold tracking-wider text-muted-foreground/50 uppercase whitespace-nowrap hover:text-accent transition-colors">
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
