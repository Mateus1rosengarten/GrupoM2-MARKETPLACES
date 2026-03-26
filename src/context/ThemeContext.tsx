import { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  lightMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [lightMode, setLightMode] = useState(false); 

  const toggleTheme = () => {
    setLightMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (lightMode) {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [lightMode]);

  return (
    <ThemeContext.Provider value={{ lightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
