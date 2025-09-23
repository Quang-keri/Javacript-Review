import { createContext, useState } from "react";

export const ThemeContext = createContext();
// biến thằng themProvider này thành wrapper để nhận children
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // chuyển theme,toggleTheme thành object r truyền giá trị xg thông qua context
  // const valueTheme = {
  //   theme,
  //   toggleTheme,
  // };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
