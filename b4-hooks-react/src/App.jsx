import "./App.css";
import { createContext, useState } from "react";
import UseContext from "./Storage/UseContext";
// Tạo context 1 lần ở App.js
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <button onClick={toggleTheme}>Án để đổi màu</button>
        <UseContext />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
