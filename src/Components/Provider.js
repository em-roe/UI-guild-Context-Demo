import React, { useState, createContext } from "react";
import { theme } from "./Theme";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState(theme.light);
  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
