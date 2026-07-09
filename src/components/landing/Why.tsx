import { Check } from "lucide-react";
import { landingContent } from "@/content/landing";

export function Why() {
  const { origin } = landingContent;

  return (
    <section className="relative py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">{origin.eyebrow}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">{origin.title}</h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>{origin.paragraphs[0]}</p>
          <p>{origin.paragraphs[1]}</p>
          <p className="text-foreground font-semibold border-l-2 border-primary pl-5">{origin.quote}</p>
          <p>{origin.paragraphs[3]}</p>
          <p>{origin.paragraphs[4]}</p>
          <p className="text-foreground font-semibold">{origin.takeaway}</p>
          <p>{origin.paragraphs[6]}</p>
          <ul className="space-y-2 pl-2">
            {origin.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-md bg-primary/15 border border-primary/40 grid place-items-center text-brand-orange shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground">{origin.conclusion}</p>
          <p>
            Foi exatamente por isso que eu criei o <strong className="text-brand-orange">Comandando o S-Log</strong>. Um
            treinamento direto ao ponto para ensinar aquilo que eu gostaria que alguém tivesse me explicado quando
            comecei.
          </p>
        </div>
      </div>
    </section>
  );
}
