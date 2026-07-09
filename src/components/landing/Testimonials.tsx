import { Quote, Star } from "lucide-react";
import { landingContent } from "@/content/landing";

export function Testimonials() {
  const { testimonials } = landingContent;

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full blur-3xl opacity-[0.08] bg-brand-orange" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-orange font-medium">{testimonials.eyebrow}</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
            {testimonials.title[0]}
            <span className="bg-gradient-to-r from-brand-orange to-primary bg-clip-text text-transparent">
              {testimonials.highlight}
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{testimonials.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.comments.map((c, i) => (
            <div
              key={c.name}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-border via-border to-transparent hover:from-brand-orange/60 hover:via-primary/30 transition-all duration-500"
              style={{ transform: i % 2 === 1 ? "translateY(12px)" : undefined }}
            >
              <div className="relative h-full p-7 rounded-2xl bg-card/80 backdrop-blur-xl overflow-hidden">
                <div aria-hidden className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-brand-orange/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-brand-orange to-primary p-[2px]">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-sm font-bold text-foreground">
                        {c.name.replace("@", "").slice(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground leading-tight">{c.name}</div>
                      <div className="text-[11px] text-muted-foreground">{c.role}</div>
                    </div>
                  </div>
                  <Quote size={28} className="text-brand-orange/30 group-hover:text-brand-orange/70 transition-colors" />
                </div>

                <p className="relative text-foreground/90 leading-relaxed">&ldquo;{c.text}&rdquo;</p>

                <div className="relative mt-5 pt-4 border-t border-border/50 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-brand-orange text-brand-orange" />
                  ))}
                  <span className="ml-auto text-[11px] uppercase tracking-widest text-muted-foreground">Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
