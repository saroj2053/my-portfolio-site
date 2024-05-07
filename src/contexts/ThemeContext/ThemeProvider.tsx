import React, { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const initialTheme = localStorage.getItem("theme") as Theme | null;
  const [theme, setTheme] = useState<Theme>(initialTheme || "light");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
