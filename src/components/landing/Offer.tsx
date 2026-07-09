import { Check, Zap, Timer, Lock, CreditCard, QrCode, Receipt, BadgeCheck } from "lucide-react";
import { landingContent } from "@/content/landing";

const iconMap: Record<string, React.ElementType> = {
  lock: Lock,
  creditCard: CreditCard,
  qrCode: QrCode,
  receipt: Receipt,
};

export function Offer() {
  const { offer } = landingContent;

  return (
    <section id={offer.id} className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-gradient opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs uppercase tracking-widest text-brand-orange mb-6">
          <Timer size={14} />
          {offer.eyebrow}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">{offer.title}</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">{offer.description}</p>
        <div className="mt-12 relative rounded-3xl border border-primary/30 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-orange-gradient opacity-[0.06] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-orange-gradient" />
          <div className="relative p-10 md:p-14">
            <div className="flex items-center justify-center gap-3 mb-2">
              <BadgeCheck size={18} className="text-brand-orange" />
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">
                {offer.badge}
              </span>
            </div>
            <div className="text-sm text-muted-foreground line-through">
              De <span className="text-foreground/60">{offer.originalPrice}</span>
            </div>
            <div className="mt-2 text-7xl md:text-8xl font-bold text-foreground tracking-tight">
              R$ <span className="text-brand-orange">{offer.price}</span>
            </div>
            <div className="mt-2 inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-brand-orange">
              {offer.installment}
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              {offer.note}
            </div>
            <ul className="mt-10 max-w-md mx-auto space-y-3 text-left">
              {offer.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-md bg-primary/20 border border-primary/40 grid place-items-center text-brand-orange shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 relative inline-block">
              <div className="absolute -inset-1 bg-orange-gradient rounded-xl blur opacity-75 animate-pulse" />
              <a
                href="#"
                className="relative inline-flex items-center gap-3 px-12 py-5 rounded-xl bg-orange-gradient text-primary-foreground font-bold text-xl shadow-glow hover:scale-[1.03] transition animate-pulse-glow"
              >
                <Zap size={22} className="fill-current" />
                {offer.cta}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
              {offer.paymentMethods.map((method) => {
                const Icon = iconMap[method.icon];
                return (
                  <span
                    key={method.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/50"
                  >
                    <Icon size={12} /> {method.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
