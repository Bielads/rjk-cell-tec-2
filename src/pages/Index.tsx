import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Cable,
  Check,
  Clock3,
  Headphones,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Wrench,
  X,
} from "lucide-react";
import heroImage from "@/assets/generated/hero-acessorios-assistencia.webp";
import accessoriesImage from "@/assets/generated/variedade-acessorios-celular.webp";
import repairImage from "@/assets/generated/tecnico-reparo-celular.webp";
import serviceImage from "@/assets/generated/atendimento-especializado.webp";
import storePhotos from "@/assets/uploads/16014.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const phoneNumber = "5511987625859";
const whatsappLink = `https://wa.me/${phoneNumber}`;
const whatsappLinkWithMessage = (message: string) =>
  `${whatsappLink}?text=${encodeURIComponent(message)}`;
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Rua+Jacintho+Pereira%2C+411%2C+Parque+Panamericano%2C+S%C3%A3o+Paulo";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Categorias", href: "#categorias" },
  { label: "Assistência técnica", href: "#assistencia" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const categories = [
  {
    title: "Capinhas",
    description: "Mais estilo e proteção para o seu aparelho.",
    image: "https://picsum.photos/seed/rjk-capinhas/720/560",
    icon: ShieldCheck,
  },
  {
    title: "Películas",
    description: "Uma opção extra de cuidado para a tela.",
    image: "https://picsum.photos/seed/rjk-peliculas/720/560",
    icon: ShieldCheck,
  },
  {
    title: "Carregadores",
    description: "Acessórios para manter seu celular carregado.",
    image: "https://picsum.photos/seed/rjk-carregadores/720/560",
    icon: BatteryCharging,
  },
  {
    title: "Fones de ouvido",
    description: "Opções de áudio para acompanhar sua rotina.",
    image: "https://picsum.photos/seed/rjk-fones/720/560",
    icon: Headphones,
  },
  {
    title: "Suportes",
    description: "Mais praticidade para usar seu celular.",
    image: "https://picsum.photos/seed/rjk-suportes/720/560",
    icon: Smartphone,
  },
  {
    title: "Acessórios para celular",
    description: "Consulte outras opções disponíveis na loja.",
    image: "https://picsum.photos/seed/rjk-acessorios/720/560",
    icon: Cable,
  },
];

function WhatsAppButton({
  children,
  className,
  message,
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
}) {
  return (
    <Button asChild className={className}>
      <a href={message ? whatsappLinkWithMessage(message) : whatsappLink} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Button>
  );
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      <div className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center text-xs font-medium sm:text-sm">
          <span>Acessórios para celular e assistência técnica em São Paulo</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <a href="#inicio" className="flex shrink-0 items-center" aria-label="RJK Cell Tec, início">
            <span className="leading-tight">
              <span className="block font-display text-xl font-extrabold tracking-tight">
                RJK <span className="text-primary">CELL TEC</span>
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.19em] text-muted-foreground">
                Acessórios & assistência
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegação principal">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 xl:block">
            <WhatsAppButton className="gap-2 rounded-full px-5">
              <MessageCircle className="h-4 w-4" />
              Fale pelo WhatsApp
            </WhatsAppButton>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,360px)]">
              <SheetHeader>
                <SheetTitle className="text-left font-display">
                  RJK <span className="text-primary">CELL TEC</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Menu para celular">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <WhatsAppButton className="mt-7 w-full gap-2">
                <MessageCircle className="h-4 w-4" />
                Fale pelo WhatsApp
              </WhatsAppButton>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section id="inicio" className="relative isolate overflow-hidden bg-foreground text-background">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 left-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8 lg:py-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3.5 py-2 text-xs font-semibold tracking-wide text-background/80">
              <span className="h-2 w-2 rounded-full bg-primary" />
              RJK CELL TEC <span className="text-primary">·</span> SÃO PAULO
            </div>
            <h1 className="max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.65rem]">
              Acessórios e assistência{" "}
              <span className="text-primary">para cuidar do seu celular.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-background/70 sm:text-lg sm:leading-8">
              Encontre acessórios para a sua rotina e converse com a equipe sobre manutenção e reparos.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-background/15 bg-background/5 px-3 py-1.5 text-xs font-medium text-background/80">Capinhas, películas e mais</span>
              <span className="rounded-full border border-background/15 bg-background/5 px-3 py-1.5 text-xs font-medium text-background/80">Assistência técnica</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                className="h-12 gap-2 rounded-full px-6 text-sm"
                message="Olá! Gostaria de saber mais sobre a RJK Cell Tec."
              >
                <MessageCircle className="h-4 w-4" />
                Fale com a nossa equipe
                <ArrowRight className="ml-1 h-4 w-4" />
              </WhatsAppButton>
              <Button asChild variant="outline" className="h-12 rounded-full border-background/30 bg-transparent px-6 text-background hover:bg-background/10 hover:text-background">
                <a href="#produtos">Conheça os produtos</a>
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-background/15 pt-6">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold">Acessórios para o dia a dia</span>
              </div>
              <div className="hidden h-7 w-px bg-background/20 sm:block" />
              <span className="text-sm text-background/60">Atendimento próximo em São Paulo</span>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-primary/20 blur-sm" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-background/10" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-background/15 bg-background/5 shadow-2xl shadow-black/30">
              <img
                src={heroImage}
                alt="Imagem ilustrativa de acessórios e assistência técnica para celulares"
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:aspect-[1.13/1]"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/95 p-4 text-foreground shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-6">
                <div>
                  <p className="font-display text-sm font-bold sm:text-base">Seu celular, bem cuidado.</p>
                  <p className="mt-1 text-xs text-muted-foreground">Produtos e suporte pertinho de você.</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowDown className="h-5 w-5" />
                </span>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-background/50">Imagem ilustrativa de produtos e serviços</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/60">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:gap-8 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold">Atendimento de confiança</p>
              <p className="mt-1 text-xs text-muted-foreground">Uma equipe pronta para ajudar</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
              <BatteryCharging className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold">Variedade para sua rotina</p>
              <p className="mt-1 text-xs text-muted-foreground">Acessórios para diferentes necessidades</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
              <Wrench className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold">Assistência técnica</p>
              <p className="mt-1 text-xs text-muted-foreground">Manutenção e reparos de celulares</p>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="relative overflow-hidden bg-muted/50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Vitrine RJK Cell Tec</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Acessórios para acompanhar você.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Explore as categorias e consulte nossa equipe sobre opções disponíveis na loja.
              </p>
            </div>
            <WhatsAppButton
              className="w-fit shrink-0 gap-2 rounded-full px-5"
              message="Olá! Gostaria de consultar os acessórios disponíveis na RJK Cell Tec."
            >
              Consultar pelo WhatsApp <ArrowRight className="h-4 w-4" />
            </WhatsAppButton>
          </div>
          <div id="categorias" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ title, description, image, icon: Icon }) => (
              <Card key={title} className="group overflow-hidden gap-0 border-border/80 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={image}
                    alt={`Imagem provisória para a categoria ${title}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-background/50 bg-background/90 text-primary shadow-sm backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <CardContent className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 min-h-10 text-sm leading-5 text-muted-foreground">{description}</p>
                  <a
                    href={whatsappLinkWithMessage(`Olá! Gostaria de consultar ${title.toLowerCase()} na RJK Cell Tec.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-primary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Consultar disponibilidade <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Imagens provisórias ilustrativas; consulte a equipe para conhecer as opções da loja.</p>
        </div>
      </section>

      <section id="assistencia" className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Assistência técnica</p>
            <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Seu celular precisa de um reparo?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-background/70">
              Conte com a equipe da RJK Cell Tec para manutenção e reparos.
              Converse com a gente, explique o que aconteceu e peça um orçamento.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Manutenção e reparos de celulares",
                "Atendimento atencioso para entender o problema",
                "Orçamento direto com a nossa equipe",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-background/10 bg-background/5 p-4 text-sm font-medium leading-6">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <WhatsAppButton
              className="mt-8 gap-2 rounded-full px-6"
              message="Olá! Gostaria de solicitar um orçamento para assistência técnica na RJK Cell Tec."
            >
              <MessageCircle className="h-4 w-4" />
              Pedir orçamento
            </WhatsAppButton>
          </div>
          <div className="relative">
            <img
              src={repairImage}
              alt="Imagem ilustrativa de manutenção e reparo de celular"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-foreground shadow-lg sm:left-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Wrench className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold">Cuidado especializado</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Fale com um profissional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative">
            <img
              src={serviceImage}
              alt="Imagem ilustrativa de atendimento em loja de acessórios para celular"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-bold shadow-md sm:left-6 sm:top-6">
              Acessórios & assistência
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Sobre a RJK Cell Tec</p>
            <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Uma loja feita para cuidar do que conecta você.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              A RJK Cell Tec reúne acessórios para celulares e assistência técnica
              em São Paulo, com atendimento próximo para ajudar você a encontrar
              o que precisa para o seu aparelho.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Visite a loja para conhecer o espaço e converse com nossa equipe
              sobre acessórios ou manutenção do seu celular.
            </p>
            <div className="mt-7 flex items-center gap-3 border-l-2 border-primary pl-4">
              <span className="text-sm font-bold">Atendimento próximo, variedade e cuidado.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Por dentro da RJK Cell Tec</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Conheça nossa loja.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Veja nossa fachada, o interior da loja e outro ângulo do espaço. Um pouco do lugar onde você encontra acessórios e atendimento especializado.
            </p>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-background p-2 shadow-lg">
              <img
                src={storePhotos}
                alt="Fotografias reais da RJK Cell Tec: fachada, interior da loja e fachada em outro ângulo"
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-[1rem] object-contain"
              />
            </div>
            <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Estamos em São Paulo</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">
                Um espaço para cuidar do seu celular.
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Na RJK Cell Tec, você encontra variedade de acessórios e uma equipe pronta para ajudar com manutenção e reparos.
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm font-semibold">Rua Jacintho Pereira, 411</p>
                <p className="mt-1 text-sm text-muted-foreground">Parque Panamericano, São Paulo - SP</p>
              </div>
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
              >
                Ver como chegar <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Avaliações da loja</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                Consulte as avaliações reais da RJK Cell Tec.
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Veja comentários e informações atualizadas diretamente no Google.
              </p>
            </div>
            <Button asChild className="min-h-11 shrink-0 gap-2 rounded-full px-5">
              <a href={mapsLink} target="_blank" rel="noreferrer">
                Ver no Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[1.75rem] bg-primary text-primary-foreground">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/75">Estamos por aqui</p>
              <h2 className="mt-4 max-w-lg font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Venha visitar a RJK Cell Tec.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-primary-foreground/80">
                Precisa de um acessório ou quer conversar sobre um reparo?
                Chame nossa equipe ou passe na loja.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary" className="h-12 gap-2 rounded-full px-6">
                  <a href={whatsappLinkWithMessage("Olá! Gostaria de falar com a equipe da RJK Cell Tec.")} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 gap-2 rounded-full border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href="tel:+5511987625859">
                    <Phone className="h-4 w-4" />
                    Ligar para a loja
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 bg-foreground p-7 text-background sm:p-10 lg:p-12">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold">Endereço</h3>
                  <p className="mt-2 text-sm leading-6 text-background/70">
                    Rua Jacintho Pereira, 411<br />
                    Parque Panamericano, São Paulo - SP<br />
                    CEP 02992-130
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background/10 text-primary">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold">Horário</h3>
                  <p className="mt-2 text-sm leading-6 text-background/70">
                    Consulte os horários atualizados<br />
                    pelo WhatsApp
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold">Telefone</h3>
                  <a href="tel:+5511987625859" className="mt-2 block text-sm text-background/70 transition-colors hover:text-background">
                    (11) 98762-5859
                  </a>
                </div>
              </div>
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
              >
                Ver rota no mapa <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <a href="#inicio" className="font-display text-sm font-extrabold tracking-tight">
            RJK <span className="text-primary">CELL TEC</span>
          </a>
          <p className="text-xs text-muted-foreground">
            Acessórios para celular e assistência técnica em São Paulo.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-xs font-semibold text-primary hover:underline">
            Fale com a nossa equipe
          </a>
        </div>
      </footer>
      <a
        href={whatsappLinkWithMessage("Olá! Gostaria de falar com a RJK Cell Tec.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale com a RJK Cell Tec pelo WhatsApp"
        className="fixed bottom-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </main>
  );
}
