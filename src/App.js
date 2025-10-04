import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scanner from "./components/Scanner";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import { StoreProvider } from "./app/store";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <StoreProvider>
      <Router basename="/zebraTei">
        <header className="app-header">
          <img
            src="https://i.imgur.com/XNt8faA.png"
            alt="BebeTei Logo"
            className="app-logo"
          />

          {/* 🌙 Dark Mode Toggle Button */}
          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/product/:ean" element={<ProductDetails />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
