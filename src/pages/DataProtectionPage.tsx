import LegalPageLayout from "../components/legal/legalPageLayout";
import Section from "../components/legal/legalSection";

const DataProtectionPage = () => {
  return (
    <LegalPageLayout title="Política de Proteção de Dados">
      <Section title="1. Coleta de Dados">
        <p>
          Ao preencher nosso formulário, coletamos informações como nome,
          e-mail, telefone e demais dados fornecidos voluntariamente.
        </p>
        <p>
          Os dados são coletados exclusivamente para fins comerciais e de
          contato relacionados aos nossos serviços de gestão de vendas online e
          marketplace.
        </p>
      </Section>

      <Section title="2. Finalidade do Tratamento">
        <p className="mb-2 sm:mb-4">Utilizamos seus dados para:</p>

        <ul className="italic list-disc pl-6 space-y-2">
          <li>Entrar em contato para apresentação de propostas;</li>
          <li>Realizar atendimento e suporte;</li>
          <li>Enviar informações sobre nossos serviços;</li>
          <li>Melhorar a experiência do usuário em nosso site.</li>
        </ul>
      </Section>

      <Section title="3. Compartilhamento de Dados">
        <p>
          Não vendemos, alugamos ou compartilhamos seus dados pessoais com
          terceiros, exceto quando necessário para cumprimento de obrigações
          legais ou execução adequada dos nossos serviços.
        </p>
      </Section>

      <Section title="4. Armazenamento e Segurança">
        <p>
          Adotamos medidas técnicas e organizacionais apropriadas para proteger
          seus dados contra acessos não autorizados, vazamentos, alterações ou
          qualquer forma de tratamento inadequado.
        </p>
      </Section>

      <Section title="5. Direitos do Titular (LGPD)">
        <p>
          Nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados),
          você pode, a qualquer momento:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Solicitar confirmação sobre o tratamento de seus dados;</li>
          <li>Acessar seus dados pessoais;</li>
          <li>Corrigir dados incompletos ou desatualizados;</li>
          <li>Solicitar a exclusão de seus dados, quando aplicável;</li>
          <li>Revogar o consentimento concedido.</li>
        </ul>
      </Section>

      <Section title="6. Contato">
        <p>
          Para exercer seus direitos ou esclarecer dúvidas relacionadas à
          proteção de dados, entre em contato conosco através dos canais
          disponibilizados em nossa página de contato.
        </p>
      </Section>
    </LegalPageLayout>
  );
};

export default DataProtectionPage;
