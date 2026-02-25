import { Link } from "react-router-dom";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => {
  return (
    <Link
      to={to}
      className="text-xs text-muted hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default FooterLink;
