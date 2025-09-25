import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { ean } = useParams();
  const product = products.find((p) => p.ean === ean);

  if (!product) {
    return <h2>Produsul nu a fost găsit în baza de date</h2>;
  }

  const getStatusClass = (qty) => {
    if (qty === 0) return "status unavailable";
    if (qty <= 5) return "status critical";
    return "status available";
  };

  return (
    <div className="container product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />

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
            <span className={getStatusClass(info.qty)}>
              {info.qty > 0 ? `${info.qty} buc` : "Indisponibil"}
            </span>
          </div>
        ))}
      </div>

      <Link to="/" className="btn-back">← Înapoi</Link>
    </div>
  );
}

export default ProductDetails;
