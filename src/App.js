import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Scanner from "./components/Scanner";
import ProductDetails from "./pages/ProductDetails";
import './App.css';

function App() {
  return (
    <Router>
      {/* Global Logo/Header */}
      <header className="app-header">
        <img src="/logo.jpg" alt="App Logo" className="app-logo" />
      </header>

      <Routes>
        {/* Home = Scanner directly */}
        <Route path="/" element={<Scanner />} />
        {/* Product details */}
        <Route path="/product/:ean" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
