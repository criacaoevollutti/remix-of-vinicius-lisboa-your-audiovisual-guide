import { landingContent } from "@/content/landing";

export function Hero() {
  const { hero } = landingContent;

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-hero grain">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-scan" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 text-xs uppercase tracking-widest text-muted-foreground mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          {hero.eyebrow}
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
          {hero.title[0]}
          <span className="text-brand-orange">{hero.highlight}</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-snug">
          {hero.subtitle}
        </p>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {hero.description}
        </p>

        <div className="mt-10 relative max-w-4xl mx-auto">
          <div className="absolute -inset-6 bg-orange-gradient blur-3xl opacity-20 rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-card aspect-video">
            <iframe
              className="w-full h-full"
              src={hero.videoEmbedUrl}
              title="Vídeo de Apresentação — Comandando o S-Log"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10">
          <a
            {...landingContent.checkout}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-orange-gradient text-primary-foreground font-semibold text-lg shadow-glow hover:scale-[1.02] transition"
          >
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
