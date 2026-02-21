import React, { useState } from "react";
import Logo from "../../components/ui/Logo";
import Button from "../../components/ui/Button";
import { ChevronLeft, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "./SideBar";
import NavLink from "../../components/ui/NavLink";
import ThemeToggle from "../../components/ui/Toggle";
import { navLinks } from "../../data/navigation";
import { useTheme } from "../../context/ThemeContext";

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { lightMode } = useTheme();

  return (
    <>
      <motion.nav
        className="bg-background light-gradient text-foreground w-full fixed top-0 left-0 z-20 py-6 sm:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-full flex items-center justify-center px-8 lg:px-8 2xl:px-32">
          <div className="flex-shrink-0 mr-auto">
            <Logo lightMode={lightMode} />
          </div>

          <ul className="hidden md:flex font-inter font-medium text-base sm:space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex gap-5 ml-auto">
            <ThemeToggle />
            <Button
              onClick={() =>
                document
                  .getElementById("form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              customClass="!pl-2 !pr-6 py-2"
            >
              <div className="flex items-center gap-2">
                <ChevronLeft />
                <span>CONTATE NOS</span>
              </div>
            </Button>
          </div>

          <div className="md:hidden mr-2">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu size={32} className="text-brand" />
            </button>
          </div>
        </div>
      </motion.nav>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
