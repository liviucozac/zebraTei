import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";
import products from "../data/products";
import { useStore } from "../app/store";

function Scanner() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const { addScannedProduct } = useStore();

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    codeReader
      .decodeFromVideoDevice(null, videoRef.current, (result, err) => {
        if (result) {
          const scannedEAN = result.getText();
          console.log("Scanned EAN:", scannedEAN);

          const product = products.find((p) => p.ean === scannedEAN);

          if (product) {
            addScannedProduct(product);
            navigate(`/product/${product.ean}`);
          } else {
            alert(`Produsul cu EAN ${scannedEAN} nu a fost găsit.`);
          }
        }
        if (err && !(err instanceof NotFoundException)) {
          console.error("Scan error:", err);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      codeReader.reset();
    };
  }, [addScannedProduct, navigate]);

  return (
    <div className="container">
      <h2 className="scanner-title">Scanner activ...</h2>
      <div className="scanner-box">
        <video ref={videoRef} className="scanner-video" />
      </div>
    </div>
  );
}

export default Scanner;
