import FooterLink from "../../components/ui/FooterLink";
import Logo from "../../components/ui/Logo";
import MotionDiv from "../../components/ui/MotionDiv";
import { useTheme } from "../../context/ThemeContext";
import { navLinks, socialLinks } from "../../data/navigation";

const Footer = () => {
  const { lightMode } = useTheme();

  return (
    <MotionDiv className="bg-background relative bottom-0 text-foreground pt-20 pb-5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col">
          <Logo lightMode={lightMode} customClass="opacity-30" />
          <div className="flex gap-6 mx-auto">
            {socialLinks.map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-block hover:text-brand transition-transform duration-default hover:scale-zoom"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex sm:flex-col h-full gap-4 items-start">
          <FooterLink to="/politica-de-privacidade">
            Política de Privacidade
          </FooterLink>

          <FooterLink to="/termos-de-uso">Termos de Uso</FooterLink>

          <FooterLink to="/protecao-de-dados">Proteção de Dados</FooterLink>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-center text-xs text-foreground/50 mt-2">
          © {new Date().getFullYear()} Grupo M2. Todos os direitos reservados.
        </p>
      </div>
    </MotionDiv>
  );
};

export default Footer;
