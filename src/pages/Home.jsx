// src/pages/Home.jsx
import React from "react";
import Scanner from "../components/Scanner";

function Home() {
  return (
    <div className="container">
      <h1>Bun venit la Pharmacy Prototype</h1>
      <p>Scanează codul de bare pentru a vedea detalii despre produs:</p>
      <div className="scanner-box">
        <Scanner />
      </div>
    </div>
  );
}

export default Home;
