import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import News from "./news";
import LoginFormBackend from "./FormLoginAPi";
function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>
        {" "}
        <a href="/home">Homes</a>{" "}
      </h2>
      <h2>
        {" "}
        <a href="/contact">Contact</a>
      </h2>
      <h2>
        <a href="/news">News</a>
      </h2>
      <h2>
        <a href="/form">Create Form</a>
      </h2>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<News />} />
        <Route path="/news" element={<Contact />} />
        <Route path="/form" element={<LoginFormBackend />} />
      </Routes>
    </>
  );
}

export default App;
