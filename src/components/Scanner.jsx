// src/components/Scanner.jsx
import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { useNavigate } from "react-router-dom";

const Scanner = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [loadingEAN, setLoadingEAN] = useState(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (videoRef.current) {
      codeReader.decodeFromVideoDevice(
        null,
        videoRef.current,
        (result, err) => {
          if (result) {
            const ean = result.getText();
            console.log("Cod scanat:", ean);

            setLoadingEAN(ean); // afișăm mesajul de încărcare

            // după 2 secunde, navigăm la pagina produsului
            setTimeout(() => {
              navigate(`/product/${ean}`);
            }, 2000);
          }
          if (err) {
            // ignorăm erorile când nu se detectează cod în frame
          }
        }
      );
    }

    return () => {
      codeReader?.stopContinuousDecode?.();
      codeReader?.reset?.();
    };
  }, [navigate]);

  return (
    <div>
      <h2>Scanează produsul</h2>
      {loadingEAN ? (
        <p><strong>Se încarcă produsul…</strong></p>
      ) : (
        <video
          ref={videoRef}
          style={{ width: "100%", border: "1px solid black" }}
        />
      )}
    </div>
  );
};

export default Scanner;
