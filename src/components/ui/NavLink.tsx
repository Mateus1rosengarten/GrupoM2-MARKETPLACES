interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="inline-block hover:text-brand transition-transform duration-default hover:scale-zoom"
  >
    {children}
  </a>
);

export default NavLink;
