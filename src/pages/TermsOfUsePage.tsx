import LegalPageLayout from "../components/legal/legalPageLayout";
import Section from "../components/legal/legalSection";

const TermsOfUsePage = () => {
  return (
    <LegalPageLayout title="Termos de Uso e Contrato de Prestação de Serviços">
      <Section title="1. Aceitação dos Termos">
        Ao acessar este site e contratar nossos serviços de gestão de vendas
        online e marketplace, o cliente declara que leu, compreendeu e aceita
        integralmente os presentes Termos de Uso e Contrato de Prestação de
        Serviços.
      </Section>

      <Section title="2. Objeto do Contrato">
        A empresa prestará serviços de consultoria financeira e de vendas,
        gestão e otimização de plataformas marketplaces e canais digitais,
        conforme proposta comercial previamente acordada entre as partes.
      </Section>

      <Section title="3. Natureza dos Serviços">
        Os serviços prestados possuem natureza estratégica e operacional. Não
        garantimos resultados específicos de faturamento, vendas ou
        posicionamento, uma vez que tais resultados dependem de fatores externos
        como mercado, concorrência, investimento e condições econômicas.
      </Section>

      <Section title="4. Obrigações da Contratada">
        <ul className="italic list-disc pl-6 space-y-2">
          <li>Executar os serviços com diligência e profissionalismo;</li>
          <li>Manter confidencialidade das informações do cliente;</li>
          <li>Fornecer relatórios ou alinhamentos conforme acordado.</li>
        </ul>
      </Section>

      <Section title="5. Obrigações do Cliente">
        <ul className="italic list-disc pl-6 space-y-2">
          <li>
            Fornecer informações e acessos necessários para execução do serviço;
          </li>
          <li>Efetuar os pagamentos nas datas acordadas;</li>
          <li>Manter dados cadastrais e informações atualizadas.</li>
        </ul>
      </Section>

      <Section title="6. Valores e Pagamentos">
        Os valores, prazos e condições de pagamento serão definidos em proposta
        comercial específica. O não pagamento poderá resultar na suspensão dos
        serviços até regularização.
      </Section>

      <Section title="7. Vigência e Cancelamento">
        O contrato terá vigência conforme estabelecido na proposta comercial. O
        cliente poderá solicitar o cancelamento dos serviços mediante aviso
        prévio por escrito com antecedência mínima de 30 (trinta) dias. Durante
        o período de aviso prévio, os serviços continuarão sendo prestados
        normalmente e os valores correspondentes permanecerão devidos.
      </Section>

      <Section title="8. Propriedade Intelectual">
        Todo material estratégico, metodologias e processos utilizados na
        prestação de serviços permanecem de propriedade da empresa, salvo
        disposição expressa em contrato específico.
      </Section>

      <Section title="9. Limitação de Responsabilidade">
        A empresa não se responsabiliza por perdas indiretas, lucros cessantes
        ou resultados não alcançados, visto que o desempenho comercial depende
        de múltiplos fatores externos ao controle da contratada.
      </Section>

      <Section title="10. Confidencialidade">
        Ambas as partes comprometem-se a manter sigilo sobre informações
        estratégicas, comerciais e operacionais compartilhadas durante a
        vigência contratual.
      </Section>

      <Section title="11. Foro">
        Fica eleito o foro da comarca da sede da empresa para dirimir quaisquer
        controvérsias decorrentes deste contrato, com renúncia a qualquer outro,
        por mais privilegiado que seja.
      </Section>
    </LegalPageLayout>
  );
};

export default TermsOfUsePage;
