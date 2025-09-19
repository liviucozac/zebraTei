import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { ean } = useParams();
  const product = products.find((p) => p.ean === ean);

  if (!product) {
    return <h2>Produsul nu a fost găsit în baza de date</h2>;
  }

  return (
    <div className="container">
      <div className="product-details">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>
          <strong>EAN:</strong> {product.ean}
        </p>

        <h2>Disponibilitate pe locații:</h2>
        <ul className="availability">
          {Object.entries(product.Disponibilitate).map(([loc, qty]) => (
            <li key={loc}>
              {loc}: {qty} buc
            </li>
          ))}
        </ul>

        <Link to="/" className="btn-back">← Înapoi la scanner</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
