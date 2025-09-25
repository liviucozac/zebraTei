import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scanner from "./components/Scanner";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import { StoreProvider } from "./app/store";
import "./App.css";

function App() {
  return (
    <StoreProvider>
      <Router basename="/zebraTei">
        <header className="app-header">
          <img
            src="https://i.imgur.com/XNt8faA.png"
            alt="BebeTei Logo"
            className="app-logo"
          />
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
