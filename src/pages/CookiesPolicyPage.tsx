import LegalPageLayout from "../components/legal/legalPageLayout";
import Section from "../components/legal/legalSection";

const CookiesPolicyPage = () => {
  return (
    <LegalPageLayout title="Política de Cookies">
      <Section title="1. O que são cookies?">
        Cookies são pequenos arquivos de texto armazenados no seu navegador
        quando você visita um site. Eles servem para melhorar sua experiência,
        lembrar preferências e coletar informações estatísticas de navegação.
      </Section>

      <Section title="2. Como utilizamos os cookies">
        <p className="mb-2 sm:mb-4">Utilizamos cookies para:</p>
        <ul className="italic list-disc pl-6 space-y-2">
          <li>Garantir o funcionamento adequado do site;</li>
          <li>Melhorar a experiência do usuário;</li>
          <li>Analisar métricas de acesso e desempenho;</li>
          <li>Personalizar conteúdo e campanhas de marketing.</li>
        </ul>
      </Section>

      <Section title="3. Tipos de cookies utilizados">
        <h3 className="font-varela italic text-lg text-primary mt-3 sm:mt-6 mb-2">
          Cookies Necessários
        </h3>
        <p>
          Essenciais para o funcionamento do site. Não podem ser desativados em
          nossos sistemas.
        </p>

        <h3 className="font-varela italic text-lg text-primary mt-3 sm:mt-6 mb-2">
          Cookies de Desempenho
        </h3>
        <p>
          Coletam informações anônimas sobre como os visitantes utilizam o site,
          ajudando a melhorar sua performance.
        </p>

        <h3 className="font-varela italic text-lg text-primary mt-3 sm:mt-6 mb-2">
          Cookies de Marketing
        </h3>
        <p>
          Utilizados para oferecer anúncios mais relevantes ao usuário e medir a
          eficácia de campanhas.
        </p>
      </Section>

      <Section title="4. Gerenciamento de cookies">
        Você pode configurar seu navegador para bloquear ou alertar sobre
        cookies. No entanto, algumas funcionalidades do site podem não funcionar
        corretamente caso determinados cookies sejam desativados.
      </Section>

      <Section title="5. Alterações nesta política">
        Esta Política de Cookies pode ser atualizada periodicamente.
        Recomendamos que você a revise regularmente.
      </Section>

      <Section title="6. Contato">
        Em caso de dúvidas sobre esta Política de Cookies, entre em contato
        através dos nossos canais oficiais.
      </Section>
    </LegalPageLayout>
  );
};

export default CookiesPolicyPage;
