import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>
        <strong>EAN:</strong> {product.ean}
      </p>
      <Link to={`/product/${product.ean}`}>Vezi detalii</Link>
    </div>
  );
}

export default ProductCard;
