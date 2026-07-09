import { landingContent } from "@/content/landing";

export function Course() {
  const { course } = landingContent;

  return (
    <section id="curso" className="relative py-16 md:py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">
            {course.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">{course.title}</h2>
          <p className="mt-4 text-muted-foreground">{course.description}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {course.modules.map((m) => (
            <div
              key={m.n}
              className="group relative p-7 rounded-2xl border border-border bg-background/60 backdrop-blur-sm overflow-hidden hover:border-primary/60 transition"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-gradient opacity-0 group-hover:opacity-20 blur-2xl transition" />
              <div className="text-5xl font-bold text-brand-orange/30 group-hover:text-brand-orange/60 transition">
                {m.n}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                Módulo {m.n.replace("0", "")} — {m.t}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
