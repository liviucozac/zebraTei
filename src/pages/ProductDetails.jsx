import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { ean } = useParams();
  const product = products.find((p) => p.ean === ean);

  if (!product) {
    return <h2>Produsul nu a fost găsit în baza de date</h2>;
  }

  // helper for stock status
  const getStatusClass = (qty) => {
    if (qty === 0) return "status unavailable";
    if (qty <= 5) return "status critical";
    return "status available";
  };

  return (
    <div className="container">
      <img
        src="https://i.imgur.com/XNt8faA.png"
        className="app-logo"
        alt="logo"
      />

      <div className="product-details">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />

        <p>
          <strong>EAN:</strong> {product.ean}{" "}
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Cod produs:</strong> {product.codProdus}{" "}
          <strong>Model:</strong> {product.model}
        </p>
        <p>
          <strong>Tip:</strong> {product.tip}
        </p>
        <p>
          <strong>Vândut de:</strong> {product.vandutDe}
        </p>

        <h2>Disponibilitate pe locații:</h2>
        <div className="availability-grid">
          {Object.entries(product.disponibilitate).map(([loc, data]) => (
            <div className="availability-card" key={loc}>
              <h3>{loc}</h3>
              <p>{data.address}</p>
              <span className={getStatusClass(data.qty)}>
                {data.qty} buc
              </span>
            </div>
          ))}
        </div>

        <Link to="/" className="btn-back">
          ← Înapoi la scanner
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
