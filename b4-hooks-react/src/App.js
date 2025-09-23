import { useContext } from "react";
import "./App.css";
import { LearnContext } from "./Storage/LearnContext";
import { ThemeContext } from "./ThemeProvider";
function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={context.toggleTheme}>Nút này đổi màu</button>
      <LearnContext />
    </div>
  );
}

export default App;
