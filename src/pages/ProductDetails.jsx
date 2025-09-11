// src/pages/ProductDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
  const { ean } = useParams();
  const product = products.find((p) => p.ean === ean);

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ maxWidth: "200px", display: "block", marginBottom: "10px" }}
      />
      <p><strong>EAN:</strong> {product.ean}</p>
      <h3>Availability by Location:</h3>
      <ul>
        {Object.entries(product.availability).map(([location, qty]) => (
          <li key={location}>
            {location}: {qty} pcs
          </li>
        ))}
      </ul>
      <Link to="/">⬅ Back to Scanner</Link>
    </div>
  );
};

export default ProductDetails;
