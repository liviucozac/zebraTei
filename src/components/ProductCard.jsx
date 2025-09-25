import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card-mini">
      <div>
        <h3>{product.name}</h3>
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: "120px", margin: "0 auto" }}
        />
        <p><strong>EAN:</strong> {product.ean}</p>
      </div>
      <Link to={`/product/${product.ean}`} className="status available">
        Vezi detalii
      </Link>
    </div>
  );
}

export default ProductCard;
