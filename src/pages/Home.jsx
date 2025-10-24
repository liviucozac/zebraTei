// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  // Example: last 3 scanned + 3 recommended
  const lastScanned = products.slice(0, 3);
  const recommended = products.slice(1, 4);

  const getStatus = (qty) => {
    if (qty > 10) return <span className="status available">În stoc</span>;
    if (qty > 0) return <span className="status critical">Stoc limitat ({qty})</span>;
    return <span className="status unavailable">Stoc epuizat</span>;
  };

  return (
    <div className="container">
      {/* Fixed quick-links buttons */}
      <div class="quick-links">
  <a href="#ultimele-produse" class="btn-link">Ultimele produse scanate</a>
  <a href="#produse-recomandate" class="btn-link">Produse recomandate</a>
</div>


      {/* Hero */}
      <section className="my-12">
        <h1>Farmacia Tei Scanner</h1>
        <p>Scanează rapid și află detalii complete despre produse</p>
      </section>

      {/* Scanner section */}
      <section id="scanner">
        <h2 className="scanner-title">Scanează un produs</h2>
        <div className="scanner-box">
          <Link to="/scanner" className="btn-scanner">
            Pornește scannerul
          </Link>
        </div>
      </section>

      {/* Ultimele produse scanate */}
      <section id="ultimele-produse">
        <h2>Ultimele produse scanate</h2>
        <div className="product-grid">
          {lastScanned.map((p) => {
            const totalQty = Object.values(p.disponibilitate).reduce(
              (sum, store) => sum + store.qty,
              0
            );
            return (
              <div key={p.ean} className="product-card-mini">
                <h3>{p.name}</h3>
                <p>EAN: {p.ean}</p>
                {getStatus(totalQty)}
                <Link to={`/product/${p.ean}`}>Vezi detalii</Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Produse recomandate */}
      <section id="produse-recomandate">
        <h2>Produse recomandate</h2>
        <div className="product-grid">
          {recommended.map((p) => {
            const totalQty = Object.values(p.disponibilitate).reduce(
              (sum, store) => sum + store.qty,
              0
            );
            return (
              <div key={p.ean} className="product-card-mini">
                <h3>{p.name}</h3>
                <p>EAN: {p.ean}</p>
                {getStatus(totalQty)}
                <Link to={`/product/${p.ean}`}>Vezi detalii</Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
