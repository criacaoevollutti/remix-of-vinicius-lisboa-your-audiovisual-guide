import { Sparkles, RefreshCw, Monitor } from "lucide-react";
import { landingContent } from "@/content/landing";

const iconMap: Record<string, React.ElementType> = {
  "LUTs do Capitão": Sparkles,
  "Atualizações Futuras": RefreshCw,
  "Acesso Multiplataforma": Monitor,
};

export function Bonuses() {
  const { bonuses } = landingContent;

  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-30 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">
            {bonuses.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">{bonuses.title}</h2>
          <p className="mt-4 text-muted-foreground">{bonuses.description}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {bonuses.items.map((b) => {
            const Icon = iconMap[b.title];
            return (
              <div
                key={b.title}
                className={
                  "group relative p-8 rounded-2xl border backdrop-blur-sm overflow-hidden transition hover:-translate-y-1 " +
                  (b.highlight
                    ? "border-primary/60 bg-orange-gradient/10 shadow-glow"
                    : "border-border bg-card/60 hover:border-primary/40")
                }
              >
                {b.highlight && (
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-gradient opacity-20 blur-2xl" />
                )}
                <div
                  className={
                    "w-14 h-14 rounded-xl grid place-items-center shrink-0 mb-5 " +
                    (b.highlight
                      ? "bg-orange-gradient text-primary-foreground shadow-glow"
                      : "bg-primary/15 border border-primary/40 text-brand-orange")
                  }
                >
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-brand-orange">{b.tag}</div>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{b.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
