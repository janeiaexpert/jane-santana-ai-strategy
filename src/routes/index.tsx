import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/jane-hero.jpeg";
import aboutImg from "@/assets/jane-about.jpeg";
import ctaImg from "@/assets/jane-cta.jpeg";
import { ArrowRight, Check, Instagram, Sparkles, Target, TrendingUp, Workflow } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const CTA_LINK = "#contato";

function GoldButton({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "outline" }) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300";
  if (variant === "outline") {
    return (
      <a href={href} target="_blank" rel="noopener" className={`${base} border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground`}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`${base} text-primary-foreground shadow-gold hover:translate-y-[-2px] hover:shadow-elegant`}
      style={{ background: "var(--gradient-gold)" }}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-gold" />
          <span className="font-display text-lg tracking-wide">Jane Santana</span>
        </div>
        <a href={CTA_LINK} target="_blank" rel="noopener" className="hidden items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition hover:border-gold hover:text-gold md:inline-flex">
          Falar com Jane
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark pb-20 pt-32 lg:pt-40">
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full opacity-10 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Consultora Master de IA
          </div>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Pare de operar <span className="text-gradient-gold">no caos.</span><br />
            Comece a operar <span className="italic font-medium">por sistema.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Implemento <span className="text-foreground">processos e Sistema de Inteligência</span> para empreendedores que já faturam — e estão prontos para escalar com clareza, margem e domínio total da operação.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <GoldButton href={CTA_LINK}>Quero meu diagnóstico</GoldButton>
            <GoldButton href={CTA_LINK} variant="outline">Ver como funciona</GoldButton>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/50 pt-8 text-left">
            {[
              { k: "+R$5k", v: "faturamento mínimo" },
              { k: "100%", v: "implementação prática" },
              { k: "1:1", v: "consultoria sob medida" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl text-gold sm:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl" style={{ background: "var(--gradient-gold)" }} />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 shadow-elegant">
            <img src={heroImg} alt="Jane Santana, Consultora Master de IA" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    "Você fatura, mas não sabe exatamente de onde vem o lucro.",
    "A operação depende inteiramente de você — e isso trava o crescimento.",
    "Tarefas se acumulam, decisões atrasam e dinheiro escapa por falta de processo.",
    "Você sente que poderia escalar, mas não tem o sistema para sustentar.",
  ];
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Diagnóstico sem rodeio</p>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Faturar não é o problema.<br />
          <span className="text-gradient-gold">Operar no caos é.</span>
        </h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 text-left">
          {items.map((t) => (
            <div key={t} className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5 transition hover:border-gold/40">
              <div className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-gold/40 text-gold">✕</div>
              <p className="text-base text-foreground/90">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative bg-gradient-dark py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[5fr_6fr] lg:px-10">
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 shadow-elegant">
            <img src={aboutImg} alt="Jane Santana" className="h-full w-full object-cover" />
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Sobre Jane</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Direta, estratégica e <span className="text-gradient-gold">imponente.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Não vendo ilusão. <span className="text-foreground">Entrego direção.</span> Como Consultora Master de IA, eu enxergo o gargalo, exponho o erro e construo com você um Sistema de Inteligência que devolve margem, tempo e controle.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Trabalho com quem já fatura R$5k+/mês e está cansado de improvisar. Aqui se constrói operação — não promessa.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Análise cirúrgica do seu modelo atual",
              "Implementação de IA aplicada ao seu negócio",
              "Processos que rodam sem depender de você",
              "Margem maior, decisão mais rápida, lucro previsível",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground/90">
                <Check className="mt-1 h-5 w-5 flex-none text-gold" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <a href="https://instagram.com" target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-gold">
            <Instagram className="h-4 w-4" /> @instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    { icon: Target, title: "01 · Diagnóstico", desc: "Mapeamos onde o dinheiro escapa, onde o processo falha e onde a IA acelera." },
    { icon: Workflow, title: "02 · Sistema", desc: "Construímos o Sistema de Inteligência sob medida: fluxos, automações e governança." },
    { icon: TrendingUp, title: "03 · Escala", desc: "Implementamos, treinamos e ajustamos até a operação rodar com margem e previsibilidade." },
  ];
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">O método</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Três movimentos. <span className="text-gradient-gold">Zero rodeio.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:border-gold/50 hover:shadow-gold">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 text-gold">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-gradient-dark py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 50%, oklch(0.78 0.12 80 / 0.25), transparent 60%)" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 rounded-[2rem] opacity-25 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 shadow-elegant">
            <img src={ctaImg} alt="Jane Santana convidando você para a próxima etapa" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Sua próxima decisão</p>
          <h2 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Você já fatura.<br />
            Agora é hora de <span className="text-gradient-gold">escalar com sistema.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Vagas limitadas para consultoria 1:1. Se você está pronto para parar de perder dinheiro no improviso, fale comigo agora.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <GoldButton href={CTA_LINK}>Agendar diagnóstico</GoldButton>
            <GoldButton href={CTA_LINK} variant="outline">Falar no WhatsApp</GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row lg:px-10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-gold" />
          <span className="font-display tracking-wide text-foreground">Jane Santana</span>
          <span className="text-muted-foreground/70">— Consultora Master de IA</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 transition hover:text-gold">
            <Instagram className="h-4 w-4" /> @instagram
          </a>
          <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Pain />
      <About />
      <Method />
      <FinalCTA />
      <Footer />
    </main>
  );
}
