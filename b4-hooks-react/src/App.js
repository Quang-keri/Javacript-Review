import { useContext } from "react";
import "./App.css";
import { UseContext } from "./Storage/UseContext";
import { ThemeContext } from "./ThemeProvider";
function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={context.toggleTheme}>Nút này đổi màu</button>
      <UseContext />
    </div>
  );
}

export default App;
