import React from "react";
import Logo from "../../components/ui/Logo";
import { SidebarProps } from "../../data/types";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../../components/ui/Toggle";
import { navLinks } from "../../data/navigation";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { lightMode } = useTheme();
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-background text-foreground z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <Logo lightMode={lightMode} />
        <button onClick={onClose} className="text-brand text-2xl font-bold">
          ✕
        </button>
      </div>
      <div className="ml-8">
        <ThemeToggle />
      </div>
      <ul className="flex flex-col items-center mt-16 space-y-10 text-2xl font-varela">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover:text-brand transition"
              onClick={onClose}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
