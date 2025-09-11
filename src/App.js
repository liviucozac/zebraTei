import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Scanner from "./components/Scanner";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
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
