import { Linkedin, Twitter } from "lucide-react";

const offices = [
  { city: "Frankfurt", detail: "Bockenheimer Landstr. 24" },
  { city: "London", detail: "Mayfair, W1K" },
  { city: "Zurich", detail: "Bahnhofstrasse 10" },
  { city: "Luxembourg", detail: "Kirchberg" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <span className="text-lg font-bold tracking-tight">
              REHWALD<span className="text-accent font-light ml-1">Associates</span>
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Boutique executive search exclusively within financial services.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="#services" className="block hover:text-foreground transition-colors">Executive Search</a>
              <a href="#services" className="block hover:text-foreground transition-colors">Recruitment Solutions</a>
              <a href="#services" className="block hover:text-foreground transition-colors">Market Intelligence</a>
              <a href="#services" className="block hover:text-foreground transition-colors">Leadership Advisory</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="#team" className="block hover:text-foreground transition-colors">Our Team</a>
              <a href="#process" className="block hover:text-foreground transition-colors">Our Process</a>
              <a href="#insights" className="block hover:text-foreground transition-colors">Insights</a>
              <a href="#contact" className="block hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Offices</h4>
            <div className="space-y-3">
              {offices.map((o) => (
                <div key={o.city}>
                  <span className="text-sm font-medium">{o.city}</span>
                  <p className="text-xs text-muted-foreground">{o.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Rehwald Associates. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
