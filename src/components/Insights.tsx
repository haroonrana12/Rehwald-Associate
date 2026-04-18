import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";

const articles = [
  { category: "Market Insight", title: "The Evolving Leadership Landscape in European Asset Management", date: "March 2026" },
  { category: "Thought Leadership", title: "Why Cultural Fit Matters More Than Ever in Financial Hiring", date: "February 2026" },
  { category: "Industry Report", title: "Compensation Trends Across Private Markets: 2026 Outlook", date: "January 2026" },
];

export default function Insights() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="insights" className="py-24 sm:py-32 bg-card/30" ref={ref}>
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-accent">Insights</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Thought leadership</h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm text-accent hover:underline">
            View all <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <article
              key={a.title}
              className={`group p-8 rounded-lg border border-border/40 bg-background hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 cursor-pointer ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span className="text-xs text-accent font-medium uppercase tracking-wider">{a.category}</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug group-hover:text-accent transition-colors">{a.title}</h3>
              <p className="mt-4 text-xs text-muted-foreground">{a.date}</p>
              <div className="mt-6 flex items-center gap-1 text-sm text-muted-foreground group-hover:text-accent transition-colors">
                Read more <ArrowUpRight className="w-3 h-3" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
