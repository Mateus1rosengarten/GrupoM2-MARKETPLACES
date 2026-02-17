import { Variants } from "framer-motion";
import { FeaturesIncluded, PlanCardData, ServiceCardProps } from "./types";
import { sendWhatsApp } from "../utils/whatsapp";

export const marketplaces = [
  { name: "Mercado Livre", src: "/images/logos/ml.svg" },
  { name: "Shopee", src: "/images/logos/shopee.svg" },
  { name: "Shein", src: "/images/logos/shein.svg" },
  { name: "Magalu", src: "/images/logos/magalu.svg" },
  { name: "TikTok Shop", src: "/images/logos/tiktok.svg" },
  { name: "Amazon", src: "/images/logos/amazon.svg" },
];

// BUTTONS CONTACT
export const WHATSAPP_MESSAGES = {
  diagnosticoGratuito:
    "Olá! Gostaria de solicitar um diagnóstico gratuito para entender melhor como posso melhorar meus resultados digitais.",
  saberMaisGestao:
    "Olá! Gostaria de saber mais sobre os serviços de gestão e como vocês podem ajudar a estruturar e escalar meu negócio.",

  saberMaisSuporteFinanceiro:
    "Olá! Tenho interesse de entender como vocês auxiliam no meio financeiro no controle e na tomada de decisões do negócio.",
  saberMaisOtimizaçãoAnuncios:
    "Olá! Gostaria de saber mais sobre o serviço de otimização de anúncios para melhorar performance e escalar vendas.",
  saberMaisTrafegoPago:
    "Olá! Tenho interesse em tráfego pago e gostaria de entender como vocês trabalham nas campanhas.",

  saberMaisGestaoMarca:
    "Olá! Gostaria de saber mais sobre gestão de marca e posicionamento estratégico no mercado.",

  saberMaisOutros:
    "Olá! Gostaria de conversar sobre uma necessidade digital específica e entender como vocês podem me ajudar.",

  orcamentoEssencial:
    "Olá! Tenho interesse no Plano Essencial e gostaria de receber mais informações sobre valores e escopo do serviço.",

  orcamentoTurbo:
    "Olá! Tenho interesse no Plano Turbo e gostaria de entender como ele pode acelerar os resultados do meu negócio.",

  orcamentoElite:
    "Olá! Tenho interesse no Plano Elite e gostaria de conhecer todos os diferenciais e benefícios inclusos.",
};

// SERVICE SECTION

export const serviceCardVariants: Variants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const serviceCards: ServiceCardProps[] = [
  {
    image: "/images/serviceCard/marketplace.png",
    title: "Gestão Estratégica de Marketplaces",
    description:
      "Administração completa e orientada por dados das operações dos maiores Marketplaces com foco em performance, escala e sustentabilidade financeira do negócio.",
    features: [
      "Design responsivo e moderno",
      "Uso das mais avançadas tecnologias",
      "Performance otimizada para carregamento ágil",
      "Suporte e manutenção inclusos",
    ],
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.saberMaisGestao),
  },
  {
    image: "/images/serviceCard/financeiro.png",
    title: "Controladoria Financeira Empresarial",
    description:
      "Gestão financeira constante e estratégica que mapeie o fluxo de caixa, orienta decisões com dados gerenciais, aumentando o lucro e reduzindo custos desnecessários.",
    features: [
      "Design responsivo e moderno",
      "Uso das mais avançadas tecnologias",
      "Performance otimizada para carregamento ágil",
      "Suporte e manutenção inclusos",
    ],
    handleOnClick: () =>
      sendWhatsApp(WHATSAPP_MESSAGES.saberMaisSuporteFinanceiro),
  },
  {
    image: "/images/serviceCard/web.jpeg",
    title: "Arquitetura e Otimização de Anúncios",
    description:
      "Estruturação avançada de anúncios, SEO interno, variações estratégicas, posicionamento competitivo,analise de mercado e otimização contínua para aumento de conversão e ranking.",
    features: [
      "Design responsivo e moderno",
      "Uso das mais avançadas tecnologias",
      "Performance otimizada para carregamento ágil",
      "Suporte e manutenção inclusos",
    ],
    handleOnClick: () =>
      sendWhatsApp(WHATSAPP_MESSAGES.saberMaisOtimizaçãoAnuncios),
  },
  {
    image: "/images/serviceCard/meta.jpeg",
    title: "Gestão de Tráfego Pago em Marketplaces",
    description:
      "Planejamento, execução e escala de campanhas em Mercado Ads, Shopee Ads e Shein Ads com foco em ROAS, lucro incremental e crescimento previsível.",
    features: [
      "Gestão e Monitoramento de Redes Sociais",
      "Planejamento Estratégico de Conteúdo",
      "Campanhas Organicas/Pagas Otimizadas",
      "Relatorios Semanais de Engajamento",
    ],
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.saberMaisTrafegoPago),
  },
  {
    image: "/images/serviceCard/brand.jpeg",
    title: "Gestão de Reputação e Posicionamento",
    description:
      "Construção e fortalecimento da reputação nas plataformas, com foco em diferenciação competitiva, excelência no atendimento, experiência do cliente e credibilidade percebida.",
    features: [
      "Identidade visual única e memorável",
      "Conexão emocional com seu público-alvo",
      "Melhora da percepção/reputação da marca",
      "Otimização da experiência do cliente",
    ],
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.saberMaisGestaoMarca),
  },
  {
    image: "/images/serviceCard/consultoria.jpeg",
    title: "Soluções Digitais Personalizadas",
    description:
      "Desenvolvimento de soluções sob medida para demandas fora do marketplace, incluindo websites, branding, redes sociais, automações, integrações e projetos estratégicos.",
    features: [
      "Diagnóstico completo de sistemas digitais",
      "Redução de custos operacionais",
      "Automação de respostas instantâneas",
      "Identificação de gargalos e melhorias",
    ],
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.saberMaisOutros),
  },
];

// PLANS SECTION

export const essencial: FeaturesIncluded = [
  {
    title:
      "Presença nos maiores marketplaces, como Mercado Livre, Magalu, Shopee, Shein entre outros",
    description:
      "Estruturação e gestão da presença da marca nos principais marketplaces, incluindo configuração de contas, padronização operacional e adequação às regras de cada plataforma",
  },
  {
    title: "Registro e catalogo de forma estratégica dos produtos",
    description:
      "Cadastro estruturado de produtos com títulos otimizados, descrições estratégicas, categorização correta e organização de variações visando melhor conversão e visibilidade.",
  },
  {
    title:
      "Criação de modelo de crescimento personalizado a partir de análise e dados do mercado",
    description:
      "Análise de mercado, concorrência e indicadores para definição de um modelo de crescimento personalizado, orientado por dados e alinhado aos objetivos do negócio.",
  },
  {
    title: "Modelos de precificação e diferenciação frente aos concorrentes",
    description:
      "Definição de estratégias de precificação baseadas em custos, taxas, margem e posicionamento competitivo, buscando diferenciação sustentável frente aos concorrentes.",
  },
  {
    title:
      "Estratégias para construção de reputação e aumento de avaliações positivas",
    description:
      "Implementação de estratégias focadas em reputação, experiência do cliente e pós-venda, visando aumento de avaliações positivas e fortalecimento da credibilidade da marca.",
  },
  {
    title:
      "Gestão e acompanhamento de pedidos, trocas e suporte ao consumidor final",
    description:
      "Acompanhamento operacional de pedidos, trocas e atendimento ao cliente, garantindo cumprimento de prazos, qualidade no suporte e redução de impactos negativos.",
  },

  {
    title: "Relatórios de desempenho e faturamento",
    description:
      "Geração de relatórios periódicos com indicadores de desempenho, vendas e faturamento, apoiando análises estratégicas e decisões orientadas por resultados.",
  },

  {
    title: "Suporte dedicado via WhatsApp",
    description:
      "Canal direto de suporte via WhatsApp para alinhamentos operacionais, esclarecimento de dúvidas e acompanhamento contínuo das atividades do marketplace.",
  },
];

export const turbo: FeaturesIncluded = [
  {
    title:
      "Gerência completa das principais plataformas de marketplace, incluindo todos os serviços disponíveis no plano M2 Essencial.",
    description:
      "Gestão integral das operações nos principais marketplaces, abrangendo estratégia, performance, operação, reputação, indicadores e todos os serviços contemplados no plano Essencial.",
  },
  {
    title: "Diagnóstico claro e preciso das necessidades reais do seu negócio",
    description:
      "Análise detalhada do cenário atual da operação, identificando gargalos, oportunidades, riscos e prioridades estratégicas para orientar decisões mais assertivas.",
  },
  {
    title:
      "Mapeamento dos pontos fortes e as áreas que necessitam de uma atenção em seu negócio",
    description:
      "Avaliação estruturada dos processos, indicadores e resultados, destacando pontos fortes, fragilidades operacionais e áreas críticas que demandam atenção imediata.",
  },
  {
    title:
      "Construção de um plano estratégico que promove a transição do operacional para uma atuação gerencial no negócio",
    description:
      "Desenvolvimento de um plano estratégico orientado por dados, com foco em organização, eficiência e evolução da operação para um modelo de gestão estruturado.",
  },
  {
    title:
      "Execução do plano estratégico, com análise constante do mercado para implementação de estratégias garantindo resultados de curto a longo prazo",
    description:
      "Execução contínua do plano definido, com monitoramento de mercado, ajustes estratégicos e implementação de ações visando resultados consistentes e sustentáveis.",
  },
  {
    title:
      "Definição de metas reais a serem alcançadas, buscando crescimento sustentável com base em dados gerenciais e ferramentas de IA",
    description:
      "Estabelecimento de metas realistas e mensuráveis, fundamentadas em dados gerenciais, histórico da operação e apoio de ferramentas analíticas e inteligência artificial.",
  },
];

export const elite: FeaturesIncluded = [
  {
    title:
      "Gerência completa das principais plataformas de marketplace, incluindo todos os serviços disponíveis no plano M2 Essencial.",
    description:
      "Gestão estratégica e operacional completa das principais plataformas de marketplace, contemplando performance, reputação, indicadores, decisões gerenciais e todos os serviços do plano Essencial.",
  },
  {
    title:
      "Consultoria Financeira completa e continua incluindo todos os serviços disponíveis no plano M2 Turbo",
    description:
      "Consultoria financeira contínua aplicada ao marketplace, incluindo controle de fluxo de caixa, conciliações, análise de margem, precificação e suporte estratégico para decisões financeiras.",
  },
  {
    title:
      "Gestão de redes sociais, garantindo presença ativa onde seu público está",
    description:
      "Planejamento, gestão e acompanhamento de redes sociais com foco em posicionamento da marca, consistência de comunicação e fortalecimento da presença digital.",
  },
  {
    title:
      "Criação de sites com otimização para buscas, fortalecendo a credibilidade da sua empresa",
    description:
      "Desenvolvimento e gestão de sites institucionais otimizados para mecanismos de busca, focados em credibilidade, autoridade digital e suporte à estratégia da marca.",
  },
  {
    title:
      "Desenvolvimento de automações digitais para facilitar atendimentos e processos, tornando a operação mais rápida, organizada e eficiente.",
    description:
      "Criação de automações e integrações digitais para otimização de processos internos, atendimento ao cliente e organização operacional, aumentando eficiência e escalabilidade.",
  },
  {
    title:
      "Estratégias de autoridade da marca, revisando identidade visual e posicionamento para consolidar seu negocio.",
    description:
      "Desenvolvimento de estratégias de autoridade e posicionamento de marca, incluindo análise de identidade visual, comunicação e percepção para consolidação no mercado.",
  },
];

export const planCards: PlanCardData[] = [
  {
    title: "M2 ESSENCIAL",
    oldPrice: "1200",
    newPrice: "980",
    description:
      "Mais do que simplesmente anunciar: você passa a atuar nos principais marketplaces com estratégia, posicionamento e autoridade, construindo base de clientes e faturamento sustentável.",
    featuresIncluded: essencial,
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.orcamentoEssencial),
  },
  {
    title: "M2 TURBO",
    oldPrice: "1600",
    newPrice: "1250",
    description:
      "Além de tudo incluido no MarketPlate Essential, você passa a ter uma experiencia integrada do negócio, unindo operação e financeiro. Com gestão centralizada e consultoria direcionada.",
    featuresIncluded: turbo,
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.orcamentoTurbo),
  },
  {
    title: "M2 ELITE",
    oldPrice: "2500",
    newPrice: "2200",
    description:
      "Gestão completa do seu negócio, atuando em múltiplas frentes e centralizando tudo em um controle integrado. Unimos dados  e transformamos em estratégia e execução prática,",
    featuresIncluded: elite,
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.orcamentoElite),
  },
];

export const containerPlanSectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const planCardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
