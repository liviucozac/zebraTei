import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";

// ✅ Detect Zebra device before rendering
const isZebraDevice = /Zebra/i.test(navigator.userAgent);

if (isZebraDevice) {
  console.log("Running on a Zebra device!");
  document.body.classList.add("zebra-device");
}

// ✅ Render the app (only once)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
