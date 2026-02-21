import Logo from "../../components/ui/Logo";
import MotionDiv from "../../components/ui/MotionDiv";
import { useTheme } from "../../context/ThemeContext";
import { navLinks, socialLinks } from "../../data/navigation";

const Footer = () => {
  const { lightMode } = useTheme();

  return (
    <MotionDiv className="bg-background relative bottom-0 text-foreground py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo lightMode={lightMode} customClass="opacity-30" />

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

        <div className="flex gap-6">
          {socialLinks.map(({ href, icon: Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-foreground/50 mt-8">
        © {new Date().getFullYear()} Grupo M2. Todos os direitos reservados.
      </p>
    </MotionDiv>
  );
};

export default Footer;
