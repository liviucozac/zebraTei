// src/pages/ProductDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { ean } = useParams();
  const product = products.find((p) => p.ean === ean);

  if (!product) {
    return (
      <div className="container">
        <h1>Produsul nu a fost găsit</h1>
        <Link to="/" className="btn-back">Înapoi la Home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p><strong>EAN:</strong> {product.ean}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Cod produs:</strong> {product.codProdus}</p>
        <p><strong>Model:</strong> {product.model}</p>
        <p><strong>Tip:</strong> {product.tip}</p>
        <p><strong>Vândut de:</strong> {product.vandutDe}</p>

        <h2>Disponibilitate în magazine</h2>
        <div className="availability-grid">
          {Object.entries(product.disponibilitate).map(([store, info]) => (
            <div key={store} className="availability-card">
              <h3>{store}</h3>
              <p>{info.address}</p>
              {info.qty > 10 && (
                <span className="status available">În stoc</span>
              )}
              {info.qty > 0 && info.qty <= 10 && (
                <span className="status critical">Stoc limitat ({info.qty})</span>
              )}
              {info.qty === 0 && (
                <span className="status unavailable">Stoc epuizat</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Link to="/" className="btn-back">Înapoi la Scanner</Link>
    </div>
  );
}

export default ProductDetails;
