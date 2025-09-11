// src/pages/Home.jsx
import React from "react";
import Scanner from "../components/Scanner";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Pharmacy Prototype</h1>
      <p>Use the scanner below to scan a product barcode:</p>
      <Scanner />
    </div>
  );
};

export default Home;
