/**
 * Conteúdo da landing page da CINE Produtora.
 * Fonte única de verdade — todo texto/dado real vem do site atual do
 * cliente (cineprodutora.com.br). Itens sem origem confirmada estão
 * marcados com `placeholder: true` e comentário PLACEHOLDER.
 */

export const site = {
  name: "CINE Produtora",
  shortName: "CINE",
  founder: "Bruno Mouts",
  foundedYear: 2018,
  city: "Rio Verde",
  state: "GO",
  tagline: "Experiência que gera valor",
  // base "/" em prod; ajustado pelo Astro `site` para canonical/og
  url: "https://cineprodutora.com.br",
  email: "contato@cineprodutora.com.br",
  description:
    "Transformamos convenções, dias de campo e histórias institucionais em filmes com estética cinematográfica que geram percepção de valor, conexão e resultado.",
  whatsapp: {
    number: "5564992259262",
    display: "+55 64 99225-9262",
    message: "Olá, vim do site e gostaria de solicitar um orçamento!",
  },
  social: {
    instagram: "https://www.instagram.com/cine.produtora/",
    founderInstagram: "https://www.instagram.com/brunomouts/",
  },
} as const;

export function whatsappHref(message = site.whatsapp.message): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
] as const;

/** Frases que rodam no marquee (todas derivadas do posicionamento real). */
export const marquee = [
  "Estética cinematográfica",
  "Agronegócio",
  "Indústria",
  "Filmes de marca",
  "Tempo real",
  "Resultado",
] as const;

export const about = {
  label: "Sobre",
  heading: "A CINE nasceu pelas lentes de um único olhar.",
} as const;

export type Service = {
  title: string;
  description: string;
  /** vídeo de fundo (case real .mp4) que roda em loop mudo no card */
  media: string;
};

/** Serviços — exatamente os 5 listados no site atual. */
export const services: Service[] = [
  {
    title: "Vídeos institucionais e filmes de marca",
    description:
      "Produções que contam a história da empresa, fortalecem posicionamento e constroem autoridade no mercado.",
    media:
      "https://cineprodutora.com.br/wp-content/uploads/2026/02/VT-Sudoeste-CINE-v2.mp4",
  },
  {
    title: "Cobertura completa de eventos corporativos",
    description:
      "Foto e vídeo com entregas em tempo real, gerando conteúdo imediato para redes sociais e comunicação interna.",
    media:
      "https://cineprodutora.com.br/wp-content/uploads/2026/02/Conceito-Aloha-CINE.mp4",
  },
  {
    title: "Produção de documentários",
    description:
      "Narrativas profundas e envolventes que valorizam histórias, projetos, pessoas e trajetórias empresariais.",
    media:
      "https://cineprodutora.com.br/wp-content/uploads/2026/02/DELICIA-DO-DIA-PESSOAS.mp4",
  },
  {
    title: "Vídeos curtos verticais para redes sociais",
    description:
      "Conteúdos estratégicos e dinâmicos, pensados para gerar alcance, engajamento e conexão com o público digital.",
    media:
      "https://cineprodutora.com.br/wp-content/uploads/2026/02/Campos-Elisios-Reserva-Dourada-Anuncio-V3.mp4",
  },
  {
    title: "Captação e edição de cursos, palestras e mentorias",
    description:
      "Produção completa para transformar conhecimento em produtos digitais profissionais, organizados e com alta qualidade audiovisual.",
    media:
      "https://cineprodutora.com.br/wp-content/uploads/2026/02/Agricompany-V3.mp4",
  },
];

export type Work = {
  title: string;
  category: string;
  /** URL do vídeo hospedado pelo cliente (cases reais do site atual). */
  src: string;
  type: "video/mp4" | "video/quicktime";
  /** poster opcional; quando ausente, usamos um placeholder gradiente. */
  poster?: string;
};

/** Portfólio — cases reais (arquivos servidos pelo próprio cliente). */
export const works: Work[] = [
  {
    title: "Brisas Habitat",
    category: "Filme de marca",
    src: "/videos/brisas-habitat.mp4",
    type: "video/mp4",
    poster: "/posters/brisas-habitat.jpg",
  },
  {
    title: "Conceito Aloha",
    category: "Filme de marca",
    src: "/videos/conceito-aloha.mp4",
    type: "video/mp4",
    poster: "/posters/conceito-aloha.jpg",
  },
  {
    title: "Campos Elísios · Reserva Dourada",
    category: "Anúncio",
    src: "/videos/campos-elisios.mp4",
    type: "video/mp4",
    poster: "/posters/campos-elisios.jpg",
  },
  {
    title: "Delícia do Dia · Pessoas",
    category: "Institucional",
    src: "/videos/delicia-do-dia.mp4",
    type: "video/mp4",
    poster: "/posters/delicia-do-dia.jpg",
  },
  {
    title: "Agricompany",
    category: "Agronegócio",
    src: "/videos/agricompany.mp4",
    type: "video/mp4",
    poster: "/posters/agricompany.jpg",
  },
  {
    title: "Rações COMIGO · Jingle",
    category: "Agronegócio",
    src: "/videos/comigo-jingle.mp4",
    type: "video/mp4",
    poster: "/posters/comigo-jingle.jpg",
  },
  {
    title: "VT Sudoeste",
    category: "Institucional",
    src: "/videos/vt-sudoeste.mp4",
    type: "video/mp4",
    poster: "/posters/vt-sudoeste.jpg",
  },
  {
    title: "Pop List · Armazéns",
    category: "Varejo",
    src: "/videos/pop-list.mp4",
    type: "video/mp4",
    poster: "/posters/pop-list.jpg",
  },
];

/** Segmentos atendidos (texto real do site). */
export const segments = [
  "Agronegócio",
  "Indústria",
  "Saúde",
  "Varejo",
  "Eventos corporativos",
] as const;

/**
 * Logos de clientes reais (PNGs brancos sobre transparente), baixados do site
 * do cliente para `public/clientes/` (auto-hospedados: rápidos e confiáveis).
 * Monte Verde e COMIGO são reais; os demais nomes são EXEMPLOS (placeholder)
 * que o cliente substitui pelos oficiais depois.
 */
export const clientLogos = [
  { name: "Agropecuária Monte Verde", src: "/clientes/cli-17.png" },
  { name: "COMIGO", src: "/clientes/comigo.png" },
  { name: "Núcleo", src: "/clientes/cli-8.png" },
  { name: "IDEG", src: "/clientes/cli-9.png" },
  { name: "Grupo Aurora", src: "/clientes/cli-10.png" },
  { name: "Habitat Construtora", src: "/clientes/cli-11.png" },
  { name: "Rio Imune", src: "/clientes/cli-12.png" },
  { name: "Vértice Agro", src: "/clientes/cli-13.png" },
  { name: "Conceito Studio", src: "/clientes/cli-14.png" },
  { name: "Base Capital", src: "/clientes/cli-15.png" },
  { name: "Galvão & Cia", src: "/clientes/cli-16.png" },
] as const;

/** Bloco de vídeo em loop (estilo referência: vídeo mudo rodando + texto). */
export const videoFeature = {
  label: "Estrutura",
  heading: "Linguagem de cinema, do briefing à entrega.",
  body: "Direção, captação e finalização sob o mesmo olhar criativo. Convenções, dias de campo e sets institucionais conduzidos com agilidade de entrega e foco no resultado do seu negócio.",
  media: "/videos/brisas-habitat.mp4",
} as const;

/** Etapas do processo — derivadas do posicionamento (agilidade + resultado). */
export const process = [
  {
    step: "01",
    title: "Briefing & estratégia",
    description:
      "Entendemos o objetivo de negócio antes de pensar em câmera. O vídeo começa na conversa.",
  },
  {
    step: "02",
    title: "Direção & captação",
    description:
      "Linguagem de cinema em campo: convenções, dias de campo e set institucional com olhar autoral.",
  },
  {
    step: "03",
    title: "Edição & finalização",
    description:
      "Montagem, cor e som que transformam material bruto em narrativa com percepção de valor.",
  },
  {
    step: "04",
    title: "Entrega & tempo real",
    description:
      "Cortes ágeis para redes e entregas em tempo real quando o evento pede velocidade.",
  },
] as const;

/**
 * Números de destaque.
 * PLACEHOLDER: valores ilustrativos — substituir pelos dados reais da CINE
 * antes de publicar. Apenas `foundedYear` e a contagem de serviços são reais.
 */
export const stats = [
  { value: "+120", label: "Projetos entregues", placeholder: true },
  { value: "+40", label: "Marcas atendidas", placeholder: true },
  { value: "5", label: "Frentes de produção", placeholder: false },
] as const;

/**
 * Depoimentos de EXEMPLO (placeholder). O site atual não publica depoimentos;
 * o conteúdo abaixo é fictício e marcado como exemplo. Substituir por
 * citações reais de clientes antes de publicar.
 */
export const testimonials = [
  {
    quote:
      "Aprendi muito com ele. A CINE transforma qualquer briefing em cinema de verdade.",
    author: "Quentin Tarantino",
    role: "Cineasta",
    placeholder: true,
  },
  {
    quote:
      "Entregaram nossa convenção com a estética de um filme e a agilidade que o evento exigia. Virou referência interna.",
    author: "Mariana Alves",
    role: "Diretora de Marketing · Agroindústria Exemplo",
    placeholder: true,
  },
] as const;
