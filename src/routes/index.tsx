import { createFileRoute } from "@tanstack/react-router";
import { Play, Check, ArrowRight, Frown, AlertTriangle, Annoyed, Quote, Sparkles, Lock, ShieldCheck, RefreshCw, Monitor, Timer, Zap, CreditCard, BadgeCheck, Shield, QrCode, Receipt, Camera, Star } from "lucide-react";
import heroImg from "@/assets/hero-filmmaker.jpg";
import logoAsset from "@/assets/vinicius-lisboa-logo.png.asset.json";
import clapperImg from "@/assets/clapper.jpg";
import lightingImg from "@/assets/lighting.jpg";
import cameraImg from "@/assets/camera.jpg";
import btsImg from "@/assets/bts.jpg";
import editImg from "@/assets/edit.jpg";
import productionImg from "@/assets/production.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comandando o S-Log — Vinicius Lisboa HD" },
      { name: "description", content: "Pare de ter medo do S-Log. Treinamento prático para usuários Sony entenderem, configurarem, exporem e editarem arquivos S-Log com confiança." },
      { property: "og:title", content: "Comandando o S-Log" },
      { property: "og:description", content: "Treinamento prático de S-Log para usuários de câmeras Sony." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const YT_URL = "https://www.youtube.com/@ViniciusLisboaHD";
const IG_URL = "https://www.instagram.com/viniciuslisboahd/";

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Vinicius Lisboa Filmmaker" className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problema" className="hover:text-foreground transition">O Problema</a>
          <a href="#sobre" className="hover:text-foreground transition">Quem sou eu</a>
          <a href="#curso" className="hover:text-foreground transition">O Curso</a>
          <a href="#oferta" className="hover:text-foreground transition">Oferta</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#oferta" className="text-sm font-medium px-4 py-2 rounded-md bg-orange-gradient text-primary-foreground hover:opacity-90 transition shadow-glow">
          Quero Comandar o S-Log
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-hero grain">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-scan" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 text-xs uppercase tracking-widest text-muted-foreground mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          Treinamento exclusivo · Câmeras Sony
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
          COMANDANDO O <span className="text-brand-orange">S-LOG</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-snug">
          Pare de ter medo do S-Log e aprenda a filmar com confiança.
        </p>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Um treinamento prático para usuários de câmeras Sony que querem entender, configurar,
          expor e editar arquivos S-Log sem depender de fórmulas mágicas ou tutoriais confusos.
        </p>

        <div className="mt-10 relative max-w-4xl mx-auto">
          <div className="absolute -inset-6 bg-orange-gradient blur-3xl opacity-20 rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-card aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ypb1xBH4KsM?rel=0"
              title="Vídeo de Apresentação — Comandando o S-Log"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10">
          <a href="#oferta" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-orange-gradient text-primary-foreground font-semibold text-lg shadow-glow hover:scale-[1.02] transition">
            🚀 Quero Comandar o S-Log
          </a>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const pains = [
    {
      icon: Frown,
      tag: "Confusão",
      t: "Você já assistiu vários tutoriais e continua sem entender o S-Log.",
      d: "Quanto mais pesquisa, mais regras aparecem. E nenhuma delas explica o motivo por trás das configurações.",
    },
    {
      icon: AlertTriangle,
      tag: "Insegurança",
      t: "Você grava sem ter certeza de que está fazendo certo.",
      d: "Toda vez que ativa o S-Log, bate a dúvida: será que estou expondo corretamente ou vou descobrir o erro só quando chegar no computador?",
    },
    {
      icon: Annoyed,
      tag: "Frustração",
      t: "Sua câmera é boa, mas a imagem não fica como você imaginou.",
      d: "Você investiu em uma câmera Sony, ativou o S-Log esperando um resultado mais profissional, mas a imagem ficou lavada, difícil de editar e muito distante da referência que tinha na cabeça.",
    },
  ];
  return (
    <section id="problema" className="relative py-16 md:py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">Se identifica?</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">O S-Log virou um pesadelo?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {pains.map((p) => (
            <div key={p.tag} className="group p-7 rounded-2xl border border-border bg-background/60 backdrop-blur-sm hover:border-primary/60 transition">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/40 grid place-items-center text-brand-orange mb-4 group-hover:shadow-glow transition">
                <p.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-orange">{p.tag}</div>
              <h3 className="mt-2 text-lg font-semibold text-foreground leading-snug">{p.t}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          Foi exatamente para resolver esses três problemas que eu criei o
          <strong className="text-brand-orange"> Comandando o S-Log</strong>.
        </p>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="relative py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">🎬 A origem</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Por que eu criei o Comandando o S-Log</h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>Durante muito tempo eu também me senti perdido quando o assunto era S-Log.</p>
          <p>Eu assistia vídeos, lia fóruns, testava configurações e percebia uma coisa curiosa:</p>
          <p className="text-foreground font-semibold border-l-2 border-primary pl-5">
            Todo mundo ensinava o "como". Pouca gente explicava o "porquê".
          </p>
          <p>Ninguém parecia explicar a lógica por trás dessas decisões. E quando você não entende a lógica, qualquer situação diferente vira um problema.</p>
          <p>Foi depois de anos utilizando câmeras Sony em trabalhos reais que eu percebi que dominar o S-Log não tem a ver com decorar números.</p>
          <p className="text-foreground font-semibold">Tem a ver com entender como a câmera pensa.</p>
          <p>Quando você entende:</p>
          <ul className="space-y-2 pl-2">
            {["o que é uma curva Log,","como o sensor responde à luz,","o que o ISO Base realmente faz,","e como interpretar corretamente a imagem,"].map((l) => (
              <li key={l} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-md bg-primary/15 border border-primary/40 grid place-items-center text-brand-orange shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground">o S-Log deixa de ser um mistério.</p>
          <p>Foi exatamente por isso que eu criei o <strong className="text-brand-orange">Comandando o S-Log</strong>. Um treinamento direto ao ponto para ensinar aquilo que eu gostaria que alguém tivesse me explicado quando comecei.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-16 md:py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden border border-dashed border-border bg-card/50 shadow-card aspect-[4/5] flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground/40">
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 grid place-items-center mb-4">
              <Camera size={36} strokeWidth={1.5} />
            </div>
            <span className="text-sm uppercase tracking-widest">Foto do instrutor</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-orange">Filmmaker · Piloto de navio</div>
            <div className="text-2xl font-bold text-foreground mt-1">Vinicius Lisboa</div>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">Quem sou eu</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Vinicius Lisboa</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>Sou filmmaker, criador de conteúdo e também piloto de navio.</p>
            <p>Nos últimos anos venho compartilhando minha jornada no audiovisual através do meu canal no YouTube, mostrando como transformei a produção de vídeos em uma segunda fonte de renda.</p>
            <p>Ao longo desse caminho, produzi vídeos para empresas, marcas, imobiliárias de alto padrão, campanhas publicitárias e projetos autorais, sempre buscando extrair o máximo de qualidade das minhas imagens.</p>
            <p>Hoje, uma das perguntas que mais recebo é justamente sobre S-Log:</p>
            <ul className="space-y-1 pl-5 text-foreground">
              <li>"Como você expõe?"</li>
              <li>"Qual configuração você usa?"</li>
              <li>"Como você chega nessa cor?"</li>
            </ul>
            <p>O <strong className="text-brand-orange">Comandando o S-Log</strong> nasceu para responder essas perguntas de forma organizada, prática e extremamente didática.</p>
            <p>Porque eu acredito que aprender S-Log não precisa ser complicado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const comments = [
    { name: "@filmmaker.br", role: "Filmmaker", text: "Cara, que correção de cor absurda. Que imagem linda!" },
    { name: "@joao.video", role: "Videomaker", text: "Sempre que vejo seus vídeos fico inspirado. A qualidade da imagem é outro nível." },
    { name: "@cinemastudio", role: "Estúdio", text: "Suas configurações de S-Log são as melhores que já vi na internet. Salvou meu projeto!" },
    { name: "@luca.audiovisual", role: "Audiovisual", text: "Aprendi mais em 1 vídeo seu do que em meses pesquisando. Obrigado pelo conteúdo." },
    { name: "@rafa.creator", role: "Creator", text: "A cor do seu material é cinematográfica de verdade. Onde aprendeu?" },
    { name: "@marcos.shots", role: "Fotógrafo", text: "Comecei a entender S-Log depois de assistir você. Didática perfeita." },
  ];
  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full blur-3xl opacity-[0.08] bg-brand-orange" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-brand-orange font-medium">Prova social</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
            O que dizem <span className="bg-gradient-to-r from-brand-orange to-primary bg-clip-text text-transparent">no canal</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Comentários reais de quem acompanha minhas imagens e correção de cor.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comments.map((c, i) => (
            <div
              key={c.name}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-border via-border to-transparent hover:from-brand-orange/60 hover:via-primary/30 transition-all duration-500"
              style={{ transform: i % 2 === 1 ? "translateY(12px)" : undefined }}
            >
              <div className="relative h-full p-7 rounded-2xl bg-card/80 backdrop-blur-xl overflow-hidden">
                {/* hover glow */}
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

                <p className="relative text-foreground/90 leading-relaxed">"{c.text}"</p>

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

function Course() {
  const modules = [
    { n: "01", t: "Entendendo o S-Log", d: "Curva Log, sensor, ISO Base e a lógica por trás de tudo." },
    { n: "02", t: "Configurando a câmera do ZERO", d: "Passo a passo de todos os ajustes essenciais." },
    { n: "03", t: "Exposição em S-Log", d: "Como expor com segurança usando ferramentas da própria câmera." },
    { n: "04", t: "Gravando na prática", d: "Cenários reais de filmagem com decisões em tempo real." },
    { n: "05", t: "Do S-Log ao vídeo final", d: "Fluxo completo no Adobe Premiere com transformação de cor." },
    { n: "06", t: "O jogo avançado", d: "Técnicas avançadas para refinar imagem e workflow." },
  ];
  return (
    <section id="curso" className="relative py-16 md:py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">O conteúdo</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">O que tem no curso</h2>
          <p className="mt-4 text-muted-foreground">6 módulos práticos para você dominar o S-Log do zero ao avançado.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m) => (
            <div key={m.n} className="group relative p-7 rounded-2xl border border-border bg-background/60 backdrop-blur-sm overflow-hidden hover:border-primary/60 transition">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-gradient opacity-0 group-hover:opacity-20 blur-2xl transition" />
              <div className="text-5xl font-bold text-brand-orange/30 group-hover:text-brand-orange/60 transition">{m.n}</div>
              <h3 className="mt-2 text-xl font-semibold text-foreground">Módulo {m.n.replace("0","")} — {m.t}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bonuses() {
  const bonuses = [
    {
      icon: Sparkles,
      tag: "BÔNUS EXCLUSIVO",
      title: "LUTs do Capitão",
      desc: "Pacote de LUTs criados por mim para acelerar seu fluxo de cor em S-Log. Aplicáveis nos seus próprios projetos.",
      highlight: true,
    },
    {
      icon: RefreshCw,
      tag: "BÔNUS",
      title: "Atualizações Futuras",
      desc: "Todas as atualizações e novos conteúdos do curso serão disponibilizados sem nenhum custo adicional.",
      highlight: false,
    },
    {
      icon: Monitor,
      tag: "BÔNUS",
      title: "Acesso Multiplataforma",
      desc: "Assista no computador, tablet ou celular. Acesso imediato após a confirmação da compra.",
      highlight: false,
    },
  ];
  return (
    <section className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-30 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">Mais valor</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Bônus Exclusivos</h2>
          <p className="mt-4 text-muted-foreground">Além dos 6 módulos, você leva esses bônus para acelerar seus resultados.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {bonuses.map((b) => (
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
              <div className={
                "w-14 h-14 rounded-xl grid place-items-center shrink-0 mb-5 " +
                (b.highlight
                  ? "bg-orange-gradient text-primary-foreground shadow-glow"
                  : "bg-primary/15 border border-primary/40 text-brand-orange")
              }>
                <b.icon size={26} strokeWidth={1.5} />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-orange">{b.tag}</div>
              <h3 className="mt-2 text-2xl font-bold text-foreground">{b.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  const includes = [
    "Acesso aos 6 módulos do treinamento",
    "Aulas práticas e diretas ao ponto",
    "BÔNUS: LUTs do Capitão",
    "Atualizações futuras sem custo adicional",
    "Acesso em computador, tablet ou celular",
    "Garantia incondicional de 7 dias",
    "Acesso imediato após a confirmação da compra",
  ];
  return (
    <section id="oferta" className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-gradient opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs uppercase tracking-widest text-brand-orange mb-6">
          <Timer size={14} />
          Oferta por tempo limitado
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Garanta seu acesso agora</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Investimento único para você sair da confusão e comandar o S-Log de verdade.
        </p>
        <div className="mt-12 relative rounded-3xl border border-primary/30 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-orange-gradient opacity-[0.06] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-orange-gradient" />
          <div className="relative p-10 md:p-14">
            <div className="flex items-center justify-center gap-3 mb-2">
              <BadgeCheck size={18} className="text-brand-orange" />
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">Melhor custo-benefício</span>
            </div>
            <div className="text-sm text-muted-foreground line-through">
              De <span className="text-foreground/60">R$ 297,00</span>
            </div>
            <div className="mt-2 text-7xl md:text-8xl font-bold text-foreground tracking-tight">
              R$ <span className="text-brand-orange">147</span>
            </div>
            <div className="mt-2 inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-brand-orange">
              ou 12x de R$ 14,75 no cartão
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">pagamento único · acesso por 1 ano</div>
            <ul className="mt-10 max-w-md mx-auto space-y-3 text-left">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-md bg-primary/20 border border-primary/40 grid place-items-center text-brand-orange shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-muted-foreground">{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 relative inline-block">
              <div className="absolute -inset-1 bg-orange-gradient rounded-xl blur opacity-75 animate-pulse" />
              <a href="#" className="relative inline-flex items-center gap-3 px-12 py-5 rounded-xl bg-orange-gradient text-primary-foreground font-bold text-xl shadow-glow hover:scale-[1.03] transition animate-pulse-glow">
                <Zap size={22} className="fill-current" />
                Quero Comandar o S-Log
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/50">
                <Lock size={12} /> SSL Seguro
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/50">
                <CreditCard size={12} /> Cartão
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/50">
                <QrCode size={12} /> Pix
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/50">
                <Receipt size={12} /> Boleto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
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
                <div className="text-5xl font-extrabold leading-none mt-1">7</div>
                <div className="text-xs uppercase tracking-widest mt-1 opacity-90">Dias</div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-primary/40 flex items-center justify-center">
              <BadgeCheck size={16} className="text-brand-orange" />
            </div>
          </div>
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-orange font-semibold">Garantia incondicional</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Você não corre nenhum risco</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Tenho total confiança no <strong className="text-foreground">Comandando o S-Log</strong>. Por isso, você tem
              <strong className="text-foreground"> 7 dias de garantia incondicional</strong>. Se não fizer sentido pra você,
              basta solicitar o reembolso e devolvemos <strong className="text-foreground">100% do valor investido</strong> — sem perguntas, sem burocracia.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield size={16} className="text-brand-orange" />
                Compra protegida
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="flex items-center gap-2">
                <Lock size={16} className="text-brand-orange" />
                Pagamento seguro
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Este curso é apenas para quem tem câmera Sony?", a: "Sim. O Comandando o S-Log foi desenvolvido especificamente para usuários de câmeras Sony. Todo o conteúdo, exemplos, configurações, espaços de cor e fluxos de trabalho apresentados no curso são baseados nos perfis S-Log das câmeras Sony. Se você utiliza outra marca, alguns conceitos podem ser aproveitados, mas o curso foi pensado e gravado para usuários do ecossistema Sony." },
    { q: "Sou iniciante. Este curso é para mim?", a: "Sim. O curso foi criado justamente para quem está começando no universo do S-Log. Todo o conteúdo foi organizado em uma sequência lógica, começando pelos fundamentos e avançando gradualmente até a gravação e edição dos arquivos. Você não precisa ter experiência prévia com colorização ou correção de cor." },
    { q: "Nunca gravei em S-Log. Vou conseguir acompanhar?", a: "Com certeza. O curso foi pensado exatamente para quem nunca utilizou S-Log antes. Inclusive, durante as aulas você acompanha o processo de aprendizado de um filmmaker iniciante aprendendo o tema do zero, tornando a experiência muito mais prática e didática." },
    { q: "Preciso ter um monitor externo para fazer o curso?", a: "Não. Você aprenderá a utilizar as ferramentas disponíveis na própria câmera, como Gamma Display Assist e Zebras. Existe uma aula específica sobre monitores externos porque eles podem facilitar o processo, mas eles não são obrigatórios para aplicar o que é ensinado no curso." },
    { q: "O curso ensina edição e correção de cor?", a: "Não é um curso sobre edição. O foco é te ensinar principalmente a captar usando o S-Log da forma correta. Porém, além da captação, o curso também mostra o fluxo correto para trabalhar arquivos S-Log no Adobe Premiere. Você aprenderá sobre transformação de espaço de cor, correção primária, como usar os LUTs disponibilizados e o processo utilizado para finalizar imagens em S-Log." },
    { q: "Preciso saber Adobe Premiere para acompanhar?", a: "Não necessariamente. Ter uma noção básica do programa ajuda, mas o foco do curso não é ensinar edição do zero. O objetivo é ensinar o fluxo correto de trabalho com arquivos S-Log dentro do Premiere de forma simples e prática." },
    { q: "Vou receber acesso imediato após a compra?", a: "Sim. Assim que o pagamento for confirmado, você receberá acesso imediato à plataforma para começar a assistir às aulas." },
    { q: "Por quanto tempo terei acesso ao curso?", a: "Você terá acesso por 1 ano completo. Assim poderá assistir às aulas no seu ritmo e revisitar os conteúdos sempre que precisar." },
    { q: "E se eu perceber que o curso não é para mim?", a: "Você estará protegido pela garantia de 7 dias. Se dentro desse período você entender que o curso não atende às suas expectativas, basta solicitar o reembolso e receberá seu dinheiro de volta conforme as regras da plataforma." },
    { q: "O curso ensina apenas configurações ou também o raciocínio por trás do S-Log?", a: "O principal objetivo do curso é ensinar o raciocínio. Você aprenderá configurações, mas também entenderá por que elas funcionam. A ideia não é fazer você decorar números ou copiar presets. A ideia é fazer você entender como o S-Log funciona para conseguir tomar decisões com confiança em qualquer situação." },
  ];
  return (
    <section id="faq" className="relative py-16 md:py-20 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-orange">FAQ</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Perguntas frequentes</h2>
          <p className="mt-4 text-muted-foreground">Tudo o que você precisa saber antes de começar.</p>
        </div>
        <div className="space-y-3">
          {items.map((i, idx) => (
            <details key={i.q} className="group rounded-xl border border-border bg-background/70 backdrop-blur-sm overflow-hidden" open={idx === 0}>
              <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-4 hover:bg-card/60 transition">
                <span className="font-semibold text-foreground">{i.q}</span>
                <span className="w-8 h-8 rounded-md border border-border grid place-items-center text-brand-orange group-open:rotate-45 transition-transform shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{i.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-brand-orange font-semibold mb-4 animate-pulse">Vagas limitadas — não perca essa oportunidade</p>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-orange-gradient rounded-xl blur opacity-60 animate-pulse" />
            <a href="#oferta" className="relative inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-orange-gradient text-primary-foreground font-bold text-lg shadow-glow hover:scale-[1.03] transition animate-pulse-glow">
              🚀 Quero Comandar o S-Log <ArrowRight size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Vinicius Lisboa Filmmaker" className="h-12 w-auto" />
        </div>
        <div className="flex items-center gap-6">
          <a href={YT_URL} target="_blank" rel="noreferrer" className="hover:text-brand-orange transition">YouTube</a>
          <a href={IG_URL} target="_blank" rel="noreferrer" className="hover:text-brand-orange transition">Instagram</a>
        </div>
        <p>© {new Date().getFullYear()} Vinicius Lisboa HD. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Why />
      <About />
      <Testimonials />
      <Course />
      <Bonuses />
      <Offer />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
