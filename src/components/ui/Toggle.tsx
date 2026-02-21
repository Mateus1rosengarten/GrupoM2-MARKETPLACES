import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { lightMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 mr-5 rounded-lg 
                 bg-surface border border-border 
                 hover:scale-105 transition-all duration-200"
    >
      {!lightMode ? (
        <Sun size={18} className="text-foreground" />
      ) : (
        <Moon size={18} className="text-foreground" />
      )}
    </button>
  );
}

export default ThemeToggle;
