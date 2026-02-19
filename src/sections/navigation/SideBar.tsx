import React from "react";
import Logo from "../../components/ui/Logo";
import { SidebarProps } from "../../data/types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-background text-foreground z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <Logo />
        <button onClick={onClose} className="text-brand text-4xl font-bold">
          ✕
        </button>
      </div>

      <ul className="flex flex-col items-center mt-16 space-y-10 text-2xl font-varela">
        <li>
          <a
            href="#home"
            className="hover:text-brand transition"
            onClick={onClose}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#sobre"
            className="hover:text-brand transition"
            onClick={onClose}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#servicos"
            className="hover:text-brand transition"
            onClick={onClose}
          >
            Serviços
          </a>
        </li>
        <li>
          <a
            href="#contato"
            className="hover:text-brand transition"
            onClick={onClose}
          >
            Contato
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
