// src/components/Scanner.jsx
import React, { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { useNavigate } from "react-router-dom";

const Scanner = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (videoRef.current) {
      codeReader.decodeFromVideoDevice(
        null,
        videoRef.current,
        (result, err) => {
          if (result) {
            console.log("Scanned result:", result.getText());
            navigate(`/product/${result.getText()}`);
          }
          if (err) {
            // ignore "not found" errors
          }
        }
      );
    }

    return () => {
      // ✅ Proper way to stop camera in latest @zxing/browser
      codeReader?.stopContinuousDecode?.();
      codeReader?.reset?.(); // will only run if available
    };
  }, [navigate]);

  return (
    <div>
      <h2>Scan Product</h2>
      <video
        ref={videoRef}
        style={{ width: "100%", border: "1px solid black" }}
      />
    </div>
  );
};

export default Scanner;
