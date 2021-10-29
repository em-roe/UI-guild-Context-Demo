import React, { useState, createContext } from "react";
import { theme } from "./Theme";

export const ThemeContext = createContext();

// export const useCurrentTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw Error(
//       "useCurrentTheme can only be used within a ThemeContextProvider."
//     );
//   }
//   return context;
// };

// export const useCurrentEmoji = () => {
//   const context = useCurrentTheme();
//   return context.colorTheme.emoji;
// };

export const ThemeProvider = ({ children }) => {
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
