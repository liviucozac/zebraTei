// src/pages/ProductDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { ean } = useParams();
  const product = products.find((p) => p.ean === ean);

  if (!product) {
    return (
      <div>
        <h2>Produsul nu a fost găsit</h2>
        <Link to="/">⬅ Înapoi la pagina principală</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "200px", height: "auto", marginBottom: "20px" }}
      />
      <p><strong>EAN:</strong> {product.ean}</p>

      <h3>Disponibilitate pe locații:</h3>
      <ul>
        {Object.entries(product.Disponibilitate).map(([locatie, stoc]) => (
          <li key={locatie}>
            {locatie}: {stoc} buc
          </li>
        ))}
      </ul>

      <Link to="/">⬅ Înapoi la scanner</Link>
    </div>
  );
}

export default ProductDetails;
