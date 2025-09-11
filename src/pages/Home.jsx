// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  return (
    <div>
      <h1>Bun venit la Pharmacy Prototype</h1>
      <p>Selectează un produs pentru detalii:</p>

      <ul>
        {products.map((product) => (
          <li key={product.ean} style={{ marginBottom: "20px" }}>
            <Link to={`/product/${product.ean}`}>
              <strong>{product.name}</strong>
            </Link>
            <br />
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "auto" }}
            />
            <h4>Disponibilitate:</h4>
            <ul>
              {Object.entries(product.Disponibilitate).map(([locatie, stoc]) => (
                <li key={locatie}>
                  {locatie}: {stoc} buc
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
