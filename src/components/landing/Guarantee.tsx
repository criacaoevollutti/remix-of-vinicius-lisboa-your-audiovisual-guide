import { ShieldCheck, BadgeCheck, Shield, Lock } from "lucide-react";
import { landingContent } from "@/content/landing";

export function Guarantee() {
  const { guarantee } = landingContent;

  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-gradient opacity-10 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <div className="rounded-3xl border border-primary/20 bg-card/40 backdrop-blur-xl p-10 md:p-14 grid md:grid-cols-[auto_1fr] gap-10 items-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-orange-gradient opacity-[0.03] pointer-events-none" />
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 rounded-full bg-orange-gradient blur-2xl opacity-50" />
            <div className="relative w-40 h-40 rounded-full bg-orange-gradient grid place-items-center text-primary-foreground shadow-glow border-4 border-background/20">
              <div className="text-center">
                <ShieldCheck size={36} strokeWidth={1.5} className="mx-auto" />
                <div className="text-5xl font-extrabold leading-none mt-1">{guarantee.days}</div>
                <div className="text-xs uppercase tracking-widest mt-1 opacity-90">{guarantee.labels.days}</div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-primary/40 flex items-center justify-center">
              <BadgeCheck size={16} className="text-brand-orange" />
            </div>
          </div>
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-orange font-semibold">{guarantee.eyebrow}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">{guarantee.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{guarantee.description}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield size={16} className="text-brand-orange" />
                {guarantee.labels.protected}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="flex items-center gap-2">
                <Lock size={16} className="text-brand-orange" />
                {guarantee.labels.secure}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
