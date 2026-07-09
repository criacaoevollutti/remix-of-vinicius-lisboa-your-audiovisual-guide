import { Camera } from "lucide-react";
import { landingContent } from "@/content/landing";
import aboutImg from "@/assets/instructor-portrait.jpg";

export function About() {
  const { about } = landingContent;

  return (
    <section id="sobre" className="relative py-16 md:py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden border border-border bg-card/50 shadow-card aspect-[4/5]">
          <img
            src={aboutImg}
            alt={about.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-orange">{about.role}</div>
            <div className="text-2xl font-bold text-foreground mt-1">{about.name}</div>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">
            {about.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">{about.name}</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>{about.paragraphs[0]}</p>
            <p>{about.paragraphs[1]}</p>
            <p>{about.paragraphs[2]}</p>
            <p>{about.paragraphs[3]}</p>
            <ul className="space-y-1 pl-5 text-foreground">
              {about.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p>
              O <strong className="text-brand-orange">Comandando o S-Log</strong>{" "}
              {about.paragraphs[4].replace("O Comandando o S-Log ", "")}
            </p>
            <p>{about.paragraphs[5]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
