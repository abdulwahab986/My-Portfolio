import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

// Ye check lagana zaroori hai taake agar HTML load na ho to error show ho
if (!rootElement) {
  console.error("Failed to find the root element. Check your index.html");
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}