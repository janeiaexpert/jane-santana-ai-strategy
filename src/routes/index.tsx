import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Instagram, Menu, Search, Settings, Target, X } from "lucide-react";
import janePerfil from "@/assets/jane-perfil.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "5581994707455";
const WHATSAPP_MESSAGE = "Olá, Jane! Vim pela sua página e quero organizar minha operação para escalar.";
const CTA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Abre o WhatsApp em uma aba nova. Se o navegador bloquear a aba nova,
// navega na própria aba — assim o botão sempre funciona.
function openWhatsApp(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  const opened = window.open(CTA_LINK, "_blank");
  if (opened) {
    opened.opener = null;
    return;
  }
  window.location.href = CTA_LINK;
}

function GoldButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 text-sm font-bold tracking-[0.12em] uppercase transition-all duration-300";
  if (variant === "outline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        onClick={openWhatsApp}
        className={`${base} border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onClick={openWhatsApp}
      className={`${base} text-primary-foreground shadow-gold hover:translate-y-[-2px] hover:shadow-elegant ${className}`}
      style={{ background: "var(--gradient-gold)" }}
    >
      {children}
    </a>
  );
}

function ProfilePhoto({ size = "md" }: { size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-40 w-40 sm:h-48 sm:w-48" : "h-28 w-28 sm:h-32 sm:w-32";
  return (
    <div className={`${dims} rounded-full p-1 shadow-gold`} style={{ background: "var(--gradient-gold)" }}>
      <img
        src={janePerfil.url}
        alt="Jane Santana, Consultora Master de IA"
        className="h-full w-full rounded-full border-4 border-background object-cover"
      />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Método", href: "#metodo" },
    { label: "Sobre Jane", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <div className="relative">
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 text-gold transition hover:bg-gold/10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          {open && (
            <nav className="absolute left-0 top-12 w-52 rounded-xl border border-gold/30 bg-card/95 p-2 shadow-elegant backdrop-blur">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-gold/10 hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener"
                className="mt-1 block rounded-lg px-4 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold/10"
              >
                Falar com Jane
              </a>
            </nav>
          )}
        </div>
        <span className="font-display text-xl tracking-wide text-foreground">Jane Santana</span>
        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener"
          className="hidden items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-primary-foreground md:inline-flex"
        >
          Falar com Jane
        </a>
        <span className="md:hidden h-10 w-10" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      {/* Atmosphere */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 65%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(color-mix(in oklab, var(--gold) 60%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--gold) 60%, transparent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 pb-20 pt-32 text-center lg:min-h-[92vh] lg:px-10 lg:pb-28 lg:pt-40">
        <ProfilePhoto size="lg" />
        <div className="h-8" />
        {/* Top gold rule */}
        <div className="mb-8 flex items-center gap-4 text-gold">
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-[10px] uppercase tracking-[0.4em]">Jane Santana</span>
          <span className="h-px w-10 bg-gold/60" />
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Consultora Master de IA
        </div>

        <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[72px]">
          Negócio organizado,<br />
          lucro previsível.<br />
          <span className="text-gradient-gold">Comece a escalar.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Saia do caos operacional e assuma o controle com{" "}
          <span className="text-foreground">Sistemas de Inteligência</span> para quem já fatura.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <GoldButton href={CTA_LINK} className="w-full sm:w-auto">
            Quero minha consultoria <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </GoldButton>
        </div>

        {/* Stats / authority strip */}
        <div className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-gold/20 bg-gold/10">
          {[
            ["+R$5k", "ticket mínimo de quem atendo"],
            ["IA", "implementada com método"],
            ["100%", "direção, sem ilusão"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background/80 px-4 py-5 text-center backdrop-blur">
              <div className="text-gradient-gold font-display text-2xl font-bold sm:text-3xl">{n}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items: Array<[string, string]> = [
    ["Seu dinheiro some no", "final do mês?"],
    ["Seu negócio", "só roda se você estiver?"],
    ["O crescimento te", "sobrecarrega?"],
    ["Tudo bagunçado", "e sem controle?"],
  ];
  return (
    <section className="bg-cream py-20 text-cream-foreground">
      <div className="mx-auto max-w-3xl space-y-6 px-6 text-center sm:space-y-7 lg:px-10">
        {items.map(([a, b], i) => (
          <p key={i} className="font-display text-2xl leading-tight sm:text-3xl lg:text-4xl">
            {i % 2 === 0 ? (
              <>
                <span className="font-normal">{a} </span>
                <span className="font-bold">{b}</span>
              </>
            ) : (
              <>
                <span className="font-bold">{a} </span>
                <span className="font-normal">{b}</span>
              </>
            )}
          </p>
        ))}
      </div>
    </section>
  );
}

function GoldBanner() {
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="text-gradient-gold font-display text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
          É hora de ter lucro de verdade,<br />não apenas faturar.
        </h2>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    {
      icon: Search,
      title: "Diagnóstico Completo",
      desc: "Identificamos o erro e o desperdício de dinheiro.",
    },
    {
      icon: Target,
      title: "Processos Padronizados",
      desc: "Atendimento e operação estruturados.",
    },
    {
      icon: Settings,
      title: "Implementação IA Inteligente",
      desc: "Automação que aumenta vendas sem perder personalização.",
    },
  ];
  return (
    <section id="metodo" className="bg-cream py-16 text-cream-foreground">
      <div className="mx-auto grid max-w-5xl gap-5 px-6 sm:grid-cols-3 lg:px-10">
        {steps.map((s) => (
          <div key={s.title} className="rounded-xl border border-cream-foreground/10 bg-background/[0.02] p-7 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cream-foreground/5 text-cream-foreground">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-foreground/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BeforeAfter() {
  const before = [
    "Trabalho o dia inteiro, lucro zero.",
    "Negócio refém de você.",
    "Perda de clientes.",
    "Sobrecarregado com o crescimento.",
  ];
  const after = [
    "Lucro previsível e real.",
    "Negócio organizado e escalável.",
    "Mais vendas, menos esforço.",
    "Previsibilidade e controle.",
  ];
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-border lg:px-10">
        <div className="sm:pr-10">
          <h3 className="font-display text-2xl font-bold text-muted-foreground sm:text-3xl">Antes (Caos)</h3>
          <ul className="mt-6 space-y-4">
            {before.map((t) => (
              <li key={t} className="flex items-start gap-3 text-muted-foreground">
                <X className="mt-1 h-4 w-4 flex-none text-muted-foreground/60" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:pl-10">
          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Depois <span className="text-gradient-gold">(Controle)</span>
          </h3>
          <ul className="mt-6 space-y-4">
            {after.map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground/90">
                <Check className="mt-1 h-4 w-4 flex-none text-gold" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-cream py-16 text-cream-foreground">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cream-foreground/60">Sobre Jane</p>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Sua guia para a <span className="italic">escala.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-foreground/80">
            Sou a especialista que <span className="font-semibold">corta o erro</span> e te guia para a solução com lógica. Direta, estratégica e didática — não vendo ilusão, entrego direção.
          </p>
          <p className="mt-3 text-base leading-relaxed text-cream-foreground/80">
            Como <span className="font-semibold">Consultora Master de IA</span>, implemento processos e Sistemas de Inteligência para empreendedores que já faturam R$5k+/mês e querem parar de operar no caos.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%)" }} />
      </div>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center lg:px-10 lg:py-28">
        <ProfilePhoto />
        <div className="h-8" />
        <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Tenha o negócio organizado e<br />
          <span className="text-gradient-gold">escalável que você merece.</span>
        </h2>
        <div className="mt-10 flex justify-center">
          <GoldButton href={CTA_LINK}>
            Agende sua consultoria agora <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </GoldButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row md:items-center lg:px-10">
        <div>
          <div className="font-display text-base text-foreground">Jane Santana</div>
          <div className="text-xs text-muted-foreground/70">© {new Date().getFullYear()} Jane Santana</div>
        </div>
        <a href="https://instagram.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 transition hover:text-gold">
          <Instagram className="h-4 w-4" /> @instagram
        </a>
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
      <GoldBanner />
      <Method />
      <BeforeAfter />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
