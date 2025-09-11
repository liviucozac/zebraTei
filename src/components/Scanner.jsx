// src/components/Scanner.jsx
import React, { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { useNavigate } from "react-router-dom";

function Scanner() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const codeReader = new BrowserMultiFormatReader();

  useEffect(() => {
    let controls;

    if (videoRef.current) {
      codeReader
        .decodeFromVideoDevice(null, videoRef.current, (result, err, c) => {
          controls = c; // store controls so we can stop later
          if (result) {
            const ean = result.getText();
            navigate(`/product/${ean}`);
          }
        })
        .catch((err) => console.error("Camera error:", err));
    }

    // ✅ proper cleanup
    return () => {
      if (controls) {
        controls.stop();
      }
    };
  }, [navigate]);

  return (
    <div>
      <h2>Scanează codul de bare</h2>
      <video ref={videoRef} style={{ width: "100%" }} />
    </div>
  );
}

export default Scanner;
