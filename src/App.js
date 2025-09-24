import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scanner from "./components/Scanner";
import ProductDetails from "./pages/ProductDetails";
import './App.css';

function App() {
  return (
    <Router basename="/zebraTei">
      <header className="app-header">
        <img
          src="https://i.imgur.com/XNt8faA.png"
          alt="BebeTei Logo"
          className="app-logo"
        />
      </header>

      <Routes>
        <Route path="/" element={<Scanner />} />
        <Route path="/product/:ean" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
