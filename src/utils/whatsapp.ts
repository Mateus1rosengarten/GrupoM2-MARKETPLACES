export function sendWhatsApp(message: string) {
  const phone = "5511988504105";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

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

  servicos:
    "Olá! Tenho interesse de entender mais sobre os serviços prestados e benefícios inclusos.",
};
