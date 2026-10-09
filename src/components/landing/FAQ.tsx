import { ArrowRight } from "lucide-react";
import { landingContent } from "@/content/landing";

export function FAQ() {
  const { faq } = landingContent;

  return (
    <section id="faq" className="relative py-16 md:py-20 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">
            {faq.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">{faq.title}</h2>
          <p className="mt-4 text-muted-foreground">{faq.description}</p>
        </div>
        <div className="space-y-3">
          {faq.items.map((i, idx) => (
            <details
              key={i.q}
              className="group rounded-xl border border-border bg-background/70 backdrop-blur-sm overflow-hidden"
              open={idx === 0}
            >
              <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-4 hover:bg-card/60 transition">
                <span className="font-semibold text-foreground">{i.q}</span>
                <span className="w-8 h-8 rounded-md border border-border grid place-items-center text-brand-orange group-open:rotate-45 transition-transform shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{i.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-brand-orange font-semibold mb-4 animate-pulse">
            {faq.closing}
          </p>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-orange-gradient rounded-xl blur opacity-60 animate-pulse" />
            <a
              {...landingContent.checkout}
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-orange-gradient text-primary-foreground font-bold text-lg shadow-glow hover:scale-[1.03] transition animate-pulse-glow"
            >
              {faq.closingCta} <ArrowRight size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
