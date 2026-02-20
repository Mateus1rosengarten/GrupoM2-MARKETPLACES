import { ServiceCardProps } from "./types";
import { sendWhatsApp, WHATSAPP_MESSAGES } from "../utils/whatsapp";

export const serviceCards: ServiceCardProps[] = [
  {
    image: "/images/service-card/marketplace.png",
    title: "Gestão Estratégica de Marketplaces",
    description:
      "Estruturação da presença nos principais marketplaces, definição de estratégia comercial, análise de indicadores e relatórios gerenciais para direcionar crescimento.",
    features: [
      "Design responsivo e moderno",
      "Uso das mais avançadas tecnologias",
      "Performance otimizada para carregamento ágil",
      "Suporte e manutenção inclusos",
    ],
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.saberMaisGestao),
  },
  {
    image: "/images/service-card/financeiro.png",
    title: "Controladoria Financeira Empresarial",
    description:
      "Planejamento financeiro, fluxo de caixa estruturado e análise de dados financeiros e gerenciais para aumentar rentabilidade e sustentar o crescimento em marketplaces.",
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
    image: "/images/service-card/web.jpeg",
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
    image: "/images/service-card/meta.jpeg",
    title: "Gestão de Tráfego Pago em Marketplaces",
    description:
      "Planejamento, execução e escala de campanhas em Mercado Livre Ads, Shopee Ads , Shein Ads, Amazon Ads com foco em ROAS, lucro incremental e crescimento previsível.",
    features: [
      "Gestão e Monitoramento de Redes Sociais",
      "Planejamento Estratégico de Conteúdo",
      "Campanhas Organicas/Pagas Otimizadas",
      "Relatorios Semanais de Engajamento",
    ],
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.saberMaisTrafegoPago),
  },
  {
    image: "/images/service-card/brand.jpeg",
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
    image: "/images/service-card/consultoria.jpeg",
    title: "Soluções Digitais Personalizadas",
    description:
      "Desenvolvimento de soluções sob medida para fortalecer a operação em marketplaces, incluindo websites, branding, redes sociais, automações, integrações e projetos estratégicos.",
    features: [
      "Diagnóstico completo de sistemas digitais",
      "Redução de custos operacionais",
      "Automação de respostas instantâneas",
      "Identificação de gargalos e melhorias",
    ],
    handleOnClick: () => sendWhatsApp(WHATSAPP_MESSAGES.saberMaisOutros),
  },
];
