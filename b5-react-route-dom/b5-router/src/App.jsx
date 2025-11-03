import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import News from "./news";
import LoginFormBackend from "./FormLoginAPi";
import { Counter } from "./Counter";
function App() {
  // link  , nav link hook react
  //Styles

  const navChecked = (isActive) => {
    console.log("Is active : ", isActive);
    return isActive ? "active" : "deactive";
  };

  return (
    <>
      <div>
        <Link href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <nav>
        <NavLink to="/home" className={({ isActive }) => navChecked(isActive)}>
          Home
        </NavLink>
        | <NavLink to="/contact">Contact</NavLink>
      </nav>
      <h2>
        <Link
          to={{
            pathname: "/home",
          }}
        >
          Home
        </Link>
      </h2>
      <h2>
        {/* nav link có thêm đánh dấu trang */}
        <NavLink to="/contact">Contact</NavLink>
      </h2>
      <h2>
        <a href="/news">News</a>
      </h2>
      <h2>
        <a href="/form">Create Form</a>
      </h2>
      <h2>
        <a href="/redux">Redux</a>
      </h2>
      <Routes path="/admin">
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<LoginFormBackend />} />
        <Route path="/redux" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
