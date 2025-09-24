import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserMultiFormatReader } from "@zxing/library";
import products from "../data/products";

function Scanner() {
  const [error, setError] = useState(null);
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();

  const startScanner = () => {
    const codeReader = new BrowserMultiFormatReader();
    console.log("Starting camera...");

    codeReader
      .decodeFromVideoDevice(null, "video", (result, err) => {
        if (result) {
          const ean = result.getText();
          console.log("Scanned EAN:", ean);

          const product = products.find((p) => p.ean === ean);

          if (product) {
            navigate(`/product/${ean}`);
          } else {
            setError("Produsul nu a fost găsit în baza de date");
          }
          codeReader.reset();
        }

        if (err && !(err.name === "NotFoundException")) {
          console.error("Scanner error:", err);
          setError(err.message);
        }
      })
      .catch((err) => {
        console.error("Camera init failed:", err);
        setError(err.message);
      });

    setStarted(true);
  };

  return (
    <div className="container">
      <h1 className="scanner-title">Scanează codul de bare</h1>

      {!started && (
        <button className="btn-back" onClick={startScanner}>
          Start Scanner
        </button>
      )}

      <div className="scanner-box">
        <video
          id="video"
          className="scanner-video"
          autoPlay
          muted
          playsInline
        ></video>
      </div>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default Scanner;
