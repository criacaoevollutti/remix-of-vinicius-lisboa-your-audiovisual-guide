import { Frown, AlertTriangle, Annoyed } from "lucide-react";
import { landingContent } from "@/content/landing";

const iconMap = {
  Confusão: Frown,
  Insegurança: AlertTriangle,
  Frustração: Annoyed,
};

export function Problem() {
  const { problem } = landingContent;

  return (
    <section id="problema" className="relative py-16 md:py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">
            {problem.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">{problem.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {problem.pains.map((p) => {
            const Icon = iconMap[p.tag as keyof typeof iconMap];
            return (
              <div
                key={p.tag}
                className="group p-7 rounded-2xl border border-border bg-background/60 backdrop-blur-sm hover:border-primary/60 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/40 grid place-items-center text-brand-orange mb-4 group-hover:shadow-glow transition">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-brand-orange">{p.tag}</div>
                <h3 className="mt-2 text-lg font-semibold text-foreground leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-14 text-center text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          {problem.closing} <strong className="text-brand-orange">Comandando o S-Log</strong>.
        </p>
      </div>
    </section>
  );
}
