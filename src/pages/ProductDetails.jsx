import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { ean } = useParams();
  const product = products.find((p) => p.ean === ean);

  if (!product) {
    return <p>Produsul nu a fost găsit în baza de date</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: "200px" }} />
      <p><strong>EAN:</strong> {product.ean}</p>
      <h3>Disponibilitate pe locații:</h3>
      <ul>
        {Object.entries(product.Disponibilitate).map(([loc, qty]) => (
          <li key={loc}>{loc}: {qty} buc</li>
        ))}
      </ul>
      <Link to="/">← Înapoi la scanner</Link>
    </div>
  );
}

export default ProductDetails;
