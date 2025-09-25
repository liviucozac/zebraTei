import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useStore } from "../app/store";

function Home() {
  const navigate = useNavigate();
  const { lastScanned } = useStore();

  const recommended = products.slice(0, 3);

  return (
    <div className="container">
      <h1>Farmacia Tei Scanner</h1>
      <p>Scanează rapid și află detalii complete despre produse</p>

      {/* Scanner section */}
      <section>
        <h2 className="scanner-title">Scanează un produs</h2>
        <div className="scanner-box">
          <span>📷</span>
          Camera va apărea aici
        </div>
        <button className="btn-scanner" onClick={() => navigate("/scanner")}>
          Pornește scannerul
        </button>
      </section>

      {/* Ultimele produse scanate */}
      <section>
        <h2>Ultimele produse scanate</h2>
        <div className="product-grid">
          {lastScanned.length === 0 ? (
            <p>Încă nu ai scanat niciun produs</p>
          ) : (
            lastScanned.map((p) => (
              <ProductCard key={p.ean} product={p} />
            ))
          )}
        </div>
      </section>

      {/* Produse recomandate */}
      <section>
        <h2>Produse recomandate</h2>
        <div className="product-grid">
          {recommended.map((p) => (
            <ProductCard key={p.ean} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
