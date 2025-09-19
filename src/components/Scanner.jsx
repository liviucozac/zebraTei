import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserMultiFormatReader } from "@zxing/library";
import products from "../data/products";

function Scanner() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    codeReader
      .decodeFromVideoDevice(null, "video", (result, err) => {
        if (result) {
          const ean = result.getText();
          const product = products.find((p) => p.ean === ean);

          if (product) {
            navigate(`/product/${ean}`);
          } else {
            setError("Produsul nu a fost găsit în baza de date");
          }
          codeReader.reset();
        }
      })
      .catch((err) => setError(err.message));

    return () => {
      codeReader.reset();
    };
  }, [navigate]);

  return (
    <div className="container">
      <h1 className="scanner-title">Scanează codul de bare</h1>
      <div className="scanner-box">
        <video id="video" className="scanner-video"></video>
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default Scanner;
